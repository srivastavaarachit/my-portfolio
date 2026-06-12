import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Undergraduate Teaching Assistant",
    company: "CSE 240 - Introduction to Programming Languages, Arizona State University",
    startDate: "May 2026",
    isCurrentJob: true,
    location: "Tempe, AZ",
    description: [
      "Deliver technical instruction in four programming paradigms — procedural (C), object-oriented (C++), functional (Scheme), and logic (Prolog) — to undergraduate students.",
      "Mentor students on C memory management (pointers, linked lists) and C++ OOP principles including inheritance, polymorphism, and STL.",
      "Debug and evaluate assignments across all four languages, enforcing algorithmic efficiency and proper program structure.",
    ],
  },
  {
    designation: "Summer Guest & Conference Housing Assistant",
    company: "Arizona State University Housing Services",
    startDate: "May 2026",
    isCurrentJob: true,
    location: "Tempe, AZ",
    description: [
      "Oversee end-to-end housing logistics for large-scale conferences and university guest programs, coordinating with conference directors to resolve operational bottlenecks.",
      "Administer access control, key distribution, and facility audits; maintain accurate housing records and deliver high-level client service.",
    ],
  },
  {
    designation: "Resident/Community Assistant",
    company: "Hassayampa Academic Village, Arizona State University",
    startDate: "Feb 2026",
    isCurrentJob: true,
    location: "Tempe, AZ",
    description: [
      "Enforce residential policies, manage front desk operations, and coordinate resources for 1000+ residents; respond to emergencies with sound professional judgment.",
      "Mediate conflicts and address policy violations, fostering an inclusive community aligned with the university's residential life mission.",
    ],
  },
  {
    designation: "Engineering Mentor",
    company: "Sun Devil Robotics Club, Arizona State University",
    startDate: "Jan 2025",
    endDate: "May 2025",
    isCurrentJob: false,
    location: "Tempe, AZ",
    description: [
      "Facilitated workshops and provided peer mentorship to student teams; coordinated project timelines and managed group dynamics to support student success.",
    ],
  },
];

export default experiences;