import { memo } from "react";
import logo from "../../assets/header/logo.svg";
import catalog from "../../assets/header/catalog.svg";
import search from "../../assets/header/search.svg";
import user from "../../assets/header/user.svg";
import like from "../../assets/header/like.svg";
import cart from "../../assets/header/cart.svg";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav className="container mt-[17px] flex items-center max-xl:justify-between">
        <div>
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
        </div>

        <div className="flex gap-6 max-xl:hidden">
          <div className="flex gap-[7px]">
            <div className="flex items-center bg-[#F0F0FF] px-[18px] rounded-[4px] cursor-pointer hover:bg-[#CECCFF] transition-all">
              <NavLink to={"/"}>
                <img src={catalog} alt="" />
              </NavLink>
            </div>
            <div className="w-[528px] h-[40px] border border-[#D7D7D9] flex justify-between pl-[17px]">
              <input
                className="flex items-center text-[14px] text-[#757575] outline-none w-full"
                type="text"
                placeholder="Mahsulotlar va turkumlar izlash"
              />
              <div className="flex items-center justify-center px-[32px] bg-[#F2F4F7] cursor-pointer">
                <img src={search} alt="" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-[9px] cursor-pointer hover:bg-[#DEE0E5] py-[9px] rounded-[4px] transition-all">
              <NavLink to={"/"} className={"flex gap-[9px]"}>
                <img width={24} src={user} alt="" />
                Kirish
              </NavLink>
            </div>
            <div className="px-[9px] cursor-pointer hover:bg-[#DEE0E5] py-[9px] rounded-[4px] transition-all">
              <NavLink to={"/wishes"} className={"flex gap-[9px]"}>
                <img width={24} src={like} alt="" />
                Saralangan
              </NavLink>
            </div>
            <div className="px-[9px] cursor-pointer hover:bg-[#DEE0E5] py-[9px] rounded-[4px] transition-all">
              <NavLink to={"/cart"} className={"flex gap-[9px]"}>
                <img width={24} src={cart} alt="" />
                Savat
              </NavLink>
            </div>
          </div>
        </div>

        <div className="xl:hidden">
          <FaBars className="text-[18px]"/>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
