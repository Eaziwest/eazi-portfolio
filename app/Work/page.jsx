"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { FaShieldAlt, FaCode, FaServer, FaDatabase, FaChartLine, FaTools, FaMicrochip } from "react-icons/fa";

const projects = [
    {
        icon: <FaShieldAlt className='text-red-600 text-8xl' />,
        category: 'Cyber-Security',
        title: 'Cyber-Security',
        description: "Experienced cybersecurity professional skilled in protecting systems and data from cyber threats. Proficient in implementing and managing security measures to safeguard network infrastructure, applications, and sensitive information. Expertise in conducting vulnerability assessments, penetration testing, and security audits to identify and mitigate risks. Adept at responding to and recovering from security incidents, ensuring compliance with industry standards and regulations. Familiar with various security tools and technologies, including firewalls, intrusion detection systems, and encryption protocols. Committed to staying current with emerging threats and evolving security practices to maintain robust defense mechanisms.",
        stack: [
            { name: "Security Operation Center" }, 
            { name: "Network Security" }, 
            { name: "Infrastructure Security" }, 
            { name: "Application Security" }, 
            { name: "Governance & Risk Compliance (GRC)" }
        ],
        image: "",
        live: "", 
        github: "" 
    },
    {
        icon: <FaCode className='text-blue-600 text-8xl' />,
        category: 'Fullstack',
        title: 'Web Developer',
        description: "Versatile developer with expertise in both frontend and backend technologies, capable of building complete web applications from scratch. Proficient in designing user interfaces with modern frameworks such as React or Angular, and skilled in creating robust server-side solutions using Node.js or similar technologies. Experienced in managing databases, integrating APIs, and ensuring seamless communication between frontend and backend components. Adept at using tools and practices for version control, deployment, and performance optimization. Committed to delivering high-quality, scalable solutions that meet user needs and business objectives.",
        stack: [
            { name: "Next.js" }, 
            { name: "Tailwind.css" }, 
            { name: "Node.js" },
            { name: "React" }
        ],
        image: "",
        live: "", 
        github: "" 
    },
    {
        icon: <FaServer className='text-green-600 text-8xl' />,
        category: 'Cyber-Security',
        title: 'Server-Side Development',
        description: "Experience in designing, deploying, and maintaining server-side applications and infrastructure. Skilled in managing web servers, databases, and backend services to ensure optimal performance, security, and scalability. Proficient in server-side frameworks and tools, including Express.js for building APIs, Docker for containerization, and cloud platforms like AWS for scalable infrastructure. Adept at troubleshooting and optimizing server environments to support reliable and efficient application delivery.",
        stack: [
            { name: "Azure" },
            { name: "AWS" }
        ],
        image: "",
        live: "", 
        github: "" 
    },
    {
        icon: <FaDatabase className='text-blue-600 text-8xl' />,
        category: 'Data Analysis',
        title: 'Data Administrator',
        description: "Expertise in managing and optimizing data systems, including database management and data analytics.",
        stack: [
            { name: "MySql" },
            { name: "PostgreSQL" }, 
            { name: "Data Warehousing" } 
        ],
        image: "",
        live: "", 
        github: "" 
    },
    {
        icon: <FaTools className='text-orange-600 text-8xl' />,
        category: 'BackEnd',
        title: 'Application Support',
        description: "Expert in providing technical support and maintenance for applications. Skilled in troubleshooting issues, managing incidents, and ensuring the smooth operation of software systems. Proficient in database management, performance monitoring, and using support tools to track and resolve problems efficiently. Experienced with ticketing systems and logging tools to handle support requests and analyze application errors.",
        stack: [
            { name: "MySql" }, 
            { name: "Notepad++" },
            { name: "Server" },  
            { name: "CyberArk" }
        ],
        image: "",
        live: "", 
        github: "" 
    },
    {
        icon: <FaChartLine className='text-blue-600 text-8xl' />,
        category: 'Data Analysis',
        title: 'Data Analysis',
        description: "Skilled data analyst with expertise in interpreting and analyzing complex data sets to drive informed business decisions. Proficient in utilizing statistical tools and software to extract insights, identify trends, and generate actionable reports. Experienced in data cleaning, data visualization, and reporting using tools like Excel, SQL, and various BI platforms. Adept at presenting data findings clearly and effectively to stakeholders, ensuring data-driven strategies and solutions. Committed to continuous learning and staying updated with the latest data analysis methodologies and technologies.",
        stack: [
            { name: "Excel" }, 
            { name: "SQL" }, 
            { name: "Power BI" },
            { name: "SharePoint" }
        ],
        image: "",
        live: "", 
        github: "" 
    },
    {
        icon: <FaMicrochip className='text-blue-600 text-8xl' />,
        category: 'Automation',
        title: 'Arduino Automation',
        description: "Experienced in designing and implementing automation solutions using Arduino technology. Proficient in developing custom scripts and software to automate processes and enhance system efficiency. Skilled in integrating various sensors and components with Arduino boards, utilizing languages such as C++ and platforms like Platform.io. Demonstrated expertise in troubleshooting, optimizing code, and ensuring seamless communication between hardware and software components. Committed to continuous learning and staying updated with the latest advancements in Arduino and IoT technologies.",
        stack: [
            { name: "Arduino board" },
            { name: "C++ || Platform.io" },
            { name: "Connecting Cables" },
            { name: "ESP32 Board" }
        ],
        image: "",
        live: "",
        github: ""
    }
];

const Work = () => {
    const [ project, setProject ] = useState(projects[0]);
    return ( <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
            <div>
                <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div>
                        <div>{project.icon}</div>
                    </div>
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} projects</h2>
                    <p className="text-white/60">{project.description}</p>
                    <ul className="flex gap-4">
                        {project.stack.map((item, index)=> {
                            return <li key={index} className="text-xl text-accent">
                                {item.name},
                                {/* remove the last coma */}
                                {index !== project.stack.length - 1 && ","}
                            </li>
                        })}
                    </ul>
                    <div className="border border-white/20"></div>
                    <div>
                        <link>
                            <Tooltip>
                                
                            </Tooltip>
                        </link>
                    </div>
                </div>
                <div className="w-full xl:w-[50%]">slider</div>
            </div>
        </div>
    </motion.section>
    );
};

export default Work;
