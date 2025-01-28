import { motion } from "motion/react";
const ImageSection = ({
  src,
  className
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div
      className={`image overflow-hidden @min-7xl:h-[25rem] @min-7xl:w-[40rem]  rounded-xl ${className}`}
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" }
        }}
        whileHover={{
          scale: 1.1,
          y: -10,
          x: 10,
          transition: { duration: 0.7, ease: "easeOut" }
        }}
        className="w-full h-full"
        src={src}
        alt=""
      />
    </div>
  );
};

export default ImageSection;
