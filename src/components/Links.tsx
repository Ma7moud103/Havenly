import AsideFooter from "./AsideFooter";
import Logo from "./Logo";

const Links = ({ toggleMenu }: { toggleMenu: boolean }) => {
  return (
    <nav
      className={`flex flex-col absolute  py-8 gap-y-10 sm:gap-y-10 top-0 start-0 ${
        toggleMenu ? "w-[15rem]" : "w-0"
      } bg-black  min-h-screen   transition-all duration-700 md:static md:flex-row md:w-full  md:gap-y-0 md:start-auto md:top-auto  md:min-h-auto  md:py-0 md:items-center  md:bg-transparent`}
    >
      <div
        className={`logo flex md:hidden justify-center w-full text-white  ${
          toggleMenu
            ? "opacity-100 delay-500   duration-700"
            : "opacity-0 duration-100 "
        } transition-all `}
      >
        <Logo />
      </div>
      <div
        className={` ${
          toggleMenu
            ? "opacity-100 delay-500   duration-700"
            : "opacity-0 duration-100 "
        }  flex-col items-center mt-2 w-full  gap-y-2 flex transition-all md:flex-row md:mt-0 md:space-y-0 md:gap-y-0  md:w-auto md:gap-x-4 md:text-white  `}
      >
        <a
          href="#home"
          className="hover:text-gray-300 w-full text-center py-2 text-sm hover:bg-main transition"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-gray-300 w-full text-center py-2 text-sm hover:bg-main transition"
        >
          About
        </a>
        <a
          href="#services"
          className="hover:text-gray-300 w-full text-center py-2 text-sm hover:bg-main transition"
        >
          Services
        </a>
        <a
          href="#contact"
          className="hover:text-gray-300 w-full text-center py-2 text-sm hover:bg-main transition"
        >
          Contact
        </a>
        <a
          href="#blog"
          className="hover:text-gray-300 w-full text-center py-2 text-sm hover:bg-main transition"
        >
          Blog
        </a>
      </div>

      <div className="flex flex-col items-center mt-8 space-y-4 gap-y-6 ">
        <button>Signup</button>
        <button>Signin</button>
        <button>Signout</button>
      </div>

      <div className="social-icons hidden md:flex justify-center items-center gap-x-4 md:text-white">
        <i className="fa-brands fa-linkedin text-xl hover:text-main transition cursor-pointer hover:scale-[1.2]"></i>
        <i className="fa-brands fa-github text-xl hover:text-main transition cursor-pointer hover:scale-[1.2]"></i>
        <i className="fa-brands fa-instagram text-xl hover:text-main transition cursor-pointer hover:scale-[1.2]"></i>
      </div>
      <AsideFooter toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Links;
