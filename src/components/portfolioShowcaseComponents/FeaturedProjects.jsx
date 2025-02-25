import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import ViewDetailsDialog from "../sidebarComponents/ViewDetailsDialog";

const projects = [
    {
        name: "Virtual Classroom",
        description:
            "A team project that engages teachers and students in a digital platform for seamless learning.",
        tech: "React",
        technologies: [
            "React",
            "TailwindCSS",
            "DaisyUI",
            "Firebase",
            "MongoDB",
            "ExpressJS",
        ],
        features: [
            "Classroom Creation: Teachers can create and manage virtual classrooms.",
            "Private Messaging: Students and teachers can communicate securely.",
            "Assignment Management: Submit and review assignments efficiently.",
            "Progress Tracking: Monitor student performance and engagement.",
            "Google Meet Integration: Seamless video conferencing for live classes.",
        ],
    },
    {
        name: "Employee Management",
        description:
            "A web-based system for managing employees, tracking performance, and streamlining HR processes.",
        tech: "React",
        technologies: [
            "React",
            "TailwindCSS",
            "DaisyUI",
            "Firebase",
            "MongoDB",
            "ExpressJS",
        ],
        features: [
            "Employee Records Management: Store and manage employee details.",
            "Performance Evaluation: Track and review employee performance.",
            "Role-Based Access Control: Secure data access for admins and employees.",
        ],
    },
    {
        name: "Agency and Blogging Platform",
        description:
            "A modern platform for agencies to showcase services and for users to create and share blogs.",
        tech: "Next.js",
        technologies: [
            "Next.js",
            "TailwindCSS",
            "ShadcnUI",
            "Clerk",
            "MongoDB",
        ],
        features: [
            "Agency Portfolio: Showcase services with dynamic agency pages.",
            "Secure Authentication: User login and access management using Clerk.",
            "Rich Blogging System: Create, edit, and manage blog posts effortlessly.",
        ],
    },
    {
        name: "Task Management",
        description:
            "A simple to-do application to ease daily life tasks, storing tasks in LocalStorage for persistence.",
        tech: "React",
        technologies: [
            "React",
            "TailwindCSS",
            "TanStack Table",
            "LocalStorage",
            "MongoDB",
            "ExpressJS",
        ],
        features: [
            "Task Creation: Easily add and categorize tasks.",
            "Progress Tracking: Mark tasks as completed or pending.",
            "LocalStorage Support: Persist tasks without database dependency.",
            "Priority Sorting: Organize tasks based on urgency.",
        ],
    },
    {
        name: "Blogging Platform",
        description:
            "A technology-focused blogging platform for sharing knowledge and insights.",
        tech: "React",
        technologies: [
            "React",
            "TailwindCSS",
            "DaisyUI",
            "Firebase",
            "MongoDB",
            "ExpressJS",
        ],
        features: [
            "User-Friendly Blog Creation: Easily create and publish tech-related blogs.",
            "Interactive Commenting System: Engage with other users through comments on blog posts.",
            "Wishlist Management: Save favorite blogs to a wishlist for quick access.",
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
                                    <h4 className="font-semibold text-primary hover:underline">
                                        {project.name}
                                    </h4>
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
                                        <ViewDetailsDialog name={project.name}/>
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
