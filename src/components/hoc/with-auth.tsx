import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../loader";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthComponent = (props: any) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        router.push("/");
      }
    }, [status, router]);

    if (status === "loading") {
      return <Loader showLoader={true} />;
    }

    if (status === "authenticated") {
      return <WrappedComponent {...props} session={session} />;
    }

    return null;
  };

  return AuthComponent;
};

export default withAuth;
