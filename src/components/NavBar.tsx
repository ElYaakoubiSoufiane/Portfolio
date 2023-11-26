import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import {  FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { BiGlobe } from "react-icons/bi";
import { FaMedium } from "react-icons/fa6";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { BiEdit } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";
const container = {
  hidden: { opacity: 1, x: -20, scale: 0 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { bounce: 0.4, duration: 1 },
  },
};
export default function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "contact",
    },
    {
      id: 5,
      link: "clubs",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex items-center justify-between z-10 w-full h-[47px] text-white fixed bg-black px-4">
        
        <div className=" flex  element-center text-3xl pt-3">
          <RouterLink to="https://github.com/ElYaakoubiSoufiane">
            <IoLogoGithub className="mx-[4px]  " />
          </RouterLink>
          <RouterLink to="https://www.linkedin.com/in/soufiane-el-yaakoubi-17745b225/">
            <FaLinkedinIn className="  mx-[10px]  " />
          </RouterLink>
          <RouterLink to="https://medium.com/@elyaakoubisoufian23">
            <FaMedium className="mx-[4px] " />
          </RouterLink>
        </div>
        <div className="hidden md:flex  space-x-3">
          {links.map(({ link }) => (
            <ScrollLink
              to={link}
              
              className="px-4 h-9  element-center  cursor-pointer capitalize font-bold border  text-white rounded-[15px]  hover:scale-105 duration-200"
            >
              {link}
            </ScrollLink>
          ))}
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer  z-10 text-white md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <motion.ul
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black "
          >
            {links.map(({ id, link }) => (
              <motion.li
                variants={item}
                key={id}
                className="px-4 cursor-pointer capitalize border-[0.01px] rounded-[20px] w-[230px] text-center my-3 element-shadow    py-4 text-4xl"
              >
                <ScrollLink onClick={() => setNav(!nav)} to={link}>
                  {" "}
                  {link}
                </ScrollLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>

      <div className="element-center ">
        <div className="fixed bottom-4  mx-auto w-[270px] md:w-[350px] overflow-hidden z-50 ">
          <div className="container element-center  mx-auto">
            <div className="  h-[56px] my-3  bg-white/20 rounded-full max-w-[440px]  mx-auto px-5 flex justify-between items-center backdrop-blur-2xl  text-2xl text-black">
              <ScrollLink
                activeClass="active"
                smooth={true}
                spy={true}
                to="home"
                className="cursor-pointerw-[40px]    md:w-[60px] h-[60px] flex justify-center  items-center "
              >
                <BiHomeAlt />
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                smooth={true}
                spy={true}
                to="about"
                className="cursor-pointer w-[40px]   md:w-[60px] h-[60px] flex justify-center  items-center "
              >
                <BiUser />
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                smooth={true}
                spy={true}
                to="skills"
                className="cursor-pointer w-[40px]   md:w-[60px] h-[60px] flex justify-center  items-center "
              >
                <BsClipboardData />
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                smooth={true}
                spy={true}
                to="clubs"
                className="cursor-pointer w-[40px]   md:w-[60px] h-[60px] flex justify-center  items-center "
              >
                <BiGlobe />
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                smooth={true}
                spy={true}
                to="contact"
                className="cursor-pointer w-[40px]   md:w-[60px] h-[60px] flex justify-center  items-center "
              >
                <BiEdit />
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
