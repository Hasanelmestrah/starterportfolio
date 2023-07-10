import React from "react";
//countUp
import CountUp from "react-countup";
//intersection observe hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="flex-1" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/*img */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
          {/*text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4">
              As a seasoned software developer, I specialize in transforming
              complex concepts into innovative solutions that drive business
              growth and surpass client expectations
            </h3>
            <p className="mb-6">
              lorem ipsum dasdas sada sda adf df dfadca asasdas fasas asfasf
              asadf adfsdvfd afsddf
            </p>
            {/* stats */}
            <div className="flex gap-y-7 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  years of <br />
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}{" "}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  years of <br />
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={7} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  years of <br />
                  experience
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg"> contact me</button>
              <a href="#" className="text-gradient btn-link">
                {" "}
                my portfolio{" "}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
