import React from "react";

const NotFoundPage = () => {
  return (
    <div className="home-page">
      <section className="section-wrapper about-section">
        <h1 className="text-4xl font-semibold">Not found</h1>
        <p>The page you're looking for was not found.</p>
        <hr className="my-6" />
        <button className="btn mx-auto">Return to home</button>
      </section>
    </div>
  );
};

export default NotFoundPage;
