import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Certified Ethical Hacker | Cybersecurity Specialist | Software Developer`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and enjoy to do Penetration Testing`;

export const EXPERIENCES = [
  {
    year: "12/04/2023 - 14/06/2023",
    role: "Trainer & Website Penetration Tester (VAPT) ",
    company: "Cyber Crime Helpline LLP | India ",
    description: `Assisted as a trainer to educating students on Bug Bounty Hunting techniques and best practices Conducted comprehensive security assessments of web applications to identify vulnerabilities such as SQL injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF). Utilized various tools like Burpsuite, Zap and methodologies, including OWASP standards, to uncover security flaws and provided detailed reports with remediation strategies.Developed an Android application designed to locate users' positions using IP addresses.`,
    technologies: ["Python", "Web Application Penetration", "Android Studio", "Burpsuite"],
  },
];

export const PROJECTS = [
  {
    title: "IP Location Tracer",
    image: project1,
    description:
      "Developed an Android application named IP Location Tracer using Flutter and Android Studio",
    technologies: ["Android Studio", "Networking", "Python"],
  },
  {
    title: "E-Learning Platform",
    image: project2,
    description:
      "An website for students to learn different courses, provided different features like dashboard, live class web-cam. We have also integrated AI chat bot in our website which will help students to solve their questions",
    technologies: ["HTML", "CSS", "JavaScript", "Node", "MongoDB", "Postman", "Cloudnary"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },

];

export const CONTACT = {
  address: "Pune | India ",
  phoneNo: "+917517959342 ",
  email: "rohandatar2003@gmail.com",
};
