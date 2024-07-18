"use client";

import { Item } from "@radix-ui/react-select";
import { icons } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaGmail, FaMicrosoft,  } from "react-icons/fa";

const socials = [
    {icon: <FaMicrosoft />, path: 'https://learn.microsoft.com/en-us/users/oluwatobiabrahamisraeltemiloluwa-3447/' },
    { icon: <FaGithub />, path: 'https://github.com/Eaziwest' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/oluwatobi-abraham-israel-temiloluwa-578972258/' },
    // { icon: <FaTwitter />, path: '' },
    // { icon: <FaGoogleDrive />, path: '' },
    // { icon: <FaGmail />, path: '@israeleazi2876@gmail.com' },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <Link key={index} href={social.path} className={iconStyles}>
                    {social.icon}
                </Link>
            ))}
        </div>
    );
};

export default Socials;
