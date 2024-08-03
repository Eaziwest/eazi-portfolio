"use client";

import { AnimatePresence, motion, easeInOut } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs"; // Adjust the import path if needed
import "./StairEff.css"; // Import the CSS file

const StairEff = () => {
    const pathname = usePathname();
    console.log("Current pathname:", pathname); // Debugging line

    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                        <Stairs />
                    </div>
                    <motion.div 
                        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" 
                        initial={{ opacity: 1 }} 
                        animate={{ 
                            opacity: 0, 
                            transition: { delay: 2, duration: 0.4, ease: easeInOut },
                        }}
                    />
                </div>
            </AnimatePresence>
        </>
    );
};

export default StairEff;
