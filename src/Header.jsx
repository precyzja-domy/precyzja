// Header.jsx
//import { NavLink } from "react-router-dom";
import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="PRECYZJA" className="h-8 w-auto" />
      </div>

      {/* <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
        <NavButton to="/" label="Strona główna" />
      </nav> */}
    </header>
  );
}

/*function NavButton({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative group text-gray-300 hover:text-orange-500 ${
          isActive ? "font-semibold" : ""
        }`
      }
    >
      {label}
      <span className="absolute left-0 -bottom-1 h-[2px] bg-orange-400 w-0 group-hover:w-full transition-all duration-300"></span>
    </NavLink>
  );
}*/
