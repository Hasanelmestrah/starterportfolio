import React from "react";
//images
import Image from "../assets/avatar.svg";
//icons
import { FaGithub, FaYoutube, FaDribble } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto ">
        <div>
          {/*text */}
          <div>
            <h1>
              Hasan <span>El-Mestrah</span>
            </h1>
            <div className="mb-6 text-[36px] ig:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am</span>
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
              <p>
                I'm driven by a passion for technology and the financial
                markets, and I'm constantly seeking new challenges and
                opportunities to innovate and excel in my work as a
                programmer-trader
              </p>
            </div>
          </div>
          {/*image */}
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
