import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import FeaturedProjects from "./FeaturedProjects";

const PortfolioShowcase = () => {
    return (
        <section>
            <AboutMe />
            <FeaturedProjects />
            <Experience />
            <Education />
        </section>
    );
};

export default PortfolioShowcase;
