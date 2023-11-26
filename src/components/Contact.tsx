import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
export default function Contact() {
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const [formData, setFormData] = useState({ name: "", email: "", text: "" });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormData({ name: "", email: "", text: "" });
  
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      id="contact"
      className="w-full py-[80px] max-h-screen  h-[600px] rounded-[10px]   bg-black element-center "
    >
      <div className="   h-[350px] element-center   sm:h-[400px] w-[90%] md:w-[90%]  lg:w-[60%]  flex ">
        <div className="flex-[2] grid mx-auto grid-cols-1 md:grid-cols-2  items-center justify-center bg-[black] rounded-tr-[10px] rounded-br-[10px]">
          <div className="element-center  h-full">
            {" "}
            <h1 className="text-[17px]  element-center sm:text-[20px] text-white font-bold  md:text-[40px] mt-0">
              <TypeAnimation
                className=" text-[21px] w-full  md:text-left sm:text-3xl pb-4  text-[#ffffff]  font-extrabold"
                sequence={["Contact Me", 1000, "Write Your Feedback", 1000]}
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>

          <motion.form  className="flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              className="[outline:none] text-center border mb-2.5 p-2 rounded-[15px] border-solid   w-[200px] md:w-[280px] bg-[black] text-white text-sm mx-0 my-[5px] border-[none] focus:border-[2px]"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              className="[outline:none] text-center text-white border mb-2.5 p-2 rounded-[15px] border-solid   w-[200px] md:w-[280px] bg-[black] text-sm mx-0 my-[5px] border-[none] focus:border-[2px]"
            />

            <input
              type="text"
              placeholder="Your Message"
              name="text"
              onChange={handleChange}
              value={formData.text}
              required
              className="[outline:none]  col-span-full ring-inset py-1.5  leading-6 block  ring-1 text-white text-center h-56 border mb-2.5 p-2 rounded-[15px] border-solid   w-[200px] md:w-[280px] bg-[black] text-sm mx-0 my-[5px] border-[none] focus:border-[2px]"
            />

            <button
              type="submit"
          
              className="[outline:none]  border-white border  text-[20px] font-bold md:text-[20px]  text-black bg-[white]   w-[100px] md:w-[180px] font-[bold] cursor-pointer px-0 py-2 element-center  md:h-[45px] rounded-[15px] "
            >
              Send
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
