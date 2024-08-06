import React from "react";
import { GradualSpacingDemo4, IntroTechnicalDevelopments } from "./components/GradualSpacingDemo4";
import "./page.css";
import { Carousel3 } from "./components/carousel/caorusel";


const page = () => {
    return (
        <div className="">
        <IntroTechnicalDevelopments />
        <Carousel3 name="technical-developments"/>

        </div>

    );
};

export default page;