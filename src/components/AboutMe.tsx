import React, { useEffect } from "react";

import { motion } from "framer-motion";

const textAnimate = {
  offscreen: { opacity: 0, y: -30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 1.2 },
  },
};
const imageAnimate = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1.2 },
  },
};
export default function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      className="element-center my-16 flex-col h-screen mx-auto element-center "
      id="about"
    >
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ staggerChildren: 0.5 }}
        variants={textAnimate}
        className="flex-col element-shadow   w-[97%] md:w-[70%] md:h-[80%]  mx-auto h-auto rounded-[17px]     "
      >
        {" "}
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ staggerChildren: 0.5 }}
          variants={imageAnimate}
          className="top-2  text-center flex"
        >
          {" "}
          <h1 className="text-6xl flex font-signature text-gray-500 text-center mx-auto  my-10">
            About Me
          </h1>
        </motion.div>
        <div className="flex ">
          <div className="flex-1  my-auto bf-top max-h-screen  ">
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ staggerChildren: 0.5 }}
              variants={textAnimate}
              className="w-[90%]  mx-auto "
            >
              <p className=" text-[25px] text-center text-white opacity-100 font-bold ">
                Hello,I'm El Yaakoubi Soufiane,a student at the National School
                of Applied Sciences Fez. I'm a junior MERN stack developer and a
                network associate, passionate about crafting innovative
                solutions in web development. Beyond the tech world, you'll find
                me immersed in sports, embracing an active lifestyle. I also
                find joy in reading the Quran and delving deeper into my
                religious studies, seeking continuous growth and understanding.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
