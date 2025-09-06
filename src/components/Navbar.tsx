import { useEffect, useState } from "react";
import Logo from "./Logo";
import Links from "./Links";

const Navbar = ({ mainRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleMenu, settoggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > mainRef.current.offsetHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`${
        isScrolled ? "bg-main " : ""
      }  fixed w-full text-white flex items-center justify-between pe-4 transition-all duration-300 `}
    >
      <Logo />
      <button
        onClick={() => {
          settoggleMenu(!toggleMenu);
        }}
        type="button"
        className="md:hidden"
      >
        {/*menu icon */}
        <i className="fa-solid fa-bars cursor-pointer md:text-2xl"></i>
      </button>

      <Links toggleMenu={toggleMenu} />
    </aside>
  );
};

export default Navbar;
