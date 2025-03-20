import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"], // Moves from 0% to -100%
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15, // Adjust for smoothness
        ease: "linear",
      },
    },
  },
};

const FeedbackCard = ({ testimonial, name, designation, company, image }) => {
  return (
    <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full shrink-0">
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} at {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[20px] overflow-hidden">
      <div className={` rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className="-mt-20 pb-14 flex w-full overflow-hidden">
        <motion.div
          className="flex gap-7 min-w-full"
          variants={marqueeVariants}
          animate="animate"
        >
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <FeedbackCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
