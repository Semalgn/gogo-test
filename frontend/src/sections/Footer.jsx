import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTiktok,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <section id="footer" className="flex-center section-padding bg-black-200 text-white"> 
    {/*the footer bg on figma bg-[#cfd3d3] */}
      <footer className="">
        <div className="max-w-7xl mx-auto">
          <div className="w-full">
            <div className="flex items-center justify-center w-full md:px-20 px-0 md:gap-50 gap-3 md:m-4 mb-6">
              <h1 className="text-2xl font-bold">
                G<span className="text-[#FF7400]">OO</span>GO
                <p>Tech School</p>
              </h1>

              <p className="mt-4 text-sm p-3 ">
                The footer serves as a comprehensive navigation and information<br />
                hub located at the bottom of every page. It typically includes <br />
                quick links to important pages such as Home, Courses, About Us,<br />
                Contact, FAQ, and Blog, allowing visitors to easily access key
                areas of the site.
              </p>
            </div>
          </div>
          <div className="w-auto border-b-1 m-5" />
          <div className="flex flex-col md:flex-row justify-between items-start md:gap-35 gap-10 border-b border-gray-400 pb-5 justify-center">
            {/* Quick Links */}
            <div className="flex flex-col items-center justify-center px-10">
              <h2 className="text-lg font-bold mb-2 ">
                Quick Links
              </h2>
              <ul className="space-y-2 text-md">
                {navLinks.map(({ link, name }) => (
                  <li key={name} className="group ">
                    <a href={link} className="cursor-pointer">
                      <span>{name}</span>
                      <span className="underline" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center justify-center px-10">
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#bfbdbd] p-2 shadow-sm">
                    <FaMapMarkerAlt className="text-[#ff7400]" />
                  </div>
                  <p>Hossana, Ethiopia</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#bfbdbd] p-2">
                    <FaPhoneAlt className="text-[#ff7400]" />
                  </div>
                  <p>+251 900000000</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#bfbdbd] p-2">
                    <FaEnvelope className="text-[#ff7400]" />
                  </div>
                  <p>Googo@gmail.com</p>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-center justify-center px-10">
              <h2 className="text-lg font-semibold mb-4">Socials</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#bfbdbd] p-2 shadow-sm">
                    <FaMapMarkerAlt className="text-[#ff7400]" />
                  </div>
                  <p>Hossana, Ethiopia</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#bfbdbd] p-2 shadow-sm">
                    <FaPhoneAlt className="text-[#ff7400]" />
                  </div>
                  <p>+251 900000000</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#bfbdbd] p-2 shadow-sm">
                    <FaEnvelope className="text-[#ff7400]" />
                  </div>
                  <p>Googo@gmail.com</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#bfbdbd] p-2 shadow-sm">
                    <FaFacebookF className="text-[#ff7400]" />
                  </div>
                  <p>googo tech</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#bfbdbd] p-2 shadow-sm">
                    <FaInstagram className="text-[#ff7400]" />
                  </div>
                  <p>googo tech</p>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#bfbdbd] p-2 shadow-sm">
                    <FaTiktok className="text-[#ff7400]" />
                  </div>
                  <p>googo tech</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-md mt-4">
            © 2025 Googo Tech School. All Rights Reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
