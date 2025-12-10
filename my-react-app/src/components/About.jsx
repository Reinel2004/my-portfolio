import React, { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";

export default function About() {

  return (
    <section id="about" className="py-24 px-8 bg-gray-100 text-center">
    <div className="max-w-2xl mx-auto">
        <p className="text-center mb-10 text-gray-700 opacity-0 translate-x-[-50px] animate-fadeInLeft">
            I am aspiring Front End Developer passionate about creating clean, responsive, and visually appealing websites. 
            I enjoy turning ideas into functional, interactive experiences using HTML, CSS, JavaScript, React, and TailwindCSS.
        </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto opacity-0 translate-x-[-50px] animate-fadeInLeft">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <i className="fa-solid fa-laptop-code text-indigo-400 text-3xl mb-2"></i>
            <h3 className="text-xl font-semibold mb-2">Clean & Semantic Code</h3>
            <p className="text-gray-600">Writing well-structured, semantic HTML and React components for maintainable codebases</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <i className="fa-solid fa-layer-group text-indigo-400 text-3xl mb-2"></i>
            <h3 className="text-xl font-semibold mb-2">Modern UI Styling</h3>
            <p className="text-gray-600">Crafting Visually appealing interfaces using Tailwind CSS and responsive design principles.</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <i className="fa-solid fa-gears text-indigo-400 text-3xl mb-2"></i>
            <h3 className="text-xl font-semibold mb-2">Interactive Components</h3>
            <p className="text-gray-600">Building dynamic, user-friendly components with React and UI libraries</p>
        </div>
    </div>
    </section>
  );
}
