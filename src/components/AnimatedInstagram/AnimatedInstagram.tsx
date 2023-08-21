import { FC } from "react";
import { InstagramIcon } from "../InstagramIcon";

export const AnimatedInstagram: FC = () => (
  <div className="instagram">
    <a
      className="instagram__link"
      href="/"
    >
      <div className="instagram__anim">
        <InstagramIcon />
      </div>
    </a>
    <div className="instagram__white-block"></div>
  </div>
);
