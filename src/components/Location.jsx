import Wrapper from "./Wrapper";
import { motion } from "motion/react";

function Location({ background }) {
  return (
    <div>
      <Wrapper background={"radial-back2"}>
        <h1 className="mb-7 text-[40px] font-eb text-center mt-8 text-[#c49a42] sm:mb-3 capitalize">
          The Ceremony
        </h1>
        <p className="font-eb text-center align-middle items-center">
          venue{" "}
          <span className="font-mon px-2 text-xl  sm:text-2xl"> &amp; </span>{" "}
          direction
        </p>
        <h1 className="mt-7 font-eb text-lg tracking-wide text-[#eee5d2] sm:mt-9 sm:text-2xl text-center ">
          Kingdom Hall of Jehovah's Witnesses GRA, PTI road opposite Rainoil
          filling station, Warri, Delta State
        </h1>
        <div className="flex flex-col sm:gap-3 sm:flex-row sm:mt-10 items-center justify-center">
          <div>
            <div className="mt-8 mr-3 mb-10 sm:mr-8">
              <h1 className="py-8 border-accent/50 border-y font-heading sm:text-lg flex gap-14 sm:gap-7">
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="font-eb text-accent mr-9 ml-2"
                >
                  Date
                </motion.span>{" "}
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Wednesday, 2 december 2026
                </motion.span>
              </h1>
              <h1 className="py-8 border-accent/50 border-y font-heading sm:text-lg flex gap-14 sm:gap-7">
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-eb text-accent mr-9 ml-2"
                >
                  time
                </motion.span>{" "}
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  11:00 AM{" "}
                </motion.span>
              </h1>
              <h1 className="py-8 border-accent/50 border-y font-heading sm:text-lg flex gap-14 sm:gap-7">
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="font-eb text-accent  ml-2"
                >
                  zoom id
                </motion.span>{" "}
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  7222771254{" "}
                </motion.span>
              </h1>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: 0.1,
            }}
            className="p-3 border-accent/25 border rounded-xl mx-auto sm:w-fit w-full flex justify-center items-center"
          >
            <div className="p-3 border-accent/50 border w-fit rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.024490870237!2d5.78900197557832!3d5.563387819207066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad863f2c430b%3A0x952a4c45f6804279!2sKingdom%20Hall%20of%20Jehovah's%20witnesses%2C%20PTI%20road!5e0!3m2!1sen!2sng!4v1794352765943!5m2!1sen!2sng"
                width="600"
                height="450"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Location map"
                className="w-75 sm:w-[400px] sm:h-[300px] h-[300px]"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Location;
