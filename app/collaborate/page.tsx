"use client"

import React from "react";
import { GradualSpacingDemo2, IntroCollaborate } from "../collaborate/components/GradualSpacingDemo2"
import "../collaborate/collaborate.css";
import { CV } from "./CV";




const Page = () => {
    return (
        <div className="">
            <IntroCollaborate />
            <div className="main">
            <CV />
            </div>

        </div>
    );
};

export default Page;