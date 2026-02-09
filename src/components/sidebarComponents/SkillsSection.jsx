import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
    SiExpress,
    SiFigma,
    SiFirebase,
    SiJira,
    SiMongodb,
    SiMongoose,
    SiNextdotjs,
    SiPostman,
    SiRedux,
    SiShadcnui,
    SiTailwindcss,
    SiTrello,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import SkillGroup from "./SkillGroup";

const skills = {
    frontend: [
        { name: "JavaScript", icon: <IoLogoJavascript size={15} /> },
        { name: "TypeScript", icon: <SiTypescript size={15} /> },
        { name: "React", icon: <FaReact size={15} /> },
        { name: "Next.js", icon: <SiNextdotjs size={15} /> },
        { name: "Redux", icon: <SiRedux size={15} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={15} /> },
        { name: "shadcn/ui", icon: <SiShadcnui size={15} /> },
    ],

    backend: [
        { name: "Node.js", icon: <FaNodeJs size={15} /> },
        { name: "Express.js", icon: <SiExpress size={15} /> },
        { name: "MongoDB", icon: <SiMongodb size={15} /> },
        { name: "Mongoose", icon: <SiMongoose size={15} /> },
        { name: "Firebase Auth", icon: <SiFirebase size={15} /> },
    ],

    tools: [
        { name: "GitHub", icon: <FaGithub size={15} /> },
        { name: "Vercel", icon: <SiVercel size={15} /> },
        { name: "Postman", icon: <SiPostman size={15} /> },
        { name: "Figma", icon: <SiFigma size={15} /> },
        { name: "Jira", icon: <SiJira size={15} /> },
        { name: "Trello", icon: <SiTrello size={15} /> },
    ],
};
const SkillsSection = () => {
    return (
        <section className="border p-6 rounded-lg mt-5">
            <h2 className="text-2xl font-bold">Skills</h2>

            <SkillGroup title="Frontend" items={skills.frontend} />
            <SkillGroup title="Backend" items={skills.backend} />
            <SkillGroup title="Tools & Technologies" items={skills.tools} />
        </section>
    );
};

export default SkillsSection;
