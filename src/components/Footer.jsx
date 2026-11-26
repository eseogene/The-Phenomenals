import Wrapper from "./Wrapper";

function Footer() {
  return (
    <div className="pt-20 bg-[#310f0f]">
      <h1 className="font-eb text-5xl tracking-wide text-[#ebe0c9] sm:text-7xl flex justify-center items-center">
        E
        <span className="font-mon px-2 text-4xl text-[#c49a42] sm:text-5xl">
          {" "}
          &amp;{" "}
        </span>
        E
      </h1>
      <div>
        <section className="p-5 pt-5 pb-10 sm:mx-70">
          <div className="flex justify-center items-center">
            <div className="w-15 h-[0.5px] mr-2 bg-accent/50" />
            <img src="ee.svg" alt="" className=" border-accent/50 size-5" />
            <div className="w-15 h-[0.5px] ml-2 bg-accent/50" />
          </div>

          <p className="font-serif italic text-[#d4c5a9] text-xs mt-10 text-center">
            We look forward to celebrating with you
            <br />
            02 . 12 . 2026 — warri, Delta State
          </p>
        </section>

        <section className="pb-15">
          <div className="h-[1px] w-159 bg-accent/20 mx-auto mb-10" />
<h1 className='font-eb text-center sm:text-xl align-middle items-center text-[#c49a42] mb-10'>
            reach us directly
          </h1>
          <div className="flex justify-center items-center gap-5">
            <p className="font-sanss sm:text-xl border-b border-accent/40 text-[#ebe0c9] animate-pulse">08102361625</p>
            <p >.</p>
            <p className="font-sanss sm:text-xl border-b border-accent/40 text-[#ebe0c9] animate-pulse">0813 755 6504</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
