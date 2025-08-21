import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function BakemonoLands() {
  const [activePage, setActivePage] = useState("bakemono");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      {/* Main Content */}
      <main className="px-8 py-12 max-w-6xl mx-auto space-y-24">
        {/* Description + Image */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-blue-300">
              Bakemono Lands
            </h2>
            <p className="text-gray-400 mt-4">
              Enter Bakemono Lands, where mythical spirits await your care. 
              Hatch eggs, guide them through playful challenges, and watch them evolve into powerful companions.
            </p>

            {/* Google Play Button */}
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.ikarus.bakemonolands"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-lg hover:bg-blue-400 transition"
              >
                Get it on Google Play
              </a>
            </div>
          </div>

          {/* Placeholder image */}
          <div className="flex justify-center">
            <img
              src="/images/bakemono-lands-screenshot.png"
              alt="Bakemono Lands screenshot"
              className="rounded-2xl shadow-lg max-h-80 object-cover"
            />
          </div>
        </section>

        {/* Privacy Policy */}
        <section id="privacy" className="space-y-4">
          <h2 className="text-3xl font-semibold text-blue-300">
            Privacy Policy
          </h2>
          <p className="text-gray-400">
            [Placeholder for Privacy Policy text. Replace this with your
            prepared content.]
          </p>
        </section>

        {/* EULA */}
        <section id="eula" className="space-y-4">
          <h2 className="text-3xl font-semibold text-blue-300">
            End-User License Agreement (EULA)
          </h2>
          <p className="text-gray-400">
            [Placeholder for EULA text. Replace this with your prepared
            content.]
          </p>
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
