"use client";
import { ArrowUp } from "lucide-react";

const Footer = () => {
    const socialLinks = [
        { title: "GITHUB", href: "https://github.com/sajid-islam" },
        { title: "LINKEDIN", href: "https://www.linkedin.com/in/sajid-islam1" },
        { title: "WHAT'S APP", href: "https://wa.me/8801307599584" },
    ];
    const handleScrollTop = () => {
        scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <footer className="mx-5 my-10 lg:my-20 p-5 md:p-10 rounded-md bg-[#f5f5f5] dark:bg-[#232323]">
            {/* Copy Right & Scroll Top */}
            <section className="flex justify-between items-center">
                <div className="text-sm">
                    <span className="text-lg">©</span> {new Date().getFullYear()}
                </div>
                <div className="flex items-center gap-4 text-sm">
                    <p>BACK TO TOP</p>
                    <button
                        onClick={handleScrollTop}
                        className="rounded-full py-2 px-1 bg-primary text-white dark:text-black"
                    >
                        <ArrowUp className="animate-bounce mt-2 size-4" />
                    </button>
                </div>
            </section>

            {/* CTA */}
            <section className="mt-10">
                <p className="font-medium text-sm md:text-base">HAVE A PROJECT IN MIND?</p>
                <p className="text-[11vw] font-semibold text-[#e6e6e6] dark:text-[#3a3a3a] leading-none -translate-x-[0.8vw]">
                    LET&apos;S TALK
                </p>
            </section>

            {/* Social links  */}
            <section className="mt-10 flex flex-col md:flex-row justify-between items-center">
                <div className="flex gap-2 md:gap-4">
                    {socialLinks.map((sl) => (
                        <a
                            key={sl.href}
                            href={sl.href}
                            target="_blank"
                            className="text-xs md:text-base border border-[#d4d4d4] dark:border-[#3a3a3a] rounded-full px-4 md:px-6 py-2"
                        >
                            {sl.title}
                        </a>
                    ))}
                </div>

                <p className="text-[#737373] flex items-center gap-2 mt-4 md:mt-0">
                    Design & Development by{" "}
                    <span className="shine-text font-semibold text-black dark:text-white">
                        Sajid
                    </span>
                </p>
            </section>
        </footer>
    );
};

export default Footer;
