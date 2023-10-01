import {LuLayoutDashboard} from 'react-icons/lu'
import { MdOutlineVideoSettings } from "react-icons/md";
import { PiVideoThin, PiVideo } from "react-icons/pi";
import {GiPriceTag } from 'react-icons/gi'

const Dashboard = () => {
  return (
    <>
      <div className="flex gap-7 justify-center pt-4 pb-4">
        <div className="bg-primary hover:opacity-75 cursor-pointer w-44 h-28 rounded-3xl p-2  border-black border-2  text-white text-center flex flex-col gap-1 items-center pt-4">
          <LuLayoutDashboard  className="text-4xl relative text-lightening"/>
          <h1>Reseller Dashboard</h1>
        </div>
        <div className="bg-primary hover:opacity-75 cursor-pointer w-44 h-28 rounded-3xl p-2  border-black border-2  text-white text-center flex flex-col gap-1 items-center pt-4">
          <MdOutlineVideoSettings  className="text-4xl relative text-lightening"/>
          <h1>Easy & Fast Setup</h1>
        </div>
        <div className="bg-primary hover:opacity-75 cursor-pointer w-44 h-28 rounded-3xl p-2  border-black border-2  text-white text-center flex flex-col gap-1 items-center pt-4">
          <PiVideo  className="text-4xl relative text-lightening"/>
          <h1>High Quality Stream</h1>
        </div>
        <div className="bg-primary hover:opacity-75 cursor-pointer w-44 h-28 rounded-3xl p-2  border-black border-2  text-white text-center flex flex-col gap-1 items-center pt-4">
          <GiPriceTag className="text-4xl relative text-lightening"/>
          <h1>Best Price</h1>
        </div>
      </div>
      <div className='flex justify-center px-[31rem] text-center pb-8'>
        <p>
          Becoming a reseller allows you to start selling the same day you start
          your reseller business. A reseller is someone that acquires a certain
          amount of credit to sell IPTV accounts to a third party. You&#39;ll be
          able to set your own margins. This type of business model gives you a
          better chance to earn more than 100% profit when selling the IPTV
          accounts with our great discounts. DOPEIPTV.COM we provide our
          resellers with all the support they require to start earning.
        </p>
      </div>
    </>
  );
}

export default Dashboard