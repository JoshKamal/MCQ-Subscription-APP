import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { CssResponsiveContainer } from "@/components/ui/css-responsive-container";
import PaymentForm from "@/components/PaymentForm";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const Payment = () => {
  const { planId } = useParams();
  const { isAuthenticated, isLoading } = useAuth();
  const [_, setLocation] = useLocation();

  const { data: plans, isLoading: isLoadingPlans } = useQuery({
    queryKey: ["/api/plans"],
  });
  
  const selectedPlan = plans?.find((plan: any) => plan.id === planId);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation("/");
    }
    
    if (!isLoading && isAuthenticated && !planId) {
      setLocation("/subscription");
    }
  }, [isAuthenticated, isLoading, planId, setLocation]);

  if (isLoading || isLoadingPlans) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" aria-label="Loading" />
      </div>
    );
  }

  if (!isAuthenticated || !planId) {
    return null; // Will redirect in useEffect
  }

  if (!selectedPlan) {
    return (
      <CssResponsiveContainer>
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Plan Not Found</h2>
          <p className="text-gray-600 mb-6">The subscription plan you're looking for doesn't exist.</p>
          <Button asChild>
            <a href="/subscription">View Available Plans</a>
          </Button>
        </div>
      </CssResponsiveContainer>
    );
  }

  return (
    <CssResponsiveContainer>
      <div className="mb-6">
        <Button
          variant="ghost" 
          className="mb-4"
          onClick={() => setLocation("/subscription")}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Plans
        </Button>
        
        <h2 className="text-3xl font-bold">Complete Your Purchase</h2>
        <p className="text-muted-foreground mt-2">
          One-time payment of £30 for lifetime access to all premium modules.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {isLoadingPlans ? (
          <div className="space-y-4">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        ) : (
          <PaymentForm plan={selectedPlan} />
        )}
      </div>
    </CssResponsiveContainer>
  );
};

export default Payment;
