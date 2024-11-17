import { getServerSession } from "next-auth";
import { authOptions } from "./helper/authOptions.js";

export default async function Home() {
  const data = await getServerSession(authOptions);
  console.log(data);
  return <div></div>;
}
