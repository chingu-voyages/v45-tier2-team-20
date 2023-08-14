// Lading page component
import { useState } from "react";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const [switchDesign, setSwitchDesign] = useState(true);
  return (
    <div
      className="w-full h-[100vh] border-white border-t-2 bg-black flex flex-col bg-starting-banner bg-cover bg-bottom  text-white
      "
    >
      <button
        className="absolute bg-slate-700"
        onClick={() => setSwitchDesign((prev) => !prev)}
      >
        Switch design
      </button>{" "}
      {/* Explore button Idea from the design but we have a lot of free spaces on the right */}
      {switchDesign ? (
        <div className="p-4 md:p-8 lg:p-10 gap-y-7 flex flex-col my-auto">
          <h1 className="text-6xl sm:text-9xl  font-spaceGrotesk">Fireball </h1>
          <h2 className="text-4xl sm:text-8xl font-spaceGrotesk ">
            Meteorite Strikes{" "}
          </h2>
          <p className="max-w-[740px] ">
            Charting the Skies and Beyond: Embark on a Fascinating Expedition to
            Uncover the Mysteries of Meteorite Strikes from NASA`s Curated
            Dataset
          </p>
          <Link
            className="bg-indigo-800 self-start px-5 py-3 inline-block rounded-xl hover:sm:scale-[1.1] text-center
           transition duration-[350ms] ease-in-out uppercase tracking-[1.5px] text-2xl w-full sm:w-auto font-robotoSlab"
            to={"/"}
          >
            Start exploring
          </Link>
        </div>
      ) : (
        <div className="p-4 md:p-8 lg:p-10 flex flex-col sm:flex-row my-auto max-w-[1400px]">
          <div className="flex flex-col gap-y-7">
            <h1 className="text-6xl sm:text-9xl ">Fireball </h1>
            <h2 className="text-4xl sm:text-8xl ">Meteorite Strikes </h2>
            <p className="max-w-[740px]">
              Charting the Skies and Beyond: Embark on a Fascinating Expedition
              to Uncover the Mysteries of Meteorite Strikes from NASA`s Curated
              Dataset
            </p>
          </div>
          <Link
            className="bg-indigo-800 self-start flex items-center text-center justify-center px-10 aspect-square mx-auto sm:ml-auto 
            hover:sm:scale-[1.1] rounded-full
          transition duration-[350ms] ease-in-out uppercase tracking-[1.5px] text-3xl w-full sm:w-auto max-w-[300px] mt-10 sm:mt-0 font-robotoSlab"
            to={"/"}
          >
            Start <br /> exploring
          </Link>
        </div>
      )}
      {/* Explore button Idea from the design but we have a lot of free spaces on the right, so with this desing the button in on the right side */}
      <Footer />
      {/* Footer  */}
    </div>
  );
};

export default LandingPage;
