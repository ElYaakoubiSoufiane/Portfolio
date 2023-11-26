import React, { useEffect } from "react";
import img from "../assets/logo192.png";
import Tailwind from "../assets/Tailwind CSS.png";
import Next from "../assets/Next.js.png";
import bootstrp from "../assets/5505253-middle.png";
import Framer from "../assets/Framer.png";
import Mongoose from "../assets/Mongoose.png";
import MongoDb from "../assets/MongoDB.png";
import Expressjs from "../assets/sqdfsqdfqsdf.png";
import CCNA from "../assets/pngwing.com.png";
import CCNP from "../assets/ccnp.jpg";
import { motion } from "framer-motion";

const container = {
  hidden: { x: -20, opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};
const item = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { bounce: 1, duration: 0.5 },
  },
};

export default function ProgSkills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="skills" className=" pt-[50px]  min-h-screen ">
      <div>
        <h1 className="text-5xl text-center font-bold text-white">Skills</h1>
      </div>
      <div>
        <hr className="my-5 mx-auto  border-white w-[90%] sm:mx-auto lg:mt-3" />
      </div>
      <div className="grid grid-cols-1   px-5 gap-12 mx-auto  md:grid-cols-3">
        <motion.div
          variants={container}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
          className="h-[470px] w-full     md:w-full  bg-white text-center element-shadow hover:scale-105 rounded-[17px]  mx-auto"
        >
          <div className="  h-[450px] elment-center  mx-auto">
            <motion.div variants={item} className="pt-[20px]">
              {" "}
              <h3
                className="text-3xl bg-black element-Shadow text-[#ffffff] element-shadow text-center mx-auto  border-[1.4px] md:text-[25px]  w-[170px] md:w-[180px] rounded-[15px] py-4 border-black font-extrabold"
                // className="[outline:none] text-[16px]  text-white bg-transparent   font-bold  text-sm cursor-pointer px-0 py-2 element-center h-[36px] md:h-[45px]  "
              >
                FrontEnd
              </h3>
            </motion.div>

            <motion.div
              variants={container}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="grid grid-rows-5 justify-center    gap-10 pt-6 h-[330px]"
            >
              {" "}
              <motion.div
                variants={item}
                className="grid grid-cols-2 mx-auto w-[70%] px-auto "
              >
                <img
                  src={img}
                  alt="hhhhh"
                  className="h-[60px] object-contain"
                />
                {/* <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Dreamstale - Flaticon</a> */}
                <h3 className="text-[25px]  text-[#000000] element-center font-extrabold">
                  Reactjs
                </h3>
              </motion.div>
              <motion.div
                variants={item}
                className="grid grid-cols-2    mx-auto w-[80%] px-auto "
              >
                <img
                  src={Tailwind}
                  alt="hhhhh"
                  className="h-[60px] object-contain"
                />
                {/* <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Dreamstale - Flaticon</a> */}
                <h3 className="text-[25px]  text-[#000000] element-center font-extrabold">
                  TailwindCss
                </h3>
              </motion.div>
              <motion.div
                variants={item}
                className="grid grid-cols-2  mx-auto w-[75%] px-auto "
              >
                <img
                  src={Next}
                  alt="hhhhh"
                  className="h-[60px] object-contain"
                />
                {/* <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Dreamstale - Flaticon</a> */}
                <h3 className="text-[25px]  text-[#000000] element-center font-extrabold">
                  Nextjs
                </h3>
              </motion.div>
              <motion.div
                variants={item}
                className="grid grid-cols-2  mx-auto w-[70%] px-auto "
              >
                <img
                  src={bootstrp}
                  alt="hhhhh"
                  className="h-[60px] object-contain"
                />
                {/* <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Dreamstale - Flaticon</a> */}
                <h3 className="text-[25px]  text-[#000000] element-center font-extrabold">
                  Bootstrap
                </h3>
              </motion.div>
              <motion.div
                variants={item}
                className="grid grid-cols-2 mx-auto w-[90%] px-auto "
              >
                <img
                  src={Framer}
                  alt="hhhhh"
                  className="h-[80px] object-contain"
                />
                {/* <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Dreamstale - Flaticon</a> */}
                <h3 className="text-[25px]  text-[#000000] element-center font-extrabold">
                  FramerMotion
                </h3>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={container}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
          className="h-[470px] w-full     md:w-full  bg-white text-center element-shadow hover:scale-105 rounded-[17px]  mx-auto"
        >
          <div className="  h-[450px] elment-center  mx-auto">
            <motion.div variants={item} className="pt-[20px]">
              <h3 className="text-3xl bg-black element-Shadow text-[#ffffff] element-shadow text-center mx-auto  border-[1.4px] md:text-[25px]  w-[170px] md:w-[180px] rounded-[15px] py-4 border-black font-extrabold">
                Backend
              </h3>
              <motion.div
                variants={container}
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
                className="grid grid-rows-3 p-10 justify-center gap-20  h-[330px]"
              >
                {" "}
                <motion.div
                  variants={item}
                  className="grid grid-cols-2 mx-auto element-center space-x-8 w-[280px] px-6 "
                >
                  <img
                    src={Mongoose}
                    alt="hhhhh"
                    className="h-[60px] bg-white  object-contain"
                  />
                  <h3 className="text-[25px]  text-[#000000] element-center font-extrabold">
                    Mongoose
                  </h3>
                </motion.div>
                <motion.div
                  variants={item}
                  className="grid grid-cols-2 mx-auto element-center space-x-8 w-[280px] px-6 "
                >
                  <img
                    src={MongoDb}
                    alt="hhhhh"
                    className="h-[60px] bg-white object-contain"
                  />
                  <h3 className="text-[25px]  text-[#000000] element-center font-extrabold">
                    MongoDb
                  </h3>
                </motion.div>
                <motion.div
                  variants={item}
                  className="grid grid-cols-2 mx-auto element-center space-x-8 w-[290px] px-6 "
                >
                  <img
                    src={Expressjs}
                    alt="hhhhh"
                    className="h-[60px] object-contain"
                  />
                  <h3 className="text-[25px]  text-[#000000] element-center font-extrabold">
                    Expressjs
                  </h3>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={container}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
          className=" h-[470px] w-[99%]  mx-auto    md:w-full  bg-white text-center element-shadow hover:scale-105 rounded-[17px]  element-center"
        >
          <div className=" h-[450px] ">
            <motion.div variants={item}>
              <h3 className="text-3xl bg-black element-Shadow text-[#ffffff] element-shadow text-center mx-auto  border-[1.4px] md:text-[25px]  w-[210px] md:w-[180px] rounded-[15px] py-4 border-black font-extrabold">
                Networking
              </h3>
            </motion.div>

            <motion.div
              variants={container}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="grid grid-rows- py-3 gap-[20px] h-[330px]"
            >
              {" "}
              <motion.div
                variants={item}
                className="grid grid-cols-2 mx-auto  element-center space-x-8 w-[300px]  "
              >
                <img
                  src={CCNA}
                  alt="hhhhh"
                  className="h-[60px] bg-white  object-contain"
                />
                <h3 className="text-[22px]  text-[#000000] element-center font-extrabold">
                  CCNA_200-301
                </h3>
              </motion.div>
              <motion.div
                variants={item}
                className="grid grid-cols-2 mx-auto  element-center space-x-8 w-[300px]  "
              >
                <img
                  src={CCNP}
                  alt="hhhhh"
                  className="h-[60px] bg-white object-contain"
                />
                <h3 className="text-[22px]  text-[#000000] element-center font-extrabold ">
                  CCNP_350-401
                </h3>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
