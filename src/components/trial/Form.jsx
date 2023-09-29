import {
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

const Form = () => {
  return (
    <form className="mt-12 flex flex-col items-center mb-6">
      <div>
        <h1>Start IPTV trial pass!</h1>
        <p className="text-xs">
          IPTV trial -- start as soon as you (login/connect) with credentials,
          not when <br />received
        </p>
        <div className="flex flex-col mb-5 mt-5">
          <label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="e.g., email@example.com"
            className="w-60 h-10 border border-blue-200 rounded-lg"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="number">WhatsApp Number(optional)</label>
          <input
            type="text"
            id="number"
            placeholder="+1XXX-XXX-XXXX"
            className="w-60 h-10 border border-blue-200 rounded-lg"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="period">Select the trial period</label>
          <div className="flex gap-2">
            <input type="radio" id="period" checked />{" "}
            <p>2-hours free IPTV trial $0.00</p>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="device">Select the device/format</label>
          <select
            data-te-select-init
            data-te-select-placeholder="Choose and option"
            className="w-60 h-10 border border-blue-200 rounded-lg"
            id="device"
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
