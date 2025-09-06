const AsideFooter = ({ toggleMenu }: { toggleMenu: boolean }) => {
  return (
    <div
      className={`w-full md:w-auto md:hidden ${
        toggleMenu
          ? "opacity-100 delay-500   duration-700"
          : "opacity-0 duration-100 "
      } flex-col justify-center items-center gap-y-4  flex mt-8 transition-all md:flex-row md:mt-0 md:gap-y-0 md:justify-end md:w-auto  `}
    >
      <button className="text-white bg-main w-[90%] px-3 py-1 rounded-xl text-sm">
        Change to Dark Mode
      </button>
      <p className="text-center text-sm mt-10">
        &copy; 2025 Heavenly. All rights reserved.
      </p>
    </div>
  );
};

export default AsideFooter;
