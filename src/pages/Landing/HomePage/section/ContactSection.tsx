import React from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";

const ContactSection = () => {
  return (
    <section className="section-wrapper contact-section mb-6">
      <h3 className="section-title">On the web</h3>
      <a
        href="https://github.com/nvanha"
        target="_blank"
        className="px-4 w-fit h-10 rounded-md font-normal text-teal-600 dark:text-teal-200 transition-all hover:bg-teal-50 dark:hover:bg-[#81e6d91f] hover:underline hover:underline-offset-4 hover:decoration-2 dark:hover:decoration-pink-400 flex items-center justify-center"
      >
        <IoLogoGithub className="mr-2" /> @nvanha
      </a>
      <a
        href="https://www.linkedin.com/in/hanguyen1120/"
        target="_blank"
        className="px-4 w-fit h-10 rounded-md font-normal text-teal-600 dark:text-teal-200 transition-all hover:bg-teal-50 dark:hover:bg-[#81e6d91f] hover:underline hover:underline-offset-4 hover:decoration-2 dark:hover:decoration-pink-400 flex items-center justify-center"
      >
        <IoLogoLinkedin className="mr-2" /> @hanguyen1120
      </a>
      <a
        href="https://www.facebook.com/nvh1120/"
        target="_blank"
        className="px-4 w-fit h-10 rounded-md font-normal text-teal-600 dark:text-teal-200 transition-all hover:bg-teal-50 dark:hover:bg-[#81e6d91f] hover:underline hover:underline-offset-4 hover:decoration-2 dark:hover:decoration-pink-400 flex items-center justify-center"
      >
        <IoLogoFacebook className="mr-2" /> @nvh1120
      </a>
      <a
        href="https://www.instagram.com/_haa_nguyen/"
        target="_blank"
        className="px-4 w-fit h-10 rounded-md font-normal text-teal-600 dark:text-teal-200 transition-all hover:bg-teal-50 dark:hover:bg-[#81e6d91f] hover:underline hover:underline-offset-4 hover:decoration-2 dark:hover:decoration-pink-400 flex items-center justify-center"
      >
        <IoLogoInstagram className="mr-2" /> @_haa_nguyen
      </a>
    </section>
  );
};

export default ContactSection;
