import { Redirect } from "expo-router";
import { useAuth } from "@/hooks/useAuth";

export default function IndexPage() {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return <Redirect href="/(app)/home" />;
  }

  return <Redirect href="/(auth)/login" />;
}