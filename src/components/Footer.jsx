import logo from "../assets/images/logo-white.svg";
import iconIG from "../assets/images/icon-instagram.svg";
import iconFB from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconPinterest from "../assets/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="bg-neutral-veryDarkViolet flex justify-evenly items-start py-10 text-slate-300 text-sm">
      <img src={logo} alt="logo" />
      <ul className="space-y-2">
        <li className="text-white font-bold pb-3 hover:cursor-default">Features</li>
        <li className="hover:cursor-pointer hover:text-white">Link Shortening</li>
        <li className="hover:cursor-pointer hover:text-white">Branded Links</li>
        <li className="hover:cursor-pointer hover:text-white">Analytics</li>
      </ul>
      <ul className="space-y-2">
        <li className="text-white font-bold pb-3 hover:cursor-default">Resources</li>
        <li className="hover:cursor-pointer hover:text-white">Blog</li>
        <li className="hover:cursor-pointer hover:text-white">Developers</li>
        <li className="hover:cursor-pointer hover:text-white">Support</li>
      </ul>
      <ul className="space-y-2">
        <li className="text-white font-bold pb-3 hover:cursor-default">Company</li>
        <li className="hover:cursor-pointer hover:text-white">About</li>
        <li className="hover:cursor-pointer hover:text-white">Our Team</li>
        <li className="hover:cursor-pointer hover:text-white">Careers</li>
        <li className="hover:cursor-pointer hover:text-white">Contact</li>
      </ul>
      <div className="flex space-x-3 hover:cursor-pointer">
        <img src={iconFB} alt="fb" />
        <img src={iconTwitter} alt="fb" />
        <img src={iconPinterest} alt="fb" />
        <img src={iconIG} alt="fb" />
      </div>
    </div>
  );
};

export default Footer;
