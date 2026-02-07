import "@/styles/roles.css";
const Roles = () => {
    return (
        <div className="overflow-hidden relative h-[1.4rem] leading-[1.5rem]">
            <div className="flex flex-col animate-flip">
                <span className="role">Frontend Developer</span>
                <span className="role">Next.js Developer</span>
                <span className="role">React.js Developer</span>
                <span className="role">Frontend Developer</span>
            </div>
        </div>
    );
};

export default Roles;
