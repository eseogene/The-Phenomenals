import { useState } from "react";
import Wrapper from "./Wrapper";

function Accept() {
  const [response, setResponse] = useState("accept");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  function Whatsapp() {
    const phone =  "2348149719242";
   const message = `${name ? name : "I"} ${response === "accept" ? "joyfully accept your wedding invitation and look forward to sharing in your special day. Thank you for including me in this beautiful celebration." : "regretfully decline"}${note ? `\n\nNote: ${note}` : ""}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }


  return (
    <Wrapper>
    <section className="relative overflow-hidden px-5 py-8 text-[#ece2d8] sm:px-10 sm:py-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
      />

      <form
        onSubmit={handleSubmit}
        className="relative mx-auto w-full max-w-[820px]"
      >
        <h1 className="mb-7 text-[40px] font-eb text-center mt-8 text-[#c49a42] sm:mb-3 capitalize">
          Kindly Respond
        </h1>

        <div className="mt-12 flex items-center justify-center sm:mt-14">
          <span className="h-px w-20 bg-accent/20" />
          <span className="font-eb text-center align-middle items-center px-3 sm:px-5">
            WILL YOU JOIN US?
            
          </span>
          <span className="h-px w-20 bg-accent/20" />
        </div>

        <div className="mt-18 sm:mt-16">
          <label
            htmlFor="guest-name"
            className="block font-eb text-[12px] uppercase tracking-[0.24em] text-[#b98b32]"
          >
            The name you'd like to be welcomed by
          </label>
          <input
            id="guest-name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setSent(false);
            }}
            placeholder="e.g. The Imoebe's, Uncle John & family"
            className="mt-5 h-14 w-full border-0 border-b border-[#b89a73]  bg-transparent px-0 text-[19px] italic outline-none placeholder:text-[#b89a73] placeholder:opacity-100 focus:border-[#c49a42] sm:h-16 sm:text-[25px]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          />
        </div>

        <fieldset className="mt-12 sm:mt-11">
          <legend className="mb-5 font-eb text-[12px] uppercase tracking-[0.24em] text-[#b98b32]">
            Your response
          </legend>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <button
              type="button"
              aria-pressed={response === "accept"}
              onClick={() => {
                setResponse("accept");
                setSent(false);
              }}
              className={`h-16 border font-mon text-[20px] transition-colors sm:h-16 sm:text-[23px] ${
                response === "accept"
                  ? "border-[#d3a13b] bg-[#d1a13f] text-[#4c3a20]"
                  : "border-[#d1a13f]  text-[#d7d0c5]"
              }`}


            >
              Joyfully accepts
            </button>
            <button
              type="button"
              aria-pressed={response === "decline"}
              onClick={() => {
                setResponse("decline");
                setSent(false);
              }}
              className={`h-16 border font-mon text-[20px] transition-colors sm:h-16 sm:text-[23px] ${
                response === "decline"
                  ? "border-[#d3a13b] bg-[#d1a13f] text-[#4c3a20]"
                  : "border-[#d1a13f]  text-[#d7d0c5]"
              }`}
            >
              Regretfully declines
            </button>
          </div>
        </fieldset>

        <div className="mt-12 sm:mt-11">
          <label
            htmlFor="guest-note"
            className="block font-eb text-[12px] uppercase tracking-[0.18em] text-[#b98b32]"
          >
            A note for the couple <span className="normal-case text-[8px] text-amber-50 font-sanss">(optional)</span>
          </label>
          <textarea
            id="guest-note"
            value={note}
            onChange={(event) => {
              setNote(event.target.value);
              setSent(false);
            }}
            placeholder="Anything you'd like to say"
            rows="3"
            className="mt-3 min-h-24 w-full resize-none border-0 border-b border-[#b89a73]  bg-transparent px-0 pt-4 text-[19px] italic leading-7 outline-none placeholder:text-[#b89a73]  placeholder:opacity-100 focus:border-[#c49a42] sm:min-h-28 sm:text-[23px]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          />
        </div>

        <div className="mt-12 flex justify-center sm:mt-14">
          <button
            type="submit"
            className="h-16 min-w-[255px] border border-[#c49a42] bg-transparent px-8 font-eb text-[13px] tracking-[0.22em] text-[#ece2d8] transition-colors hover:bg-[#c49a42] hover:text-[#181819]"

            onClick={() => {
                setSent(true);
                Whatsapp();
            }

            }
          >
            SEND RESPONSE
          </button>
        </div>

        <p
          className="mt-5 min-h-6 text-center font-eb text-xs tracking-wider text-[#c49a42]"
          role="status"
          aria-live="polite"
        >
          {sent ? "Thank you for your response" : ""}
        </p>
      </form>
    </section></Wrapper>
  );
}

export default Accept;
