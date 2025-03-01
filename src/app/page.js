"use client"

import { useState, useEffect } from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import { Play, Pause, Volume2 } from "lucide-react";

export default function Main() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = document.getElementById("bg-music");
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  const toggleMusic = () => {
    const audio = document.getElementById("bg-music");
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch((error) => console.error("Playback failed:", error));
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Flutter',
  ]

  return (
    <div className="snap-always snap-start flex-col-reverse h-screen md:flex-row relative w-full bg-[url('/Source_image/background.png')] bg-no-repeat bg-cover grayscale-[50%] flex justify-center items-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div 
        className="relative w-60 h-60 md:w-96 md:h-96 [perspective:1000px] cursor-pointer z-10"
        onClick={handleClick}
      >
        <div
          className={`relative w-full h-full transition-all duration-700 ease-in-out ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="flex flex-col absolute w-full h-full bg-white shadow-lg rounded-2xl overflow-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className='bg-[url("/Source_image/profile.png")] bg-no-repeat bg-cover w-full h-full grayscale bg-left-bottom'></div>
            <div className="flex flex-col justify-center items-center p-4 z-10">
              <h2 className="text-xl font-bold text-black mb-2">Muhammad Raffi Fabiansyah</h2>
              <p className="text-black text-center">Fullstack Developer</p>
            </div>
          </div>
          <div
            className="absolute w-full h-full bg-gray-500 shadow-lg rounded-2xl opacity-55 flex flex-col items-center p-4 [transform:rotateY(180deg)]"
            style={{ backfaceVisibility: 'hidden'}}
          >
            <div className="relative flex flex-col items-center w-full h-full p-2">
              <div className="w-full flex flex-row items-center gap-2 mx-auto mb-6">
                <CodeBracketIcon className="w-8 h-8 font-extrabold text-white" />
                <h1 className="text-3xl font-bold text-white">Technology</h1>
              </div>
              <div className="flex flex-col gap-2 w-full bg-black p-4 rounded-lg h-full overflow-y-auto scroll-hide">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <p className="text-white text-md">{skill}</p>
                  </div>
                ))}
              </div>
              <div className="flex mt-6 w-full bg-black rounded-lg mx-auto p-2">
                <div className="flex flex-row gap-x-8 mx-auto h-full">
                <a href="https://github.com/raffifabiansyah" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34a2.66 2.66 0 00-1.1-1.47c-.9-.6.07-.58.07-.58a2.1 2.1 0 011.53 1.03 2.14 2.14 0 002.93.83 2.14 2.14 0 01.63-1.35c-2.22-.25-4.56-1.11-4.56-4.94a3.87 3.87 0 011.03-2.68 3.58 3.58 0 01.1-2.65s.84-.27 2.75 1a9.54 9.54 0 015 0c1.9-1.3 2.75-1 2.75-1a3.58 3.58 0 01.1 2.65 3.87 3.87 0 011.03 2.68c0 3.84-2.34 4.69-4.57 4.94a2.4 2.4 0 01.68 1.87v2.78c0 .27.18.58.68.48A10 10 0 0012 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/raffifabiansyah" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.45 20.45h-3.55v-5.34c0-1.27-.03-2.89-1.77-2.89s-2.04 1.38-2.04 2.8v5.42H9.54v-10.95h3.41v1.5h.05c.47-.9 1.63-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.82zM5.34 7.54c-1.14 0-2.05-.92-2.05-2.05s.92-2.05 2.05-2.05 2.05.92 2.05 2.05-.92 2.05-2.05 2.05zM6.11 20.45H3.55V9.5h2.56v10.95z"></path>
                  </svg>
                </a>
                <a href="mailto:raffifabiansyah@gmail.com" className="text-white text-2xl mt-1 hover:text-gray-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12.713l-11.715-7.85v11.137c0 .546.447.993.993.993h21.444c.546 0 .993-.447.993-.993v-11.137l-11.715 7.85zm11.715-8.906c0-.546-.447-.993-.993-.993h-21.444c-.546 0-.993.447-.993.993v.597l12 8.042 12-8.042v-.597z"></path>
                  </svg>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 w-full h-1/2 bg-gradient-to-t from-transparent to-black'>
        <div className="absolute bottom-4 left-4 border-2 border-white flex items-center gap-4 bg-black/80 text-white p-4 rounded-lg shadow-lg">
          <div className="w-18 h-12 bg-cover pr-12 bg-center rounded-md" style={{ backgroundImage: "url('/Source_image/odoriko.jpg')" }}></div>
          <div className="flex flex-col">
            <span className="text-sm font-bold">Odoriko</span>
            <span className="text-xs text-gray-300">Vaundy</span>
          </div>
          <div onClick={toggleMusic} className="cursor-pointer">
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </div>
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-20 h-1 bg-gray-400 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <audio id="bg-music" loop>
            <source src="/Source_music/odoriko.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}