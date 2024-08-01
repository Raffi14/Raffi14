'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import personal_logo from "../../public/Source_image/personal_logo.png";
import TypewriterComponent from "typewriter-effect";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import 'boxicons/css/boxicons.min.css'

export default function Main() {
  return (
    <>
    <Navigation/>
    <Home/>
    <About/>
    <Skill/>
    <Contact/>
    </>
  );
}


function Navigation()
{
  const [open, IsOpen] = useState(false);
  const [isVisibleHome, setIsVisibleHome] = useState(false);
  const [isVisibleAbout, setIsVisibleAbout] = useState(false);
  const [isVisibleSkill, setIsVisibleSkill] = useState(false);
  const [isVisiblecontact, setIsVisibleContact] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 300) {
      setIsVisibleHome(true);
      setIsVisibleAbout(false);
      setIsVisibleSkill(false);
      setIsVisibleContact(false);
    } else if(currentScrollY <= 800 && currentScrollY > 300){
      setIsVisibleHome(false);
      setIsVisibleAbout(true);
      setIsVisibleContact(false);
      setIsVisibleSkill(false);
    } else if(currentScrollY <= 1600 && currentScrollY > 800){
      setIsVisibleAbout(false);
      setIsVisibleHome(false);
      setIsVisibleSkill(true);
      setIsVisibleContact(false);
    } else if(currentScrollY <= 2500 && currentScrollY > 1600){
      setIsVisibleSkill(false);
      setIsVisibleHome(false);
      setIsVisibleContact(true);
      setIsVisibleAbout(false);
    }
  }



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
    <>
      <nav className="fixed w-full items-center bg-white z-10">
        <div className="flex">
          <Image src={personal_logo} width={50} height={50} className="ml-5 md:ml-20 xl:ml-32" alt="Logo"/>
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
            <li><Link href="#Home" onClick={(e) => IsOpen(!open)} className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2 text-white">Home</Link></li>
            <li><Link href="#About" onClick={(e) => IsOpen(!open)} className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2 text-white">About</Link></li>
            <li><Link href="#Skill" onClick={(e) => IsOpen(!open)} className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2 text-white">Skill & Abilities</Link></li>
            <li><Link href="#Contact" onClick={(e) => IsOpen(!open)} className="block hover:border-b-2 border-cyan-800 focus:text-cyan-800 focus:border-b-2 text-white">Contact</Link></li>
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
        <ul className="hidden md:flex justify-end w-4/5 absolute right-0 top-0 h-14 px-4 md:gap-10 xl:gap-20 text-black font-semibold leading-9 pt-2 md:mr-20 xl:mr-40">
          <li><Link href="#Home" className={`${isVisibleHome ? "block border-b-2 border-cyan-800" : ""}`}>Home</Link></li>
          <li><Link href="#About" className={`${isVisibleAbout ? "block border-b-2 border-cyan-800" : ""}`}>About</Link></li>
          <li><Link href="#Skill" className={`${isVisibleSkill ? "block border-b-2 border-cyan-800" : ""}`}>Skill & abilities</Link></li>
          <li><Link href="#Contact" className={`${isVisiblecontact ? "block border-b-2 border-cyan-800" : ""}`}>Contact</Link></li>
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
      <div id="Home" className="snap-always snap-start flex flex-col-reverse h-lvh md:flex-row relative w-full bg-[url('../../public/Source_image/background.jpg')] bg-no-repeat bg-cover">
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
          <a href="#Contact">
            <button className="ml-10 mt-5 w-32 h-10 rounded-md border-2 text-black hover:text-white border-black bg-transparent hover:bg-sky-800 font-sans font-bold md:mt-10 md:ml-32">Contact Me</button>
          </a>
          <div className="flex mt-11 md:my-36 xl:mt-[30vh] gap-8">
            <a href="https://www.linkedin.com/in/raffi-fabiansyah-a6654031b/"><button className="ml-10 w-7 h-7 rounded-md md:ml-36 bg-[url('../../public/Source_image/LinkedIn.png')] bg-no-repeat bg-cover"></button></a>
            <a href="https://github.com/Raffi14"><button className="w-7 h-7 rounded-md  bg-[url('../../public/Source_image/Github_Logo.png')] bg-no-repeat bg-cover"></button></a>
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
      <div className="snap-always snap-start flex flex-col md:flex-row w-full h-lvh bg-sky-800 overflow-hidden" id="About">
        <div className="flex-1 bg-[url('../../public/Source_image/profile.png')] bg-no-repeat bg-cover grayscale bg-center max-[768px]:border-b-4 md:border-r-4"></div>
        <div className="flex-1">
          <h1 className="ml-12 md:ml-16 xl:ml-24 border-l-8 pl-5 border-gray-600 mt-5 md:mt-24 xl:mt-44 text-2xl font-sans sm:text-3xl md:text-4xl xl:text-5xl font-bold antialiased text-white">About <span className="text-gray-400">Me</span></h1>
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
    "/Source_image/next_js.png",
    "/Source_image/React.png",
    "/Source_image/Node.png",
    "/Source_image/mysql.png",
    "/Source_image/Csharp.png",
    "/Source_image/Git.png",
  ];

  let Name = [
    "Html5",
    "Css3",
    "JavaScript",
    "Next .js",
    "React .js",
    "NodeJs",
    "MySql",
    "C#",
    "Git",
  ]

  return(
    <>
      <div className="snap-always snap-start flex flex-col w-full h-lvh bg-gray-600" id="Skill">
        <h1 className="text-center mt-28 md:mt-32 xl:mt-32 text-2xl font-sans sm:text-3xl md:text-4xl xl:text-5xl font-bold antialiased text-white">Skill & Abilities</h1>
        <div className="w-full h-screen inline-flex overflow-hidden">
          <div className="relative h-40 w-full mx-auto pt-5 border-y-8 bg-gray-300 border-gray-700 md:h-52 xl:h-80 mt-[10vh] md:pt-6 xl:pt-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="flex overflow-hidden overflow-x-scroll scroll-hide">
            <ul className="flex mx-auto gap-3 md:gap-20">
              {slides.map((e, i) => (
                <li key={i}>
                  <div className="relative mx-auto pt-4 md:pt-6 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 border-2 xl:h-[250px] xl:w-[250px] md:h-[150px] md:w-[150px] h-[100px] w-[100px]">
                    <Image src={e} width={200} height={200} alt={e} className="mx-auto xl:h-[150px] xl:w-[150px] md:h-[70px] md:w-[80px] h-[50px] w-[50px]"/>
                    <p className="text-black text-center text-xs sm:text-sm md:text-xl xl:text-2xl font-sans font-bold mt-1 md:mt-2 xl:mt-5">{Name[i]}</p>
                  </div>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Contact(){
  const [result, setResult] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "98c0dd94-fa65-4855-95b0-0030c888f064");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return(
    <>
      <div className="snap-always snap-start flex flex-col w-full h-[100%] bg-white" id="Contact">
        <div className="h-full mt-16">
        <h2 className="text-center mb-[.5em] text-black text-[36px] font-bold">Contact <span className="text-yellow-600">Me</span></h2>
        <form onSubmit={onSubmit} className=" w-1/2 mx-auto mb-[3em]">
          <div className="flex justify-center flex-wrap">
            <input type="text" placeholder="Full Name" name="name" className="border-2 border-black w-full p-[.5em] font-[18px] text-black bg-[rgb(241, 241, 241)] rounded-lg mt-[1rem] resize-none"/>
            <input type="email" placeholder="Email" name="email" className="border-2 border-black w-full p-[.5em] font-[18px] text-black bg-[rgb(241, 241, 241)] rounded-lg mt-[1rem] resize-none"/>
          </div>
          <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" className="border-2 border-black w-full max-h-36 md:max-h-screen p-[.5em] font-[18px] text-black bg-[rgb(241, 241, 241)] rounded-lg mt-[1rem] resize-none"></textarea>
          <div className="w-full">
            <input type="submit" value="Send Message" className="mx-auto block bg-transparent border-2 hover:bg-black hover:text-white border-black text-black w-40 h-10 mt-5 rounded-lg"/>
          </div>
        </form>
        <span className="text-black">{result}</span>
        </div>
        <div className="w-[100%] relative bottom-0 pt-[40px] pr-0 bg-black">
          <div className="text-center pb-[25px] text-white space-x-2">
            <a href="https://www.linkedin.com/in/raffi-fabiansyah-a6654031b/"><button className="bg-[url('../../public/Source_image/linkedin-square-logo.png')] bg-no-repeat bg-cover w-[40px] h-[40px] rounded-md hover:scale-150 border-2 border-orange-700"></button></a>
            <a href="https://github.com/Raffi14"><button className="bg-[url('../../public/Source_image/github-logo.png')] bg-no-repeat bg-cover w-[40px] h-[40px] rounded-md hover:scale-150 border-2 border-orange-700"></button></a>
            <a href="mailto:raffifabiansyah@gmail.com"><button className="bg-[url('../../public/Source_image/Email.png')] bg-no-repeat bg-cover w-[40px] h-[40px] rounded-md hover:scale-150 border-2 border-orange-700"></button></a>
          </div>
          <ul className="mt-0 p-0 text-[18px] space-x-8 mb-0 text-center">
            <li className="inline-block pt-0 pr-15px">
              <a href="#Home" className="text-white border-b-4 border-transparent hover:border-orange-700">Home</a>
            </li>
            <li className="inline-block pt-0 pr-15px">
              <a href="#About" className="text-white border-b-4 border-transparent hover:border-orange-700">About</a>
            </li>
            <li className="inline-block pt-0 pr-15px">
              <a href="#Skill" className="text-white border-b-4 border-transparent hover:border-orange-700">Skill</a>
            </li>
            <li className="inline-block pt-0 pr-15px">
              <a href="#Contact" className="text-white border-b-4 border-transparent hover:border-orange-700">Contact</a>
            </li>
          </ul>
          <p className="mt-[15px] text-center text-[12px] text-white">Ⓒ Raffi Fabiansyah | All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}
