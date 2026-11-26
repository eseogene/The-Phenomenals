import Wrapper from "./Wrapper";
import { motion } from "motion/react";

function Couple() {
  return (
    <div>
      <Wrapper background={"radial-back2"}>
        <h1 className="mb-7 text-[40px] font-eb text-center mt-8 text-[#c49a42] sm:mb-3 capitalize">
          The Couple
        </h1>
        <p className="font-eb text-center align-middle items-center">
          hayley
          <span className="font-mon px-2 text-xl  sm:text-2xl">
            {" "}
            &amp;{" "}
          </span>{" "}
          prof
        </p>

        <div className="flex gap-3 sm:gap-10 mt-10 justify-center items-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8}}
            className="sm:w-140 w-70 h-70 sm:h-150"
          >
            <img
              src="/img1 (1).webp"
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover border border-accent/50 rounded"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="sm:w-140 w-70 h-70  sm:h-150 border border-accent/50 rounded"
          >
            <img
              src="/img1 (11).webp"
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Couple;
