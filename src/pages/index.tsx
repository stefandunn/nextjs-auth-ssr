import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Claims } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { NextAuthPage } from "@/types/Auth.types";
import { withPageAuthOptional } from "@/utils/withPageAuthOptional";

const inter = Inter({ subsets: ["latin"] });
type PageProps = {
  age?: number;
};

const Home: NextAuthPage<PageProps> = ({ user, age = 32 }) => {
  console.log({ user, age });
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {user ? (
          <Link
            href="/api/auth/logout"
            prefetch={false}
            style={{
              display: "inline-block",
              padding: "1rem 4rem",
              backgroundColor: "coral",
              borderRadius: 8,
              boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Logout
          </Link>
        ) : (
          <Link
            href="/api/auth/login"
            prefetch={false}
            style={{
              display: "inline-block",
              padding: "1rem 4rem",
              backgroundColor: "forestgreen",
              color: "white",
              borderRadius: 8,
              boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Login
          </Link>
        )}
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps = withPageAuthOptional<PageProps>(async () => {
  return {
    props: {
      age: 12,
    },
  };
});
