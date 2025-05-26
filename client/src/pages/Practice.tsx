import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { CssResponsiveContainer } from "@/components/ui/css-responsive-container";
import QuestionDisplay from "@/components/QuestionDisplay";
import { useQuery } from "@tanstack/react-query";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

const Practice = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [_, setLocation] = useLocation();
  const [selectedModule, setSelectedModule] = useState("all");

  const { data: modules, isLoading: isLoadingModules } = useQuery({
    queryKey: ["/api/modules"],
  });

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation("/");
    }
  }, [isAuthenticated, isLoading, setLocation]);

  const handleModuleChange = (value: string) => {
    setSelectedModule(value);
  };

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
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold mb-4 md:mb-0">Practice Questions</h2>
        <div className="w-full md:w-auto">
          {isLoadingModules ? (
            <Skeleton className="h-10 w-48" />
          ) : (
            <Select value={selectedModule} onValueChange={handleModuleChange}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Select Module" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Questions</SelectItem>
                {modules?.map((module: { id: string, name: string }) => (
                  <SelectItem key={module.id} value={module.id}>
                    {module.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      </div>

      <QuestionDisplay moduleId={selectedModule} />
    </CssResponsiveContainer>
  );
};

export default Practice;
