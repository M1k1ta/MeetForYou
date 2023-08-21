import { FC } from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: FC = () => (
  <main className="not-found-page">
    <h1 className="not-found-page__title">Not found page</h1>
    <h2 className="not-found-page__status">404</h2>
    <Link
      to="/"
      className="not-found-page__button"
    >
      Go home
    </Link>
  </main>
);