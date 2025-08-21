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
            BlueEgg is an independent game studio dedicated to creating
            high-quality, polished experiences for players of all ages. We focus
            on fun, accessible gameplay that feels fresh yet familiar, whether
            you’re picking up your first game or you’ve been playing for years.
            Starting with mobile, we’re dedicated to bring unique, carefully
            crafted games to more players around the world.
          </p>
        </section>

        {/* Our Projects */}
        <section id="projects" className="space-y-6">
          <h2 className="text-3xl font-semibold text-blue-300">Our Projects</h2>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-medium">Bakemono Lands</h3>
            <p className="text-gray-400 mt-2">
              Enter Bakemono Lands, where mythical spirits await your care. 
              Hatch eggs, guide them through playful challenges, and watch them evolve into powerful companions.
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
          <p className="text-gray-400">Email: blueegg.dev@gmail.com</p>
             {/* Add company phone someday <p className="text-gray-400">Phone:</p> */}
        </section>
      </main>
    </div>
  );
}

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
