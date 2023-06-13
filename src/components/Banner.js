import React from "react";
//images
import Image from "../assets/avatar.svg";
//icons
import { FaGithub, FaYoutube, FaDribble, FaTwitter } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              {" "}
              Hasan <span>EL-Mestrah</span>
            </h1>
            <div className="mb-6 text-[36px] ig:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              {" "}
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Dreamer",
                  2000,
                  "Investor",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              {" "}
              I'm driven by a passion for technology and the financial markets,
              and I'm constantly seeking new challenges and opportunities
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto">
              <button className="btn btn-lg">Contact Me</button>
              <a
                href="#"
                className="
              text-gradient btn-link">
                My Portfolio
              </a>
            </div>
            {/* socials */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
          {/* image */}
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
