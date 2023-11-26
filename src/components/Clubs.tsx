import React, { useEffect } from "react";
import { motion } from "framer-motion";
import imgFP from "../assets/IMG_20231031_222918-removebg.png";
import imgCP from "../assets/logo.png";
import { Link } from "react-router-dom";
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

export default function Clubs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const clubs = [
    {
      image: imgFP,
      name: "Future Pioneers",
      description: "Club 1 short description",
      link: "https://futurepioneers.vercel.app/",
    },
    {
      image: imgCP,
      name: "InfoChain",
      description: "Club 2 short description",
      link: "https://infochain.site/",
    },
  ];

  return (
    <div className="min-h-screen " id="clubs">
      <h1 className="text-center pt-[100px] text-white text-3xl font-extrabold">
        I'M MEMBER IN{" "}
      </h1>
      <motion.div
        className="bg-black grid element-center mx-auto gap-10 flex-col md:flex-row p-4 my-auto"
        variants={item}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
      >
        {clubs.map((el, id) => (
          <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            key={id}
            className="element-shadow rounded-[15px]  w-[90%] h-[400px]"
          >
            <motion.img
              variants={container}
              className=" h-40 element-center mx-auto   object-contain rounded-t"
              src={el.image}
              alt={el.name}
            />
            <motion.h3
              variants={item}
              className="text-3xl text-gray-500 text-center font-bold mt-2"
            >
              {el.name}
            </motion.h3>
            <Link to={el.link} className="element-center py-12 ">
              <motion.button
                variants={item}
                className="[outline:none] border-white border element-shaDow text-[16px] font-bold md:text-[20px] element-center text-white bg-[black]   w-[100px] md:w-[180px] font-[bold] text-sm cursor-pointer px-0  element-center mx-auto py-4  md:h-[45px] rounded-[15px] "
              >
                Visit
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
