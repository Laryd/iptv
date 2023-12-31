import { Button } from "@material-tailwind/react";
import React from "react";
import {GoVideo} from "react-icons/go"
import {FiSettings} from "react-icons/fi"
import { PiTelevisionSimpleLight, PiLightning } from "react-icons/pi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-skybright p-4 flex flex-col items-center gap-8">
      <p> 100,000+ Premium Channels. Movies, TV-shows & Series </p>
      <div>
        <h1 className="text-4xl">
          <span className="relative left-72">Fast & Reliable </span> <br />
          <span className="relative right-28 italic font-mono text-6xl font-bold">
            Discover The Best Provider
          </span>
        </h1>
      </div>

      <p>
        Expand your horizons with thousands of Live TV Channels, Movies, Sports,{" "}
        <br />
        Series, Documentaries, Adult Entertainment, Kids & Family Channels
      </p>

      <div>
        <Link to="/trial">
          <Button color="blue">Start your Trial Now!</Button>
        </Link>
      </div>
      <div className="flex justify-center mb-7">
        <img src="/icons.png" alt="tv tech icons" />
      </div>
      <div className="flex justify-center items-center gap-28">
        <div className="flex gap-8">
          <div className="bg-primary hover:opacity-75 cursor-pointer w-28 h-28 rounded-md p-2  border-black border-2  text-white text-center">
            <GoVideo className="text-2xl relative ml-7 text-lightening" /> Over
            80K Live, Movies & Series.
          </div>
          <div className="bg-primary hover:opacity-75 cursor-pointer w-28 h-28 rounded-md p-2  border-black border-2  text-white text-center">
            <FiSettings className="text-2xl relative ml-7 text-lightening" />{" "}
            Easy & Fast Setup
          </div>
        </div>
        <div className="flex gap-8">
          <div className="bg-primary hover:opacity-75 cursor-pointer w-28 h-28 rounded-md p-2  border-black border-2  text-white text-center">
            <PiTelevisionSimpleLight className="text-2xl relative ml-7 text-lightening" />
            4k high quality stream
          </div>
          <div className="bg-primary hover:opacity-75 cursor-pointer w-28 h-28 rounded-md p-2  border-black border-2  text-white text-center">
            <PiLightning className="text-2xl relative ml-7 text-lightening" />{" "}
            Anti-buffer 5.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
