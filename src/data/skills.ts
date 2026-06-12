import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "C",
        level: SkillLevel.Expert,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        title: "C++",
        level: SkillLevel.Expert,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        title: "Java",
        level: SkillLevel.Expert,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        title: "x86/MIPS Assembly",
        level: SkillLevel.Intermediate,
        icon: "https://api.iconify.design/material-symbols/memory-alt-outline.svg?color=white&width=120&height=120",
      },
      {
        title: "Prolog",
        level: SkillLevel.Intermediate,
        icon: "https://api.iconify.design/carbon/branch.svg?color=white&width=120&height=120", // FIXED: Logic branching icon
      },
      {
        title: "Scheme",
        level: SkillLevel.Intermediate,
        icon: "https://api.iconify.design/file-icons/scheme.svg?color=white&width=120&height=120",
      },
      {
        title: "MATLAB",
        level: SkillLevel.Intermediate,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
      },
    ],
  },
  {
    title: "Technical Domains",
    items: [
      {
        title: "Digital Circuit Design",
        level: SkillLevel.Expert,
        icon: "https://api.iconify.design/ph/cpu-light.svg?color=white&width=120&height=120",
      },
      {
        title: "Boolean Logic",
        level: SkillLevel.Expert,
        icon: "https://api.iconify.design/tabler/logic-and.svg?color=white&width=120&height=120",
      },
      {
        title: "FSM",
        level: SkillLevel.Expert,
        icon: "https://api.iconify.design/carbon/machine-learning-model.svg?color=white&width=120&height=120",
      },
      {
        title: "PID Control",
        level: SkillLevel.Intermediate,
        icon: "https://api.iconify.design/carbon/chart-stepper.svg?color=white&width=120&height=120",
      },
      {
        title: "Embedded Systems",
        level: SkillLevel.Intermediate,
        icon: "https://api.iconify.design/material-symbols/developer-board-outline.svg?color=white&width=120&height=120", // FIXED: Hardware dev board icon
      },
      {
        title: "Algorithm Design",
        level: SkillLevel.Expert,
        icon: "https://api.iconify.design/carbon/flow-data.svg?color=white&width=120&height=120",
      },
    ],
  },
  {
    title: "Tools & Software",
    items: [
      {
        title: "Logisim",
        level: SkillLevel.Expert,
        icon: "https://api.iconify.design/ph/circuitry.svg?color=white&width=120&height=120",
      },
      {
        title: "Digital Simulation",
        level: SkillLevel.Expert,
        icon: "https://api.iconify.design/carbon/virtual-machine.svg?color=white&width=120&height=120", // FIXED: Simulation/Virtualization icon
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "https://api.iconify.design/mdi/github.svg?color=white&width=120&height=120",
      },
      {
        title: "MS Office Suite",
        level: SkillLevel.Expert,
        icon: "https://api.iconify.design/mdi/microsoft-office.svg?color=white&width=120&height=120", // FIXED: Official MS Office icon
      },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      {
        title: "Critical Thinking",
        level: SkillLevel.Expert,
        icon: "https://api.iconify.design/carbon/idea.svg?color=white&width=120&height=120",
      },
      {
        title: "Professional Communication",
        level: SkillLevel.Expert,
        icon: "https://api.iconify.design/carbon/communication-unified.svg?color=white&width=120&height=120",
      },
      {
        title: "Attention to Detail",
        level: SkillLevel.Expert,
        icon: "https://api.iconify.design/carbon/search-advanced.svg?color=white&width=120&height=120",
      },
      {
        title: "Student-Focused Mindset",
        level: SkillLevel.Expert,
        icon: "https://api.iconify.design/carbon/collaborate.svg?color=white&width=120&height=120",
      },
    ],
  },
];

export default skills;