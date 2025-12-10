import React from "react";
import facebookIcon from '../assets/icons/facebook.png'
import githubIcon from '../assets/icons/github.png'
import gmailIcon from '../assets/icons/gmail.png'
import linkedInIcon from '../assets/icons/linked-in.png'

export default function Footer(){
    return(
        <div>
            <footer className="bg-gray-800">
                <div className="text-white h-auto p-3 grid grid-cols-3 px-6">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-2xl text-indigo-400 mb-3">Reinel Gueco</h1>
                        <p className="text-sm">Aspiring Front End Developer passionate about creating clean, responsive, and visually appealing websites. </p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-2xl mb-3">Quick Links</h1>
                        <ul className="space-y-2">
                            <li><a href="#about" className="hover:text-indigo-500 transition-colors duration-300">About Me</a></li>
                            <li><a href="#skills" className="hover:text-indigo-500 transition-colors duration-300">Skills</a></li>
                            <li><a href="#projects" className="hover:text-indigo-500 transition-colors duration-300">Projects</a></li>
                        </ul>

                    </div>

                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-2xl mb-3">Connect with me</h1>
                        <div className="flex justift-content-center align-items-center gap-3">
                            <a href="" className="hover:invert brightness-200 transition-colors duration-300"><img src={facebookIcon} alt="" className="w-8 h-8 filter invert brightness-0" /></a>
                            <a href="" className="hover:invert brightness-200 transition-colors duration-300" ><img src={githubIcon} alt="" className="w-8 h-8 filter invert brightness-0" /></a>
                            <a href="" className="hover:invert brightness-200 transition-colors duration-300"><img src={gmailIcon} alt="" className="w-8 h-8 filter invert brightness-0" /></a>
                            <a href="" className="hover:invert brightness-200 transition-colors duration-300"><img src={linkedInIcon} alt="" className="w-8 h-8 filter invert brightness-0" /></a>
                        </div>  
                    </div>
                </div>
             <hr className="w-[90%] mx-auto border-gray-300" />

                <div className="text-center text-white p-3">
                    <p>© Reinel Gueco. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}