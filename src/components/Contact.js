import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="felx flex-col lg:flex-row">
          {/* text */}
          <div className="flex-1">
            <div>
              <h4 className="text-x1 uppercase text-accent font-medium mb-2 trakcking-wide">
                Get in Touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's Work <br />
                Together!
              </h2>
            </div>
          </div>
          {/* form */}
          <form className="flex-1">form</form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
