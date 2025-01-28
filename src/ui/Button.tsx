import { cva, type VariantProps } from "class-variance-authority";
import { HTMLMotionProps, motion } from "motion/react";
import { ReactNode } from "react";
import TailwindMerge from "../utli/TailwindMerge";
const buttonVariants = cva("py-2 px-5", {
  variants: {
    variant: {
      default: "bg-gold text-white-1",
      basic: "bg-transparent text-black border-gray-300 border-[1px]",
      outlineGold:
        "bg-transparent text-black border-gold border-[1px] text-white-1 mt-2 text-xl px-10",
      roundedButton: "rounded-[100px] bg-green-200 w-fit"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

interface IProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}
const Button = ({ children, className, variant, ...rest }: IProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      transition={{ bounceDamping: 10, bounceStiffness: 600 }}
      className={`  ${className} ${TailwindMerge(buttonVariants({ variant }))}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
