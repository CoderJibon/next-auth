"use client";
import { useSession } from "next-auth/react";
import React from "react";

function team() {
  const data = useSession();
  return <div></div>;
}

export default team;
