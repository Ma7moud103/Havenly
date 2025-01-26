import { motion } from "motion/react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="w-full  h-full animate-backgroundImage bg-cover relative">
      <div className="absolute w-full flex flex-col items-center justify-center h-full top-0 start-0 end-0 bottom-0 bg-[rgba(0,0,0,0.3)]">
        <header className="px-4 sm:px-6 md:px-8 lg:px-10 space-y-3 text-center">
          <h1 className="text-white-1 text-[2rem] sm:text-[3rem] text-center">
            Where Luxury Meets Tranquility.
          </h1>
          <p className="text-white-2 text-center leading-5">
            At Havenly, we offer an unparalleled blend of modern amenities and
            exceptional service, ensuring your stay is as comfortable and
            memorable as possible. Nestled in the heart of Cairo, our hotel
            provides a tranquil atmosphere with easy access to the best
            attractions, shopping, and dining options.
          </p>

          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, backgroundColor: "gray" }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="w-[20rem] mt-[3rem] mx-auto bg-gold text-white-1 py-2 px-5"
          >
            <Link to={"/rooms"}> Explore Hotel Rooms</Link>
          </motion.div>
        </header>
      </div>
    </section>
  );
};

export default Home;
