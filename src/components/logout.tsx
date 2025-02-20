import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { apiToken } from "@/models/api";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();
  const handleLogout = () => {
    apiToken.delete();
    router.push("/");
  };

  return (
    <Button variant={"destructive"} onClick={handleLogout}>
      <LogOut /> Logout
    </Button>
  );
};

export default Logout;
