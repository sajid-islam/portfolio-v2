import ThemeSwitcher from "../ui/themeSwitcher/ThemeSwitcher";

const AboutMe = () => {
    return (
        <section className="border rounded-lg p-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">About Me</h2>
                <div className="hidden md:block">
                    <ThemeSwitcher />
                </div>
            </div>
            <div className="text-[15px] text-[#737373] dark:text-[#a3a3a3] mt-5 space-y-4 leading-relaxed">
                <p>
                    As a Frontend Developer, I focus on building{" "}
                    <span className="text-black dark:text-white">clean, functional interfaces</span>{" "}
                    that work seamlessly across all devices. I enjoy the process of turning a design
                    into a living, breathing application.
                </p>
                <p>
                    I also leverage the{" "}
                    <span className="text-black dark:text-white">MERN stack</span> (MongoDB,
                    Express, Node.js) to build end-to-end solutions. My focus is on being a
                    versatile developer who can bridge the gap between{" "}
                    <span className="text-black dark:text-white">
                        robust logic and refined interfaces
                    </span>
                    .
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
