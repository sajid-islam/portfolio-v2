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
            <div className="text-[15px] text-[#737373] dark:text-[#a3a3a3] mt-5 space-y-3">
                <p>
                    Frontend Developer passionate about building fast,
                    user-friendly websites that make an impact.
                </p>
                <p>
                    Let’s create a site that looks great and works even better.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
