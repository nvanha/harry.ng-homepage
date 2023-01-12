import SpanGG from "@/components/spangg";

const SkillsSection = () => {
  return (
    <section className="section-wrapper skills-section mb-6">
      <h3 className="section-title">
        <SpanGG color="purple" />
        Skills
      </h3>
      <p>
        <span className="font-bold mr-4">Soft skills:</span>
        Team-work, critical-thinking, communication, collaboration.
      </p>
      <p>
        <span className="font-bold mr-4">Programming languages:</span>
        JavaScript, TypeScript.
      </p>
      <p>
        <span className="font-bold mr-4">Library & Framework:</span>
        ReactJS, ExpressJS.
      </p>
      <p className="sm:pl-[65.05px] sm:-indent-[65.05px]">
        <span className="font-bold mr-4">Cloud:</span>
        AWS (Amplify, Cognito, API Gateway, Lambda, AppSync, ECS, ECR, EC2,
        DynamoDB, S3 Bucket), Firebase.
      </p>
      <p>
        <span className="font-bold mr-4">Databases:</span>
        SQL, NoSQL (DynamoDB).
      </p>
      <p>
        <span className="font-bold mr-4">Additional skills:</span>
        Redux, Docker, GraphQL, Git.
      </p>
      <p className="sm:pl-[130.49px] sm:-indent-[130.49px]">
        <span className="font-bold mr-4">IDEAs & Tools:</span>
        Visual Studio Code, nvim, Postman, Bitbucket, Github, Jira, Confluence,
        Figma, Trello.
      </p>
    </section>
  );
};

export default SkillsSection;
