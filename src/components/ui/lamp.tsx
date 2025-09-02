"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { useMediaQuery } from "react-responsive";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        "transform-gpu",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: isMobile ? "7rem" : "15rem" }}
          whileInView={{ opacity: 1, width: isMobile ? "15rem" : "30rem" }}
          transition={{
            delay: 0.3,
            duration: isMobile ? 0.6 : 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: isMobile ? "7rem" : "15rem" }}
          whileInView={{ opacity: 1, width: isMobile ? "15rem" : "30rem" }}
          transition={{
            delay: 0.3,
            duration: isMobile ? 0.6 : 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-sm md:blur-xl"></div>
        <div className="absolute top-1/2 z-20 h-48 w-full bg-transparent opacity-10 backdrop-blur-none md:backdrop-blur-sm"></div>
        <div className="absolute inset-auto z-10 h-24 w-[18rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-40 blur-lg md:h-36 md:w-[28rem] md:opacity-50 md:blur-2xl"></div>
        <motion.div
          initial={{ width: isMobile ? "4rem" : "8rem" }}
          whileInView={{ width: isMobile ? "8rem" : "16rem" }}
          transition={{
            delay: 0.3,
            duration: isMobile ? 0.6 : 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-10 h-24 w-48 -translate-y-[4rem] rounded-full bg-cyan-400 blur-sm md:z-30 md:h-36 md:w-64 md:-translate-y-[6rem] md:blur-xl"
        ></motion.div>
        <motion.div
          initial={{ width: isMobile ? "7rem" : "15rem" }}
          whileInView={{ width: isMobile ? "15rem" : "30rem" }}
          transition={{
            delay: 0.3,
            duration: isMobile ? 0.6 : 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-20 h-0.5 w-[18rem] -translate-y-[5rem] bg-cyan-400 md:z-50 md:w-[30rem] md:-translate-y-[7rem]"
        ></motion.div>

        <div className="absolute inset-auto z-20 h-32 w-full -translate-y-[9rem] bg-slate-950 md:z-40 md:h-44 md:-translate-y-[12.5rem]"></div>
      </div>

      <div className="relative z-30 flex -translate-y-24 flex-col items-center px-5 md:z-50 md:-translate-y-40">
        {children}
      </div>
    </div>
  );
};