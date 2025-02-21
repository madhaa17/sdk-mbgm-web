import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <Button
      variant={"destructive"}
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }>
      <LogOut /> Logout
    </Button>
  );
};

export default Logout;
