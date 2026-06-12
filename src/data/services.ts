import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Arizona State University",
    icons: [
      "/images/asu.png", // Your ASU logo path
    ],
    shortDescription: "B.S. in Computer Science (Cybersecurity) • Minor in Business",
    description: "GPA: 3.95/4.0 | Tempe, AZ | Aug 2024 - Dec 2028\n\nRelevant Coursework:\nData Structures & Algorithms, Digital Circuit Design, Object-Oriented Programming.",
  },
  {
    id: 2,
    title: "Delhi Public School, Greater Noida",
    icons: [
      "/images/dps.png", // Your DPS logo path
    ],
    shortDescription: "Core Curriculum: Physics, Chemistry, Mathematics, Computer Science",
    description: "CGPA: 8.10/10 | Greater Noida, India\n\nCompleted core foundational studies in Physics, Chemistry, Advanced mathematics, and introductory computer science principles.",
  },
];

export default services;