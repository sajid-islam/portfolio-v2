import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

import { Download } from "lucide-react";
import ResumeViewer from "../ResumeViewer/ResumeViewer";

const ResumeDialog = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-full font-bold">RESUME</Button>
                </DialogTrigger>
                <DialogContent className="w-full max-w-3xl h-[90vh] overflow-auto">
                    <DialogHeader>
                        <DialogTitle>
                            {" "}
                            <Button asChild>
                                <a
                                    href={
                                        "/resumes/Resume_of_Md_Sajidul_Islam_Frontend_Developer.pdf"
                                    }
                                    download
                                >
                                    Download Resume <Download className="animate-bounce" />
                                </a>
                            </Button>
                        </DialogTitle>
                    </DialogHeader>
                    <ResumeViewer />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ResumeDialog;
