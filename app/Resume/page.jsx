"use client";

import { FaJs, FaReact, FaNodeJs, FaDatabase, FaUniversity, FaBriefcase } from "react-icons/fa";
import { BiShield } from "react-icons/bi";
import { FiLock, FiBarChart } from "react-icons/fi";
import { FaCertificate } from 'react-icons/fa';
import { AiOutlineAreaChart, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdInsights } from 'react-icons/md';
import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";

const about = {
    title: 'About me',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quae molestias harum ex ullam quas deleniti et soluta tenetur dicta doloremque odio quibusdam eos assumenda, delectus ad amet repellat corporis.',
    info: [
        { fieldName: "Name", fieldValue: "Israel Oluwatobi-Abraham" },
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
        { icon: <BiShield className="text-purple-500" />, name: "CyberShield", url: "https://www.cybershield.org/en/" },
        { icon: <FaJs className="text-yellow-500" />, name: "JavaScript", url: "https://www.netacad.com/courses/programming/javascript-essentials-1" },
        { icon: <FaReact className="text-blue-500" />, name: "React", url: "https://nextjs.org/" },
        { icon: <FaNodeJs className="text-green-500" />, name: "Node.js", url: "https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-nodejs" },
        { icon: <SiTailwindcss className="text-teal-500" />, name: "Tailwind CSS", url: "https://nextjs.org/" },
        { icon: <SiNextdotjs className="text-gray-800" />, name: "Next.js", url: "https://nextjs.org/" },
        { icon: <FiLock className="text-gray-500" />, name: "Cybersecurity", url: "https://www.cisco.com/site/us/en/learn/topics/security/what-is-cybersecurity.html#:~:text=Cybersecurity%20is%20the%20practice%20of,or%20interrupting%20normal%20business%20processes." },
        { icon: <FiBarChart className="text-blue-400" />, name: "Data Analysis", url: "https://www.simplilearn.com/data-analysis-methods-process-types-article" },
        { icon: <FaDatabase className="text-purple-600" />, name: "Database", url: "https://www.simplilearn.com/tutorials/dbms-tutorial/what-is-a-database" },
        { icon: <SiMysql className="text-blue-500" />, name: "MySQL", url: "https://www.hostinger.com/tutorials/what-is-mysql" }
    ]
};

