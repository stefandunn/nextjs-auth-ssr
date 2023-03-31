import { NextAuthPage } from "@/types/Auth.types";
import styles from "@/styles/Account.module.css";
import Link from "next/link";
import { withAuthRequired } from "@/utils/withAuthRequired";

type AboutProps = {
  title: string;
};

const About: NextAuthPage<AboutProps> = ({ user, title }) => (
  <main className={styles.main}>
    <h1>{title}</h1>
    <h3 style={{ marginTop: 16 }}>Name</h3>
    <p>{user.given_name}</p>
    <h3 style={{ marginTop: 16 }}>User JSON</h3>
    <pre style={{ fontSize: "1rem", marginBottom: 32 }}>
      {JSON.stringify(user, null, 2)}
    </pre>
    <Link
      href="/"
      style={{
        display: "inline-block",
        padding: "1rem 4rem",
        backgroundColor: "#1387a7",
        color: "white",
        borderRadius: 8,
        boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
        fontFamily: "var(--font-mono)",
      }}
    >
      &lt; Back to home
    </Link>
  </main>
);

export default About;

export const getServerSideProps = withAuthRequired<AboutProps>(async () => ({
  props: {
    title: "Account page!",
  },
}));
