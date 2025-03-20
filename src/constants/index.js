import {
  backend,
  carrent,
  creator,
  css,
  figma,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  web,
  h1,
} from "../assets";
import kotlin from "../assets/tech/kotlin.svg";
import postman from "../assets/tech/postman.png";
import sorting from "../assets/sorting.png";
import social from "../assets/social.png";
import resume from "../assets/resume.png";
import parcare from "../assets/parcare.png";
import education from "../assets/education.png";
import work from "../assets/work.png";
import mysql from "../assets/tech/mysql.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
  {
    title: "Python Full Stack Developer",
    icon: h1,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "kotlin",
    icon: kotlin,
  },

  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Achariya College of Engineering Technology",
    icon: education,
    iconBg: "#E6DEDD",
    date: "September 2021 – May 2025",
    points: [
      "Graduating with a CGPA of 8.45, demonstrating strong academic performance in software development and engineering principles.",
      "Completed coursework in Data Structures, Algorithms, Database Management, and Software Engineering.",
      "Developed multiple real-world projects, including a No-Code/Low-Code Web Application Builder and an Inventory Management System.",
      "Won first place three times in college project competitions, showcasing innovation and technical expertise.",
      "Actively participated in hackathons and coding competitions, enhancing problem-solving and teamwork skills."
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company_name: "SkillMate Community",
    icon: work,
    iconBg: "#E6DEDD",
    date: "April 2024 - May 2024",
    points: [
      "Developed SkillMate using React.js, Tailwind CSS, and Firebase to create a seamless freelancer-client platform.",
      "Implemented Firebase Authentication for secure user login and registration, ensuring data privacy and access control.",
      "Designed a fully responsive UI with Tailwind CSS, optimizing user experience across mobile, tablet, and desktop devices.",
      "Integrated Firebase Firestore for real-time database updates, enabling instant communication between freelancers and clients.",
      "Managed state efficiently using React hooks and Context API, improving application performance and scalability.",
      "Optimized Firebase queries to enhance data retrieval speed, improving platform responsiveness by 40%."
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "GzofTech Solution",
    icon: work,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Feb 2025",
    points: [
      "Developed a highly interactive UI for Gzoft using React.js, Tailwind CSS, GSAP, and Framer Motion to enhance user engagement.",
      "Implemented smooth animations and transitions with GSAP and Framer Motion, improving visual aesthetics and responsiveness.",
      "Optimized application performance by reducing render times and improving state management using React hooks.",
      "Worked closely with the backend team to integrate APIs efficiently, ensuring real-time data updates and seamless functionality.",
      "Enhanced website loading speed by 35% by optimizing assets, lazy loading components, and reducing unnecessary re-renders."
    ],
  },
  {
    title: "Front-End Developer Intern",
    company_name: "Vault Of Code",
    icon: work,
    iconBg: "#E6DEDD",
    date: "Oct 2023 – Nov 2024",
    points: [
      "Worked on real-world projects using HTML, CSS, and JavaScript, gaining hands-on experience in front-end development.",
      "Developed responsive and user-friendly web interfaces, improving UI/UX accessibility across different devices.",
      "Collaborated with a team of developers to optimize website structure and improve loading speeds.",
      "Refactored existing codebase to follow best practices, reducing technical debt and improving maintainability.",
      "Performed cross-browser testing to ensure consistent performance and layout across various web browsers.",
      "Implemented accessibility enhancements, making web applications more inclusive for users with disabilities."
    ],
  }
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Back End Developer",
    description:
      "A web application designed to optimize stock management by tracking products, managing orders, and providing real-time inventory updates.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "/project/shopify.png",
    source_code_link: "https://inventory.haridev.tech/",
  },
  {
    name: "Back End Developer",
    description:
      "A voice-based announcement system where admins can send messages that are displayed in the application and read aloud using a Text-to-Speech (TTS) system, ensuring important updates reach all users clearly",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Text-to-Speech (TTS) API",
        color: "green-text-gradient",
      },
      {
        name: " MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
    ],
    image:"/project/easebot.png" ,
    source_code_link:
      "https://easebot.haridev.tech",
  },
  {
    name: "Full Stack Developer",
    description:
      "A 3D interactive application that provides a virtual model of the college, allowing students—especially new joiners—to explore and navigate different rooms and locations within the campus",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "blender",
        color: "pink-text-gradient",
      },
    ],
    image: "/project/easebot2.png",
    source_code_link:
      "https://easebot.haridev.tech",
  },
  {
    name: "PARCARE",
    description:
      "Positive and engaging user experience design. The main goal of app is ease parking and save user's time by collaborating with private parking areas.",
    tags: [
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "inkscape",
        color: "green-text-gradient",
      },
      {
        name: "coolers",
        color: "pink-text-gradient",
      },
    ],
    image: parcare,
    source_code_link: "https://www.behance.net/gallery/207227903/PARCARE",
  },
];

export { experiences, projects, services, technologies, testimonials };
