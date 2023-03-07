import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoCodepen,
} from "react-icons/io5";

import SpanGG from "@/components/spangg";

const ContactSection = () => {
  return (
    <section className="section-wrapper contact-section mb-6">
      <h3 className="section-title">
        <SpanGG color="red" />
        On the web
      </h3>
      <a
        href="https://github.com/nvanha"
        target="_blank"
        className="contact-item"
      >
        <IoLogoGithub className="mr-2" /> @nvanha
      </a>
      <a
        href="https://codepen.io/nvanha"
        target="_blank"
        className="contact-item"
      >
        <IoLogoCodepen className="mr-2" /> @nvanha
      </a>
      <a
        href="https://www.linkedin.com/in/hanguyen1120/"
        target="_blank"
        className="contact-item"
      >
        <IoLogoLinkedin className="mr-2" /> @hanguyen1120
      </a>
      <a
        href="https://www.facebook.com/nvh1120/"
        target="_blank"
        className="contact-item"
      >
        <IoLogoFacebook className="mr-2" /> @nvh1120
      </a>
      <a
        href="https://www.instagram.com/_haa_nguyen/"
        target="_blank"
        className="contact-item"
      >
        <IoLogoInstagram className="mr-2" /> @_haa_nguyen
      </a>
    </section>
  );
};

export default ContactSection;
