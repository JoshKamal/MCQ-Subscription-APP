import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, ChevronLeft, SkipForward } from "lucide-react";

interface Option {
  id: number;
  text: string;
}

interface Question {
  id: number;
  text: string;
  moduleId: string;
  topic?: string;
}

interface QuizCardProps {
  question: Question;
  options: Option[];
  currentQuestionIndex: number;
  totalQuestions: number;
  sessionId?: string;
  moduleName?: string;
  onNext: () => void;
  onPrev: () => void;
  onSkip: () => void;
}

const QuizCard = ({
  question,
  options,
  currentQuestionIndex,
  totalQuestions,
  sessionId,
  moduleName = "All Questions",
  onNext,
  onPrev,
  onSkip
}: QuizCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submittedAnswer, setSubmittedAnswer] = useState<{
    isCorrect: boolean;
    correctOptionId?: number;
    explanation?: string;
    slideReference?: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleOptionSelect = (optionId: number) => {
    if (!submittedAnswer) {
      setSelectedOption(optionId);
    }
  };

  const handleSubmitAnswer = async () => {
    if (!selectedOption) return;

    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/submit-answer", {
        questionId: question.id,
        selectedOptionId: selectedOption,
        sessionId
      });
      
      const result = await response.json();
      
      setSubmittedAnswer({
        isCorrect: result.isCorrect,
        correctOptionId: result.correctOptionId,
        explanation: result.explanation,
        slideReference: result.slideReference
      });
      
      if (result.isCorrect) {
        toast({
          title: "Correct!",
          description: "Good job! You answered correctly.",
          variant: "default",
        });
      } else {
        toast({
          title: "Incorrect",
          description: "Try to understand why the correct answer is different.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      toast({
        title: "Error",
        description: "Failed to submit your answer. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setSubmittedAnswer(null);
    onNext();
  };

  const getOptionClassName = (optionId: number) => {
    if (!submittedAnswer) {
      return selectedOption === optionId
        ? "bg-gray-100 border-gray-300"
        : "hover:bg-gray-50";
    }

    if (optionId === submittedAnswer.correctOptionId) {
      return "bg-green-50 border-green-300";
    }

    if (selectedOption === optionId && !submittedAnswer.isCorrect) {
      return "bg-red-50 border-red-300";
    }

    return "";
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="primary">{moduleName}</Badge>
            </div>
            <h5 className="font-medium">Question {currentQuestionIndex + 1} of {totalQuestions}</h5>
          </div>
          <Button variant="outline" size="sm" onClick={onSkip} disabled={!!submittedAnswer}>
            <SkipForward className="h-4 w-4 mr-1" />
            Skip
          </Button>
        </div>

        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent>
        <h4 className="text-lg font-medium mb-4">{question.text}</h4>
        
        <div className="space-y-3 mb-4">
          {options.map((option) => (
            <div
              key={option.id}
              className={`p-4 rounded-md border cursor-pointer transition-colors ${getOptionClassName(option.id)}`}
              onClick={() => handleOptionSelect(option.id)}
            >
              {option.text}
            </div>
          ))}
        </div>

        {!submittedAnswer && (
          <div className="flex justify-end">
            <Button 
              onClick={handleSubmitAnswer} 
              disabled={!selectedOption || isSubmitting}
              className="mt-2"
            >
              {isSubmitting ? "Submitting..." : "Submit Answer"}
            </Button>
          </div>
        )}

        {submittedAnswer && (
          <Alert variant={submittedAnswer.isCorrect ? "default" : "destructive"} className="mt-4">
            <AlertDescription>
              <div className="mb-2">
                <strong>{submittedAnswer.isCorrect ? "Correct!" : "Incorrect."}</strong>
              </div>
              {submittedAnswer.explanation && (
                <div className="mb-2">
                  <strong>Explanation:</strong> {submittedAnswer.explanation}
                </div>
              )}
              {submittedAnswer.slideReference && (
                <div className="text-sm text-muted-foreground">
                  Source: {submittedAnswer.slideReference}
                </div>
              )}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={onPrev} 
          disabled={currentQuestionIndex === 0}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        <Button 
          onClick={handleNextQuestion} 
          disabled={!submittedAnswer}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
