import { useEffect } from "react";

const Helmet = ({ title, titleEntire, children }) => {
  document.title =
    titleEntire ||
    (title
      ? `${title} - harry.ng - Software Engineer. Frontend Developer.`
      : "harry.ng - Software Engineer. Frontend Developer.");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
};

export default Helmet;
