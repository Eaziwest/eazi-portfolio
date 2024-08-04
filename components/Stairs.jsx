// src/Stairs.jsx
import { motion } from "framer-motion";
import React from "react";

const stairAnimation = {
  initial: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: [0, -30, 15, -15, 0], // Bounce effect
    opacity: [1, 1, 1, 1, 0], // Fade out effect
  },
  exit: {
    opacity: 0,
  },
};

const Stairs = () => {
  const initials = ["E", "A", "Z", "I"]; // Initials to display

  return (
    <div className="initials-container">
      {initials.map((char, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: index * 0.3, // Stagger the animation
          }}
          style={{
            fontSize: "3rem", // Adjust font size as needed
            fontWeight: "bold", // Adjust font weight as needed
            color: "white",
            margin: "0 10px",
          }}
        >
          {char}
        </motion.div>
      ))}
      <style>
        {`
          body {
            margin: 0;
            background-color: #282c34;
          }
          .initials-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Stairs;
