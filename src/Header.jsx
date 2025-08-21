// Header.jsx
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="BlueEgg Logo" className="h-8 w-auto" />
        <span className="text-2xl font-bold text-blue-400">BlueEgg</span>
      </div>

      <nav className="flex space-x-8">
        <NavButton to="/" label="About us" />
        <NavButton to="/bakemonolands" label="Bakemono Lands" />
      </nav>
    </header>
  );
}

function NavButton({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative text-gray-300 hover:text-blue-400 ${
          isActive ? "font-semibold" : ""
        }`
      }
    >
      {label}
      <span className="absolute left-0 -bottom-1 h-[2px] bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
    </NavLink>
  );
}
