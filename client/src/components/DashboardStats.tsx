import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { calculateAccuracy, formatDate } from "@/lib/utils";
import { 
  Activity, 
  BarChart3,
  Book, 
  CheckCircle, 
  Clock, 
  LineChart,
  Target 
} from "lucide-react";

const DashboardStats = () => {
  const { data: statsData, isLoading } = useQuery({
    queryKey: ["/api/user/stats"],
  });

  const renderStatsCards = () => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <Skeleton className="h-7 w-64 mb-3" />
              <div className="flex justify-between mb-3">
                <Skeleton className="h-12 w-24" />
                <Skeleton className="h-12 w-24" />
                <Skeleton className="h-12 w-24" />
              </div>
              <Skeleton className="h-5 w-full mb-2" />
              <Skeleton className="h-3 w-full" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Skeleton className="h-7 w-64 mb-3" />
              <Skeleton className="h-24 w-full" />
            </CardContent>
          </Card>
        </div>
      );
    }

    if (!statsData || !statsData.stats) {
      return (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">No statistics available yet. Complete some questions to see your performance data.</p>
          </CardContent>
        </Card>
      );
    }

    const { stats, recentAttempts, recentSessions } = statsData;
    const accuracyPercentage = stats.accuracy;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5" />
              Overall Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-4">
              <div>
                <h6 className="text-muted-foreground mb-1">Attempted</h6>
                <h3 className="text-2xl font-bold">{stats.totalAttempted}</h3>
              </div>
              <div>
                <h6 className="text-muted-foreground mb-1">Correct</h6>
                <h3 className="text-2xl font-bold">{stats.totalCorrect}</h3>
              </div>
              <div>
                <h6 className="text-muted-foreground mb-1">Accuracy</h6>
                <h3 className="text-2xl font-bold">{accuracyPercentage.toFixed(0)}%</h3>
              </div>
            </div>
            <div>
              <h6 className="mb-2">Accuracy Rate</h6>
              <Progress value={accuracyPercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentAttempts && recentAttempts.length > 0 ? (
              <div className="space-y-3">
                {recentAttempts.slice(0, 3).map((attempt: any) => (
                  <div key={attempt.id} className="flex items-start border-b border-border pb-2">
                    {attempt.isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    ) : (
                      <Target className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                    )}
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <p className="font-medium">Question #{attempt.questionId}</p>
                        <p className="text-xs text-muted-foreground">{formatDate(attempt.attemptedAt)}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {attempt.isCorrect ? "Answered correctly" : "Answered incorrectly"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">No recent activity</p>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderFocusTopics = () => {
    if (isLoading) {
      return (
        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-7 w-52" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-24 w-full" />
          </CardContent>
        </Card>
      );
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5" />
            Topics to Focus On
          </CardTitle>
        </CardHeader>
        <CardContent>
          {statsData && statsData.recentAttempts && statsData.recentAttempts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                <h4 className="font-medium text-red-800 mb-1">Cardiovascular System</h4>
                <p className="text-sm text-red-600">Accuracy: 45%</p>
                <Progress value={45} className="h-1.5 mt-2 bg-red-100" indicatorClassName="bg-red-500" />
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <h4 className="font-medium text-amber-800 mb-1">Respiratory System</h4>
                <p className="text-sm text-amber-600">Accuracy: 62%</p>
                <Progress value={62} className="h-1.5 mt-2 bg-amber-100" indicatorClassName="bg-amber-500" />
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <h4 className="font-medium text-amber-800 mb-1">Neurology</h4>
                <p className="text-sm text-amber-600">Accuracy: 68%</p>
                <Progress value={68} className="h-1.5 mt-2 bg-amber-100" indicatorClassName="bg-amber-500" />
              </div>
            </div>
          ) : (
            <p className="text-center text-muted-foreground">Complete more questions to get recommendations</p>
          )}
        </CardContent>
      </Card>
    );
  };

  const renderTopicAnalysis = () => {
    if (isLoading) {
      return (
        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-7 w-40" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-32 w-full" />
          </CardContent>
        </Card>
      );
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Book className="mr-2 h-5 w-5" />
            Topic Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          {statsData && statsData.recentAttempts && statsData.recentAttempts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium text-blue-800">FOCS</h4>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">85%</span>
                </div>
                <p className="text-sm text-blue-600 mb-2">Fundamentals of Clinical Science</p>
                <Progress value={85} className="h-1.5 bg-blue-100" indicatorClassName="bg-blue-500" />
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium text-green-800">BCR</h4>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">76%</span>
                </div>
                <p className="text-sm text-green-600 mb-2">Blood, Cardiovascular, Respiratory</p>
                <Progress value={76} className="h-1.5 bg-green-100" indicatorClassName="bg-green-500" />
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium text-purple-800">MSK</h4>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">62%</span>
                </div>
                <p className="text-sm text-purple-600 mb-2">Musculoskeletal System</p>
                <Progress value={62} className="h-1.5 bg-purple-100" indicatorClassName="bg-purple-500" />
              </div>
            </div>
          ) : (
            <p className="text-center text-muted-foreground">Complete more questions to see topic analysis</p>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {renderStatsCards()}
      {renderFocusTopics()}
      {renderTopicAnalysis()}
    </div>
  );
};

export default DashboardStats;
