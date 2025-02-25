import PortfolioShowcase from "@/components/portfolioShowcaseComponents/PortfolioShowcase";
import Sidebar from "@/components/sidebarComponents/Sidebar";
import React from "react";

const MainPage = () => {
    return (
        <div className="my-8 grid grid-cols-1 lg:grid-cols-3 gap-6 px-5">
            <Sidebar />
            <section className="md:col-span-2">
                <PortfolioShowcase />
            </section>
        </div>
    );
};

export default MainPage;
