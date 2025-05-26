import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { CssResponsiveContainer } from "@/components/ui/css-responsive-container";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PlayCircle, Lock } from "lucide-react";
import { calculateAccuracy } from "@/lib/utils";

interface Module {
  id: string;
  name: string;
  description: string;
  isPremium: boolean;
}

interface ModuleStats {
  total: number;
  completed: number;
  correct: number;
}

const Modules = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [_, setLocation] = useLocation();
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const { data: modules, isLoading: isLoadingModules } = useQuery({
    queryKey: ["/api/modules"],
  });

  const { data: stats } = useQuery({
    queryKey: ["/api/user/stats"],
  });

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation("/");
    }
  }, [isAuthenticated, isLoading, setLocation]);

  const handleStartModule = (moduleId: string) => {
    setLocation(`/practice?module=${moduleId}`);
  };

  const handleFilterChange = (moduleId: string, filter: string) => {
    setSelectedModule(moduleId);
    setSelectedFilter(filter);
  };

  // Mock module stats for UI display
  const moduleStats: Record<string, ModuleStats> = {
    focs: { total: 120, completed: 87, correct: 64 },
    bcr: { total: 150, completed: 42, correct: 31 },
    msk: { total: 100, completed: 25, correct: 18 },
    anatomy: { total: 130, completed: 35, correct: 29 },
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
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Module Practice</h2>
        <p className="text-muted-foreground mt-2">
          Select a module to focus your practice on specific topics or specialties.
        </p>
      </div>

      <Tabs defaultValue="modules" className="space-y-6">
        <TabsList>
          <TabsTrigger value="modules">Subject Modules</TabsTrigger>
          <TabsTrigger value="custom">Custom Practice</TabsTrigger>
        </TabsList>

        <TabsContent value="modules" className="space-y-6">
          {isLoadingModules ? (
            Array(4).fill(0).map((_, i) => (
              <Card key={i} className="shadow-md">
                <CardHeader className="pb-2">
                  <Skeleton className="h-6 w-44 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-3">
                    <div className="space-x-2">
                      <Skeleton className="h-8 w-24 inline-block" />
                      <Skeleton className="h-8 w-24 inline-block" />
                      <Skeleton className="h-8 w-24 inline-block" />
                      <Skeleton className="h-8 w-24 inline-block" />
                    </div>
                    <Skeleton className="h-8 w-32" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            modules?.map((module: Module) => {
              const stats = moduleStats[module.id] || { total: 0, completed: 0, correct: 0 };
              const accuracy = calculateAccuracy(stats.correct, stats.completed);
              const isPremiumLocked = module.isPremium && (!user.subscriptionPlan || user.subscriptionStatus !== "active");

              return (
                <Card key={module.id} className="shadow-md">
                  <CardHeader className={`pb-2 ${
                    module.id === "focs" ? "bg-blue-50" : 
                    module.id === "bcr" ? "bg-green-50" :
                    module.id === "msk" ? "bg-purple-50" :
                    "bg-orange-50"
                  }`}>
                    <div className="flex justify-between items-center">
                      <CardTitle>{module.name}</CardTitle>
                      {module.isPremium && (
                        <Badge variant={isPremiumLocked ? "outline" : "secondary"}>
                          {isPremiumLocked ? <><Lock className="h-3 w-3 mr-1" /> Premium</> : "Premium"}
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="space-x-2">
                        <Button 
                          size="sm" 
                          variant={selectedModule === module.id && selectedFilter === "all" ? "default" : "outline"}
                          onClick={() => handleFilterChange(module.id, "all")}
                        >
                          All Questions
                        </Button>
                        <Button 
                          size="sm" 
                          variant={selectedModule === module.id && selectedFilter === "correct" ? "default" : "outline"}
                          className={selectedModule === module.id && selectedFilter === "correct" ? "" : "text-green-600 border-green-200 hover:bg-green-50"}
                          onClick={() => handleFilterChange(module.id, "correct")}
                        >
                          Correct
                        </Button>
                        <Button 
                          size="sm" 
                          variant={selectedModule === module.id && selectedFilter === "incorrect" ? "default" : "outline"}
                          className={selectedModule === module.id && selectedFilter === "incorrect" ? "" : "text-red-600 border-red-200 hover:bg-red-50"}
                          onClick={() => handleFilterChange(module.id, "incorrect")}
                        >
                          Incorrect
                        </Button>
                        <Button 
                          size="sm" 
                          variant={selectedModule === module.id && selectedFilter === "unattempted" ? "default" : "outline"}
                          className={selectedModule === module.id && selectedFilter === "unattempted" ? "" : "text-gray-600 border-gray-200 hover:bg-gray-50"}
                          onClick={() => handleFilterChange(module.id, "unattempted")}
                        >
                          Unseen
                        </Button>
                      </div>
                      <div className="text-right text-sm">
                        <div><strong>Total:</strong> <span>{stats.total}</span></div>
                        <div><strong>Completed:</strong> <span>{stats.completed}</span></div>
                        <div><strong>Accuracy:</strong> <span>{accuracy}%</span></div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end border-t pt-4">
                    <Button onClick={() => handleStartModule(module.id)} disabled={isPremiumLocked}>
                      {isPremiumLocked ? (
                        <>
                          <Lock className="mr-2 h-4 w-4" />
                          Unlock with Premium
                        </>
                      ) : (
                        <>
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Start Module
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })
          )}
        </TabsContent>

        <TabsContent value="custom">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Custom Practice</CardTitle>
              <CardDescription>
                Create a personalized practice session based on your preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Coming soon! You'll be able to create custom practice sessions with filters for topics, difficulty levels, and more.
              </p>
              <div className="flex justify-center">
                <Button disabled>Create Custom Session</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </CssResponsiveContainer>
  );
};

export default Modules;
