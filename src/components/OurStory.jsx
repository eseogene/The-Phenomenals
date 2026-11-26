import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { motion } from "motion/react";

function OurStory() {
  const [displayText, setDisplayText] = useState();

  const [displayText2, setDisplayText2] = useState();
  const [displayText3, setDisplayText3] = useState();

  const text = `
            Some stories begin with a plan. Ours began with a little nudge from
            fate. One random day in March, we found ourselves on the same
            football pitch. I almost didn't go that day. I hadn't planned to
            attend, but something pulled me at the very last minute, and
            somehow, I listened. Usually, I would have been out there as a
            striker. But that day, for reasons I couldn't have understood then,
            I chose to stand between the posts as a goalkeeper.`;

  const text2 = ` Looking back now, I think I was simply getting into position to
            catch the best ball of my life. From a distance, Elizabeth noticed
            me. She saw something calm and reassuring in me, a presence she felt
            drawn to. I noticed her too. A few moments, a few exchanged glances,
            and eventually, numbers were exchanged. And from that first hello,
            we simply never stopped talking. Our first date was, fittingly,
            spent watching a football match together. Our beloved Arsenal lost
            that day, but somehow, the defeat barely mattered. We were too
            caught up in the joy of discovering each other. That became the
            story of us. We talked. We laughed. We listened. We felt safe with
            one another. What began so casually became something peaceful,
            joyful and deeply intentional. There was friendship in our love,
            respect in our conversations, and a sense of home in each other's
            company.`;

  const text3 = ` In less than a month, we already knew there was something remarkably
            special between us. The love was undeniable, the respect was mutual,
            and the connection was simply too beautiful to ignore. One thing led
            to another. Then, on the 25th of September, a question was asked…
            and a beautiful YES was given. On the 20th of November, we stood
            before our families and were joined according to our traditional
            rites and customs, surrounded by the people and traditions that
            shaped us. And now, on the 2nd of December, we come to another
            beautiful chapter. Before God and the law, we will seal the promise
            we have made to one another and begin this journey as husband and
            wife. From one unexpected day on a football pitch to a lifetime we
            never saw coming, we are grateful for every twist, every
            conversation, every laugh, every prayer, and every moment that
            brought us here. We would be honoured to have you there as we join
            our lives and celebrate the beginning of forever.`;
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(() => {
        index++;
        return text.slice(0, index);
      });
    }, 40);

    if (index > text.length) {
      clearInterval(interval);
    }
  }, [text]);
  useEffect(() => {
    let index = 0;
    setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText2(() => {
          index++;
          return text2.slice(0, index);
        });
      }, 20);
      if (index > text2.length) {
        clearInterval(interval);
      }
    }, 9000);
  }, [text2]);

  useEffect(() => {
    let index = 0;
    setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText3(() => {
          index++;
          return text3.slice(0, index);
        });
      }, 20);
      if (index > text3.length) {
        clearInterval(interval);
      }
    }, 17000);
  }, [text3]);
  return (
    <div>
      <Wrapper background={"linear-back"}>
        <h1 className="mb-7 text-[40px] font-eb text-center mt-8 text-[#c49a42] sm:mb-3 capitalize">
          Our Story
        </h1>
          <div className="mb-12 flex items-center justify-center sm:mb-14">
          <span className="h-px w-20 bg-accent/20" />
          <span className="font-eb text-center align-middle items-center px-3 sm:px-5">
            how we met
          </span>
          <span className="h-px w-20 bg-accent/20" />
        </div>

        <div className="story-copy">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayText}
          </motion.p>

          <div className=" flex justify-center w-fit mx-10">
            <div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, delay: 2 }}
                  className="bg-white pb-15 p-3 sm:pb-25 sm:p-5 mt-10 w-55 h-70 z-30  sm:top-50 sm:left-80  top-25 left-16 -rotate-15 absolute sm:w-120 sm:h-140"
                >
                  <img
                    src="/img 2.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}
                  className="bg-white pb-15 p-3 sm:pb-25 sm:p-5 mt-3 sm:mt-5 w-55 h-70 sm:w-120 sm:h-140"
                >
                  <img
                    src="/img3.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className=" object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-43 sm:mt-76"
          >
            {displayText2}
          </motion.p>
          <div className="flex gap-3 sm:gap-10 mt-10 justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 17 }}
              className="sm:w-140 w-70 h-90 sm:h-170"
            >
              <img
                src="/img 7.webp"
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover border border-accent/50 rounded"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 17.5 }}
              className="sm:w-130 w-70 h-70  sm:h-140 border border-accent/50 rounded"
            >
              <img
                src="/img 6.webp"
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 15 }}
            className="sm:mt-10 mt-5"
          >
            {displayText3}
          </motion.p>
        </div>
      </Wrapper>
    </div>
  );
}

export default OurStory;
