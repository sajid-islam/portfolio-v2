import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
    {
        degree: "Diploma in Engineering, Computer Science & Technology ",
        institution: "City Polytechnic Institute Khulna",
        logo: "/city-polytechnic-institute-logo.png",
        duration: "2021 - 2025",
        description:
            "Focused on software engineering, web development, and data structures. Actively involved in programming contests and student tech communities.",
    },
];

const Education = () => {
    return (
        <section className="mt-6">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
                Education
            </h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {education.map((e, i) => (
                            <li
                                key={i}
                                className="border-b last:border-b-0 pb-8 last:pb-0"
                            >
                                {/* Education Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={e.logo}
                                        alt={e.institution}
                                        width={40}
                                        height={40}
                                        className="rounded-md border shadow-md object-cover p-1"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {e.degree}
                                        </h3>
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm text-muted-foreground">
                                                {e.institution}
                                            </p>
                                            <p className="text-xs text-muted-foreground flex items-center">
                                                <CalendarDays className="size-3 mr-2" />
                                                {e.duration}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </section>
    );
};

export default Education;
