import Intr from "./intr";
import AddCalendar from "./AddCalendar";
import Family from "./Family";
import OurStory from "./OurStory";
import Couple from "./Couple";
import OrderOfTheDay from "./OrderOfTheDay";
import Cotd from "./Cotd";
import Location from "./Location";
import PhotoGallery from "./PhotoGallery";
import Support from "./Support";
import Footer from "./Footer";
import Accept from "./Accept";
import { useRef } from "react";

function HomePage(setOpen) {
  const AboutRef = useRef(null);

  function inView() {
    AboutRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <>
      <Intr setOpen={setOpen} />
      <Family />
      <AddCalendar />
      <OurStory />
      <Couple />
      <OrderOfTheDay />
      <Cotd />
      <PhotoGallery />

      <Location />
      <Support ref={AboutRef} />
      <Accept />
      <Footer />
      <button
        className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/80 fixed bottom-3 left-5 z-50 animate-bounce"
        onClick={inView}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 7h-1.21c.13-.41.21-.9.21-1.5C19 3.57 17.43 2 15.5 2c-1.62 0-2.7 1.48-3.4 3.09C11.41 3.58 10.27 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .6.08 1.09.21 1.5H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-4.5-3c.83 0 1.5.67 1.5 1.5C17 7 16.37 7 16 7h-2.48c.51-1.58 1.25-3 1.98-3M7 5.5C7 4.67 7.67 4 8.5 4c.89 0 1.71 1.53 2.2 3H8c-.37 0-1 0-1-1.5M4 9h7v2H4zm2 11v-7h5v7zm12 0h-5v-7h5zm-5-9V9.08s.01-.06.02-.08H20v2z"></path>
        </svg>
      </button>

      
    </>
  );
}

export default HomePage;
