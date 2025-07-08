import React, { useState } from "react";
import img from "./assets/IMG_5856 copyn.jpg";
import { Menu, X } from "lucide-react"; // Run: npm install lucide-react

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <button
        className="md:hidden fixed top-5 left-5 z-50 text-white"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={32} />
      </button>

      {/* Overlay (click to close sidebar) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-black text-white transform transition-transform duration-300 ease-in-out
          fixed top-0 left-0 z-50
          w-72 h-full
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex md:flex-col md:items-center md:w-96 md:min-h-screen md:shadow-lg py-8`}
      >
        {/* Close Button (Mobile Only) */}
        <div className="md:hidden absolute top-5 right-5">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Profile Picture */}
        <div className="mt-10 w-36 h-36 rounded-full overflow-hidden border-4 border-white mb-4 mx-auto">
          <img src={img} alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold mb-1 text-center">Tigist Mesfin</h2>

        {/* Description */}
        <p className="text-sm text-gray-300 text-center mb-6 px-4">
          Junior Web Developer passionate about building beautiful interfaces.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 text-center font-medium">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-amber-400 transition">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-amber-400 transition">About Me</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-amber-400 transition">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-amber-400 transition">Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
