import { cn } from "@/lib/utils";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import ViewDetailsDialog from "./ViewDetailsDialog";

const projects = [
    {
        name: "Daily Tailm",
        description:
            "A knowledge-sharing platform designed to help busy individuals learn Islamic teachings by offering a daily hadith and other educational resources.",
        tech: "Next.js",
        technologies: ["NextJs", "Tailwind Css", "ShadcnUI"],
        features: [
            "Daily Hadith Display: Randomly presents a new hadith every day, encouraging users to increase their Islamic knowledge in small, consistent steps.",
            "Subject-wise Hadith Collection: Allows users to browse hadiths by specific topics for deeper, focused learning.",
            "Multiple Reading Themes: Offers 3 different themes to enhance the reading experience based on user preference.",
            "Prayer Times: Displays prayer times dynamically based on the user's location for convenience and accuracy.",
            "Hadith Actions: Enables users to easily copy, share, and download hadiths for personal use or to share with others.",
        ],
        screenshots: ["/projectsImg/daily-talim.png"],
        link: "https://dailytalim.com/",
        repoLinks: [
            {
                clientSide: "https://github.com/mehedijaman/dailytalim-frontend",
                serverSide: "https://github.com/dailytalim/dailytalim-backend",
            },
        ],
    },
    {
        name: "Diploma360",
        description:
            "A role-based event management and student engagement platform built to unify diploma students, organizers, and administrators in one digital ecosystem.",
        tech: "Next.js",
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "Shadcn UI",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT Authentication",
            "Firebase Auth",
        ],
        features: [
            "Role-Based Dashboard: Separate dashboards and permissions for students, organizers, and super admins to ensure secure and personalized access.",
            "Event Management System: Organizers can create, update, and manage events, registrations, and participant data efficiently.",
            "Student Event Timeline: Students can view upcoming and past events in a timeline format, including join status and event details.",
            "QR Code Ticketing: Automatic ticket generation with QR codes for event entry and secure on-site validation.",
            "Online Event Access: Smart join button for online events that activates only at the scheduled event date and time.",
            "Admin User Control: Super admins can view all users, manage roles, and monitor platform activity from a centralized panel.",
            "Reviews & Feedback: Participants can submit event reviews, helping improve future events and transparency.",
        ],
        screenshots: ["/projectsImg/diploma-360-home-page-screenshot.png"],
        link: "https://diploma360.vercel.app",
        repoLinks: [
            {
                clientSide: "https://github.com/sajid-islam/diploma360-client",
                serverSide: "https://github.com/sajid-islam/diploma360-server",
            },
        ],
    },
    {
        name: "Virtual Classroom",
        description:
            "A team project that engages teachers and students in a digital platform for seamless learning.",
        tech: "React",
        technologies: ["React", "TailwindCSS", "DaisyUI", "Firebase", "MongoDB", "ExpressJS"],
        features: [
            "Classroom Creation: Teachers can create and manage virtual classrooms.",
            "Private Messaging: Students and teachers can communicate securely.",
            "Assignment Management: Submit and review assignments efficiently.",
            "Progress Tracking: Monitor student performance and engagement.",
            "Google Meet Integration: Seamless video conferencing for live classes.",
        ],
        screenshots: ["/projectsImg/virtual-classroom.png"],
        link: "https://class-net.vercel.app",
        repoLinks: [
            {
                clientSide: "https://github.com/sajid-islam/Virtual-Classroom-Client",
                serverSide: "https://github.com/sajid-islam/Virtual-Classroom-Server",
            },
        ],
    },
];

const techColors = {
    React: "bg-blue-500",
    "Next.js": "bg-gray-900",
    Flutter: "bg-cyan-500",
    TypeScript: "bg-blue-600",
    JavaScript: "bg-yellow-500",
};

const FeaturedProjects = () => {
    return (
        <section className="mt-6">
            <div>
                <h3 className="text-xl font-bold">Featured Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {projects.map((project, i) => (
                        <Card key={i}>
                            <CardContent className="pt-6 h-full">
                                <div className="flex flex-col h-full">
                                    <Link
                                        href={project.link ? project.link : "#"}
                                        target={project.link && "_blank"}
                                    >
                                        <h4 className="font-semibold text-primary hover:underline">
                                            {project.name}
                                        </h4>
                                    </Link>
                                    <p className="text-sm text-muted-foreground mt-1 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className={cn(
                                                    "size-4 rounded-full",
                                                    techColors[project.tech]
                                                )}
                                            />
                                            <span className="text-xs font-medium text-muted-foreground">
                                                {project.tech}
                                            </span>
                                        </div>
                                        <ViewDetailsDialog
                                            name={project.name}
                                            screenshots={project.screenshots}
                                            technologies={project.technologies}
                                            features={project.features}
                                            link={project.link}
                                            repoLinks={project.repoLinks}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
