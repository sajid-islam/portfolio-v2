import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
    {
        label: "Email",
        value: "sajidislam941@gmail.com",
        href: "mailto:sajidislam941@gmail.com",
        icon: <Mail className="size-4 text-blue-500" />,
    },
    {
        label: "Phone",
        value: "+880 1307-599584",
        href: "tel:+8801307599584",
        icon: <Phone className="size-4 text-green-500" />,
    },
    {
        label: "WhatsApp",
        value: "+880 1307-599584",
        href: "https://wa.me/8801307599584",
        icon: <FaWhatsapp className="size-4 text-green-600" />,
    },
    {
        label: "Location",
        value: "Khulna, Bangladesh",
        href: null,
        icon: <MapPin className="size-4 text-red-500" />,
    },
];

const ContactDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full font-bold">CONTACT ME</Button>
            </DialogTrigger>

            <DialogContent className="w-full max-w-lg rounded-2xl border border-border/40 shadow-xl backdrop-blur-md">
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold tracking-tight">
                        Get in Touch
                    </DialogTitle>
                </DialogHeader>

                <div className="mt-4 grid gap-3">
                    {contactInfo.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/30 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <span>{item.icon}</span>
                                <span className="font-medium text-sm">
                                    {item.label}
                                </span>
                            </div>
                            {item.href ? (
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {item.value}
                                </a>
                            ) : (
                                <span className="text-sm text-muted-foreground">
                                    {item.value}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ContactDialog;
