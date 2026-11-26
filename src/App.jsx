import { useState } from "react";
import { motion } from "motion/react";
import HomePage from "./components/HomePage.jsx";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      onClick={() => setOpen(true)}
    >
      {open && <HomePage setOpen={setOpen} />}

      <motion.div
        className={`fixed left-0 top-0 z-50 h-screen w-1/2 bg-[#612121] 
  bg-[#612121]
  bg-radial-[at_right]
  to-[#612121]
  via-[#612121]
  from-[#9b7a35]/30 `}
        animate={{
          x: open ? ["100%", "-100%"] : "0%",
        }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.4,
        }}
      />

      <motion.div
        className="
  fixed right-0 top-0 z-50
  h-screen w-1/2
  bg-[#612121]
  bg-radial-[at_left]
  from-[#9b7a35]/30
  via-[#612121]
  to-[#612121]
"
        animate={{
          x: open ? ["-100%", "100%"] : "0%",
        }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.4,
        }}
      />
      {!open && (
        <section className="fixed z-[60] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-full">
          <div className="flex flex-col justify-center items-center ">
            <div className="h-100 w-0.5 bg-accent/0 bg-linear-to-b from-accent/50  to-accent/0 mb-10" />
            <img src={`${import.meta.env.BASE_URL}ee.svg`} alt="" className="mb-9 border-b border-accent/50 pb-5 size-30" />
            <section className="flex flex-col justify-center items-center w-full">
              <h1 className="font-eb text-5xl tracking-wide text-[#eee5d2] sm:text-7xl flex flex-col justify-center items-center">
                Elizabeth
                <span className="font-mon px-2 text-4xl text-[#c49a42] sm:text-5xl">
                  {" "}
                  &amp;{" "}
                </span>
                Eseoghene
              </h1>
              <p className="text-xs uppercase tracking-[0.2em] text-[#c4a661] font-sans mt-2">
                THE WHITE WEDDING
              </p>
              <p className="font-serif italic text-[#d4c5a9] text-xs mt-10 ">
                you are warmly invited
              </p>
              <motion.p
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="uppercase font-sans text-md mt-10"
              >
                tap to open
              </motion.p>
            </section>
            <div className="h-100 w-0.5 bg-accent/0 bg-linear-to-t from-accent/50  to-accent/0 mt-10" />
          </div>
        </section>
      )}
    </main>
  );
}
