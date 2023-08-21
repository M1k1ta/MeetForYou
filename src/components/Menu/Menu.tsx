import { FC, useState } from "react";
import { LinkItem } from "../LinkItem";
import { InstagramIcon } from "../InstagramIcon";
import { Logo } from "../Logo";
import classNames from "classnames";

export const Menu: FC = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <section className="menu">
      <button
        className="menu__button"
        onClick={() => setIsMenu(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M34.5625 21C34.5625 20.2751 33.9749 19.6875 33.25 19.6875H8.75C8.02513 19.6875 7.4375 20.2751 7.4375 21C7.4375 21.7249 8.02513 22.3125 8.75 22.3125H33.25C33.9749 22.3125 34.5625 21.7249 34.5625 21Z" fill="#F93064"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M34.5625 12.25C34.5625 11.5251 33.9749 10.9375 33.25 10.9375H8.75C8.02513 10.9375 7.4375 11.5251 7.4375 12.25C7.4375 12.9749 8.02513 13.5625 8.75 13.5625H33.25C33.9749 13.5625 34.5625 12.9749 34.5625 12.25Z" fill="#F93064"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M34.5625 29.75C34.5625 29.0251 33.9749 28.4375 33.25 28.4375H8.75C8.02513 28.4375 7.4375 29.0251 7.4375 29.75C7.4375 30.4749 8.02513 31.0625 8.75 31.0625H33.25C33.9749 31.0625 34.5625 30.4749 34.5625 29.75Z" fill="#F93064"/>
        </svg>
      </button>

      <article
        className={classNames('menu__box', {
          'menu--active': isMenu,
        })}
      >
        <div className="menu__header">
          <Logo />

          <button
            className="menu__close"
            onClick={() => setIsMenu(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path d="M25.707,6.293c-0.195-0.195-1.805-1.805-2-2c-0.391-0.391-1.024-0.391-1.414,0c-0.195,0.195-17.805,17.805-18,18c-0.391,0.391-0.391,1.024,0,1.414c0.279,0.279,1.721,1.721,2,2c0.391,0.391,1.024,0.391,1.414,0c0.195-0.195,17.805-17.805,18-18C26.098,7.317,26.098,6.683,25.707,6.293z"/><path d="M23.707,25.707c0.195-0.195,1.805-1.805,2-2c0.391-0.391,0.391-1.024,0-1.414c-0.195-0.195-17.805-17.805-18-18c-0.391-0.391-1.024-0.391-1.414,0c-0.279,0.279-1.721,1.721-2,2c-0.391,0.391-0.391,1.024,0,1.414c0.195,0.195,17.805,17.805,18,18C22.683,26.098,23.317,26.098,23.707,25.707z"/>
            </svg>
          </button>
        </div>

        <nav className="menu__nav">
          <ul className="menu__nav-list">
            <li className="menu__nav-item">
              <LinkItem to="home">Головна</LinkItem>
            </li>
            <li className="menu__nav-item">
              <LinkItem to="about-us">Про нас</LinkItem>
            </li>
            <li className="menu__nav-item">
              <LinkItem to="our-team">Наша команда</LinkItem>
            </li>
            <li className="menu__nav-item">
              <LinkItem to="contacts">Контакти</LinkItem>
            </li>
          </ul>
        </nav>

        <div className="menu__instagram">
          <InstagramIcon />
        </div>
      </article>
    </section>
  );
}