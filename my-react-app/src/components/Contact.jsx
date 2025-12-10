import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold text-indigo-400 mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-8">
        Interested in working together? Feel free to reach out anytime!
      </p>
      <div className="space-x-6">
        <a href="mailto:reinel@example.com" className="text-indigo-400 hover:underline">
          📧 reinel@example.com
        </a>
        <a href="https://github.com/reinelgueco" target="_blank" className="text-indigo-400 hover:underline">
          💻 GitHub
        </a>
      </div>
    </section>
  );
}
