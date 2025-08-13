import { memo } from "react";
import { Heart, ShoppingCart, Star, BadgeDollarSign } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Products } from "../../static";
import type { IProduct } from "../../types";
import type { RootState } from "../../lib";
import { toggleLikes } from "../../lib/features/likesSlice";
import { toggleWishes } from "../../lib/features/wishList";
import { addItem } from "../../lib/features/cartSlice";

const Hero = () => {
  const dispatch = useDispatch();
  const likes = useSelector((state: RootState) => state.likesSlice.data);

  const createWish = (wish: IProduct) => {
    dispatch(toggleWishes(wish));
    dispatch(toggleLikes(wish.id));
  };

  const createCart = (cart: IProduct) => {
    dispatch(addItem(cart));
  };

  return (
    <section className="mt-[70px] mb-[40px]">
      <div className="container grid grid-cols-5 gap-6 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
        {Products?.map((wish: IProduct) => {
          const isLiked = likes.includes(wish.id);

          return (
            <div
              key={wish.id}
              className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <button
                className="absolute top-2 right-2 p-1.5 rounded-full bg-white shadow hover:scale-110 transition group/like"
                onClick={() => createWish(wish)}
              >
                <Heart
                  size={18}
                  fill={isLiked ? "#ff0000" : "white"}
                  color={isLiked ? "#ff0000" : "black"}
                  className="transition-colors duration-200 group-hover/like:text-red-400"
                />
              </button>

              <div className="overflow-hidden">
                <img
                  src={wish.image}
                  alt={wish.description}
                  className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-3 flex flex-col gap-1 flex-grow">
                <p className="flex items-center gap-1.5 text-[#7F4DFF] font-semibold">
                  {wish.newPrice}
                  <BadgeDollarSign size={16} />
                </p>
                <p className="text-gray-500 line-through text-sm">{wish.oldPrice}</p>
                <span className="px-2 py-0.5 bg-yellow-300 text-xs rounded-md w-fit font-medium">
                  {wish.splitPrice} сум/мес
                </span>
                <p className="text-xs text-gray-800">{wish.description}</p>

                <div className="flex items-center text-xs text-gray-500">
                  <Star className="text-[#FFB54C] mr-1" size={14} fill="#FFB54C" />
                  {wish.rating} <span className="ml-1">({wish.review} отзывов)</span>
                </div>

                <button
                  onClick={() => createCart(wish)}
                  className="mt-auto flex items-center justify-center gap-1 bg-gradient-to-r from-[#7000FF] to-[#9b4dff] text-white rounded-lg py-1.5 text-sm hover:opacity-90 transition"
                >
                  <ShoppingCart size={16} />
                  В корзину
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default memo(Hero);
