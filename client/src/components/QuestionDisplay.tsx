import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import QuizCard from '@/components/QuizCard';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

interface QuestionDisplayProps {
  moduleId?: string;
}

const QuestionDisplay = ({ moduleId = 'all' }: QuestionDisplayProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sessionId, setSessionId] = useState<string | undefined>();
  const { toast } = useToast();
  
  const { data: questions, isLoading } = useQuery({
    queryKey: ['/api/questions', moduleId],
    queryFn: async () => {
      const url = moduleId !== 'all' 
        ? `/api/questions?moduleId=${moduleId}` 
        : '/api/questions';
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch questions');
      return res.json();
    }
  });
  
  const { data: modules } = useQuery({
    queryKey: ['/api/modules'],
  });
  
  // Start a new study session when component mounts
  useEffect(() => {
    const startSession = async () => {
      try {
        const response = await apiRequest('POST', '/api/sessions', {
          moduleId: moduleId !== 'all' ? moduleId : undefined
        });
        const session = await response.json();
        setSessionId(session.id);
      } catch (error) {
        console.error('Error starting session:', error);
        toast({
          title: 'Session Error',
          description: 'Failed to start a study session.',
          variant: 'destructive',
        });
      }
    };
    
    startSession();
    
    // Clean up on unmount by ending the session
    return () => {
      if (sessionId) {
        apiRequest('PATCH', `/api/sessions/${sessionId}`, {
          endedAt: new Date()
        }).catch(console.error);
      }
    };
  }, [moduleId]);
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < (questions?.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleSkipQuestion = () => {
    handleNextQuestion();
  };
  
  const getCurrentModuleName = () => {
    if (moduleId === 'all') return 'All Questions';
    const currentModule = modules?.find(m => m.id === moduleId);
    return currentModule?.name || 'Custom Module';
  };
  
  if (isLoading) {
    return (
      <Card className="shadow-md mb-6">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-3">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-8 w-20" />
          </div>
          <Skeleton className="h-3 w-full mb-6" />
          <Skeleton className="h-8 w-full mb-6" />
          <div className="space-y-3 mb-6">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (!questions || questions.length === 0) {
    return (
      <Card className="shadow-md mb-6">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-medium mb-2">No Questions Available</h3>
          <p className="text-gray-500 mb-4">There are no questions available for this module.</p>
          <Button asChild>
            <a href="/modules">Browse Modules</a>
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  
  return (
    <>
      <QuizCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        sessionId={sessionId}
        moduleName={getCurrentModuleName()}
        onNext={handleNextQuestion}
        onPrev={handlePrevQuestion}
        onSkip={handleSkipQuestion}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h5 className="text-lg font-medium mb-4"><i className="bi bi-graph-up mr-2"></i>Current Session</h5>
            <div className="flex justify-between mt-3">
              <div>
                <h6 className="text-gray-500 mb-1">Question</h6>
                <h3>{currentQuestionIndex + 1} of {questions.length}</h3>
              </div>
              <div>
                <h6 className="text-gray-500 mb-1">Progress</h6>
                <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="h-2 w-24 mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h5 className="text-lg font-medium mb-4"><i className="bi bi-info-circle mr-2"></i>Current Topic</h5>
            <div className="mt-3">
              <h6 className="text-gray-500 mb-1">Topic</h6>
              <h4>{currentQuestion.question.topic || getCurrentModuleName()}</h4>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default QuestionDisplay;
