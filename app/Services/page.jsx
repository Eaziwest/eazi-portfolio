"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
    {
        num: '01',
        title: 'Cyber-Security',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dolor. Alias, qui laudantium quos veritatis cupiditate consequatur.',
        href: ""
    },
    {
        num: '02',
        title: 'Devops',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dolor. Alias, qui laudantium quos veritatis cupiditate consequatur.',
        href: ""
    },
    {
        num: '03',
        title: 'Data Analytics',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dolor. Alias, qui laudantium quos veritatis cupiditate consequatur.',
        href: ""
    },
    {
        num: '04',
        title: 'Database Administrator',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dolor. Alias, qui laudantium quos veritatis cupiditate consequatur.',
        href: ""
    },
    {
        num: '05',
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
                                    {service.num}
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
