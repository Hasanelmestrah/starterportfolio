import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

import MyServices from "./Services";
//services data
const services = [
  {
    name: "UI/UX Design",
    description:
      "lorema doadasmdiasdasdjadakdodlmadoiasmdioasdnad aksdmasodmas oasmdoaidsmasodp omaopd.",
    link: "link is here",
  },
  {
    name: "Web Developmen",
    Description:
      "i can build to you your dream website , and you start you bussines now ",
    link: "link is here",
  },
  {
    name: "Broker",
    Description:
      "Start Tradnig now , with a partner top broker in lebano , stocks currency adnn crypto currency ",
    link: "link is here",
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text and img*/}
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6"> What I do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Dev with over 2 years of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </div>
          {/*services*/}
          <div className="flex-1">
            Description {/*services list*/}
            <div>
              {services.map((service, index) => {
                //desctruction services
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p>{description}</p>
                    </div>
                    <div>links</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
