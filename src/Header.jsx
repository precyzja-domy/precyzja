// Header.jsx
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 border-b border-gray-700">
      <div className="text-2xl font-bold text-blue-400">YourCompany</div>

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
