import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

import { TECHNOLOGIES } from "@/data/technologis";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { BiDetail } from "react-icons/bi";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

const ViewDetailsDialog = ({ name, screenshots, technologies, features, link, repoLinks }) => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <div className="flex items-center gap-2 text-sm text-primary hover:underline cursor-pointer">
                        View Details
                        <BiDetail className="inline-block size-4" />
                    </div>{" "}
                </DialogTrigger>
                <DialogContent className="w-full max-w-3xl h-[90vh] overflow-auto custom-scrollbar">
                    <DialogHeader>
                        <DialogTitle>Project Details</DialogTitle>
                    </DialogHeader>
                    <div className="mx-auto max-h-[72vh] overflow-auto space-y-6 custom-scrollbar">
                        <div>
                            {screenshots.map((screenshot, i) => (
                                <div key={i} className="border-2 rounded-lg">
                                    <Image
                                        src={screenshot}
                                        className="rounded-lg"
                                        alt={"screenshot of" + name}
                                        width={700}
                                        height={200}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h5 className="font-semibold">Technologies ⎯</h5>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {technologies.map((tech, i) => {
                                    const techData = TECHNOLOGIES[tech];
                                    const TechIcon = techData?.icon;

                                    return (
                                        <span
                                            key={i}
                                            style={{
                                                backgroundColor: techData?.color,
                                                color: techData?.text,
                                            }}
                                            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                                        >
                                            {TechIcon && <TechIcon className="size-4" />}
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <h5 className="font-semibold">Features ⎯</h5>
                            <ul className="mt-3 list-disc space-y-3">
                                {features.map((f, i) => (
                                    <li key={i} className="flex gap-1 text-sm">
                                        •
                                        <p>
                                            <strong>{f.split(":")[0]}:</strong>
                                            {f.split(":")[1]}{" "}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <DialogFooter className="">
                        {repoLinks.map((repoLink, i) => (
                            <div key={i} className="flex gap-2">
                                <Link
                                    href={repoLink.clientSide}
                                    target="_blank"
                                    className="w-full md:w-auto"
                                >
                                    <Button className="w-full md:w-auto">
                                        <FaGithub />
                                        {!repoLink.serverSide ? "Project Repo" : "Frontend Repo"}
                                    </Button>
                                </Link>
                                {repoLink.serverSide && (
                                    <Link
                                        href={repoLink.serverSide}
                                        target="_blank"
                                        className="w-full md:w-auto"
                                    >
                                        <Button className="w-full md:w-auto">
                                            {" "}
                                            <FaGithub />
                                            Backend Repo
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        ))}
                        {link && (
                            <Link href={link} target="_blank" className="mb-2 lg:mb-0">
                                <Button className="w-full">
                                    View Project <ExternalLink />{" "}
                                </Button>
                            </Link>
                        )}
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ViewDetailsDialog;
