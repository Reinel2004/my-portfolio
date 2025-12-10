import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-indigo-400 mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Smart Grocelist App</h3>
          <p className="text-gray-300">
            A mobile app that helps users manage their grocery lists with Firebase integration.
          </p>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">ResumeGo</h3>
          <p className="text-gray-300">
            A live resume builder web app with customizable templates and real-time preview.
          </p>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Recipe Match</h3>
          <p className="text-gray-300">
            A recipe sharing platform where users can post, search, and match recipes.
          </p>
        </div>
      </div>
    </section>
  );
}