const cert = {
    title: "My Certifications",
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo possimus, dolore itaque tempora nam rerum quae hic?',
    skillList: [
        {
            title: "Introduction to critical infrastructure protection",
            issuer: "OPSWAT Academy",
            date: "May 2024 - May 2025",
            credential_id: "dovJDjR5EA",
            url: "https://learn.opswatacademy.com/certificate/dovJDjR5EA" 
        },
        {
            title: "JPMorgan Chase & Co. - Software Engineering Lite Job Simulation",
            issuer: "Forage",
            date: "May 2024",
            credential_id: "BbkaoAqBYCFtcH7GA",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/Wb4yEmHvZrC2qxiyX_JPMorgan%20Chase%20&%20Co._yFWSXkZZCyi7viMnT_1715761652548_completion_certificate.pdf" 
        },
        {
            title: "Verizon - Cloud Platform Job Simulation",
            issuer: "Forage",
            date: "May 2024",
            credential_id: "pjdLW9eiQLuu8rgFo",
            description: "",
            url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Verizon%20Communications%20Inc./aNJGnRtgfiK5fQqcR_Verizon_yFWSXkZZCyi7viMnT_1715518495423_completion_certificate.pdf" 
        },
        {
            title: "OPSWAT Cybersecurity Fundamentals Associate",
            issuer: "OPSWAT Academy",
            date: "April 2024",
            credential_id: "XTaZltjQCg",
            description: "",
            url: "https://learn.opswatacademy.com/certificate/XTaZltjQCg" 
        },
        {
            title: "Macro Expert",
            issuer: "LetsDefend",
            date: "October 2023",
            //credential_id: "pjdLW9eiQLuu8rgFo",
            description: "",
            url: "https://app.letsdefend.io/my-badges/detail/27e6ccf7-edd5-4af7-90ca-e4ab93060b28" 
        },
        {
            title: "Phishing Analyzer",
            issuer: "LetsDefend",
            date: "October 2023",
            //credential_id: "pjdLW9eiQLuu8rgFo",
            description: "",
            url: "https://app.letsdefend.io/my-badges/detail/d6995335-4496-4217-b73a-077181fdccff" 
        },
        {
            title: "PowerShell Script",
            issuer: "LetsDefend",
            date: "October 2023",
            //credential_id: "pjdLW9eiQLuu8rgFo",
            description: "",
            url: "https://app.letsdefend.io/my-badges/detail/81497dd4-1132-4d97-9e57-7480c47c492c" 
        },
        {
            title: "SOC Member",
            issuer: "LetsDefend",
            date: "October 2023",
            //credential_id: "pjdLW9eiQLuu8rgFo",
            description: "",
            url: "https://app.letsdefend.io/my-badges/detail/def4ff6a-22cd-4a7a-abe4-79d2c695f2f5" 
        },
        {
            title: "Suspicious File Finder",
            issuer: "LetsDefend",
            date: "October 2023",
            //credential_id: "pjdLW9eiQLuu8rgFo",
            description: "",
            url: "https://app.letsdefend.io/my-badges/detail/af50b325-d40b-4b24-9b2b-20c385bde120" 
        },
        {
            title: "accelerated jobberman soft skills trainig",
            issuer: "Jobberman Nigeria",
            date: "October 2023",
            credential_id: "o5ijlt2kt3",
            description: "",
            url: "https://jobbermansoftskills.thinkific.com/certificates/o5ijlt2kt3" 
        },
        {
            title: "Fortinet Network Security Expert Level 1: Certified Associate",
            issuer: "Fortinet",
            date: "September 2023 - September 2025",
            credential_id: "PPhcROihpl",
            description: "",
            url: "https://training.fortinet.com/mod/customcert/verify_certificate.php?contextid=251439&code=PPhcROihpI&qrcode=1"
        },
        {
            title: "Fortinet Network Security Expert Level 2: Certified Associate",
            issuer: "Fortinet",
            date: "September 2023 - September 2025",
            credential_id: "c6NBCOUBFq",
            description: "",
            url: "https://training.fortinet.com/mod/customcert/verify_certificate.php?contextid=251440&code=c6NBCOUBFq&qrcode=1" 
        },
        {
            title: "Fortinet Network Security Expert Level 3: Certified Associate",
            issuer: "Fortinet",
            date: "September 2023 - September 2025",
            credential_id: "L7oVStyMH9",
            description: "",
            url: "https://training.fortinet.com/mod/customcert/verify_certificate.php?contextid=251441&code=L7oVStyMH9&qrcode=1" 
        },
        {
            title: "Network Monitoring Basics",
            issuer: "Udemy",
            date: "September 2023",
            credential_id: "UC-5757b548-c459-4ec0-ae46-fa52fcf9c041",
            description: "",
            url: "https://www.udemy.com/certificate/UC-5757b548-c459-4ec0-ae46-fa52fcf9c041/" 
        },
        {
            title: "PowerShell Basics",
            issuer: "Udemy",
            date: "September 2023",
            credential_id: "UC-65ccb74a-7249-4dd6-a0e9--1e9af9957c0f",
            description: "",
            url: "https://www.udemy.com/certificate/UC-65ccb7a4-7249-4dd6-a0e9-1e9af9957c0f/" 
        },
        {
            title: "Windows Command Line Basics",
            issuer: "Udemy",
            date: "September 2023",
            credential_id: "UC-b93cf77b-f7cd-4211-ac76-049a17a59ff2",
            description: "",
            url: "https://www.udemy.com/certificate/UC-b93cf77b-f7cd-4211-ac76-049a17a59ff2/" 
        },
        {
            title: "Certified Secure Computer User v2",
            issuer: "EC-Council",
            date: "August 2021",
            credential_id: "ECC0876953142",
            description: "",
            url: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=69A8qVByzvfq2eQnwPMrHYADyJlMjpUk/NF0edqz50c=" 
        }
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
                        <TabsTrigger value="cert"><FaCertificate className="inline-block mr-2" />Licenses & Certification</TabsTrigger>
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
                        <TabsContent value="cert" className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">
          {cert.title}
        </h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {cert.description}
        </p>
        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {cert.skillList.map((item, index) => (
              <li
                key={index}
                className="bg-[#232329] h-[210px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <span className="text-accent text-xl">{item.issuer}</span>
                <h3 className="text-xl max-w-[250px] min-h-[60px] text-center">{item.credential_id}</h3>
                <a
                  href={item.url}
                  className="text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{item.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
                        </TabsContent>
                        <TabsContent value="skills">
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">{skills.title}</h2>
                        <p>{skills.description}</p>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            {skills.skillList.map((skill, index) => (
                                <div key={index} className="flex items-center space-x-2 p-2 border rounded-md">
                                    {skill.icon}
                                    <a href={skill.url} className="text-accent" target="_blank" rel="noopener noreferrer">{skill.name}</a>
                                </div>
                            ))}
                        </div>
                    </section>
                </TabsContent>
                <TabsContent value="about">
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">{about.title}</h2>
                        <p>{about.description}</p>
                        <ul>
                            {about.info.map((item, index) => (
                                <li key={index} className="flex justify-between border-b py-2">
                                    <span className="font-medium">{item.fieldName}:</span>
                                    <span>{item.fieldValue}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
