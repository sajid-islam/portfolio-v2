import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

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
                        <DialogTitle>Resume</DialogTitle>
                    </DialogHeader>
                    <ResumeViewer />
                    <DialogFooter>
                        <Button>
                            <a
                                href={"/resumes/Resume_Of_Md_Sajidul_Islam.pdf"}
                                download
                            >
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
