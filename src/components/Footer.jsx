import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsInstagram,
  BsYoutube,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border">
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright
          href="http://www.ilkaytech.com"
          by="ilkaytech™. All Rights Reserved."
          year={new Date().getFullYear()}
        />
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <Footer.Icon href="https://github.com/ilkaytech" icon={BsGithub} />
          <Footer.Icon
            href="https://linkedin.com/in/ilkaytech"
            icon={BsLinkedin}
          />
          <Footer.Icon
            href="https://www.instagram.com/ilkaytech"
            icon={BsInstagram}
          />
          <Footer.Icon href="mailto:ilkaytech@gmail.com" icon={BsDribbble} />
          <Footer.Icon
            href="https://www.youtube.com/@ilkaytech"
            icon={BsYoutube}
          />
        </div>
      </div>
    </Footer>
  );
}
