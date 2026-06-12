"use client";

import { motion } from "framer-motion";

const SectionTitle = ({ children }: Readonly<{ children: string }>) => {
  const letters = children.split("");

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      exit="hidden" // FORCES the reset when it leaves the screen
      // amount: 0.2 means it triggers when 20% of the element crosses the screen edge
      viewport={{ once: false, amount: 0.2 }} 
      variants={{
        hidden: { opacity: 0 }, // Explicit reset state for the parent
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="text-center mx-auto text-3xl/6 md:text-4xl/6 font-bold flex justify-center flex-wrap"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.3 },
            },
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
      
      <motion.span
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: [0, 1, 0],
            transition: {
              delay: letters.length * 0.08,
              duration: 0.8,
              repeat: Infinity,
              ease: "linear",
            },
          },
        }}
        className="inline-block w-[3px] h-[1em] bg-[var(--primaryColor)] ml-2 align-middle"
      />
    </motion.p>
  );
};

export default SectionTitle;