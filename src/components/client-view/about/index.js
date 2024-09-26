// Import necessary libraries and components
"use client"; // Indicates that this is a client-side component
import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper"; // Custom animation wrapper component
import { motion } from "framer-motion"; // Animation library
import Image from "next/legacy/image"; // Image component from Next.js
import aboutMeImage from '../../../assets/about-image.png'

// Function to define animation variants
function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

// Variants for skill items animation
const skillItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// Main component definition
export default function ClientAboutView({ data }) {
  console.log(data, "aboutdata");

  // Use useMemo to memoize the animation variants
  const setVariants = useMemo(() => variants(), []);

  // Array holding information about the client
  const aboutDataInfo = [
    {
      label: "Clients",
      value: data[0].noofclients || "0",  // Ensure "Clients" label matches the data field
    },
    {
      label: "Projects",
      value: data[0].noofprojects || "0",
    },
    {
      label: "Experience",
      value: data[0].yearofexperience || "0",
    },
  ];
  console.log(aboutDataInfo, 'aboutDataInfo')

  // Heading text for the component
  const headingText = "Why Hire Me For Your Next Project ?";

  return (
    <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="about">
      <h1 className="text-5xl text-center justify-center">Experience Summary</h1>

      <div className="w-full flex">
        {/* Animation wrapper for displaying client info */}
        <AnimationWrapper className="rounded-lg w-full grid-flow-row grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-green-400 bg-ehite-500 z-10">
          {aboutDataInfo.map((infoItem, index) => (
            <motion.div
              className={`flex items-center justify-start
                ${index === 0
                  ? "sm:justify-start"
                  : index === 1
                    ? "sm:justify-center"
                    : "sm:justify-end"
                } py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0`}
              key={index} // Adding a unique key for each item
              custom={{ duration: 2 + index }} // Custom animation duration
              variants={setVariants} // Applying animation variants
            >
              <div className="flex m-0 w-40 sm:w-auto">
                <div className="flex flex-col">
                  <p className="text-[50px] text-green-400 font-bold">
                    {infoItem.value}+ {/* Displaying the value */}
                  </p>
                  <p className="text-[25px] font-bold text-[#000000]">
                    {infoItem.label} {/* Displaying the label */}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimationWrapper>
      </div>

      {/* Animation wrapper for heading and description */}
      <AnimationWrapper className={"pt-6"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {headingText.split(" ").map((item, index) => (
              <span
                key={index} // Adding a key for each word
                className={`${index === 6 ? "text-green-400" : "text-[#000]"}`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
          <p className="text-[#000] mt-4 mb-8 font-bold">{data[0].aboutme}</p>
        </div>
      </AnimationWrapper>

      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <AnimationWrapper className="flex border-green-950 w-full">
          <motion.div variants={setVariants} className="h-full w-full p-4">
            <Image
              src={aboutMeImage}
              alt="About Me"
              layout="responsive"
              height={414}
              width={508}
              quality={100}
            />
          </motion.div>
        </AnimationWrapper>

        {/* Animation wrapper for skills section */}
        <AnimationWrapper className={"flex items-center w-full p-4"}>
          <motion.div
            variants={setVariants}
            className="grid gap-4 grid-cols-3 h-full max-h-[200px] w-full"
          >
            {data[0].skills ? data[0].skills.split(",").map((skill, index) => (
              <motion.div
                className="w-full flex justify-center items-center"
                variants={skillItemVariant}
                key={index} // Adding a key for each skill
              >
                <button className="whitespace-nowrap hover:bg-green-200 text-ellipsis overflow-hidden py-3 w-[160px] px-6 border-[2px] border-green bg-[#fff] text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-200 transition-all outline-none">
                  {skill} {/* Displaying the skill */}
                </button>
              </motion.div>
            )) : (
              <p>No skills available.</p> // Fallback content if no skills are present
            )}
          </motion.div>

        </AnimationWrapper>
      </div>
    </div>
  );
}
