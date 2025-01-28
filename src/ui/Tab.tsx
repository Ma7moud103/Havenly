import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { LinkProps, NavLink } from "react-router-dom";
import TailwindMerge from "../utli/TailwindMerge";

const tabVariants = cva("", {
  variants: {
    variant: {
      default: "px-3 text-[1.3rem]"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
interface IProps extends LinkProps, VariantProps<typeof tabVariants> {
  to: string;
  children: ReactNode;
  className?: string;
}
const Tab = ({ to, className, children, variant, ...rest }: IProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${className} ${isActive && "border-b border-b-gold"}  ${TailwindMerge(
          tabVariants({ variant })
        )}`
      }
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default Tab;
