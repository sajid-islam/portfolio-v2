import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { BiDetail } from "react-icons/bi";

const ViewDetailsDialog = ({name}) => {
    return (
        <div>
            <Dialog>
                <DialogTrigger >
                    <div className="flex items-center gap-2 text-sm text-primary hover:underline cursor-pointer">
                        View Details
                        <BiDetail className="inline-block size-4" />
                    </div>{" "}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Project Details {name}</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when
                            you're done.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ViewDetailsDialog;
