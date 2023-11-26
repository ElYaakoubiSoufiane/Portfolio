import { useState } from "react";


import { IoLogoGithub } from "react-icons/io";

import { FaMedium } from "react-icons/fa6";

import { Link as RouterLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import img from "../assets/IMG_20230621_114359.jpg";

function Footer() {
  const [as, setas] = useState(["About", "Campaign", "Courses"]);
 
  return (
    <footer className="bg-black w-full z-9 bottom-0 h-[50px] md:h-[50px] lg:h-[40px]">
      <div className="mx-auto w-full px-3 max-w-screen-xl  ">
        <hr className="my-2 border-gray-200 mx-auto w-[90%] sm:mx-auto lg:my-2" />
        <div className="sm:flex flex place-content-between sm:items-center  sm:justify-between">
          <div className="element-center mb-1 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={img} className="h-9 my-auto  rounded-full" alt="Pic" />
            </a>
          </div>
          <span className="text-[11px] my-auto  text-center flex mx-[6px]  sm:text-center text-white">
            ©2023 Created By El Yaakoubi Soufiane
          </span>
          <div className=" flex  element-center text-white my-auto  text-[19px] ">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
