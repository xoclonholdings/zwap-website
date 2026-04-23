import { useCallback, useMemo, useState } from "react";

const ADMIN_SESSION_KEY = "zwap_admin_session";

export default function useAdminAuth() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(ADMIN_SESSION_KEY) === "true";
  });

  const signIn = useCallback(async ({ email, password }) => {
    const cleanEmail = String(email || "").trim().toLowerCase();
    const cleanPassword = String(password || "").trim();

    if (!cleanEmail || !cleanPassword) {
      setAuthError("Enter your admin email and password.");
      return false;
    }

    setIsAuthenticating(true);
    setAuthError("");

    try {
      const response = await fetch("/.netlify/functions/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: cleanEmail,
          password: cleanPassword,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || "Admin sign in failed.");
      }

      if (typeof window !== "undefined") {
        localStorage.setItem(ADMIN_SESSION_KEY, "true");
      }

      setIsAdminAuthenticated(true);
      setAuthError("");
      return true;
    } catch (error) {
      setIsAdminAuthenticated(false);
      setAuthError(error.message || "Unable to sign in.");
      return false;
    } finally {
      setIsAuthenticating(false);
    }
  }, []);

  const signOut = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(ADMIN_SESSION_KEY);
    }

    setIsAdminAuthenticated(false);
    setAuthError("");
  }, []);

  return useMemo(
    () => ({
      isAdminAuthenticated,
      isAuthenticating,
      authError,
      signIn,
      signOut,
    }),
    [isAdminAuthenticated, isAuthenticating, authError, signIn, signOut]
  );
}