import { useState } from "react";
import Wrapper from "./Wrapper";
import { motion } from "motion/react";

const details = [
  { para: "Bank Name", name: "OPAY" },
  { para: "Account Name", name: "ELIZABETH AGUOSIMA IMOEBE" },
  { para: "Account Number", name: "8137556504" },
];

function Support({ ref }) {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyDetail(label, value) {
    try {
      await navigator.clipboard.writeText(value);
      setCopyStatus(`${label} copied`);
    } catch {
      setCopyStatus(`Could not copy ${label.toLowerCase()}`);
    }
    window.setTimeout(() => setCopyStatus(""), 1800);
  }

  return (
    <section ref={ref}>
      <section className="order-section">
        <svg
          className="wave top-wave"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,80 C360,0 720,150 1440,60 L1440,150 L0,150 Z" />
        </svg>

        <Wrapper>
          <div className="order-content">
            <h1 className="mb-7 text-[40px] font-eb text-center text-[#c49a42] sm:mb-10 capitalize">
              Support us
            </h1>

            <h1 className='font-eb text-[10px] sm:text-[15px] text-center align-middle items-center text-[#c49a42] mb-10'>
            Your love and support will mean so much to us as we begin this beautiful journey. Any contribution, big or small, is warmly appreciated/
          </h1>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[40px]  bg-gradient-to-br from-[#a98b35] via-[#3e3a1] to-[#b69a45] w-fit mx-auto">
              <ul className="divide-y divide-accent/30 rounded-[40px] b bg-gray-100/50 p-2 shadow-lg sm:p-4 w-80 sm:w-130 mx-auto">
                {details.map((BT) => (
                  <li
                    key={BT.para}
                    className="flex items-center justify-between gap-4 px-3 py-4 text-accent/50 sm:px-4"
                  >
                    <div>
                      <span className="block font-eb text-[8px] sm:text-xs uppercase tracking-wider text-accent">
                        {BT.para}
                      </span>
                      <span className="mt-1 block break-all text-sm font-medium sm:text-xl">
                        {BT.name}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyDetail(BT.para, BT.name)}
                      aria-label={`Copy ${BT.para.toLowerCase()}`}
                      title={`Copy ${BT.para.toLowerCase()}`}
                      className="shrink-0 rounded-lg text-sm transition  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-copy preview-icon"
                        className="
                    w-5 h-4"
                      >
                        <rect
                          width="14"
                          height="14"
                          x="8"
                          y="8"
                          rx="2"
                          ry="2"
                        />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
            <p
              className="mt-3 min-h-5 text-center text-sm text-accent"
              role="status"
              aria-live="polite"
            >
              {copyStatus}
            </p>
          </div>
        </Wrapper>

        <svg
          className="wave bottom-wave"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,90 C360,150 720,0 1440,90 L1440,0 L0,0 Z" />
        </svg>
      </section>
    </section>
  );
}

export default Support;
