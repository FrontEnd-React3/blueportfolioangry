import React from "react";
import { FaReact } from "react-icons/fa";
import PH from "./photoshop.svg";
import AI from "./illustrator.svg";
import TW from "./tailwindcss.svg";
import php from "./php-white.svg";
const SocialShare = [
  { Social: <FaReact />, link: "https://www.facebook.com/" },
  { Social: <img src={PH} alt="ph" />, link: "#work" },
  { Social: <img src={AI} alt="ph" />, link: "#work" },
  { Social: <img src={TW} alt="ph" />, link: "#work" },
  { Social: <img src={php} alt="ph" />, link: "#work" }
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
