import { homeStyles } from "../styles";

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.content}>
        <h1 className={homeStyles.title}>Hello, World!</h1>
        <p className={homeStyles.description}>
          Ready to get started? <span className={homeStyles.bold}>Next.js</span>{" "}
          is ready for you.
        </p>
        <p className={homeStyles.italic}>
          Uses <span className={homeStyles.bold}>PandaCSS</span> for styling.
        </p>
      </div>
    </div>
  );
}
