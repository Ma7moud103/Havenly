import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
interface IProps {
  label: string;
  icon?: ReactNode;
  to: string;
}
const Link = ({ label, to, icon }: IProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `font-sans text-[1.3rem] md:text-[1.1rem] hover:translate-x-0.5 text-white-1 transition hover:scale-[1.01] hover:text-gold md:flex md:items-center md:gap-x-1 block items-baseline gap-0 ${
          isActive ? " scale-[1.01] translate-x-0.5 " : "  "
        } `
      }
      to={to}
    >
      <span className="hidden md:inline">{icon && icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

export default Link;
