import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/app/lib/db";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, user }) {
            if (session.user) {
                session.user.role = user.role;
            }
            return session;
        },
    },
};

export default authOptions;