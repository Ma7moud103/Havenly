import HotelInformations from "../components/HotelInformations";
import HotelRoomsSuites from "../components/HotelRooms&Suites";
import HotelSpa from "../components/HotelSpa";
import Home from "../components/Home";
import GymSection from "../components/GymSection";
const HomeLayout = () => {
  return (
    <>
      <Home />
      <HotelInformations />
      <HotelRoomsSuites />
      <HotelSpa />
      <GymSection />
    </>
  );
};

export default HomeLayout;
