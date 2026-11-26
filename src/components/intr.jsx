
import { motion } from "motion/react";

function Intr({ setOpen }) {
  return (
    <main className="relative min-h-[100dvh] w-full overflow-hidden bg-[#1b2118] text-[#ECE2D8]">
      <img
        src="/cover.webp"
        alt="A couple embracing"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover sm:object-[0_-150px] opacity-70"
      />
      <div className="absolute inset-[15px] border border-[#a9853d]/75 sm:inset-[20px] z-50" />
      <div className="absolute inset-0 radial-back" />
      <div className="absolute inset-[21px] border border-[#a9853d]/25 sm:inset-[26px]" />
      <div className="absolute left-1/2 top-1/2 flex w-[calc(100%-56px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center sm:w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-7 text-[9px] uppercase tracking-[0.35em] text-[#c49a42] sm:mb-10"
        >
          Together with their families
        </motion.p>

        <div className="flex flex-col items-center">
          <span className="font-eb text-6xl leading-[0.95] sm:text-8xl">
            Elizabeth
          </span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-mon text-5xl leading-none text-[#c49a42] sm:text-6xl"
          >
            and
          </motion.span>

          <span className="font-eb text-6xl leading-[0.95] sm:text-8xl">
            Eseoghene
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-7 text-[10px] italic tracking-wide text-[#d4c5a9] sm:mt-8"
        >
          invites you to their Wedding Ceremony
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-7 font-eb text-lg tracking-wide text-[#eee5d2] sm:mt-9 sm:text-2xl"
        >
          Wednesday, the second of December · 2026
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-3 text-[10px] italic text-[#d4c5a9]"
        >
          Warri, Delta State
        </motion.p>
      </div>
      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center text-[8px] uppercase tracking-[0.35em] text-[#c49a42] sm:bottom-10">
        <span>Scroll</span>
       
        <motion.span
          animate={{ y: 10 }}
          initial={{ y: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mt-2 text-base leading-none"
        >
          ↓
        </motion.span>
      </div>
    </main>
  );
}

export default Intr;
