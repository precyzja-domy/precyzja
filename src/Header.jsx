import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // burger + close icons
import logo from "./logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 text-gray-200 shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="PRECYZJA" className="h-8 w-auto" />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-10">
          <NavButton to="/oferta" label="Oferta sprzedaży" />
          <NavButton to="/" label="Kontakt" />
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-orange-500 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <NavButton
              to="/oferta"
              label="Oferta sprzedaży"
              onClick={closeMenu}
            />
            <NavButton to="/" label="Kontakt" onClick={closeMenu} />
          </nav>
        </div>
      )}
    </header>
  );
}

function NavButton({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
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
}
