import Image from "next/image";
import avatar from "../../../public/me.png";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeSwitcher from "./../ui/themeSwitcher/ThemeSwitcher";
import ContactDialog from "./ContactDialog";
import ResumeDialog from "./ResumeDialog";
import Roles from "./Roles";

const socials = [
    {
        name: "Github",
        link: "https://github.com/sajid-islam",
        icon: <FaGithub className="size-4" />,
    },
    {
        name: "LinkedIn",
        link: "https://linkedin.com/in/sajid-islam1",
        icon: <FaLinkedin className="size-4" />,
    },
];

const ProfileSection = () => {
    return (
        <section className="border dark:border-[#262626] rounded-lg p-6 space-y-5">
            <div className="flex justify-between ">
                <div className="flex md:block items-center gap-4 md:w-full">
                    <div className="flex justify-center ">
                        <Image
                            width={150}
                            height={150}
                            quality={100}
                            src={avatar}
                            alt="Profile Picture"
                            className="rounded-full size-12 md:w-full h-auto object-cover border-2"
                        />
                    </div>
                    <div className="mt-0 md:mt-6">
                        <h2 className="text-xl md:text-2xl font-bold">Md Sajidul Islam</h2>
                        <div className="text-[#737373] dark:text-[#a3a3a3] text-sm md:text-base flex gap-2 items-center box-content ">
                            I'm a <Roles />
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <ThemeSwitcher />
                </div>
            </div>
            <div>
                <p className="text-[#737373] dark:text-[#a3a3a3] text-sm">
                    Building fast, interactive, and beautiful frontend experiences with React and
                    Next.js
                </p>
            </div>
            <div className="flex md:flex-col xl:flex-row gap-2">
                <ResumeDialog />
                <ContactDialog />
            </div>
            <div className="border-t" />
            <div className="mt-4 flex flex-col space-y-2 border-border w-full">
                {socials.map((social, idx) => {
                    const parts = social.link.split("/");
                    const username = parts[parts.length - 1];

                    return (
                        <Link
                            key={idx}
                            href={social.link}
                            target="_blank"
                            className="cursor-pointer flex items-center gap-2 group"
                        >
                            {social.icon}
                            <span className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                                /{username}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default ProfileSection;
