import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { BiDetail } from "react-icons/bi";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const ViewDetailsDialog = ({
    name,
    screenshots,
    technologies,
    features,
    link,
    repoLinks,
}) => {
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
                    <div className="mx-auto max-h-[72vh] overflow-auto space-y-4 custom-scrollbar">
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
                            <h5 className="font-semibold">Technologies:</h5>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {technologies.map((t, i) => (
                                    <p
                                        key={i}
                                        className="text-sm bg-[#f5f5f5] dark:bg-[#262626] rounded-full px-[10px] py-1"
                                    >
                                        {t}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h5 className="font-semibold">Features:</h5>
                            <ul className="mt-2 list-disc">
                                {features.map((f, i) => (
                                    <li key={i} className="flex gap-1">
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
                                        {!repoLink.serverSide
                                            ? "Project Repo"
                                            : "Frontend Repo"}
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
                            <Link
                                href={link}
                                target="_blank"
                                className="mb-2 lg:mb-0"
                            >
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
