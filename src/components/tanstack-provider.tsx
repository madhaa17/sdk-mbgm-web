"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function TanstackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
