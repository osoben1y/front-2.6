import React, { memo } from "react";
import { Minus, Plus, Trash2, Banknote } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../lib";
import {
  decrementCount,
  incrementCount,
  removeItem,
} from "../../lib/features/cartSlice";

const Cart = () => {
  const carts = useSelector((state: RootState) => state.cartSlice.data);
  const dispatch = useDispatch();

  const total = carts.reduce(
    (sum, item) => sum + item.newPrice * item.amount,
    0
  );

  return (
    <section className="mt-[75px] mb-[40px]">
      <div className="container">
        {carts.length > 0 ? (
          <>
            <span className="text-gray-600 text-[24px] font-medium">
              Ваша корзина,{" "}
              <span className="text-[#7E818C]">{carts.length} товар</span>
            </span>

            <div className="mt-[30px] flex gap-[15px] items-start max-[1200px]:flex-col">
              <div className="border border-[#D7D7D9] w-[856px] p-4 flex flex-col gap-2 max-[1200px]:w-full bg-white rounded-lg shadow-sm">
                {carts.map((cart, index) => (
                  <React.Fragment key={cart.id}>
                    <div className="flex gap-[25px] mt-[13px] items-start">
                      <div>
                        <img src={cart.image} width={100} alt="" />
                      </div>

                      <div className="flex flex-col w-full gap-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs py-[3px] px-[6px] rounded-md bg-pink-500 text-white">
                            Гарантия низкой цены
                          </span>
                          <button
                            onClick={() => dispatch(removeItem(cart))}
                            className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition"
                          >
                            <Trash2 size={16} /> Удалить
                          </button>
                        </div>

                        <p className="text-sm text-gray-800">
                          {cart.description}
                        </p>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <button
                              disabled={cart.amount <= 1}
                              onClick={() => dispatch(decrementCount(cart))}
                              className="px-3 py-1 hover:bg-gray-200 disabled:opacity-50"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-4">{cart.amount}</span>
                            <button
                              disabled={cart.stock < cart.amount}
                              onClick={() => dispatch(incrementCount(cart))}
                              className="px-3 py-1 hover:bg-gray-200 disabled:opacity-50"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <div className="flex flex-col items-end">
                            <p className="flex items-center gap-1 text-[#7F4DDF] text-lg font-bold">
                              {cart.newPrice} <Banknote size={16} />
                            </p>
                            <p className="text-sm text-gray-500">
                              без карты Uzum <span>{cart.oldPrice}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index !== carts.length - 1 && (
                      <div className="border-t border-gray-200 mt-2"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex flex-col gap-5 max-[1200px]:w-full">
                <div className="border border-[#D7D7D9] p-5 rounded-lg bg-white shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Ваш заказ</h3>
                  <div className="flex justify-between mb-2">
                    <span>Товары ({carts.length}):</span>
                    <span>{total} сум</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Итого</h3>
                  <div className="flex justify-between items-center mb-1">
                    <span>С картой Uzum</span>
                    <span className="text-purple-600 text-xl font-bold">
                      {total - 10000} сум
                    </span>
                  </div>
                  <p className="text-green-600 text-sm mb-3 text-right">
                    Вы экономите: {carts.length + 10000} сум
                  </p>
                  <div className="flex justify-between mb-4">
                    <span>Без карты</span>
                    <span>{total} сум</span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#7000FF] to-[#9b4dff] text-white py-2 rounded-lg hover:opacity-90 transition">
                    Оформить заказ
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500 text-md">
            Пока нет добавленных товаров в корзине
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Cart);
