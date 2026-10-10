import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RxEnvelopeClosed } from "react-icons/rx";

export const SKILL_DATA = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "MongoDB",
  "SQL",
  "MS Excel",
  "MS PowerPoint",
  "MS Word",
  "Communication",
  "Teamwork",
  "Event Management",
  "Problem Solving",
].map((skill_name) => ({ skill_name, image: null }));
export const FRONTEND_SKILL = [] as const;
export const BACKEND_SKILL = [] as const;
export const FULLSTACK_SKILL = [] as const;
export const OTHER_SKILL = [] as const;

export const SOCIALS = [
  { name: "GitHub", icon: FaGithub, link: "https://github.com/Vivina03" },
  { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/joeline-vivina-1896122a" },
  { name: "Email", icon: RxEnvelopeClosed, link: "mailto:vivinastephen@gmail.com" },
] as const;

export const PROJECTS = [
  { title: "Internflow", description: "A responsive intern-management application for registration, task assignment, project tracking, and skill monitoring. Built to streamline workflows with an intuitive interface and validated APIs.", image: "/projects/project-1.png", link: "https://github.com/Vivina03" },
  { title: "Deepfake Audio Detection using Hybrid Model", description: "A hybrid deep-learning model combining CNN, LSTM, and Transformer architectures to identify deepfake speech. Achieved 98% accuracy while staying robust against noise, pitch variation, and audio compression.", image: "/projects/project-2.png", link: "https://github.com/Vivina03" },
] as const;

export const FOOTER_DATA = [
  { title: "Connect", data: [
    { name: "GitHub", icon: FaGithub, link: "https://github.com/Vivina03" },
    { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/joeline-vivina-1896122a" },
    { name: "Email", icon: RxEnvelopeClosed, link: "mailto:vivinastephen@gmail.com" },
  ] },
  { title: "Profile", data: [
    { name: "English & Tamil", icon: null, link: "#about-me" },
    { name: "Full Stack Intern", icon: null, link: "#projects" },
    { name: "B.E. CSE, 2023-2027", icon: null, link: "#about-me" },
  ] },
  { title: "Education", data: [
    { name: "Joeline Vivina Gnanam S", icon: null, link: "#about-me" },
    { name: "St. Joseph's College of Engineering", icon: null, link: "#about-me" },
    { name: "Contact Me", icon: null, link: "mailto:vivinastephen@gmail.com" },
  ] },
] as const;

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
] as const;

export const LINKS = { sourceCode: "https://github.com/Vivina03" };
