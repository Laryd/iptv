import { BsApple, BsAndroid2 } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";

const Price = () => {
  return (
    <div className="flex justify-center gap-4 pt-16 text-center mb-28">
      <div className="bg-white border-x-4 border-y-2 border-blue-400 shadow-xl p-3 rounded-3xl ">
        <h1 className="pb-10 text-3xl mt-16  text-blue-gray-900 font-bold">1 Month</h1>
        <h2 className="pb-10 text-3xl font-bold relative">
          $15
          <sup className="sups font-thin text-xs text-gray-700 absolute">
            .00
          </sup>
        </h2>
        <button className="mb-3 bg-primary hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl">
          Get Started <span className="text-xl ml-5 font-extrabold">$</span>
        </button>
        <p className="pb-5">Fast Delivery After Payment!</p>
        <div className="flex justify-center gap-4">
          <BsApple className="h-4 w-4 text-gray-700" />
          <FaWindows className="h-4 w-4 text-gray-700" />
          <BsAndroid2 className="h-4 w-4 text-gray-700" />
          <RiComputerFill className="h-4 w-4 text-gray-700" />
        </div>
      </div>
      <div className="bg-white border-x-4 border-y-2 border-indigo-400 p-3 rounded-3xl ">
        <h1 className="pb-10 text-3xl mt-16 text-blue-gray-900 font-bold">3 Months</h1>
        <h2 className="pb-10 text-3xl font-bold relative">
          $34
          <sup className="sups font-thin text-xs text-gray-700 absolute">
            .00
          </sup>
        </h2>
        <button className="mb-3 bg-primary hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl">
          Get Started <span className="text-xl ml-5 font-extrabold">$</span>
        </button>
        <p className="pb-5">Fast Delivery After Payment!</p>
        <div className="flex justify-center gap-4">
          <BsApple className="h-4 w-4 text-gray-700" />
          <FaWindows className="h-4 w-4 text-gray-700" />
          <BsAndroid2 className="h-4 w-4 text-gray-700" />
          <RiComputerFill className="h-4 w-4 text-gray-700" />
        </div>
      </div>
      <div className="bg-white border-x-4 border-y-2 border-green-400 p-3 rounded-3xl ">
        <h1 className="pb-10 text-3xl mt-16  text-blue-gray-900 font-bold">6 Months</h1>
        <h2 className="pb-10 text-3xl font-bold relative">
          $44
          <sup className="sups font-thin text-xs text-gray-700 absolute">
            .00
          </sup>
        </h2>
        <button className="mb-3 bg-primary hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl">
          Get Started <span className="text-xl ml-5 font-extrabold">$</span>
        </button>
        <p className="pb-5">Fast Delivery After Payment!</p>
        <div className="flex justify-center gap-4">
          <BsApple className="h-4 w-4 text-gray-700" />
          <FaWindows className="h-4 w-4 text-gray-700" />
          <BsAndroid2 className="h-4 w-4 text-gray-700" />
          <RiComputerFill className="h-4 w-4 text-gray-700" />
        </div>
      </div>
      <div className="bg-green-50 border-x-4 border-y-2 border-indigo-900 p-3 rounded-3xl relative">
        <p className="bg-red-400 rounded-3xl px-2 text-white absolute top-[-12px] left-[50px]">
          BEST OFFER
        </p>
        <h1 className="pb-10 text-3xl mt-16  text-blue-gray-900 font-bold">12 Months</h1>
        <h2 className="pb-10 text-3xl font-bold relative">
          $74
          <sup className="sups font-thin text-xs text-gray-700 absolute">
            .00
          </sup>
        </h2>
        <button className="mb-3 bg-primary hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl">
          Get Started <span className="text-xl ml-5 font-extrabold">$</span>
        </button>
        <p className="pb-5">Fast Delivery After Payment!</p>
        <div className="flex justify-center gap-4">
          <BsApple className="h-4 w-4 text-gray-700" />
          <FaWindows className="h-4 w-4 text-gray-700" />
          <BsAndroid2 className="h-4 w-4 text-gray-700" />
          <RiComputerFill className="h-4 w-4 text-gray-700" />
        </div>
      </div>
    </div>
  );
}

export default Price