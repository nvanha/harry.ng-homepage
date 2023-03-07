import SpanGG from "@/components/spangg";

const SkillsSection = () => {
  return (
    <section className="section-wrapper skills-section mb-6">
      <h3 className="section-title">
        <SpanGG color="purple" />
        Skills
      </h3>
      <p className="mb-1 sm:pl-[calc(115.22px+16px)] sm:-indent-[calc(115.22px+16px)]">
        <span className="mr-4 font-bold">Soft skills:</span>
        Team-work, critical-thinking, communication, collaboration.
      </p>
      <p className="mb-1 sm:pl-[calc(211.23px+16px)] sm:-indent-[calc(211.23px+16px)]">
        <span className="mr-4 font-bold">Programming languages:</span>
        JavaScript, TypeScript, PHP (WordPress).
      </p>
      <p className="mb-1">
        <span className="mr-4 font-bold">Library & Framework:</span>
        ReactJS, ExpressJS, WordPress.
      </p>
      <p className="mb-1 sm:pl-[calc(57.61px+16px)] sm:-indent-[calc(57.61px+16px)]">
        <span className="mr-4 font-bold">Cloud:</span>
        AWS (Amplify, Cognito, API Gateway, Lambda, AppSync, ECS, ECR, EC2,
        DynamoDB, S3 Bucket), Firebase.
      </p>
      <p className="mb-1">
        <span className="mr-4 font-bold">Databases:</span>
        SQL, NoSQL (DynamoDB).
      </p>
      <p className="mb-1 sm:pl-[calc(172.83px+16px)] sm:-indent-[calc(172.83px+16px)]">
        <span className="mr-4 font-bold">Additional skills:</span>
        Redux, Docker, GraphQL, Git, Create custom Template & Plugin in
        WordPress.
      </p>
      <p className="sm:pl-[calc(134.42px+16px)] sm:-indent-[calc(134.42px+16px)]">
        <span className="mr-4 font-bold">IDEAs & Tools:</span>
        Visual Studio Code, nvim, Postman, Bitbucket, Github, Jira, Confluence,
        Figma, Trello, Asana.
      </p>
    </section>
  );
};

export default SkillsSection;
