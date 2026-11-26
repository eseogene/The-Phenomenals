import Wrapper from "./Wrapper";
import { motion } from "motion/react";

function Cotd() {
  return (
    <div className="mt-6">
      <Wrapper background={"radial-back2"}>
        <h1 className="mb-7 text-[40px] font-eb text-center mt-8 text-[#c49a42] sm:mb-3 capitalize">
          Color of the Day
        </h1>
        <div className="flex gap-8 sm:gap-20 justify-center items-center mt-5 sm:mt-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            className="flex flex-col justify-center items-center gap-5"
          >
            <div className="sm:h-30 sm:w-30 h-20 w-20 rounded-full  add-shadow2" />
            <span className=" text-lg sm:2xl font-eb text-center capitalize">
              nude
            </span>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
              delay: 0.1
            }}
            className="flex flex-col justify-center items-center gap-5"
          >
            <div className="sm:h-30 sm:w-30 h-20 w-20 rounded-full bg-bg add-shadow3" />
            <span className=" text-lg sm:2xl font-eb text-center  capitalize">
              Black
            </span>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
              delay: 0.2
            }}
            className="flex flex-col justify-center items-center gap-5"
          >
            <div className="sm:h-30 sm:w-30 h-20 w-20 rounded-full bg-bg add-shadow" />
            <span className=" text-lg sm:2xl font-eb text-center capitalize">
              Burgundy
            </span>
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Cotd;
