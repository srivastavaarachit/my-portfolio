import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "ev3-autonomous-robot",
    title: "EV3 Autonomous Navigation Robot",
    description: "Engineered a fully autonomous robotic vehicle fusing Ultrasonic, Gyroscope, and Color sensor data with noise-filtering algorithms, achieving navigation accuracy within ±1 cm. Implemented a PID controller that reduced course completion time by 20% versus standard on/off control logic.",
    icon: "https://api.iconify.design/mdi/robot-outline.svg?color=white&width=120&height=120", // Professional Robot Vector
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/srivastavaarachit/G4-Master-Project-F2025",
    tags: ["MATLAB", "LEGO MINDSTORMS", "PID Controller", "Robotics"],
  },
  {
    id: "4-bit-microprocessor",
    title: "4-Bit Microprocessor Architecture",
    description: "Designed a complete 4-bit microprocessor datapath (ALU, Accumulator, General-Purpose Registers) and a hardwired FSM controller managing the Fetch-Decode-Execute cycle.",
    icon: "https://api.iconify.design/ph/cpu-light.svg?color=white&width=120&height=120", // Professional Microchip Vector
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/srivastavaarachit/The-Complete-Microprocessor",
    tags: ["Verilog", "Digital Logic", "Computer Architecture", "FSM"],
  },
  {
    id: "synchronous-traffic-light",
    title: "Synchronous Traffic Light System",
    description: "Built a synchronous FSM for a 4-way traffic light using 6 D-type Flip-Flops with minimized Boolean logic; implemented a priority Pedestrian Override (All Red) mode for safety.",
    icon: "https://api.iconify.design/mdi/traffic-light-outline.svg?color=white&width=120&height=120", // Professional Traffic Light Vector
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/srivastavaarachit/Capstone-Project-Synchronous-Traffic-Light-Design-System",
    tags: ["Verilog", "FSM", "Digital Circuit Design", "Boolean Logic"],
  }
];

export default projects;