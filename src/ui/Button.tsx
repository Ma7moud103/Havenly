import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import TailwindMerge from "../utli/TailwindMerge";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default: ""
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
      className={`${className} ${TailwindMerge(buttonVariants({ variant }))}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
