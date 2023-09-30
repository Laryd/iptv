import {
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import Ratings from "./Ratings";

const Form = () => {
  return (
    <div className="flex gap-32 justify-center">
      <form className="mt-12 flex flex-col items-center mb-6">
        <div className="w-96 p-7 rounded-[2rem] border border-black border-x-2 border-y-2">
          <h1 className="text-3xl">Start IPTV trial pass!</h1>
          <p className="text-[11px]">
            IPTV trial -- start as soon as you (login/connect) with credentials,
            not when received
          </p>
          <div className="flex flex-col mb-5 mt-5">
            <label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g., email@example.com"
              className="w-60 h-10 border border-blue-200 rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="number">WhatsApp Number(optional)</label>
            <input
              type="text"
              id="number"
              placeholder="+1XXX-XXX-XXXX"
              className="w-60 h-10 border border-blue-200 rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="period">
              Select the trial period <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input type="radio" id="period" />{" "}
              <p>2-hours free IPTV trial $0.00</p>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="device">
              Select the device/format <span className="text-red-500">*</span>
            </label>
            <select
              data-te-select-init
              placeholder="Choose any option"
              className="w-60 h-10 border border-blue-200 rounded-lg"
              id="device"
            >
              <option value="1">M3U/XTREAM API CODE</option>
              <option value="2">Mag Box/STB device</option>
              <option value="3">Formular/DreamLink/Avov Box</option>
              <option value="4">Enigma2/DreamBox/Vu+</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="mac">
              Mac address(Required for Mag/STB Box etc)
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="mac"
              placeholder="eg 00:1A:67......."
              className="w-60 h-10 border border-blue-200 rounded-lg p-2"
            />
          </div>
          <div className="flex gap-2">
            <input type="radio" name="agreement" id="agreement" />
            <label htmlFor="agreement">
              I agree to the terms & conditions <br />
              <span>View terms of use</span>
            </label>
          </div>
          <div className="flex justify-center">
            <Button
              variant="gradient"
              size="lg"
              color="blue"
              className="hidden lg:inline-block my-16 px-20"
            >
              Send
            </Button>
          </div>
        </div>
      </form>
      <Ratings/>
    </div>
  );
};

export default Form;
