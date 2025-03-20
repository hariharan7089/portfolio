import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px]"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <motion.img
            src={icon}
            alt={title}
            className="w-20 h-20 object-contain"
            whileHover={{ scale: 1.2 }} // Only icon scales on hover
          />
          <motion.h3
            className="text-white text-[20px] font-bold text-center"
            whileHover={{ scale: 1.1 }} // Only text scales on hover
          >
            {title}
          </motion.h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled Full Stack Developer with expertise in React.js, Node.js, MongoDB, and Python, along with experience in UI/UX design, API development, and database management. I have a strong understanding of data structures and algorithms, and I’m proficient in building scalable, efficient, and user-friendly applications. I’m a quick learner who enjoys problem-solving and collaborating with teams to develop innovative solutions. Let’s work together to turn your ideas into reality!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
