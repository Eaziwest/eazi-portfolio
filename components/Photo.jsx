"use client";


import { delay, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photo = () => {
    return <div className="w-full h-full relative">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1,
            transition: {delay: 2, duration: 0.4, ease: "easeIn"},
        }}>

            {/* image */}
            <motion.div 
            initial={{opacity: 0}} animate={{opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"},
            }}
            className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighter absolute">
                <Image 
                    src="/assets/Certification/Fortinet/NSE 1/1-associate-logo.png" 
                    priority 
                    quality={100} 
                    fill 
                    alt="" 
                    className="object-contain" 
                />
            </motion.div>

            {/* circle */}

            <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] 
                    fill-transparent"
                    viewBox="0 0 506 506"
                    xmlns="https://www.w3.org/2000/svg"
            >
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'rgb(0,255,153)', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <motion.circle 
                cx="253"
                cy="253"
                r="250"
                stroke="url(#grad1)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 20 0 0"}}
                animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360],
                }}
                transition={{
                    duration:20,
                    repeat: Infinity,
                    repeatType: "reverse", 

                }}
            />
        </motion.svg>
        </motion.div>
    </div>;
};

export default Photo;