import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import profile from "./assets/profile.jpg";
import Footer from './components/Footer.jsx';
import './index.css'
import cv from "./assets/CV.pdf"
import resumegoImage from "./assets/images/resume-go.png";
import popsvapehubImage from "./assets/images/pops-vapehub.png";
import eastudyImage from "./assets/images/eastudy-image.png";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp, FaGitAlt, FaBootstrap, FaGithub, FaNodeJs} from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';
import { image } from 'framer-motion/client';
function activeLink(link) {
  const links = document.querySelectorAll('#sidebar a');
  links.forEach((item) => item.classList.remove('active'));
  link.classList.add('active');
}




export default function App() {

  <FaHtml5 title='HTML5'/>;

  const [selectedProject, setselectedProject] = useState(null);

  const Modal = ({ project, onClose }) => {
    if (!project) return null;

    return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-[#1a1a19] p-6 rounded-xl w-[850px] max-w-full flex gap-6 relative">

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl"
          >
            ✕
          </button>

          {/* Left Image */}
          <div className="w-[45%]">
            <img 
              src={project.image} 
              alt="project preview" 
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Right Section */}
          <div className="flex-1 text-gray-300">
            
            {/* Title */}
            <h2 className="text-2xl font-bold text-violet-400">{project.title}</h2>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              {project.description}
            </p>

            {/* Tech icons */}
            <div className="flex gap-3 mt-4 text-2xl">
              {project.icons?.map((Icon, index) => (
                <Icon key={index} className="text-gray-300 hover:text-white" />
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a 
                href={project.link}
                target="_blank"
                className="px-4 py-2 bg-violet-700 rounded-lg text-white hover:bg-violet-600"
              >
                Open Project
              </a>

              <a 
                href={project.demo}
                target="_blank"
                className="px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600"
              >
                Demo
              </a>
            </div>

          </div>

        </div>
      </div>
    );
  };
  return (


    <div className="App min-h-screen text-white" style={{backgroundColor: '#100c16'}}>
      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto border-solid" style={{borderRadius: '30px 30px 30px 30px', marginTop: '20px', marginLeft: '20px', height: 'calc(100vh - 40px)', backgroundColor: '#141414'}}>
          <div className="flex items-center">
              <img 
                src={profile} 
                alt="" 
                className="w-20 h-20 rounded-full mb-4" 
              />
              <h2 className="text-white text-sm font-bold ml-4">
                Reinel M. Gueco <br />
                <span className='text-xs font-light'>Front End Developer</span>
              </h2>
              
            </div>

          
            <hr />
            <ul id="sidebar" className="space-y-2 font-medium">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => activeLink(e.target.closest('a'))}
                  className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                >
                  <span className="ms-3 mt-2">Home</span>
                </a>
              </li>

              <li>
                <a 
                  href="#" 
                  onClick={(e) => activeLink(e.target.closest('a'))}
                  className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Skills</span>
                </a>
              </li>

              <li>
                <a 
                  href="#" 
                  onClick={(e) => activeLink(e.target.closest('a'))}
                  className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
                </a>
              </li>

              <li>
                <a 
                  href="#achievement" 
                  onClick={(e) => activeLink(e.target.closest('a'))}
                  className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Achievements</span>
                </a>
              </li>

              <li>
                <a 
                  href="#" 
                  onClick={(e) => activeLink(e.target.closest('a'))}
                  className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
                </a>
              </li>
            </ul>

        </div>
      </aside>

      <main className="ml-64 p-9">
      <a name ="home">
       <div className="about w-500 bg-transparent" style={{backgroundColor: '#0e0b13ff', borderRadius: '15px', padding: '40px'}}>
          <h1 className='font-bold text-4xl'>Hi I am a Front End Developer</h1>
          <p className='text-light w-120' style={{width: '690px', marginTop: '15px'}}>I’m an IT student with experience in web application development for at least 2 years since I started accepting commissions for developing web application when I was in 2nd year college up until now. I like exploring new tools and improving my skills through coding and freelance work. I’m looking forward to learning more and starting my journey in the IT industry.</p>

          <br></br>
          <a href={cv} download className='cv-download'>Download my CV</a>
       </div> 
      </a>

      

        <div className="about w-full mt-5" style={{backgroundColor: '#0e0b13ff', borderRadius: '15px', padding: '40px'}}>
          <h1 className='font-bold text-lg skill-header'>Skills</h1>
          <div className="skills flex">
            <ul className="flex space-x-4 skills">
              <li className='backdrop-blur-md mt-2 rounded-lg' style={{padding: '15px', backgroundColor: '#1a1a19ff', width: '120px', textAlign: 'center'}}>HTML</li>
              <li className='backdrop-blur-md mt-2 rounded-lg' style={{padding: '15px', backgroundColor: '#1a1a19ff', width: '120px', textAlign: 'center'}}>CSS</li>
              <li className='backdrop-blur-md mt-2 rounded-lg' style={{padding: '15px', backgroundColor: '#1a1a19ff', width: '120px', textAlign: 'center'}}>JavaScript</li>
              <li className='backdrop-blur-md mt-2 rounded-lg' style={{padding: '15px', backgroundColor: '#1a1a19ff', width: '120px', textAlign: 'center'}}>PHP</li>
              <li className='backdrop-blur-md mt-2 rounded-lg' style={{padding: '15px', backgroundColor: '#1a1a19ff', width: '120px', textAlign: 'center'}}>React</li>
              <li className='backdrop-blur-md mt-2 rounded-lg' style={{padding: '15px', backgroundColor: '#1a1a19ff', width: '120px', textAlign: 'center'}}>MYSQL</li>
              <li className='backdrop-blur-md mt-2 rounded-lg' style={{padding: '15px', backgroundColor: '#1a1a19ff', width: '120px', textAlign: 'center'}}>Git</li>
              <li className='backdrop-blur-md mt-2 rounded-lg' style={{padding: '15px', backgroundColor: '#1a1a19ff', width: '120px', textAlign: 'center'}}>Bootstrap</li>
              <li className='backdrop-blur-md mt-2 rounded-lg' style={{padding: '15px', backgroundColor: '#1a1a19ff', width: '120px', textAlign: 'center'}}>Tailwind</li>
              <li className='backdrop-blur-md mt-2 rounded-lg' style={{padding: '15px', backgroundColor: '#1a1a19ff', width: '120px', textAlign: 'center'}}>Github</li>
            </ul>
          </div>
      </div> 
       
        <div className="projects w-full mt-5 mb-5" style={{backgroundColor: '#0e0b13ff', borderRadius: '15px', padding: '40px'}}>
          <h1 className='font-bold text-lg skill-header'>Projects</h1>
          <span className='font-thin text-gray-300'>click any project to open previews</span>
          <div className="project-list grid grid-cols-5 gap-4 mt-4">
            <div className="project-item backdrop-blur-md rounded-lg" style={{backgroundColor: '#1a1a19ff', padding: '20px'}} onClick={() => setselectedProject({
              title: 'ResumeGo!',
              description: 'ResumeGo is an innovative web application designed to simplify and modernize the resume-building process. It provides users with an intuitive, real-time interface where they can create professional resumes effortlessly. Users fill out a dynamic form section, and the changes are instantly reflected in a live preview pane, allowing them to visualize the final result as they work.',
              image: resumegoImage,
              link: 'https://resume-go-umber.vercel.app/',
              icons: [FaHtml5, FaCss3Alt, FaJsSquare, SiTailwindcss, FaNodeJs, FaGitAlt, , FaGithub],
            })}>
              <h2 className='font-semibold text-violet-800'>ResumeGo!</h2>
              <p className='text-sm mt-2'>Description of Project 1</p>
            </div>
            <div className="project-item backdrop-blur-md rounded-lg" style={{backgroundColor: '#1a1a19ff', padding: '20px'}} onClick={() => setselectedProject({
              title: "Pop's Vapehub",
              description: "It's an E-commerce website that sells vape products such as e-liquids, vape kits, and accessories. The website features a modern and user-friendly design, making it easy for customers to browse and purchase products. It includes features such as product categories, and shopping cart. The website is built using HTML, CSS, and Bootstrap for responsive design.",
              image: popsvapehubImage,
              link: 'https://reinel2004.github.io/home-page/',
              icons: [FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub],
             
            })}>
              <h2 className='font-semibold text-violet-800'>Pop's Vapehub</h2>
              <p className='text-sm mt-2'>Description of Project 2</p>
            </div>
            <div className="project-item backdrop-blur-md rounded-lg" style={{backgroundColor: '#1a1a19ff', padding: '20px'}} onClick={() => setselectedProject({
              title: 'Eastudy',
              description: 'Detailed description of Eastudy project.',
              image: eastudyImage
            })}>
              <h2 className='font-semibold text-violet-800'>Eastudy</h2>
              <p className='text-sm mt-2'>Description of Project 3</p>
            </div>
            
          </div>
          <Modal 
            project={selectedProject} 
            onClose={() => setselectedProject(null)} 
          />
        </div>
        <a name="achievement">
        <div className="achievements w-full mt-5 mb-5" style={{backgroundColor: '#0e0b13ff', borderRadius: '15px', padding: '40px'}}>
          <h1 className='font-bold text-lg skill-header'>Achievements</h1>
          <ul className='list-disc list-inside mt-4'>
            <li className='mb-2'>Dean's Lister - Achieved Dean's List recognition for academic excellence in multiple semesters.</li>
            <li className='mb-2'>1st Place - Won 1st place in the Regional Web Development Competition 2022.</li>
            <li className='mb-2'>Certified Front-End Developer - Earned certification from XYZ Institute for completing the Front-End Development course.</li>
          </ul>
        </div>
        </a>

        <a name="contact">
        <div className="contact w-full mt-5 mb-5" style={{backgroundColor: '#0e0b13ff', borderRadius: '15px', padding: '40px'}}>
          <h1 className='font-bold text-lg skill-header'>Contact Me</h1>
          <form className='mt-4'>
            <div className='mb-4'>
              <label className='block mb-2' htmlFor='name'>Name:</label>
              <input className='w-full p-2 rounded-lg text-black' type='text' id='name' name='name' required />
            </div>
            <div className='mb-4'>
              <label className='block mb-2' htmlFor='email'>Email:</label>
              <input className='w-full p-2 rounded-lg text-black' type='email' id='email' name='email' required />
            </div>
            <div className='mb-4'>
              <label className='block mb-2' htmlFor='message'>Message:</label>
              <textarea className='w-full p-2 rounded-lg text-black' id='message' name='message' rows='4' required></textarea>
            </div>
            <button className='px-4 py-2 bg-violet-700 rounded-lg text-white hover:bg-violet-600' type='submit'>Send Message</button>
          </form>
        </div>
        </a>
      </main>

    </div>
    
    
  );
}
