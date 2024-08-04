"use client";

import { AnimatePresence, motion, easeInOut } from "framer-motion";
import { usePathname } from "next/navigation";
import Stair from "./Initials"; // Adjust the import path if needed
import "./InitialsEff.css"; // Import the CSS file

const InitialsEff = () => {
    const pathname = usePathname();
    console.log("Current pathname:", pathname); // Debugging line

    return (
        <AnimatePresence>
            <motion.div
                key={pathname}
                className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex items-center justify-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1 } }} // Add transition for fade-out
            >
                <Stair />
            </motion.div>
            <motion.div 
                className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" 
                initial={{ opacity: 1 }} 
                animate={{ 
                    opacity: 0, 
                    transition: { delay: 2, duration: 0.4, ease: easeInOut },
                }}
            />
        </AnimatePresence>
    );
};

export default InitialsEff;
