import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./mongoclient.js";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {},
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {},
};
