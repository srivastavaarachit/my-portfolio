import { INavItem } from "@/types";
import {
  faHome,
  faUser,
  faBriefcase,
  faGraduationCap,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Added the "export" keyword directly to the constant (Named Export)
export const navMenus: INavItem[] = [
  {
    name: "About",
    link: "/#about",
    icon: faHome,
  },
  {
    name: "Education",
    link: "/#services", 
    icon: faGraduationCap,
  },
  {
    name: "Experiences",
    link: "/#experiences",
    icon: faBriefcase,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: faUser, 
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: faProjectDiagram,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: faEnvelope,
  },
];

// Kept the default export as a fallback (Default Export)
export default navMenus;