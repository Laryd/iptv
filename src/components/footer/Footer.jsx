import { Button, Typography } from "@material-tailwind/react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const LINKS = [
  {
    title: "Contact",
    items: [
      "466 Brooklyn FL 153, New York, NY 1013, USA",
      "Whatsapp: +1112-943-2780",
      "Customer Care: support@dopeiptv.com",
      "Sales: Sales:sales@dopeiptv.com",
    ],
  },
  {
    title: "Quick Links",
    items: ["Term & Conditions"],
  },
  {
    title: "Newsletter",
    items: ["Subscribe"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="footer" className="relative w-full bg-primary pt-4">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="py-3 pb-11">
          <h1 className="text-xl font-extrabold">Dope IPTV</h1>
          <p className="py-1 italic text-brown-100">
            4k streaming in your hands
          </p>
        </div>
        <div className="flex gap-20">
          <div>
            <h1 className="font-bold">Contact</h1>
            <div className="mt-5">
              <div className="flex gap-10 text-white">
                <div className="mb-16">
                  <address>
                    449 Brooklyn FL 174 <br />
                    New York, NY 10013, USA
                  </address>
                </div>
                <div>
                  <h2>Whatsapp: </h2>
                  <p>+1123-476-6734</p>
                </div>
              </div>
              <div className="flex gap-20 text-white">
                <div>
                  <h2>Sales:</h2>
                  <p>sales@dopeiptv.com</p>
                </div>
                <div>
                  <h2>Customer Care:</h2>
                  <p>support@dopeiptv.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mb-5 font-bold">Quick Links</h1>
            <a href="#" className="text-white">
              Terms & Conditions
            </a>
          </div>
          <div>
            <h1 className="mb-5 font-bold">Follow</h1>

            <h2 className="mb-3 text-white">Sign up for our newsletter</h2>
            <p className="mb-3 text-white">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="items-center mb-3 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-72 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 bg-black mr-40 text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="max-w-screen-sm text-sm text-brown-100 newsletter-form-footer dark:text-gray-300">
                We care about the protection of your data.{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="#">Dope IPTV</a>. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <MdOutlineEmail className="h-5 w-5" />
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaWhatsapp className="h-5 w-5" />
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaTelegramPlane className="h-5 w-5" />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
