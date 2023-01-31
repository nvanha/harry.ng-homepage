import { Link } from "react-router-dom";

import Helmet from "@/components/helmet";

const NotFoundPage = () => {
  return (
    <Helmet title="Not found">
      <section className="section-wrapper about-section">
        <h1 className="mb-1 text-4xl font-bold">Not found</h1>
        <p className="text-colorTextSecondaryLight dark:text-colorTextSecondaryDark">
          The page you're looking for was not found.
        </p>
        <hr className="my-6 border-colorBorderDefaultLight dark:border-colorBorderDefaultDark" />
        <Link
          to="/"
          className="font-normal text-teal-600 hover:underline hover:decoration-2 hover:underline-offset-4 dark:text-teal-200 dark:hover:decoration-pink-400"
        >
          Return to home
        </Link>
      </section>
    </Helmet>
  );
};

export default NotFoundPage;
