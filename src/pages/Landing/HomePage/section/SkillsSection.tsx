import SpanGG from "@/components/spangg";

const SkillsSection = () => {
  return (
    <section className="section-wrapper skills-section mb-6">
      <h3 className="section-title">
        <SpanGG color="purple" />
        Skills
      </h3>
      <p className="mb-1">
        <span className="mr-4 font-bold">Soft skills:</span>
        Team-work, critical-thinking, communication, collaboration.
      </p>
      <p className="mb-1">
        <span className="mr-4 font-bold">Programming languages:</span>
        JavaScript, TypeScript.
      </p>
      <p className="mb-1">
        <span className="mr-4 font-bold">Library & Framework:</span>
        ReactJS, ExpressJS.
      </p>
      <p className="sm:pl-[65.05px] sm:-indent-[65.05px]">
        <span className="mr-4 font-bold">Cloud:</span>
        AWS (Amplify, Cognito, API Gateway, Lambda, AppSync, ECS, ECR, EC2,
        DynamoDB, S3 Bucket), Firebase.
      </p>
      <p className="mb-1">
        <span className="mr-4 font-bold">Databases:</span>
        SQL, NoSQL (DynamoDB).
      </p>
      <p className="mb-1">
        <span className="mr-4 font-bold">Additional skills:</span>
        Redux, Docker, GraphQL, Git.
      </p>
      <p className="sm:pl-[130.49px] sm:-indent-[130.49px]">
        <span className="mr-4 font-bold">IDEAs & Tools:</span>
        Visual Studio Code, nvim, Postman, Bitbucket, Github, Jira, Confluence,
        Figma, Trello.
      </p>
    </section>
  );
};

export default SkillsSection;
