import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from "react";
import { motion } from "motion/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface PaginatedImageContextType {
  isActive: number;
  setisActive: Dispatch<SetStateAction<number>>;
}

interface IProps {
  children: ReactNode;
}
const PaginatedImageContext = createContext<PaginatedImageContextType>(
  null as unknown as PaginatedImageContextType
);
function PaginatedImageSlider({ children }: IProps) {
  const [isActive, setisActive] = useState(0);

  return (
    <PaginatedImageContext.Provider value={{ isActive, setisActive }}>
      {children}
    </PaginatedImageContext.Provider>
  );
}

interface ImageProps<T> {
  Views: T[];
  children?: ReactNode;
}

function Image<T extends string>({ Views }: ImageProps<T>) {
  const { isActive: ActiveImage } = useContext(PaginatedImageContext);
  return (
    <motion.img
      initial={{
        opacity: 0,
        scale: 0.9,
        filter: "blur(2px)"
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",

        transition: { duration: 0.6, ease: "easeOut" }
      }}
      className="w-full h-full transition-all "
      src={Views[ActiveImage]}
      alt=""
    />
  );
}
function Back({ children }: { children: ReactNode }) {
  const { isActive: ActiveImage, setisActive } = useContext(
    PaginatedImageContext
  );

  const Back = () => ActiveImage > 0 && setisActive((prev) => prev - 1);

  return (
    <button
      disabled={!(ActiveImage > 0)}
      onClick={Back}
      className="prev text-white-1 disabled:cursor-default disabled:text-gray-400 flex items-center gap-x-4 text-lg cursor-pointer"
    >
      {children}
      <motion.span
        initial={{ x: 0 }}
        whileHover={{
          x: [0, 10, -10, 0],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "loop"
          }
        }}
      >
        <FaArrowLeftLong />
      </motion.span>
    </button>
  );
}
function Next<T>({ Views, children }: ImageProps<T>) {
  const { isActive: ActiveImage, setisActive } = useContext(
    PaginatedImageContext
  );

  const handleNext = () =>
    ActiveImage < Views.length - 1 && setisActive((prev) => prev + 1);

  return (
    <button
      onClick={handleNext}
      disabled={!(ActiveImage < Views.length - 1)}
      className="next disabled:cursor-default disabled:text-gray-400 text-white-1 flex items-center gap-x-4 text-lg cursor-pointer"
    >
      <motion.span
        initial={{ x: 0 }}
        whileHover={{
          x: [0, -10, 10, 0],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "loop"
          }
        }}
      >
        <FaArrowRightLong />
      </motion.span>
      {children}
    </button>
  );
}
function Bullets<T extends string | number>({ Views }: ImageProps<T>) {
  const { isActive: ActiveImage, setisActive } = useContext(
    PaginatedImageContext
  );

  return (
    <div className="Bullets flex items-center gap-x-3">
      {Views.map((View, index) => (
        <span
          onClick={() => setisActive(index)}
          key={View}
          className={`w-6 h-6 ${
            ActiveImage === index
              ? "bg-white-1 "
              : "border-white-1 border text-white-1 "
          } rounded-full flex items-center justify-center cursor-pointer`}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}

PaginatedImageSlider.Image = Image;
PaginatedImageSlider.Next = Next;
PaginatedImageSlider.Back = Back;
PaginatedImageSlider.Bullets = Bullets;

export default PaginatedImageSlider;
