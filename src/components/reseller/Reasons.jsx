import { Button } from "@material-tailwind/react";
import Re_1 from "../../assets/images/RE1.webp";
import Re_2 from "../../assets/images/RE2.webp";
import Re_3 from "../../assets/images/RE3.webp";
import Re_4 from "../../assets/images/RE4.webp";
import {BsArrowRight} from 'react-icons/bs'
const Reasons = () => {
  return (
    <>
      <div className="flex flex-col items-center pb-8 pt-8">
        <h1 className="text-xl font-semibold">Why You Should</h1>
        <h1 className="font-bold text-2xl uppercase">
          Start A Reseller Business
        </h1>
        <h1 className="font-bold text-2xl uppercase pb-4">Right Now</h1>
        <p className="w-[36rem] text-center">
          A reseller business can be a great option for first-time entrepreneurs
          It allows you to resell products bought from DOPEIPTV. IPTV services
          enable users to conveniently watch Live TV and Video on Demand so they
          would not miss his/her favorite program on TV. Which makes IPTV a
          charming idea that has a great turnout
        </p>
      </div>
      <div className="flex justify-center items-start pb-8 gap-7">
        <div className="w-[30rem] flex flex-col gap-4">
          <h1 className="font-bold pb-3 text-2xl">
            Advantages of Becoming a Reseller BUSINESS
          </h1>
          <p>
            You will be able to creat and sell IPTV subscriptions on your own
            panel. An IPTV Panel is a software-based web entrance.
          </p>
          <p>
            any person who wants to become a Reseller can use thier Reseller
            username and password to login into this software. After logging in
            successfully you can create accounts for different devices and can
            deal with clients through it.
          </p>
          <p>
            At DopeIPTV we support all our resellers you will be able to choose
            from one of our great resellers plans you will have an easy access
            to an IPTV panel and you can start selling the same day you start
            your reseller plan
          </p>
        </div>
        <div className="pt-6">
          <img src={Re_1} alt="reseller reason 1" className="min-w-fit" />
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center gap-10">
        <div className="w-[30rem] flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Earn Money With IPTV Reseller</h1>
          <p>
            A reseller business can be a great option for first-time
            entrepreneurs It allows you to resell products bought from STATES
            IPTV. IPTV services enable users to conveniently watch Live TV and
            Video on Demand so they would not miss his/her favourite program on
            TV. Which makes IPTV a charming idea that has a great turnout
          </p>
        </div>
        <div>
          <img src={Re_2} alt="reseller reason 2" className="min-w-fit" />
        </div>
      </div>
      <div className="flex flex-col items-center pt-8 pb-2">
        <h1 className="font-semibold text-2xl">IPTV Panel Features</h1>
        <h1 className="text-6xl font-bold pb-2">Our Reseller Panel</h1>
        <p className="w-[33rem]">
          Our IPTV reseller panel is very easy to use and has a user-friendly
          interface. We offer users with a panel along with complete control
          over it.
        </p>
      </div>
      <div>
        <div>
          <h1>Reseller Panel Layout</h1>
          <p>
            Our reseller panel is a lot easier to use where we allow users to
            have full control. A customer can manage the accounts of their
            subscriber easily with our user-friendly panel. You can Add
            subscribers to the panel and provide them with the M3U URL, Xtream
            API Codes or even Add the Enigma and MAG devices depending on what’s
            their need.
          </p>
          <ul>
            <li>Edit Channel Lineup</li>
            <li>
              Easily edit user banquets and offer the channels that they want.
            </li>
            <li>Reset ISP</li>
            <li>
              Reset the ISP of the subscriber if the account is not working.
            </li>
            <li>Kill Connections.</li>
            <li>You can easily kill the connections if you want.</li>
            <li>Change from M3U To MAG and opposite</li>
            <li>Edit channels and packages.</li>
            <li>Change username and Extend the accounts.</li>
            <li>
              Refund the created lines to credit back! (No Risk With your
              customer) and much more
            </li>
          </ul>
        </div>
        <div>
          <img src={Re_3} alt="Reseller reason 3" className="min-w-fit" />
        </div>
      </div>
      <div>
        <div>
          <img src={Re_4} alt="Reseller reason 4" className="min-w-fit" />
        </div>
        <div>
          <h1>Manage Customers</h1>
          <p>
            Our reseller panel provides you with the ability to see the active
            connections, number of connections registered, etc. Despite that,
            you can kill the connections, edit the user bouquets, disable the
            connection, see the accounts about to expire. DOPEIPTV panel is
            protected with Captcha to keep your data secure and avoid unwanted
            login from your account.
          </p>
          <Button
            color="blue"
            className="flex capitalize rounded-3xl text-lg gap-1 items-center"
          >
            Get Your Panel Now <BsArrowRight className="h-5 w-11" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Reasons;
