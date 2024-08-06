"use client";
import React from "react";
import { PinContainer } from "./components/3d-pin";
import Image from "next/image";
import image from "../../public/assets/Business Card/Business Card 2024-02.jpg"
import { px } from "framer-motion";

const pdf = "/Ashira_Fernando_CV.pdf";

export function CV() {
    const downloadFileAtURL = (url) => {
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", "CV_Ashira_Fernando.pdf");
        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
      };
    
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
        <div className="" onClick={(event) => {
              event.preventDefault(); // Prevent any default behavior
              event.stopPropagation(); // Stop event bubbling
              downloadFileAtURL(pdf);
            }}>
      <PinContainer
        title="Download CV" className="container"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[70rem] h-[50rem] BcardContainer"             >
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br items-center" >
            <Image  src={image}  className="rounded-lg  imagecollaborate"/>
          </div>
        </div>
      </PinContainer>
      </div>
    </div>
  );
}
