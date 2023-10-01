import { Button } from "@material-tailwind/react";
import {IoIosArrowDown} from "react-icons/io";
import {BsExclamationCircle} from 'react-icons/bs'

const ResellPricing = () => {
  return (
    <div className="flex flex-col items-center border border-black mx-96 p-5">
      <div className="flex flex-col items-center gap-4">
        <h1 className="uppercase font-bold text-2xl">Pay-as-you-go pricing</h1>
        <p className="text-center px-10 font-semibold">
          Our Pay-as-you-go pricing structure is very simple and the discount is
          based on the top-up amount, the more you buy, the more the price will
          be lowered. We use this system to encourage our resellers to increase
          their sales without the fear to have a big amount of expenses. <br />
          The credits never expire and this plan is not subjected to any
          commitment.
        </p>
        <p className="text-center px-10">
          The basic system in which our seller panel operates is the credit . so
          you must understand that one credit is equal to or value 20 dollars.
        </p>
        <p className="text-center px-10">
          When a customer purchase a reseller panel we offer them credits. These
          credits will be consumed according to the plan you are purchasing for
          the customer.
        </p>
        <p className="text-center px-10">
          Your IPTV panel will be consumed 1 credit for a annual plan, 0.50
          credits for 6 months plan, 0.25 credits for 3 months plan, and so on.
        </p>
        <p className="text-center px-10">
          However, the credit consumption is different when adding connections
          therefore you can check the whole list from the given below table.
        </p>
        <h1 className="uppercase font-bold text-2xl pb-4">Flexible Pricing plans</h1>
      </div>
      <div className="flex gap-5 border border-black rounded-2xl p-6">
        <ul className="list-disc">
          <li> Your own reseller panel</li>
          <li>Panel Can Be Top-Up</li>
          <li>Big channels/VODs pack</li>
          <li>Fast Delivery</li>
        </ul>
        <ul className="list-disc">
          <li>Full HD & HD & SD Channels</li>
          <li>Anti-Freeze Techonology</li>
          <li>Free trials per day</li>
          <li>Free and Weekly Updates</li>
        </ul>
        <ul className="list-disc">
          <li>All PPV Events</li>
          <li>No lag, all streams with option HD, FHD, 4k</li>
          <li>Compatible With All Devices & Apps</li>
          <li>Free & Fast Support Assistant</li>
        </ul>
      </div>
      <div className="flex">
        <div>
          <h1>Most Popular</h1>
          <p>$200</p>
          <IoIosArrowDown />
          <p>For 10-Credits</p>
          <p>Subreseller create</p>
        </div>
        <div>
          <h1>5% discount</h1>
          <p>$475</p>
          <IoIosArrowDown />
          <p>For 25-Credits</p>
          <p>Subreseller create</p>
        </div>
        <div>
          <h1>15% discount</h1>
          <p>$850</p>
          <IoIosArrowDown />
          <p>For 50-Credits</p>
          <p>Subreseller create</p>
        </div>
      </div>
      <div>
        <p>1 Credit=20 Dollars</p>
      </div>
      <div>
        <h1>Packages cost for Reseller</h1>
        <p>How does credit work in our reseller panel?</p>
      </div>
      <div>
        <BsExclamationCircle />{" "}
        <p>
          i.e You have purchased 10 credits for (200 dollars), if you activated
          / created line of 12 month, the panel will auto deduct 1 credit (20
          dollars) cost and there will be 9 credits left and so on..
        </p>
      </div>
      <div>
        <div>
          <h1>1 Month</h1>
          <p>0.10 - Credit</p>
        </div>
        <div>
          <h1>3 Month</h1>
          <p>0.25 - Credit</p>
        </div>
        <div>
          <h1>6 Month</h1>
          <p>0.5 - Credit</p>
        </div>
        <div>
          <h1>12 Month</h1>
          <p>1.00 - Credit</p>
        </div>
      </div>
      <div>
        <Button color="blue">Get Your Panel Now</Button>
      </div>
      <div>
        <p>
          need help? <span>Contact Us</span> Today Or Choose Reseller plan and
          start making money
        </p>
      </div>
    </div>
  );
};

export default ResellPricing;
