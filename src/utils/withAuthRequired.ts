import { Claims, getSession } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

export const getLoginUrl = (): string => {
  return process.env.NEXT_PUBLIC_AUTH0_LOGIN || "/api/auth/login";
};

export const withAuthRequired = <P extends { [key: string]: any }>(
  serverSideProps?: GetServerSideProps<P>,
  returnTo?: string
) => {
  const sessionServerProps: GetServerSideProps<P & { user: Claims }> = async (
    context
  ) => {
    const { req, res } = context;
    const session = await getSession(req, res);
    const user = session?.user ?? null;
    if (!user) {
      return {
        redirect: {
          destination: `${getLoginUrl()}?returnTo=${encodeURIComponent(
            returnTo || context.resolvedUrl
          )}`,
          permanent: false,
        },
      };
    }
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
