import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { IProduct } from "../../types";
import { toggleWishes } from "../../lib/features/wishList";
import type { RootState } from "../../lib";
import { FaMoneyBill, FaStar } from "react-icons/fa";
import { toggleLikes } from "../../lib/features/likesSlice";

const WisheLists = () => {
  const dispatch = useDispatch();
  const wishes = useSelector((state: RootState) => state.wishes.data);
  const likes = useSelector((state: RootState) => state.likesSlice.data);

  const createWish = (wish: IProduct) => {
    dispatch(toggleWishes(wish));
    dispatch(toggleLikes(wish.id));
  };
  return (
    <section className="mt-[70px]">
      <div className="container grid grid-cols-5 gap-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
        {wishes.length > 0 ? (
          wishes.map((wish: IProduct) => (
            <div
              key={wish.id}
              className="relative hover:shadow-md cursor-pointer flex flex-col justify-between h-full"
            >
              <div className="absolute top-1 right-1 flex items-center justify-center pl-[3px] pr-[5px] py-[4px] rounded-[50%] bg-[white]">
                <svg
                  className="heart-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill={likes.includes(wish.id) ? "#8967F0" : "white"}
                  stroke={likes.includes(wish.id) ? "#8967F0" : "black"}
                  strokeWidth="2"
                  onClick={() => createWish(wish)}
                >
                  <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.24 3 12.91 4 13.5 5.09C14.09 4 15.76 3 17.5 3C20.5 3 23 5.5 23 8.5C23 13.5 15 21 15 21H12Z" />
                </svg>
              </div>
              <div>
                <img src={wish.image} alt="" />
              </div>

              <div className="p-1 flex flex-col h-full">
                <p className="flex items-center gap-1.5 text-[#7F4DFF]">
                  {wish.newPrice}
                  <FaMoneyBill />
                </p>
                <p className="text-[#7E818C] text-[15px]">{wish.oldPrice}</p>
                <span className="px-[5px] bg-[#FFFF00] text-[14px] w-[100px] rounded-md">
                  {wish.splitPrice} сум/мес
                </span>
                <p className="text-[12px] text-[#1F2026] font-medium pt-[3px]">
                  {wish.description}
                </p>
                <div className="flex items-center mb-[8px]">
                  <FaStar className="text-[#FFB54C] w-[11px] h-[10px]" />
                  <p className="text-[14px] text-[#7E818C] px-1">
                    {wish.rating}
                    <span className="px-1">({wish.review} отзывов)</span>
                  </p>
                </div>
                <button className="w-full h-8 bg-[#7000FF] text-[white] mt-auto rounded-[7px] cursor-pointer hover:opacity-85 transition-all">
                  В корзину
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-5 text-center text-gray-500">
            Нет добавленных товаров в список желаний.
          </p>
        )}
      </div>
    </section>
  );
};
export default memo(WisheLists);