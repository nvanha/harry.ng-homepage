import { useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Helmet = ({
  title,
  titleEntire,
  customClassName = "",
  children,
}: {
  title?: string;
  titleEntire?: string;
  customClassName?: string;
  children: JSX.Element | JSX.Element[];
}) => {
  document.title =
    titleEntire ||
    (title
      ? `${title} - harry.ng - Software Engineer. Frontend Developer.`
      : "harry.ng - Software Engineer. Frontend Developer.");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.7, type: "easeInOut" }}
      className={`relative ${customClassName}`}
    >
      <>{children}</>
    </motion.div>
  );
};

export default Helmet;
