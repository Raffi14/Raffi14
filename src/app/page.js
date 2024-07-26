'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import personal_logo from "../../public/Source_image/personal_logo.png";
import TypewriterComponent from "typewriter-effect";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

export default function Main() {
  return (
    <>
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <Navigation/>
      <div className="snap-always snap-center">
        <Home/>
      </div>
      <div className="snap-always snap-center">
        <About/>
      </div>
      <div className="snap-always snap-center">
        <Skill/>
      </div>
    </div>
    </>
  );
}


function Navigation()
{
  const [open, IsOpen] = useState(false);
  return(
    <>
      <nav className="fixed w-full items-center bg-white z-10">
        <div className="flex">
          <Image src={personal_logo} width={50} height={50} className="ml-5 md:ml-32" alt="Logo"/>
          <span className="text-black mt-3 ml-2 font-bold font-sans">Raffi Fabiansyah</span>
        </div>
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
          <li><Link href="#Home" className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2">Home</Link></li>
          <li><Link href="#About" className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2">About</Link></li>
          <li><Link href="#Skill" className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2">Skill & ability</Link></li>
          <li><Link href="#" className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2">Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}


function Home()
{
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12.5deg", "-12.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12.5deg", "12.5deg"]);

  const HandleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

    const HandleMouseLeave = (e) => {
      x.set(0);
      y.set(0);
    }

  return(
    <>
      <div id="Home" className="flex flex-col-reverse h-lvh md:flex-row relative w-full bg-[url('../../public/Source_image/background.jpg')] bg-no-repeat bg-cover to-slate-800 ">
        <div className="flex-1">
          <div className="my-5 md:my-48 xl:my-60">
          <h1 className="ml-10 md:ml-32 text-2xl font-sans sm:text-3xl md:text-4xl xl:text-5xl font-bold antialiased text-sky-800">HI,</h1>
          <span className="ml-10 md:ml-32 mt-2 text-2xl font-sans sm:text-3xl md:text-4xl xl:text-5xl font-bold antialiased text-sky-800">I'm <span className="text-yellow-600"> Raffi Fabiansyah</span></span>
          <div className="ml-10 md:ml-32 mt-2 text-xs sm:text-sm md:text-xl xl:text-2xl font-sans font-bold flex gap-2">
            <span className="text-sky-800">I Am </span>
            <span className="text-yellow-600">
              <TypewriterComponent options={{
                strings:[
                  "a Programmer",
                  "a Pro-Gamer",
                  "Ellen's Husband",
                ],
                autoStart: true,
                loop: true,
                delay:50,
              }}/> 
            </span>
          </div>
          <button className="ml-10 mt-5 w-32 h-10 rounded-md bg-sky-800 font-sans font-bold md:mt-10 md:ml-32">Contact</button>
          <div className="flex mt-11 md:my-36 xl:my-60 gap-8">
            <a href="https://www.linkedin.com/in/raffi-fabiansyah-a6654031b/"><button className="ml-10 w-7 h-7 rounded-md md:ml-36 bg-[url('../../public/Source_image/LinkedIn.png')] bg-no-repeat bg-cover"></button></a>
            <a href="https://github.com/Raffi14"><button className="w-7 h-7 rounded-md  bg-[url('../../public/Source_image/GitHub_Logo.png')] bg-no-repeat bg-cover"></button></a>
          </div>
          </div>
        </div>
        <div className="flex-1 px-10">
          <motion.div onMouseMove={HandleMouseMove} onMouseLeave={HandleMouseLeave} style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }} className="relative rounded-full bg-gradient-to-br from-indigo-300 to-violet-300 mx-auto my-24 md:my-40 xl:my-36 xl:h-[500px] xl:w-[500px] md:h-[300px] md:w-[300px] h-[200px] w-[200px]">
            <div style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }} className="absolute inset-5 grid place-content-center rounded-full bg-[url('../../public/Source_image/profile.png')] bg-no-repeat bg-cover bg-center"></div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

function About(){
  return(
    <>
      <div className="w-full h-screen bg-slate-600 " id="About"></div>
    </>
  )
}

function Skill(){
  return(
    <>
      <div className="w-full h-screen bg-slate-300 " id="Skill"></div>
    </>
  )
}