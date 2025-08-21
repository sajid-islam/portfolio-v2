import { FaHtml5 } from "react-icons/fa";
import { FaCss3, FaGit, FaGithub, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiRedux } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 size={15} />,
    },
    {
        name: "CSS",
        icon: <FaCss3 size={15} />,
    },
    {
        name: "React",
        icon: <FaReact size={15} />,
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss size={15} />,
    },
    {
        name: "Javascript",
        icon: <IoLogoJavascript size={15} />,
    },
    {
        name: "Node.js",
        icon: <FaNodeJs size={15} />,
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs size={15} />,
    },
    {
        name: "Exprees.js",
        icon: <SiExpress size={15} />,
    },
    {
        name: "MongoDB",
        icon: <SiMongodb size={15} />,
    },
    {
        name: "Git",
        icon: <FaGithub size={15} />,
    },
    {
        name: "FirebaseAuth",
        icon: <SiFirebase size={15} />,
    },
    {
        name: "Redux",
        icon: <SiRedux size={15} />,
    },
];
const SkillsSection = () => {
    return (
        <section className="border p-6 rounded-lg mt-5">
            <h2 className="text-2xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1.5 mt-6">
                {skills.map((skill, idx) => (
                    <p
                        key={idx}
                        className="text-[12px] font-semibold flex items-center gap-1 bg-[#f5f5f5] dark:bg-[#262626] rounded-full px-[10px] py-1"
                    >
                        {skill.icon}
                        <span>{skill.name}</span>
                    </p>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
