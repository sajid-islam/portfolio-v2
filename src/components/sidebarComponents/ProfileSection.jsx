import Image from "next/image";
import avatar from "../../../public/me.jpg";
import { Button } from "../ui/button";

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { DialogTrigger } from "../ui/dialog";
import ResumeDialog from "./ResumeDialog";

const socials = [
    {
        name: "Github",
        link: "https://github.com/sajid-islam",
        icon: <FaGithub className="size-4" />,
    },
    {
        name: "LinkedIn",
        link: "https://linkedin.com/in/sajidislam1",
        icon: <FaLinkedin className="size-4" />,
    },
    {
        name: "X (Twitter)",
        link: "https://x.com/sajid_islam",
        icon: <FaXTwitter className="size-4" />,
    },
];

const ProfileSection = () => {
    return (
        <section className="border rounded-lg p-6 space-y-5">
            <div className="rounded-full flex justify-center">
                <Image
                    className="rounded-full"
                    src={avatar}
                    alt="Avatar"
                    placeholder="blur"
                    width={250}
                />
            </div>
            <div>
                <h2 className="text-2xl font-bold">Md Sajidul Islam</h2>
                <p className="text-[#737373] text-[16px]">Web Developer</p>
            </div>
            <div>
                <p className="text-[#737373] text-sm">
                    I’m a passionate web developer focused on building scalable
                    and user-friendly applications.
                </p>
            </div>
            <div className="flex gap-2">
                <ResumeDialog />
                <Button className="w-full font-bold">CONTACT ME</Button>
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
