import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
export function Qanda() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-72 mb-8 bg-lightening_light">
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className=" bg-amber-50 px-3 pt-5"
        >
          <h1 className="flex justify-center text-2xl font-bold">
            Frequently Asked Questions
          </h1>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Is this your first time with IPTV?
          </AccordionHeader>
          <AccordionBody>
            Don't worry about anything, our service is compatible with every
            device and every application and our team will fully support you
            step by step until the the iptv service is activated! Just
            <span className="text-bold italic"> Subscribe Now</span> and we'll do the rest!
          </AccordionBody>
        </Accordion>
        <Accordion
          className=" bg-amber-50 px-3"
          open={open === 2}
          icon={<Icon id={2} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(2)}>
            Why should you choose us over the others?
          </AccordionHeader>
          <AccordionBody>
            This is a luxury service and cannot be compared with others, If
            you're looking for the premium quality, you've come to the right
            place, We take pride in being the best in the business. The market
            is full of fake service providers, so be careful who you are
            choosing. Don't risk missing out on our priceless content with
            unbeatable quality.
          </AccordionBody>
        </Accordion>
        <Accordion
          className=" bg-amber-50 px-3"
          open={open === 3}
          icon={<Icon id={3} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(3)}>
            What happens after the payment?
          </AccordionHeader>
          <AccordionBody>
            Directly after you pay , you will get an email with the login
            details and also a step by step tutorial video for the activation .
            if you have any question or any doubt, get in touch with our agents
            directly and we will support you via live chat .
          </AccordionBody>
        </Accordion>
        <Accordion
          className=" bg-amber-50 px-3"
          open={open === 4}
          icon={<Icon id={4} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(4)}>
            How long does it take to receive my IPTV subscription?
          </AccordionHeader>
          <AccordionBody>
            Our team is working hard to make every single client satisfied ! you
            will receive your IPTV credentials data in a maximum of 30 minutes.
            in case you didn't hear from us after 30 minutes, please contact us
            via live chat or email and we will give you an immediate support.
          </AccordionBody>
        </Accordion>
        <Accordion
          className=" bg-amber-50 px-3"
          open={open === 5}
          icon={<Icon id={5} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(5)}>
            What are the types of payment methods accepted?
          </AccordionHeader>
          <AccordionBody>
            We accept , Bitcoin and other cryptocurrencies, and Debit/Credit
            Card through secured payment gate with automatic currency conversion
            and no hidden fees.
          </AccordionBody>
        </Accordion>
        <Accordion
          className=" bg-amber-50 px-3"
          open={open === 6}
          icon={<Icon id={6} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(6)}>
            Will I be charged automatically when my subscription expires?
          </AccordionHeader>
          <AccordionBody>
            No, it is necessary for you to renew it manually. However, we are
            confident that once you've experienced our services, you'll choose
            to return to us.
          </AccordionBody>
        </Accordion>
        <Accordion
          className=" bg-amber-50 px-3"
          open={open === 7}
          icon={<Icon id={7} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(7)}>
            Can I be a reseller?
          </AccordionHeader>
          <AccordionBody>
            Start a high monthly return business with the possibility of
            acquiring hundreds of clients within 6 months. As your client list
            grows, so will your extra income. More to it, we support our
            resellers to grow.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
