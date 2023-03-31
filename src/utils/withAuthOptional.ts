import { Claims, getSession } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

export const withAuthOptional = <P extends { [key: string]: any }>(
  serverSideProps?: GetServerSideProps<P & { user?: Claims }>
) => {
  const sessionServerProps: GetServerSideProps<P> = async (context) => {
    const { req, res } = context;
    const session = await getSession(req, res);
    const user = session?.user ?? null;
    let ret: any = { props: {} };
    if (serverSideProps) {
      ret = await serverSideProps(context);
    }
    if (ret.props instanceof Promise) {
      return {
        ...ret,
        props: ret.props.then((props: any) => ({
          user,
          ...props,
        })),
      };
    }
    return { ...ret, props: { user, ...ret.props } };
  };

  return sessionServerProps;
};
