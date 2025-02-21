import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../loader";

interface AuthGuardOptions {
  requireAuth?: boolean;
  requireGuest?: boolean;
  redirectUrl?: string;
}

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: AuthGuardOptions = {}
) => {
  const {
    requireAuth = true,
    requireGuest = false,
    redirectUrl = "/",
  } = options;

  const AuthComponent: React.FC<P> = (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "loading") return;

      const isAuthenticated = !!session;

      if (requireAuth && !isAuthenticated) {
        router.push(redirectUrl);
        return;
      }

      if (requireGuest && isAuthenticated) {
        router.push("/dashboard");
        return;
      }
    }, [session, status, router]);

    if (status === "loading") {
      return <Loader showLoader={true} />;
    }

    const isAuthenticated = !!session;

    if (requireAuth && !isAuthenticated) {
      return null;
    }

    if (requireGuest && isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  // Preserve the display name for debugging
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  AuthComponent.displayName = `withAuth(${wrappedComponentName})`;

  return AuthComponent;
};

export default withAuth;
