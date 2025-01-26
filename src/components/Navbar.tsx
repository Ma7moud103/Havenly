import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import Link from "../ui/Link";
import { GrRestaurant } from "react-icons/gr";
import { TbMassage } from "react-icons/tb";
import { motion } from "motion/react";
const Navbar = () => {
  const [isMenuOpened, setisMenuOpened] = useState(true);
  return (
    <section
      className={`relative  p-3 sm:px-5 border-b border-b-gray-400 shadow-sm shadow-gray-300 justify-between flex items-center w-full bg-black `}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        className="logo"
      >
        <h1 className="text-[2rem] font-semibold  font-mono text-white-1">
          Havenly
        </h1>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        className={`mx-auto flex flex-col gap-y-4 overflow-hidden  ${
          isMenuOpened
            ? " max-h-[20rem] py-5 md:px-2 md:py-0  "
            : " max-h-[0%]  "
        } ease-initial duration-500  items-center gap-x-8 top-[100%]  w-full bg-inherit start-0  absolute md:static md:top-0 md:start-0  md:flex-row   md:w-auto md:max-h-auto md:overflow-auto  z-10   `}
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
      </motion.ul>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className="menu flex items-center gap-x-4"
      >
        <CiMenuFries
          onClick={() => setisMenuOpened((prev) => !prev)}
          className="md:hidden text-[1.3rem] text-white-1 cursor-pointer"
          aria-label="Toggle menu"
        />
        <FaUserAlt className="text-[1.3rem] text-white-1" />
        <IoMdSunny className="text-[1.3rem] text-white-1" />
      </motion.div>
    </section>
  );
};

export default Navbar;
