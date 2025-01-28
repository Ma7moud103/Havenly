import { motion, useScroll } from "motion/react";
import Button from "../ui/Button";
import Tab from "../ui/Tab";
const HotelRoomsSuites = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      //   style={{
      //     scaleX: scrollYProgress,
      //     transitionDuration: "0.7s",
      //     transitionTimingFunction: "ease-out"
      //   }}
      className="px-5 h-screen"
    >
      <section className="relative  bg-[url(./assets/room001.avif)] h-full     bg-cover  ">
        <div className="overlay @max-2xl:p-smPadding @min-2xl:px-mainPadding absolute start-0 end-0 top-0 bottom-0 bg-[rgba(0,0,0,0.3)] flex flex-col gap-y-3 items-center justify-center text-white-1">
          <h1 className="text-4xl sm:text-5xl">Rooms&Suites</h1>
          <p className="text-gray-200 text-center sm:text-xl">
            Elegant rooms with modern comforts for a relaxing stay. ultimate in
            comfort.
          </p>
          <Button variant={"outlineGold"}>Discover More</Button>
          <div className="tabs absolute bottom-6  flex items-center gap-x-6">
            <Tab to="/rooms">Suites</Tab>
            <Tab to="/rooms">Rooms</Tab>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HotelRoomsSuites;
