"use client";

import { useState } from "react";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/constrained-box";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import SectionTitle from "@/components/common/SectionTitle";
import SocialButton from "./ui/SocialButton";
import socialLinks from "@/data/socialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("rachitsrivastava2005@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="relative w-full h-full flex flex-row bg-[var(--textColor10)] p-4 rounded-[var(--borderRadius)] items-center text-center justify-center gap-2 cursor-pointer overflow-hidden z-[1] transition duration-500 ease-in-out before:content-[''] before:w-full before:h-full before:m-auto before:absolute before:top-0 before:left-[-100%] before:bg-[var(--primaryColor50)] before:z-[-1] before:transition-all before:duration-500 before:ease hover:before:top-0 hover:before:left-0 hover:before:border-0 hover:before:translate-x-0"
      aria-label="Copy Email to Clipboard"
    >
      <span className={`text-xl/6 transition-colors duration-300 ${copied ? "text-[#00ff88]" : "text-[var(--textColor)]"}`}>
        <FontAwesomeIcon icon={copied ? faCheck : faEnvelope} />
      </span>

      {copied && (
        <span className="absolute bottom-2 text-[10px] uppercase tracking-widest font-bold text-[var(--textColor)] animate-pulse">
          Copied!
        </span>
      )}
    </button>
  );
};

const HomeSection6 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] min-h-screen items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15] items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Get in Touch</SectionTitle>

        <Column classNames="mt-16 w-full">
          <GridBox classNames="sm:grid-cols-2 w-full mx-auto gap-4">
            
            {socialLinks.map((link, index) => {
              return (
                <SocialButton
                  key={`social-link-${index}`}
                  text={link.text}
                  icon={link.icon}
                  url={link.url}
                />
              );
            })}

            <CopyEmailButton />

          </GridBox>

          <p className="text-center mx-auto mt-16 text-2xl/6 font-semibold">
            I&apos;m{" "}
            <span className="text-[var(--primaryColor)]">available</span> for
            internships & full-time roles.
          </p>
        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;