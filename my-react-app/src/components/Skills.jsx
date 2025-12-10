import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold text-indigo-400 mb-10">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <p className="text-gray-300">HTML, CSS, JavaScript, React, Tailwind CSS</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Backend</h3>
          <p className="text-gray-300">Node.js, Express.js, Firebase, PHP</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Other</h3>
          <p className="text-gray-300">GitHub, Responsive Design, UI/UX, Figma</p>
        </div>
      </div>
    </section>
  );
}
