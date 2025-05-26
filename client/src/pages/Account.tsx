import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { CssResponsiveContainer } from "@/components/ui/css-responsive-container";
import UserProfile from "@/components/UserProfile";

const Account = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [_, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation("/");
    }
  }, [isAuthenticated, isLoading, setLocation]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" aria-label="Loading" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <CssResponsiveContainer>
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Account Settings</h2>
        <p className="text-muted-foreground mt-2">
          Manage your profile, subscription, and preferences.
        </p>
      </div>

      <UserProfile />
    </CssResponsiveContainer>
  );
};

export default Account;
