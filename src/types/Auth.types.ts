import { Claims } from "@auth0/nextjs-auth0";
import { NextPage } from "next";

export type NextAuthPage<P = {}> = NextPage<P & { user?: Claims }>;
