import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  to: string;
  children: string;
  onClick?: () => void;
}

export const LinkItem: FC<Props> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames('nav-link', {
      'is-active': isActive,
    })}
    onClick={onClick}
  >
    {children}
  </NavLink>
);
