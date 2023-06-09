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
    name: "Web Services",
    description:
      "Unlock the Full Potential of Your Business with an Unforgettable Website Experience",
    link: "Learn more",
  },
  {
    name: "Marketing",
    description:
      "Ignite Your Business's Success with Cutting-Edge Marketing Strategies that Propel Your Brand to New Heights",
    link: "Learn more",
  },
  {
    name: "Forex Account",
    description:
      "Start Tradnig now , with a partner top broker in lebano , stocks currency adnn crypto currency ",
    link: "Learn more",
  },
  {
    name: "Web Hosting",
    description:
      "you can now host your dream website , without pay high fees, trust the process and don;t give up",
    link: "Learn more",
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text and img*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6"> What I do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Dev with over 2 years of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/*services*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
            {/*services list*/}
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
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
