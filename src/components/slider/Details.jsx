import { AiOutlinePlaySquare } from "react-icons/ai";
import {
  PiDevicesDuotone,
  PiDeviceTabletCameraBold,
  PiTelevisionSimpleLight,
  PiTelevisionBold,
} from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsEnvelopeCheck } from "react-icons/bs";
import channelpile from '../../assets/images/channelpiles.webp'
const Details = () => {
  return (
    <>
      <div className="flex justify-between px-64">
        <div>
          <div className="w-96">
            <div className="flex items-center gap-1">
              <PiTelevisionBold className="text-6xl text-lightening_light" />
              <h2 className="font-bold text-2xl">All Local Channels</h2>
            </div>

            <p>
              High resolution 100,000+ premium IPTV Channels and VOD to get best
              enjoy for our customers!+21000 channels, +60000 Films and series,
              Netflix, Amazon Prime, CANAL+, OCS, BEIN Sports, RMC, etc...
            </p>
          </div>
          <div className="w-96">
            <div className="flex items-center gap-1">
              <MdOutlineSupportAgent className="text-6xl  text-lightening_light" />
              <h2 className="font-bold text-2xl">World Class Support</h2>
            </div>
            <p>
              We offer in-depth tutorials and client support in live chat to
              make installation, and streaming amazingly quick and simple.
            </p>
          </div>
        </div>
        <div>
          <img src={channelpile} alt="channel piles" />
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 gap-2 px-80">
        <div>
          <div className="flex items-center gap-2">
            <BsEnvelopeCheck className="text-6xl  text-lightening_light" />
            <h2 className="font-bold text-2xl">Fast activation</h2>
          </div>

          <p>
            Once payment is successful, your iptv subscription will be fully
            active and ready for your use.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <AiOutlinePlaySquare className="text-6xl  text-lightening_light" />
            <h2 className="font-bold text-2xl">3 Days replay TV channels</h2>
          </div>

          <p>
            IPTV.added the ability to replay French, Arabic and Spanish popular
            channels, alowed you to re-watch any episode or sport match you
            missed within 72 hours after its launch
          </p>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <PiTelevisionSimpleLight className="text-6xl  text-lightening_light" />
            <h2 className="font-bold text-2xl">EPG Function</h2>
          </div>

          <p>
            Some popular live provide EPG information, so you can keep abreast
            of the show time and watch major sports events, hit series or other
            programs on time.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <PiDeviceTabletCameraBold className="text-6xl  text-lightening_light" />
            <h2 className="font-bold text-2xl">Support Multiple Devices</h2>
          </div>

          <p>
            dopeiptv.com supports TV boxes, mobile phones, tablets, TVs and
            projectors based on android or androidtv systems, watch live
            broadcast anytime, anywhere, do not miss the wonderful match
          </p>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <PiDevicesDuotone className="text-6xl text-lightening_light" />
            <h2 className="font-bold text-2xl">Other Devices</h2>
          </div>

          <p>
            If you already have Smart TV, MAG box, iPhone, Enigma 2 satellite
            set-top box or other Linux-based IPTV box, you can enjoy
            dopeiptv.com service without purchasing an Android TV box, reduce
            your expenses.
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
