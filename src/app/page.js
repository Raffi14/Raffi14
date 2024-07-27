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
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar">
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
          <div className="my-5 md:my-48 xl:mt-[30vh]">
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
          <button className="ml-10 mt-5 w-32 h-10 rounded-md bg-sky-800 font-sans font-bold md:mt-10 md:ml-32">Contact Me</button>
          <div className="flex mt-11 md:my-36 xl:mt-[30vh] gap-8">
            <a href="https://www.linkedin.com/in/raffi-fabiansyah-a6654031b/"><button className="ml-10 w-7 h-7 rounded-md md:ml-36 bg-[url('../../public/Source_image/LinkedIn.png')] bg-no-repeat bg-cover"></button></a>
            <a href="https://github.com/Raffi14"><button className="w-7 h-7 rounded-md  bg-[url('../../public/Source_image/GitHub_Logo.png')] bg-no-repeat bg-cover"></button></a>
          </div>
          </div>
        </div>
        <div className="flex-1 px-10">
          <div className="mt-[20vh]">
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
      </div>
    </>
  )
}

function About(){
  return(
    <>
      <div className="flex flex-col md:flex-row w-full h-lvh bg-slate-600" id="About">
        <div className="flex-1  bg-[url('../../public/Source_image/profile.png')] bg-no-repeat bg-cover grayscale bg-center max-[768px]:border-b-4 md:border-r-4"></div>
        <div className="flex-1">
          <h1 className="text-center mt-5 md:mt-24 xl:mt-44 text-2xl font-sans sm:text-3xl md:text-4xl xl:text-5xl font-bold antialiased text-white">About Me</h1>
          <div className="w-3/4 mx-auto mt-[2vh] md:mt-[10vh]">
              <p className="font-sans text-sm md:text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </>
  )
}

function Skill(){
  let slides = [
    "/Source_image/Html.png",
    "/Source_image/Css.png",
    "/Source_image/Js.png",
  ];

  return(
    <>
      <div className="flex flex-col w-full h-lvh bg-gray-400" id="Skill">
        <h1 className="text-center mt-28 md:mt-32 xl:mt-32 text-2xl font-sans sm:text-3xl md:text-4xl xl:text-5xl font-bold antialiased text-black">Skill & Ability</h1>
        <div className="w-full h-screen inline-flex overflow-hidden [mask-image:_linear-gradient(to_bottom,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex flex-col md:flex-row mx-auto justify-center md:justify-start animate-infinite-scrollY md:animate-infinite-scroll mt-14 md:mt-[15vh] md:gap-28 gap-12">
            {slides.map((e, i) => (
              <li key={i}>
                <div className="relative pt-4 md:pt-6 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 border-2 xl:h-[250px] xl:w-[250px] md:h-[150px] md:w-[150px] h-[100px] w-[100px]">
                  <Image src={e} width={200} height={200} alt={e} className="mx-auto xl:h-[200px] xl:w-[200px] md:h-[100px] md:w-[100px] h-[70px] w-[70px]"/>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
