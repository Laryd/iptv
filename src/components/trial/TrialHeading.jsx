import {TbWriting} from 'react-icons/tb'
import {BsSend} from 'react-icons/bs'
import { MdEmail } from "react-icons/md";
import {PiTelevisionBold} from 'react-icons/pi'
const TrialHeading = () => {
  return (
    <div className="flex flex-col items-center pb-5 gap-2">
      <h1 className='relative right-40 pt-5 text-2xl font-extrabold text-green-400'>IPTV Trial Subscription</h1>
      <div className='flex relative right-48'>
        <PiTelevisionBold className='h-11 w-11 text-blue-gray-800'/>
        <h2 className='text-xl font-semibold'>Get an IPTV trial Pass!</h2>
      </div>
      <div className="flex gap-32 justify-center">
        <div className="flex flex-col items-center">
          <TbWriting  className='h-5 w-5'/>
          <p>1. Fill the form</p>
        </div>
        <div className="flex flex-col items-center">
          <BsSend  className='h-5 w-5'/>
          <p>2. Send request</p>
        </div>
        <div className="flex flex-col items-center">
            <MdEmail className='h-5 w-5'/>
          <p>3. Check your email</p>
        </div>
      </div>
      <div className=" bg-black p-[0.5px] px-80"></div>
    </div>
  );
}

export default TrialHeading