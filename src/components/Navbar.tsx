import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import Link from "../ui/Link";
import { GrRestaurant } from "react-icons/gr";
import { TbMassage } from "react-icons/tb";

const Navbar = () => {
  const [isMenuOpened, setisMenuOpened] = useState(false);
  return (
    <section
      className={`relative  p-3 sm:px-5 border-b border-b-gray-100 shadow-sm shadow-gray-300 justify-between flex items-center w-full bg-black `}
    >
      <div className="logo">
        <h1 className="text-[2rem] font-semibold font-stretch-110% font-mono text-white-1">
          Havenly
        </h1>
      </div>
      <ul
        className={`mx-auto flex flex-col gap-y-4 overflow-hidden  ${
          isMenuOpened ? " max-h-[20rem] pb-5  " : " max-h-[0%]  "
        } ease-initial duration-500  items-center gap-x-4 top-[100%]  w-full bg-inherit start-0  absolute md:static md:top-0 md:start-0  md:flex-row   md:w-auto md:max-h-auto md:overflow-auto    `}
      >
        <li>
          <Link label="Home" to="/" icon={<FaHome />} />
        </li>
        <li>
          <Link label="Restaurants" to="/restaurants" icon={<GrRestaurant />} />
        </li>
        <li>
          <Link label="Havenly  Spa" to="/restaurants" icon={<TbMassage />} />
        </li>
      </ul>
      <div className="menu flex items-center gap-x-4">
        <CiMenuFries
          onClick={() => setisMenuOpened((prev) => !prev)}
          className="md:hidden text-[1.3rem] text-white-1 cursor-pointer"
        />
        <FaUserAlt className="text-[1.3rem] text-white-1" />
        <IoMdSunny className="text-[1.3rem] text-white-1" />
      </div>
    </section>
  );
};

export default Navbar;
