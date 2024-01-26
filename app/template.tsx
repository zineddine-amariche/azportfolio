"use client";

import React from "react";
import { motion } from "framer-motion";
// hooks
import useScrollProgress from "@/Hooks/useScrollProgress";

function Template({ children }: { children: React.ReactNode }) {
  const completion = useScrollProgress();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
          type: "linear",
          delay: 0.2,
        }}
      >
        {children}
      </motion.main>
      {/* completion bar */}
      <span
        style={{ transform: `translateY(${completion - 100}% )` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      <div className="h-[2000px] "></div>
    </>
  );
}

export default Template;
