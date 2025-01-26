import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const TailwindMerge = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs));
};

export default TailwindMerge;
