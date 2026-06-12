"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

// Cursor is now synced with the slightly slower typing speed
const BlinkingCursor = ({ delay }: { delay: number }) => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{ 
      opacity: { delay: delay, duration: 0, ease: "linear" },
      repeat: Infinity, 
      duration: 0.8 
    }}
    className="inline-block w-[2px] h-[1em] bg-[var(--primaryColor)] ml-0.5 align-middle"
  >
    |
  </motion.span>
);

export const FlipWords = ({
  words,
  duration = 2500,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  // Updated delay calculation to match the 0.08 multiplier
  const typingDelay = currentWord.length * 0.08;

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        exit={{
          opacity: 0,
          y: -20,
          filter: "blur(8px)",
          scale: 1.2,
          position: "absolute",
        }}
        className={cn("z-10 inline-block relative text-left", className)}
        key={currentWord}
      >
        {currentWord.split("").map((letter, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              // Increased from 0.06 to 0.08 for a smoother, slower speed
              delay: index * 0.08,
              duration: 0.3,
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
        <BlinkingCursor delay={typingDelay} />
      </motion.div>
    </AnimatePresence>
  );
};