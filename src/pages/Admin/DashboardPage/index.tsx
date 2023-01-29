import Helmet from "@/components/helmet";

const DashboardPage = () => {
  return (
    <Helmet title="Dashboard . CMS" customClassName="p-14 dashboard-page">
      <h2 className="text-4xl font-bold font-poppins">
        Welcome to Harry.ng CMS 👋
      </h2>
      <p className="mt-6 font-medium text-colorSecondaryDark max-w-xl">
        We hope you are making progress on your project! Feel free to read the
        latest news about Harry.ng. We are giving our best to improve the
        product based on your feedback.
      </p>
    </Helmet>
  );
};

export default DashboardPage;
