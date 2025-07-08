import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AuroraBackground } from "./components/ui/aurora-background";
import img from "./assets/coder.jpg";

const MainContent = () => {
  const phrases = [
    "a React developer",
    "Tigist Mesfin",
    "a full stack developer",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const speed = 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (textIndex < currentPhrase.length) {
          setTypedText(currentPhrase.slice(0, textIndex + 1));
          setTextIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (textIndex > 0) {
          setTypedText(currentPhrase.slice(0, textIndex - 1));
          setTextIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [textIndex, isDeleting, currentPhraseIndex]);

  return (
    <div className="flex-1 overflow-y-scroll h-screen scroll-smooth bg-black">
      <section
        id="home"
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

        <div className="text-center relative mb-10 z-10 px-4">
          <h1 className="text-3xl md:text-5xl text-white font-bold">Welcome</h1>
          <br />
          <h2 className="text-white text-2xl md:text-4xl">
            I'm <span className="text-yellow-200 font-bold">{typedText}</span>
            <span className="text-yellow-100 animate-pulse ml-1">|</span>
          </h2>
          <p className=" text-white text-base md:text-xl mt-4">
            Junior Web Developer passionate about building beautiful interfaces.
          </p>
          <button className="mt-6 px-6 py-2 text-sm md:text-base text-black font-bold rounded-xl bg-amber-200 hover:bg-gray-50">
            Hire Me
          </button>
        </div>
      </section>

      <div className="bg-black py-16 px-4 md:px-8" id="about">
        <h2 className="text-3xl font-bold text-gray-300 mb-14 text-center">About Me</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-white leading-relaxed">
              Hello! I'm <strong>Tigist Mesfin</strong>, a passionate junior web developer from Ethiopia. As a full-stack developer, I have the skills to turn your ideas into real, working websites or web apps. I can handle both the front-end and the back-end. I build clean, user-friendly, and responsive designs that look good on all devices. I also create strong, reliable features like forms, logins, and connections to databases.
              <br /><br />
              I focus on making it easy to use, fast, and well-organized, so it works smoothly for everyone.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full">
            <ul className="space-y-4 text-white">
              <li><strong>Name:</strong> Tigist Mesfin</li>
              <li><strong>Email:</strong> <a href="mailto:tigistmesfin777@gmail.com" className="text-amber-200 hover:underline">tigistmesfin777@gmail.com</a></li>
              <li><strong>Location:</strong> Ethiopia</li>
              <li><strong>Phone:</strong> 0973679533</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>
        </div>

        <section id="skills" className=" bg-gray-800 px-6 py-10 mt-20">
          <h1 className=" text-center text-3xl font-bold mb-12 text-white">My Skills</h1>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-black p-6 rounded-xl shadow-md hover:shadow-white hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-amber-200 mb-4">Frontend</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>Responsive Web Design</li>
                <li>Cross-Browser Compatibility</li>
                <li>Version Control (GitHub)</li>
              </ul>
            </div>

            <div className="bg-black p-6 rounded-xl shadow-md hover:shadow-white hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-amber-200 mb-4">Backend</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>Node.js</li>
                <li>Flask</li>
                <li>Python</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>RESTful API Design & Development</li>
                <li>JSON & HTTP Protocols</li>
                <li>Authentication & Authorization (JWT, OAuth)</li>
              </ul>
            </div>

            <div className="bg-black p-6 rounded-xl shadow-md hover:shadow-white hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-amber-200 mb-4">Tools & Others</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>GitHub</li>
                <li>Figma (UI/UX Design)</li>
                <li>VS Code (Code Editor)</li>
                <li>Postman (API Testing)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 px-4 mt-11">
          <h1 className="text-center text-3xl font-bold mb-10 text-white">Projects</h1>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-semibold text-white mb-2">Construction Management System</h2>
              <p className="text-white mb-3">A full-stack app built with Flask & React to manage projects, employees, and progress.</p>
              <a href="https://github.com/Tigist-mesfin/final.git" target="_blank" className="text-amber-300 hover:underline">View on GitHub</a>
            </div>

            <div className="bg-amber-200 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-semibold text-black mb-2">Hotel Website (Frontend)</h2>
              <p className="text-black mb-3">A modern hotel landing page using React and Tailwind CSS.</p>
              <a href="https://github.com/Tigist-mesfin/rori.git" target="_blank" className="text-blue-900 hover:underline">View on GitHub</a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4">
          <h1 className="text-center text-3xl font-bold mb-8 text-white">Contact</h1>
          <div className="max-w-xl mx-auto text-center space-y-4 text-white">
            <p>You can reach me at:</p>
            <ul className="space-y-2">
              <li><strong>Email:</strong> <a href="mailto:tigistmesfin777@gmail.com" className="block text-amber-300 hover:underline break-all">tigistmesfin777@gmail.com</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/Tigist-mesfin" className="block text-amber-300 hover:underline break-all">github.com/Tigist-mesfin</a></li>
              <li><strong>Phone:</strong> 0973679533</li>
            </ul>
          </div>
        </section>

        <p className="mt-11 text-white text-center text-xs md:text-sm px-4">© 2025 Tigist. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MainContent;
