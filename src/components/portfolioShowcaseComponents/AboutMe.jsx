import ThemeSwitcher from "../ui/themeSwitcher/ThemeSwitcher";

const AboutMe = () => {
    return (
        <section className="border rounded-lg p-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">About Me</h2>
                <div>
                    <ThemeSwitcher />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
