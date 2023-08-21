import { FC } from "react";
import { LinkItem } from "../LinkItem";
import { AnimatedLogo } from "../AnimatedLogo";
import { AnimatedInstagram } from "../AnimatedInstagram";
import { Menu } from "../Menu";

export const Header: FC = () => {
  return (
    <header className="header">
      <AnimatedLogo />


      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <LinkItem to="home">Головна</LinkItem>
          </li>
          <li className="nav__item">
            <LinkItem to="about-us">Про нас</LinkItem>
          </li>
          <li className="nav__item">
            <LinkItem to="our-team">Наша команда</LinkItem>
          </li>
          <li className="nav__item">
            <LinkItem to="contacts">Контакти</LinkItem>
          </li>
        </ul>
      </nav>

      <div className="header__instagram">
        <AnimatedInstagram />
      </div>
      <Menu />
    </header>
  );
}