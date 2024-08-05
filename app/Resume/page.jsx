"use client";

import { FaJs, FaReact, FaNodeJs, FaDatabase, FaUniversity, FaBriefcase } from "react-icons/fa";
import { BiShield } from "react-icons/bi";
import { FiLock, FiBarChart } from "react-icons/fi";
import { RiSecurePaymentLine } from 'react-icons/ri';
import { AiOutlineAreaChart, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdInsights } from 'react-icons/md';
import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";

const about = {
    title: 'About me',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quae molestias harum ex ullam quas deleniti et soluta tenetur dicta doloremque odio quibusdam eos assumenda, delectus ad amet repellat corporis.',
    info: [
        { fieldName: "Name", fieldValue: "Israel OLUWATOBI-ABRAHAM" },
        { fieldName: "Phone", fieldValue: (
            <>
                <a href="tel:+2349158576069" className="text-accent"> (+234) 915-857-6069</a>
            </>
        )},
        { fieldName: "Email", fieldValue: <a href="mailto:israeleazi2876@gmail.com" className="text-accent">israeleazi2876@gmail.com</a> },
        { fieldName: "Experience", fieldValue: "2 Years" },
        { fieldName: "Language", fieldValue: "English and Yoruba" },
        { fieldName: "Nationality", fieldValue: "Nigerian" },
        { fieldName: "Freelance", fieldValue: "Available" }
    ]
};


const experience = {
    title: 'My Experience',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo possimus, dolore itaque tempora nam rerum quae hic?',
    items: [
        { company: "Redeemer's University, Ede", position: "Computer Engineering Student", duration: "2020 - Present" },
        { company: "EaziCode (Personal)", position: "Microsoft Power Platform, DevOps, Azure storage services", duration: "2022 - Present" },
        { company: "First City Monument Bank (FCMB)", position: "Cyber-Security Intern", duration: "Aug. 2023 - Oct. 2023" },
        { company: "First City Monument Bank (FCMB)", position: "Information & Technology Division Intern", duration: "Apr. 2024 - Present" }
    ]
};

const education = {
    title: 'My Education',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo possimus, dolore itaque tempora nam rerum quae hic?',
    items: [
        { institution: "Redeemer's University", degree: "Computer Engineering Student", duration: "2020 - Present" },
        { institution: "Microsoft (Personal)", degree: "Power Platform, Azure, Azure AI, GitHub, DevOps, Azure storage services", duration: "2022 - Present" },
        { institution: "OPSWAT Academy", degree: "Introduction to Critical Infrastructure Protection, Cybersecurity Fundamentals Associate", duration: "2024" },
        { institution: "Forage", degree: "Software Engineering Lite Job Simulation & Cloud Platform Job Simulation", duration: "2024" },
        { institution: "Fortinet", degree: "Fortinet Network Security Expert Level 1-3", duration: "2020 - 2025" },
        { institution: "LetsDefend", degree: "PowerShell Script, Phishing Analyzer, Macro Expert, Suspicious File Finder, SOC Member", duration: "2023" },
        { institution: "Udemy", degree: "Network Monitoring Basics, PowerShell Basics, Windows Command Line Basics", duration: "2023" },
        { institution: "EC-Council", degree: "Certified Secure Computer User v2", duration: "2021" }
    ]
};

const skills = {
    title: "My Skills",
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo possimus, dolore itaque tempora nam rerum quae hic?',
    skillList: [
        { icon: <BiShield className="text-purple-500" />, name: "Bi Shield" },
        { icon: <FaJs className="text-yellow-500" />, name: "JavaScript" },
        { icon: <FaReact className="text-blue-500" />, name: "React" },
        { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
        { icon: <SiTailwindcss className="text-teal-500" />, name: "Tailwind CSS" },
        { icon: <SiNextdotjs className="text-gray-800" />, name: "Next.js" },
        { icon: <FiLock className="text-gray-500" />, name: "Cybersecurity" },
        { icon: <FiBarChart className="text-blue-400" />, name: "Data Analysis" },
        { icon: <AiOutlineAreaChart className="text-orange-500" />, name: "Area Chart" },
        { icon: <MdInsights className="text-indigo-500" />, name: "Insights" },
        { icon: <FaDatabase className="text-purple-600" />, name: "Database" },
        { icon: <SiMysql className="text-blue-500" />, name: "MySQL" }
    ]
};

import { Tabs, TabsContent, TabsTrigger, TabsList } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { delay: 2.5, duration: 0.4, ease: 'easeIn' } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[388px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience"><FaBriefcase className="inline-block mr-2" />Experience</TabsTrigger>
                        <TabsTrigger value="education"><FaUniversity className="inline-block mr-2" />Education</TabsTrigger>
                        <TabsTrigger value="skills"><FaJs className="inline-block mr-2" />Skills</TabsTrigger>
                        <TabsTrigger value="about"><AiOutlineInfoCircle className="inline-block mr-2" />About Me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[185px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent text-xl">{item.company}</span>
                                                <h3 className="text-xl max-w-[250px] min-h-[60px] text-center">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.duration}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[210px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent text-xl">{item.institution}</span>
                                                <h3 className="text-xl max-w-[250px] min-h-[60px] text-center">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.duration}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {skills.skillList.map((skills, index)=> {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[160px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                                        <div className="text-6xl transition-all duration-300">
                                                            {skills.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{skills.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                            </li>;
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul>
                                    {about.info.map((item, index)=> {
                                        return (
                                            <li key={index} className="flex justify-between py-2">
                                                <span className="font-semibold">{item.fieldName}:</span>
                                                <span>{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
