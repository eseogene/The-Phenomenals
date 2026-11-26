import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import { motion } from "motion/react";

const EVENT_TIME = new Date("2026-12-02T00:00:00+01:00").getTime();

function AddCalendar() {
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(0, EVENT_TIME - Date.now()),
  );

  useEffect(() => {
    setTimeLeft(Math.max(0, EVENT_TIME - Date.now()));
    const timer = setInterval(() => {
      const difference = Math.max(0, EVENT_TIME - Date.now());
      setTimeLeft(difference);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hour = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((timeLeft / (1000 * 60)) % 60);
  const second = Math.floor((timeLeft / 1000) % 60);
  function addToGoogleCalendar() {
    const url = new URL("https://calendar.google.com/calendar/render");

    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", "My Reminder");
    url.searchParams.set("dates", "20260925T100000Z/20260925T110000Z");
    url.searchParams.set("details", "Remember to do this");

    window.open(url.toString(), "_blank");
  }

  return (
    <Wrapper background={"radial-back2"}>
      <h1 className="mb-7 text-[40px] font-eb text-center mt-8 text-[#c49a42] sm:mb-3 capitalize">
        Save the Day
      </h1>
      <p className="font-eb text-center align-middle items-center mb-8">
        {" "}
        Wednesday, 2 December · 2026
      </p>
      <section className="flex justify-center items-center">
        <div>
          <div className="flex gap-3 sm:gap-5 items-center mb-7">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, }}
              className="flex flex-col justify-center items-center"
            >
              <p className="font-mon border-2 border-[#c49a42]/50 w-17 flex justify-center items-center h-20 text-2xl sm:text-4xl rounded-lg font-bold">
                {day.toString().padStart(2, "0")}
              </p>
              <span className="text-lg sm:text-2xl mt-3 font-mon">days</span>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2}}
              className="flex flex-col justify-center items-center"
            >
              <p className="font-mon border-2 border-[#c49a42]/50 w-17 flex justify-center items-center h-20 text-2xl sm:text-4xl rounded-lg font-bold">
                {hour.toString().padStart(2, "0")}
              </p>
              <span className="text-lg sm:text-2xl mt-3 font-mon">hours</span>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-center items-center"
            >
              <p className="font-mon border-2 border-[#c49a42]/50 w-17 flex justify-center items-center h-20 text-2xl sm:text-4xl rounded-lg font-bold">
                {minute.toString().padStart(2, "0")}
              </p>
              <span className="text-lg sm:text-2xl mt-3 font-mon">minutes</span>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col justify-center items-center"
            >
              <p className="font-mon border-2 border-[#c49a42]/50 w-17 flex justify-center items-center h-20 text-2xl sm:text-4xl rounded-lg font-bold">
                {second.toString().padStart(2, "0")}
              </p>
              <span className="text-lg sm:text-2xl mt-3 font-mon">seconds</span>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center">
        <button
          onClick={addToGoogleCalendar}
          className=" bg-[#d1a13f] text-[#4c3a20] px-8 py-2 font-mon"
        >
          Add to Calendar
        </button>
      </div>
    </Wrapper>
  );
}

export default AddCalendar;
