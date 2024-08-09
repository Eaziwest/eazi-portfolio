"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: 'home', path: '/' },
    { name: 'Services', path: '/Services' },
    { name: 'Resume', path: '/Resume' },
    { name: 'Work', path: '/Work' },
    { name: 'Contact', path: '/Contact' },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
                className="flex justify-center items-center"
                onClick={() => setIsOpen(true)}
            >
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            O<span className="text-accent">.</span>A Israel
                        </h1>
                        <h2 className="text-4xl font-semibold">
                            Computer Engineering
                        </h2>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            onClick={handleLinkClick}
                            className={`${
                                link.path === pathname && 
                                "text-accent border-b-2 border-accent"
                            } text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
