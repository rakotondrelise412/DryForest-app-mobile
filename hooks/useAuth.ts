import { useEffect, useState } from "react";
import { getToken } from "@/utils/storage";

export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let active = true;

    const checkAuth = async () => {
      try {
        const token = await getToken();

        if (active) {
          setIsAuthenticated(Boolean(token?.trim()));
        }
      } catch {
        if (active) {
          setIsAuthenticated(false);
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    void checkAuth();

    return () => {
      active = false;
    };
  }, []);

  return {
    isLoading,
    isAuthenticated,
  };
}