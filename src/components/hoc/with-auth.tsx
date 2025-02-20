import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../loader";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthComponent = (props: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        router.push("/"); // Redirect if token is missing
      } else {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    }, [router]);

    if (isLoading) {
      return <Loader showLoader={true} />;
    }

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    }

    return null; // Prevent rendering if not authenticated
  };

  return AuthComponent;
};

export default withAuth;
