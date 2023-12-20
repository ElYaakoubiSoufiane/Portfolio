import React, { useEffect } from "react";
import img from "../assets/IMG_20230729_191035.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Item } from "./Variants";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        id="home"
        className=" min-h-screen element-center py-300px bg-black "
      >
        <div className="max-w-screen-lg mx-auto  element-center flex-col gap-[30px] min-w-full h-full px-3 md:flex-row ">
          <motion.div
            variants={Item("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" pt-[60px] md:pl-9 element-center"
          >
            <img
              src={img}
              className=" course-style rounded-full  "
              alt="hero pic"
            />
          </motion.div>
          <div className=" flex flex-col justify-center w-full">
            <motion.div
              variants={Item("up", -0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="flex-row  "
            >
              <div className="flex flex-row space-x-3">
                <h2 className="text-white text-[26px]  text-left sm:text-5xl  font-bold ">
                  {" "}
                  I AM A
                </h2>
              </div>

              <TypeAnimation
                className=" text-[20px] w-full  md:text-left sm:text-3xl pb-4  text-[#e63946]  font-extrabold"
                sequence={[
                  "MERN Stack Developer",
                  1000,
                  "Network Associate",
                  1000,
                  "Embedded System Engineering student",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={Item("up", -0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-gray-400 text-center md:w-[600px] md:text-left md:pb-[60px]"
            >
              As a MERN Stack Developer, I am passionate about crafting dynamic
              and efficient web applications. With a solid foundation in
              front-end and back-end technologies,...
            </motion.p>
            <Link
              to="about"
              className="pt-6 element-center md:justify-start md:items-left "
            >
              <ScrollLink
                to="about"
                className="text-white  font-bold  px-6 border-[1px] border-white py-3 my-2 flex element-shadow w-auto rounded-[17px] bg-black   "
              >
                Know More About Me
                <span className="hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="  ml-1" />
                </span>
              </ScrollLink>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
