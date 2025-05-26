import { useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, FileQuestion, LineChart, Target } from "lucide-react";

const Home = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [_, setLocation] = useLocation();

  useEffect(() => {
    // Redirect authenticated users to dashboard
    if (!isLoading && isAuthenticated) {
      setLocation("/dashboard");
    }
  }, [isAuthenticated, isLoading, setLocation]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" aria-label="Loading" />
      </div>
    );
  }

  if (isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white mt-10 md:mt-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Enhance Your Medical Knowledge</h1>
              <p className="text-xl mb-8">Join our list of previous first year medical students who have used our platform to improve their clinical knowledge and exam performance.</p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <p className="text-lg">Access to 5,000+ medical MCQs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <p className="text-lg">Detailed explanations and resources</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <p className="text-lg">Performance tracking and analytics</p>
                </div>
              </div>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100" onClick={() => window.location.href = "/api/login"}>
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500" 
                alt="Medical professional studying" 
                className="rounded-lg shadow-xl max-w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <FileQuestion className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Question Bank</h3>
              <p className="text-gray-600">Over 5,000 high-quality MCQs covering all major medical topics and specialties to help you master your knowledge.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <LineChart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
              <p className="text-gray-600">Track your progress with detailed performance analytics that help identify strengths and areas for improvement.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Targeted Learning</h3>
              <p className="text-gray-600">Focus your study time efficiently with personalized recommendations based on your performance.</p>
            </div>
          </div>
        </div>
      </section>

  

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Advance Your Medical Knowledge?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of medical professionals who are already improving their clinical knowledge and exam performance.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100" onClick={() => window.location.href = "/api/login"}>
            Start Your Journey Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
