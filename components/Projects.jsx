// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import outSourcingApp from "../assets2/outsource.png";
import ecommerceApp from "../assets2/ecom.png";
import bananaApp from "../assets2/banana.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-orange-500">
          Projects
        </p>
        <h2 className="py-4">
          {/* What I&apos;ve Built <br /> */}
          Recent Projects
        </h2>
        <p className="py-4">
          <a href="https://github.com/mgorem" target="_blank" rel="noreferrer">
            For more Projects on my github portfolio, <u>click here </u>
          </a>
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Taletn Outsourcing Web App"
            backgroundImg={outSourcingApp}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Full Stack Ecommerce Website"
            backgroundImg={ecommerceApp}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Agricultural Product Tracing Website"
            backgroundImg={bananaApp}
            projectUrl="/netflix"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
