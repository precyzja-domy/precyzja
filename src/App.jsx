import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [activePage, setActivePage] = useState("about");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      {/* Main Content */}
      <main className="px-8 py-12 max-w-5xl mx-auto space-y-24">
        {/* About us */}
        <section id="about" className="space-y-4">
          <h2 className="text-3xl font-semibold text-blue-300">About us</h2>
          <p className="text-gray-400 max-w-3xl">
            We are a forward-thinking company passionate about building creative
            digital experiences.
          </p>
        </section>

        {/* Our Projects */}
        <section id="projects" className="space-y-6">
          <h2 className="text-3xl font-semibold text-blue-300">Our Projects</h2>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-medium">Bakemono Lands</h3>
            <p className="text-gray-400 mt-2">
              A unique step-tracking and monster-raising experience where
              players nurture mystical creatures while staying active.
            </p>
            <button
              onClick={() => (window.location.href = "/bakemonolands")}
              className="relative mt-4 inline-block text-blue-400 hover:text-blue-300"
            >
              Read more...
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 hover:w-full"></span>
            </button>
          </div>
        </section>

        {/* Contact us */}
        <section id="contact" className="space-y-4">
          <h2 className="text-3xl font-semibold text-blue-300">Contact us</h2>
          <p className="text-gray-400">Email: contact@yourcompany.com</p>
          <p className="text-gray-400">Phone: +1 (234) 567-890</p>
        </section>
      </main>
    </div>
  );
}

// NavButton Component
function NavButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative text-gray-300 hover:text-blue-400"
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </button>
  );
}
