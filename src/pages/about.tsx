import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { NextAuthPage } from "@/types/Auth.types";

const About: NextAuthPage = ({ user }) => {
  console.log({ user });
  return (
    <>
      <h1>About</h1>
      <h3>{user.given_name}</h3>
    </>
  );
};

export default About;

export const getServerSideProps = withPageAuthRequired();
