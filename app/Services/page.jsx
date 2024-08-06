"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import { FaShieldAlt, FaCogs, FaChartBar, FaDatabase, FaReact } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <FaShieldAlt className='text-red-600 text-8xl' />, // Red color for Cyber-Security
        title: 'Cyber-Security',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dolor. Alias, qui laudantium quos veritatis cupiditate consequatur.',
        href: ""
    },
    {
        icon: <FaCogs className='text-green-600 text-8xl' />, // Green color for Devops
        title: 'DevOps',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dolor. Alias, qui laudantium quos veritatis cupiditate consequatur.',
        href: ""
    },
    {
        icon: <FaChartBar className='text-blue-600 text-8xl' />, // Blue color for Data Analytics
        title: 'Data Analytics',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dolor. Alias, qui laudantium quos veritatis cupiditate consequatur.',
        href: ""
    },
    {
        icon: <FaDatabase className='text-purple-600 text-8xl' />, // Purple color for Database Administrator
        title: 'Database Administrator',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dolor. Alias, qui laudantium quos veritatis cupiditate consequatur.',
        href: ""
    },
    {
        icon: <FaReact className='text-cyan-600 text-8xl' />, // Cyan color for React Developer
        title: 'React Developer',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dolor. Alias, qui laudantium quos veritatis cupiditate consequatur.',
        href: ""
    }
];

const Services = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
            <div className='container mx-auto'>
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeIn" } }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-[70px]'>
                    {services.map((service, index) => (
                        <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-8xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                                    {service.icon}
                                </div>
                                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                    <BsArrowDownRight className='text-primary text-5xl' />
                                </Link>
                            </div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                            <p className='text-white/60'>{service.description}</p>
                            <div className='border-b border-white/20 w-full'></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
