import Image from "next/image";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import ResumeImg from "../../../public/resumes/Resume_Of_Md_Sajidul_Islam_Web_Developer.png";
import Link from "next/link";

const ResumeDialog = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-full font-bold">RESUME</Button>
                </DialogTrigger>
                <DialogContent className="w-full max-w-3xl h-[90vh] overflow-auto">
                    <DialogHeader>
                        <DialogTitle>Resume</DialogTitle>
                    </DialogHeader>

                    <div className="mt-5 mx-auto max-h-[70vh] overflow-auto">
                        <Image
                            width={900}
                            height={1200}
                            src={ResumeImg}
                            alt="Resume Image"
                            placeholder="blur"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="grid gap-4 py-4"></div>
                    <DialogFooter>
                        <Button>
                            <a href={"/resumes/Resume_Of_Md_Sajidul_Islam_Web_Developer.png"} download>
                                Download Resume
                            </a>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ResumeDialog;
