import { authOptions } from "@/app/helper/authOptions.js";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
