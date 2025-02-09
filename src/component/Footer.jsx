import logo from "../assets/logo.png";
import green from "../assets/green.png";
import blue from "../assets/blue.png";
import orange from "../assets/orange.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#DBF0F2] py-12 px-10">
      <div className="mx-auto flex flex-col lg:flex-row gap-10 justify-between">
        <div className="p-5">
          <img
            src={logo}
            alt="Ripple Healthcare Logo"
            className="mb-4 w-[183px] h-[63px]"
          />
          <p className="font-semibold text-lg text-[#4E4E4E]">NASSCOM Innovation Hub</p>
          <p className="font-medium text-lg text-[#4E4E4E]">
            Plot No. 1, Udyog Vihar Phase 1,
            <br />
            Udyog Vihar, Sector 20, Gurugram,
            <br />
            Haryana 122022
          </p>
          <p className="flex items-center mt-2 text-lg text-[#4E4E4E]">
            📧 info@ripplehealthcare.in
          </p>
          <p className="flex items-center mt-1 text-lg text-[#4E4E4E]">
            📞 +91 70283 46278
          </p>
          <div className="flex gap-4 mt-4">
            <img src={green} alt="Award 1" className="w-10 h-10" />
            <img src={orange} alt="Award 2" className="w-10 h-10" />
            <img src={blue} alt="Award 2" className="w-10 h-10" />
          </div>
        </div>

        <div className="flex p-5 flex-grow gap-8 flex-wrap lg:flex-nowrap lg:justify-end">
          <div className="w-1/3 min-w-96 lg:min-w-40 lg:max-w-40">
            <h3 className="text-[#4E4E4E] font-semibold text-xl mb-3">
              Our Work
            </h3>
            <p className="text-[#4E4E4E] font-normal text-lg">Ripple HipPro</p>
            <p className="text-[#4E4E4E] font-normal text-lg">
              Steady Steps App
            </p>
            <p className="text-[#4E4E4E] font-normal text-lg">
              User Testimonials
            </p>
          </div>

          <div className="w-1/3 min-w-96 lg:min-w-40 lg:max-w-40">
            <h3 className="text-[#4E4E4E] font-semibold text-xl mb-3">
              About Us
            </h3>
            <p className="text-[#4E4E4E] font-normal text-lg">Team</p>
            <p className="text-[#4E4E4E] font-normal text-lg">
              Advisory Council
            </p>
            <p className="text-[#4E4E4E] font-normal text-lg">Partners</p>
            <p className="text-[#4E4E4E] font-normal text-lg">Careers</p>
          </div>

          <div className="w-1/3 min-w-96 lg:min-w-40 lg:max-w-40">
            <h3 className="text-[#4E4E4E] font-semibold text-xl mb-3">
              Resources
            </h3>
            <p className="text-[#4E4E4E] font-normal text-lg">FAQs</p>
            <p className="text-[#4E4E4E] font-normal text-lg">Blogs</p>
            <p className="text-[#4E4E4E] font-normal text-lg">Contact Us</p>
          </div>

          <div className="w-1/3 min-w-96 lg:min-w-40 lg:max-w-40">
            <h3 className="text-[#4E4E4E] font-semibold text-xl mb-3">
              Others
            </h3>
            <p className="text-[#4E4E4E] font-normal text-lg">
              Terms & Conditions
            </p>
            <p className="text-[#4E4E4E] font-normal text-lg">Privacy Policy</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-6 ml-5 text-[#4E4E4E] text-sm">
        <div className="flex justify-between items-center">
          <div className="flex gap-6">
            <FaLinkedinIn className="w-5 h-5" />
            <FaInstagram className="w-5 h-5" />
            <FaFacebookF className="w-5 h-5" />
          </div>

          <div className="flex flex-col items-end">
            <p>©2024 ripplehealthcare.in</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
