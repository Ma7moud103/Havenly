import gymImage from "../assets/gym.avif";
import pool from "../assets/inDoorPool.webp";
import spaView from "../assets/spaView.avif";
import Button from "../ui/Button";

import PaginatedImageSlider from "../context/PaginatedImageSlider";

const views: string[] = [gymImage, spaView, pool];

const GymSection = () => {
  return (
    <section className="bg-sectionGray py-contentPadding  flex @max-2xl:flex-col @min-2xl:flex-row @max-2xl:gap-y-contentPadding @min-2xl:justify-between @min-2xl:items-center">
      <article className="p-contentPadding @max-2xl:w-full @min-2xl:w-[30%] flex @max-2xl:items-center @max-2xl:justify-center flex-col @max-2xl:gap-y-3 @min-2xl:self-start @min-2xl:mt-8">
        <h3 className="text-gray-400 text-lg">
          Westin Workout® Fitness Studios
        </h3>
        <h2 className="font-medium text-white-1 text-3xl ">
          Power Your Performance
        </h2>
        <p className="text-white-1  @max-2xl:text-center mt-2">
          Elevate your energy on the treadmill, tone up with strength machines
          and free weights, or grab a mat to stretch and release. The airy
          surroundings of Westin Workout® Fitness Studios feature the finest
          exercise equipment for all levels of performance. We provide
          everything you need for an exhilarating workout, so you can energize
          or de-stress day or night.
        </p>
        <Button
          className="@max-2xl:mt-1 @min-2xl:mt-10"
          variant={"roundedButton"}
        >
          Learn More
        </Button>
      </article>
      <div className={`image @max-2xl:w-full @min-2xl:w-[70%] relative `}>
        <PaginatedImageSlider>
          <PaginatedImageSlider.Image Views={views} />
          <div className="controls absolute w-full  px-smPadding start-0 end-0 bottom-10 flex items-center justify-between">
            <PaginatedImageSlider.Back>
              <span>Back</span>
            </PaginatedImageSlider.Back>
            <PaginatedImageSlider.Bullets Views={views} />
            <PaginatedImageSlider.Next Views={views}>
              <span>Next</span>
            </PaginatedImageSlider.Next>
          </div>
        </PaginatedImageSlider>
      </div>
    </section>
  );
};

export default GymSection;
