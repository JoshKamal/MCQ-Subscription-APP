import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Practice from "@/pages/Practice";
import Modules from "@/pages/Modules";
import Account from "@/pages/Account";
import Subscription from "@/pages/Subscription";
import Payment from "@/pages/Payment";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useLocation } from "wouter";

function PrivateRoute({ component: Component, ...rest }: any) {
  const { isAuthenticated, isLoading } = useAuth();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Only redirect after we've checked authentication
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

  return isAuthenticated ? <Component {...rest} /> : null;
}

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard">
        {(params) => <PrivateRoute component={Dashboard} params={params} />}
      </Route>
      <Route path="/practice">
        {(params) => <PrivateRoute component={Practice} params={params} />}
      </Route>
      <Route path="/modules">
        {(params) => <PrivateRoute component={Modules} params={params} />}
      </Route>
      <Route path="/account">
        {(params) => <PrivateRoute component={Account} params={params} />}
      </Route>
      <Route path="/subscription">
        {(params) => <PrivateRoute component={Subscription} params={params} />}
      </Route>
      <Route path="/payment/:planId">
        {(params) => <PrivateRoute component={Payment} params={params} />}
      </Route>
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AppRouter />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
