'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import personal_logo from "../../public/Source_image/personal_logo.png";
import TypewriterComponent from "typewriter-effect";
import profile from "../../public/Source_image/profile.jpg"

export default function Main() {
  return (
    <>
      <Navigation/>
      <Home/>
      <About/>
    </>
  );
}


function Navigation()
{
  const [open, IsOpen] = useState(false);
  return(
    <>
      <nav className="fixed w-full items-center bg-white z-10">
        <Image src={personal_logo} width={50} height={50} className="ml-5 md:ml-20" alt="Logo"/>
        {
          open ? (
            <div className="md:hidden">
            <ul className= {open ? "z-50 flex flex-col gap-10 w-3/5 fixed right-0 top-0 bottom-0 h-90 px-4 font-semibold bg-slate-800 pt-10" : "hidden"}>
            <li>
              <button onClick={(e) => IsOpen(!open)} className="md:hidden -space-y-1 absolute left-0 top-0 h-14 gap-10 -mt-1 ml-2 z-50">
                <span className="block h-1 w-8 bg-gray-600 -rotate-45"></span>
                <span className="block h-1 w-8 bg-gray-600 rotate-45"></span>
              </button>
            </li>
            <li><a href="#" className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2">Home</a></li>
            <li><a href="#" className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2">About</a></li>
            <li><a href="#" className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2">Skill & ability</a></li>
            <li><a href="#" className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2">Contact</a></li>
            </ul>
            </div>
          ):(
            <button onClick={(e) => IsOpen(!open)} className="md:hidden space-y-2 absolute right-0 top-0 h-14 gap-20 -mt-1 mr-5">
              <span className="block h-1 w-8 bg-gray-600"></span>
              <span className="block h-1 w-8 bg-gray-600"></span>
              <span className="block h-1 w-8 bg-gray-600"></span>
            </button>
          )
        }
        <ul className="hidden md:flex justify-end w-4/5 absolute right-0 top-0 h-14 px-4 gap-20 text-black font-semibold leading-9 pt-2 mr-40">
          <li><a href="#" className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2">Home</a></li>
          <li><a href="#" className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2">About</a></li>
          <li><a href="#" className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2">Skill & ability</a></li>
          <li><a href="#" className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}


function Home()
{
  return(
    <>
      <div className="flex flex-col-reverse h-lvh md:flex-row relative w-full bg-white to-slate-800 ">
        <div className="flex-1">
          <div className="my-5 md:my-64 xl:my-80">
          <h1 className="ml-10 md:ml-20 text-2xl font-serif sm:text-3xl md:text-4xl xl:text-5xl font-bold antialiased text-sky-800">HI!!</h1>
          <span className="ml-10 md:ml-20 mt-2 text-2xl font-serif sm:text-3xl md:text-4xl xl:text-5xl font-bold antialiased text-sky-800">I'm Raffi<span className="text-yellow-600"> Fabiansyah</span></span>
          <div className="ml-10 md:ml-20 mt-2 text-xs sm:text-sm md:text-xl xl:text-2xl font-serif font-semibold flex gap-2"><span className="text-black">I Am </span><span className="text-yellow-600"> <TypewriterComponent options={{
            strings:[
              "a Programmer",
              "a Pro-Gamer",
            ],
            autoStart: true,
            loop: true,
            delay:50,
          }}/></span>
          </div>
          </div>
        </div>
        <div className="flex-1 px-10">
          <Image src={profile} width={500} height={500} className="rounded-full mx-auto my-24 md:my-32 xl:my-60" alt="Profile"/>
        </div>
      </div>
    </>
  )
}

function About(){
  return(
    <>
      <div className="w-full h-screen bg-slate-600"></div>
    </>
  )
}