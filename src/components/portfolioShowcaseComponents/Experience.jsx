import Image from "next/image";
import { CalendarDays, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
    {
        role: "Frontend Developer",
        company: "Bangloss",
        logo: "/bangloss-logo.jpeg",
        duration: "Sep 2025 - Present",
        skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Redux"],
        description:
            "Building responsive, accessible UI components; integrating REST APIs; optimizing bundle size and page performance; collaborating with designers and backend engineers.",
    },
];

const Experience = () => {
    return (
        <section className="mt-6">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Experience</h2>

            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {experiences.map((exp, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                <div className="flex flex-col md:flex-row items-start gap-4">
                                    <Image
                                        src={exp.logo}
                                        alt={exp.company}
                                        width={48}
                                        height={48}
                                        className="rounded-md border shadow-md object-cover p-1"
                                    />

                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-semibold">{exp.role}</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {exp.company}
                                                </p>
                                            </div>

                                            <p className="text-xs text-muted-foreground flex items-center mt-1 md:mt-0 whitespace-nowrap">
                                                <CalendarDays className="size-4 mr-2 hidden md:block" />
                                                {exp.duration}
                                            </p>
                                        </div>

                                        <p className="mt-3 text-sm text-muted-foreground">
                                            {exp.description}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {exp.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="inline-block text-xs px-2 py-1 rounded-full border bg-transparent text-muted-foreground"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
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

export default Experience;
