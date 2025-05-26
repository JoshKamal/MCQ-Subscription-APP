import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { CssResponsiveContainer } from "@/components/ui/css-responsive-container";
import { Button } from "@/components/ui/button";
import DashboardStats from "@/components/DashboardStats";
import { Link } from "wouter";
import { Play, Download, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [_, setLocation] = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation("/");
    }
  }, [isAuthenticated, isLoading, setLocation]);

  const handleStartNewSession = () => {
    setLocation("/practice");
  };

  const handleExportData = () => {
    toast({
      title: "Export Started",
      description: "Your data is being prepared for download.",
    });
    
    // In a real application, this would trigger an API call to generate and download the export
    setTimeout(() => {
      const dummyData = {
        user: { name: user?.firstName + " " + user?.lastName, email: user?.email },
        stats: { attempted: 236, correct: 174, accuracy: "74%" }
      };
      
      const dataStr = JSON.stringify(dummyData, null, 2);
      const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
      
      const exportFileDefaultName = 'medical-mcq-data.json';
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
      
      toast({
        title: "Export Complete",
        description: "Your data has been downloaded successfully.",
      });
    }, 1500);
  };

  const handleResetData = () => {
    toast({
      title: "Are you sure?",
      description: "This will reset all your progress data and cannot be undone.",
      action: (
        <Button 
          variant="destructive" 
          onClick={() => {
            // In a real application, this would make an API call to reset user data
            toast({
              title: "Data Reset",
              description: "Your progress data has been reset.",
            });
          }}
        >
          Reset
        </Button>
      ),
    });
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
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleExportData}
          >
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button 
            variant="destructive" 
            size="sm"
            onClick={handleResetData}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Reset Data
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Welcome back, {user?.firstName || "User"}!</h3>
        
        {user && user.subscriptionStatus !== "active" && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="flex-grow">
                <h4 className="font-medium text-amber-800 mb-1">Upgrade Your Experience</h4>
                <p className="text-amber-700 text-sm">
                  {user.subscriptionPlan 
                    ? "Your subscription has expired. Renew now to continue enjoying premium features."
                    : "Subscribe now to access premium features and enhance your learning experience."}
                </p>
              </div>
              <Button asChild variant="default" size="sm">
                <Link href="/subscription">
                  {user.subscriptionPlan ? "Renew Now" : "Subscribe"}
                </Link>
              </Button>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Button 
            className="h-auto py-3 bg-blue-600 hover:bg-blue-700"
            onClick={handleStartNewSession}
          >
            <div className="flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Start New Session</span>
            </div>
          </Button>
          <Button asChild variant="outline" className="h-auto py-3">
            <Link href="/practice">
              <div className="flex items-center space-x-2">
                <i className="bi bi-journals text-lg"></i>
                <span>Practice Questions</span>
              </div>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-3">
            <Link href="/modules">
              <div className="flex items-center space-x-2">
                <i className="bi bi-grid-3x3-gap text-lg"></i>
                <span>Browse Modules</span>
              </div>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto py-3">
            <Link href="/account">
              <div className="flex items-center space-x-2">
                <i className="bi bi-person-circle text-lg"></i>
                <span>View Profile</span>
              </div>
            </Link>
          </Button>
        </div>
      </div>

      <DashboardStats />
    </CssResponsiveContainer>
  );
};

export default Dashboard;
