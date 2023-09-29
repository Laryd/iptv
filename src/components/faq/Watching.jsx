import {BsFillCalendar3RangeFill} from 'react-icons/bs'
import { FaMoneyCheckAlt, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { MdSupportAgent, MdOutlineEmail } from "react-icons/md";
import { ImCheckboxChecked} from 'react-icons/im'
import tvwatching from '../../assets/images/tvwatching.webp'

const Watching = () => {
  return (
    <>
      <div className="flex px-80 justify-between items-center">
        <div>
          <img
            src={tvwatching}
            alt="people watching tv"
            className='min-w-fit'
          />
        </div>
        <div className="w-96 pt-12">
          <h1 className="font-bold text-3xl italic pb-3">
            Experience the Best in IPTV Provider
          </h1>
          <p>
            DopeIPTV is dedicated to providing you with the best possible
            television experience. We offer a wide range of channels and
            packages to meet your entertainment needs. With our cutting-edge
            technology and exceptional customer support, you'll have peace of
            mind knowing that your entertainment needs are in capable hands.
          </p>
          <div className="flex gap-1 items-center">
            <div className="flex items-center gap-1">
              <BsFillCalendar3RangeFill className="text-5xl" />
              <h3 className="text-xs">Wide Range of Channels</h3>
            </div>
            <div className="flex items-center gap-1">
              <FaMoneyCheckAlt className="text-5xl" />
              <h3 className="text-xs">Affordable Packages</h3>
            </div>
            <div className="flex items-center gap-1">
              <ImCheckboxChecked className="text-5xl" />
              <h3 className="text-xs">Exceptional Customer Support</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 py-14">
        <div className="bg-primary  hover:opacity-75 cursor-pointer w-48 h-28 rounded-3xl p-2  border-black border-2  text-white text-center pt-7 flex flex-col items-center">
          <FaWhatsapp className="text-4xl relative ml-7 text-lightening" />
          <h2 className='pl-6'>Whatsapp</h2>
        </div>
        <div className="bg-primary  hover:opacity-75 cursor-pointer w-48 h-28 rounded-3xl p-2  border-black border-2  text-white text-center pt-7 flex flex-col items-center">
          <FaTelegramPlane className="text-4xl relative ml-7 text-lightening" />
          <h2 className='pl-6'>Telegram</h2>
        </div>
        <div className="bg-primary  hover:opacity-75 cursor-pointer w-48 h-28 rounded-3xl p-2  border-black border-2  text-white text-center pt-7 flex flex-col items-center">
          <MdOutlineEmail className="text-4xl relative ml-7 text-lightening" />
          <h2 className='pl-6'>Email Support</h2>
        </div>
      </div>
    </>
  );
};

export default Watching;
