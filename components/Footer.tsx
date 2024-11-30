import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5">
      <div className="flex flex-col items-center" id="contact">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your project</span> to the
          next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s work together to bring your ideas to life.
        </p>
        <a href="mailto:nael180904@mail.com">
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Naël
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-3xl border border-black-300"
            >
              <img src={item.img} alt={item.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
