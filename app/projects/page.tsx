import React from "react";
import { GradualSpacingDemo1, IntroProjects } from "./components/GradualSpacing";
import '../projects/projects.css'
import ProjectSection from "./components/projectSection";

const page = () => {
    return (
        <div className="">
           <IntroProjects />
            <div className="projectMain">
            <ProjectSection />
            </div>
            
            
        </div>
    );
};

export default page;