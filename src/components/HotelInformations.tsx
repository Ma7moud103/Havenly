import Button from "../ui/Button";
import { SiGmail } from "react-icons/si";
import { IoPhonePortrait } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const HotelInformations = () => {
  return (
    <section className="@max-2xl:p-smPadding @min-2xl:p-mainPadding grid grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr_15rem]">
      <article className="md:border-e md:border-e-gray-300 border-b border-b-gray-300 md:border-b-0  space-y-6 py-4 md:px-4 lg:px-[5rem]">
        <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
          The Havenly Luxe Escape & Wellness Sanctuary
        </h1>
        <q className="block">
          Havenly: Where Luxury Meets Tranquility, and Every Moment is an Escape
          to Paradise. Experience Timeless Elegance, Personalized Comfort, and
          Unparalleled Hospitality in the Heart of Serenity.
        </q>
        <Button variant={"basic"}>Hotel History</Button>
      </article>

      <article className="py-4 md:px-6 space-y-6 mx-auto ">
        <h2 className="text-3xl font-semibold ">Contact Us</h2>
        <div className="content flex flex-col gap-y-3">
          <div className="flex items-center gap-x-2 ">
            <SiGmail className="text-gold text-2xl" />
            <span className="text-xl">HavenlyHotel@gmail.com</span>
          </div>
          <div className="flex items-center gap-x-2 ">
            <IoPhonePortrait className="text-gold  text-2xl" />
            <span className="text-xl">+201115671984</span>
          </div>
          <div className="flex items-center gap-x-2 ">
            <FaLocationDot className="text-gold  text-2xl" />
            <span className="text-xl">Egypt, Cairo</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HotelInformations;
