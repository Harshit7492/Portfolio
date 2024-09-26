"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Image from "next/image";
import aiImage from "../../../assets/ai-image.jpg";

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

const socialIcons = [
  {
    id: "leetcode",
    url: "https://leetcode.com/u/Harshit946/",
    icon: (
      <SiLeetcode
        color="rgba(255, 0, 0, 0.5)"
        className="w-[40px] h-[40px]"
      />
    ),
  },
  {
    id: "github",
    url: "https://github.com/Harshit7492",
    icon: (
      <FaGithub
        color="rgba(0,0,0)"
        className="w-[40px] h-[40px]"
      />
    ),
  },
  {
    id: "codechef",
    url: "https://www.codechef.com/users/harshit28k",
    icon: (
      <SiCodechef
        color="rgba(255, 0, 0, 1)"
        className="w-[40px] h-[40px]"
      />
    ),
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/harshit-singh8/",
    icon: (
      <FaLinkedinIn
        color="rgba(10, 102, 194, 0.8)"
        className="w-[40px] h-[40px] "
      />
    ),
  },
  {
    id: "hackerrank",
    url: "https://www.hackerrank.com/profile/harshit94621",
    icon: (
      <LiaHackerrank
        color="rgba(0, 255, 0, 1)"
        className="w-[40px] h-[40px]"
      />
    ),
  },
];

export default function ClientHomeView({ data }) {
  // console.log(data, "ClientHomeView");

  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <AnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={setVariants}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
              {data && data.length
                ? data[0]?.heading.split(" ").map((item, index) => (
                    <span
                      key={index} // Add unique key for each word in the heading
                      className={`${
                        index === 2 || index === 3
                          ? "text-green-400"
                          : "text-[#000]"
                      }`}
                    >
                      {item}{" "}
                    </span>
                  ))
                : null}
            </h1>
            <p className="text-[#000] mt-4 mb-8 font-bold">
              {data && data.length ? data[0]?.summary : null}
            </p>
            <motion.div className="flex gap-3 cursor-pointer">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id} // Ensure each icon has a unique key
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 4,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
            <div className="buttons">
              <a
                href="https://drive.google.com/file/d/1xs3_nFNf68BP-bBE0F-h-iVb379iwQeN/view?usp=drivesdk"
                className="mt-14 py-3 px-6 border-[2px] bg-[#cfcaca] hover:bg-green-200 border-green text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-md transition-all outline-none flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
          <motion.div ref={containerRef} className="flex w-full justify-end">
            <motion.div
              drag
              dragConstraints={containerRef}
              className="w-[400px] h-[400px] relative bg-green"
            >
              <div className="w-[300px] h-[300px] absolute"></div>
              <Image
                src={aiImage}
                alt="Profile Picture"
                layout="responsive"
                quality={100}
                height={300}
                width={300}
                className="absolute rounded-full border-[5px] border-[#25c52f]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
