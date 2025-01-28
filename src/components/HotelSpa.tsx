import spaRes from "../assets/spaRes.webp";
import Button from "../ui/Button";
import ImageSection from "../ui/ImageSection";
import relaxing from "../assets/laounch.avif";
import oil from "../assets/oils.webp";
const HotelSpa = () => {
  return (
    <>
      <section className="@max-2xl:pt-mainPadding @max-2xl:pb-2 @max-lg:px-[1.5rem] @max-2xl:px-smPadding grid @max-2xl:grid-rows-[1fr_auto] gap-y-4  @min-2xl:p-mainPadding @min-6xl:grid-rows-none @min-6xl:grid-cols-[1fr_30rem] @min-6xl:gap-x-16 @min-6xl:items-center  ">
        <ImageSection src={spaRes} />
        <div className="info space-y-3 ">
          <h1 className="text-3xl sm:text-4xl text-main-grey">Heavenly Spa</h1>
          <p className="text-gray-500">
            The 10 beautifully single therapy rooms and 2 Couple Suites are
            designed to create a feeling of bliss. Each treatment room features
            unique landscaping and personal shower, allowing you to be connected
            to nature during your treatment. State-of-the-art modern spa
            facilities are also in the Heavenly Spa™, including a high-tech
            steam room, “Rain Shower”, swimming pool and whirlpool.
          </p>
          <Button className="bg-gray-600 font-semibold rounded-[100px]">
            Learn More
          </Button>
        </div>
      </section>
      <section className="@max-2xl:pt-mainPadding @max-2xl:pb-8 @max-lg:px-[1.5rem] @max-2xl:px-smPadding grid @max-2xl:grid-rows-[auto_1fr] gap-y-4  @min-2xl:p-mainPadding @min-6xl:grid-rows-none @min-6xl:grid-cols-[30rem_1fr] bg-gray-100 @min-6xl:gap-x-16 @min-6xl:items-center  ">
        <div className="info space-y-3  ">
          <h1 className="text-3xl sm:text-4xl text-main-grey">
            Signature Wellness Programs
          </h1>
          <p className="text-gray-500">
            Experience innovative treatments designed to soothe the spirit,
            rejuvenate the body, and enrich the mind. Relax, revive and indulge
            renewal in the perfect retreat for sheer wellness
          </p>
          <Button className="bg-gray-600 font-semibold rounded-[100px]">
            Learn More
          </Button>
        </div>
        <ImageSection className="ms-auto" src={relaxing} />
      </section>
      <section className="@max-2xl:pt-mainPadding @max-2xl:pb-2  @max-lg:px-[1.5rem] @max-2xl:px-smPadding grid @max-2xl:grid-rows-[1fr_auto] gap-y-4  @min-2xl:p-mainPadding @min-6xl:grid-rows-none @min-6xl:grid-cols-[1fr_30rem] @min-6xl:gap-x-16 @min-6xl:items-center  ">
        <ImageSection src={oil} />
        <div className="info space-y-3 ">
          <h1 className="text-3xl sm:text-4xl text-main-grey">
            Wide Array of Treatments
          </h1>
          <p className="text-gray-500">
            The menu is an array of wellness treatments from Asia, such as
            techniques from traditional Chinese Medicine and Thai massage,
            massage inspired from Hawaii, classical Swedish, Aromatherapy,
            Restorative deep tissue, and also using local organic products for
            body scrubs and wraps.
          </p>
          <Button className="bg-gray-600 font-semibold rounded-[100px]">
            Learn More
          </Button>
        </div>
      </section>
    </>
  );
};

export default HotelSpa;
