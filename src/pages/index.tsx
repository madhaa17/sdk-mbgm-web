import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, Loader2 } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import withAuth from "@/components/hoc/with-auth";

const loginSchema = z.object({
  identifier: z
    .string({ required_error: "Username atau email harus diisi!" })
    .min(3, "Minimal 3 karakter")
    .refine(
      (val) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || /^[a-zA-Z0-9_]+$/.test(val),
      {
        message: "Masukkan username atau email yang valid",
      }
    ),
  password: z.string({ required_error: "Password harus diisi!" }),
});

const LoginPage = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: z.infer<typeof loginSchema>) => {
      const result = await signIn("credentials", {
        redirect: false,
        ...values,
      });

      if (!result?.ok) {
        throw new Error(result?.error || "Login failed");
      }

      return result;
    },
    onSuccess: () => {
      router.push("/dashboard"); // Redirect setelah login sukses
    },
    onError: (err) => {
      const errorMessage =
        err instanceof Error ? err.message : "Invalid credentials";
      toast.error(errorMessage); // Tampilkan error tanpa redirect
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    mutate(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-card">
      <Card className="w-full max-w-md rounded-2xl border">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>

        <div className="flex justify-center mt-4">
          {theme === "light" ? (
            <Image
              src={"/assets/images/logo-bg-white.png"}
              alt="logo"
              width={150}
              height={150}
            />
          ) : (
            <Image
              src={"/assets/images/logo-2.png"}
              alt="logo"
              width={150}
              height={150}
            />
          )}
        </div>

        <CardContent className="p-6 space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="identifier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username / email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="Username / email"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                          type="password"
                          placeholder="Password"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full mt-4"
                disabled={isPending}>
                {isPending ? (
                  <Loader2 className="animate-spin mr-2" />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default withAuth(LoginPage, {
  requireAuth: false,
  requireGuest: true,
  redirectUrl: "/dashboard",
});
