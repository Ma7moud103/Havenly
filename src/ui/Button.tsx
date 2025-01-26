import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import TailwindMerge from "../utli/TailwindMerge";

const buttonVariants = cva("py-2 px-5", {
  variants: {
    variant: {
      default: "bg-gold text-white-1",
      basic: "bg-transparent text-black border-gray-300 border-[1px]"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

interface IProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}
const Button = ({ children, className, variant, ...rest }: IProps) => {
  return (
    <button
      className={` ${className} ${TailwindMerge(buttonVariants({ variant }))}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
