"use client"
import { assets } from "@/utils/asset-utils";
import Image from "next/image";
import { Framework, frameworks } from "@/utils/framework-utils";
import {useState, useEffect, useRef } from 'react'
import { cn } from "@/utils/tailwind-utils";
import { Poppins } from "next/font/google";
import { FrameworkRotation } from "@/components/framework-rotation";
import { CountdownTimer } from "@/components/countdown-timer";
import { Cursor } from "@/components/cursor";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  const [currentFramework, setCurrentFramework] = useState<Framework>(frameworks[0])
  const [showBackground, setShowBackground] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(()=>{
    let currentIndex = 0;
    const rotateFrameworks = ()=>{
      setCurrentFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1 ) % frameworks.length
    }

    const intervalId = setInterval(rotateFrameworks,2000);

    return ()=> clearInterval(intervalId);
  },[])

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <main>
       {/* Background color */}
      <div className={cn("fixed inset-0 transition-colors delay-100 duration-700 opacity-25 ",       {
            "bg-purple-300": currentFramework === "qwik",
            "bg-sky-300": currentFramework === "safari",
            "bg-yellow-300": currentFramework === "chrome",
            "bg-teal-300": currentFramework === "tailwind",
            "bg-blue-300": currentFramework === "react",
            "bg-green-300": currentFramework === "vue",
            "bg-orange-400": currentFramework === "svelte",
            "bg-red-300": currentFramework === "mobile",
            "bg-neutral-300": currentFramework === "desktop",
      })} />

      {/* Gradient */}
      <div className="w-screen h-screen fixed inset-0">
        <Image  role="presentation" alt="gradient background" layout="fill" objectFit="cover" src={assets.gradient}/>
      </div>

      {/* Square Grid */}
      <div 
        className="fixed inset-0 opacity-30" style={{
          backgroundImage:`url(${assets.square})`,
          backgroundSize:'30px'
        }}
      />

      {/* Reveal */}
      <div
        className={cn(
          "bg-black fixed inset-0 transition-opacity duration-1000",
          !showBackground ? "opacity-100" : "opacity-0"
        )}
      />


        {/* Content */}
      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10">
          {/* Heading */}
          <h1
            className={`text-7xl  max-w-3xl text-center leading-snug mb-12  ${poppins.className}`}
          >
            Your <FrameworkRotation currentFramework={currentFramework} /> will{" "}
            <span
              className={cn("transition-colors duration-200", {
                "text-purple-300": currentFramework === "qwik",
                "text-sky-300": currentFramework === "safari",
                "text-yellow-300": currentFramework === "chrome",
                "text-teal-300": currentFramework === "tailwind",
                "text-blue-300": currentFramework === "react",
                "text-green-300": currentFramework === "vue",
                "text-orange-400": currentFramework === "svelte",
                "text-red-300": currentFramework === "mobile",
                "text-neutral-300": currentFramework === "desktop",
              })}
            >
              never
            </span>{" "}
            be forgotten anymore.
          </h1>


          {/* Sub heading */}
          <p className="mb-8 text-gray-300">
             Tell us the important 📅 of your life, We will never forget them.
          </p>

          {/* Claim ticket button */}
          <div className="mb-8">
            <button
              ref={buttonRef}
              className={cn(
                "text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200",
                {
                  "bg-purple-300": currentFramework === "qwik",
                  "bg-sky-300": currentFramework === "safari",
                  "bg-yellow-300": currentFramework === "chrome",
                  "bg-teal-300": currentFramework === "tailwind",
                  "bg-blue-300": currentFramework === "react",
                  "bg-green-300": currentFramework === "vue",
                  "bg-orange-400": currentFramework === "svelte",
                  "bg-red-300": currentFramework === "mobile",
                  "bg-neutral-300": currentFramework === "desktop",
                }
              )}
            >
             Add Event
            </button>
          </div>

          {/* Countdown timer */}
          <CountdownTimer currentFramework={currentFramework} />
        </div>
          {/* <Cursor buttonRef={buttonRef}/> */}
      </div>


    </main>
  )
}
