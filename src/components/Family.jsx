import Wrapper from "./Wrapper";
import { motion } from "motion/react";

function Family() {
  return (
    <div className="">
      <Wrapper>
        <h1 className="mb-7 text-[40px] font-eb text-center mt-8 text-[#c49a42] sm:mb-10 capitalize">
          The Families
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center ">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ duration: 0.5, delay: 0.5 }}
            className="mt-7 font-eb text-lg tracking-wide text-[#eee5d2] sm:mt-9 sm:text-2xl text-center w-fit"
          >
            the family of <br /> late Mr. benedict Imoebe Bossey
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-2 text-[12px] italic tracking-wide text-[#d4c5a9] sm:mt-4 normal-case"
            >
              Esako East, Agenebode,
              <br /> Edo state
            </motion.p>
          </motion.div>
          <span className="font-mon px-2 text-4xl text-[#c49a42] sm:text-5xl">
            {" "}
            &amp;{" "}
          </span>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ duration: 0.5, delay: 0.5 }}
            className="mt-7 font-eb text-lg tracking-wide text-[#eee5d2] sm:mt-9 sm:text-2xl text-center w-fit"
          >
            the family of <br /> Mr. Gabriel Eruvwahwe
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-2 text-[12px] italic tracking-wide text-[#d4c5a9] sm:mt-4 normal-case"
            >
              Ethiope East, Okpara Inland,
              <br /> Delta state
            </motion.p>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-15 text-[12px] sm:text-[18px] text-center font-sanss italic tracking-[0.35px] text-[#d4c5a9]  normal-case"
        >
          cordially invite you to the Wedding ceremony of their children
        </motion.p>
        <div className="flex flex-col items-center mt-10">
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{duration: 0.9, delay: 0.2}}
            className="font-eb text-5xl leading-[0.95] sm:text-7xl"
          >
            Elizabeth
          </motion.span>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-mon text-5xl leading-none text-[#c49a42] sm:text-6xl"
          >
            and
          </motion.span>

          <motion.span 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{duration: 0.9, delay: 0.5}}
          
          className="font-eb text-5xl leading-[0.95] sm:text-7xl">
            Eseoghene
          </motion.span>
        </div>
      </Wrapper>
    </div>
  );
}

export default Family;
