import { useQuery } from "@tanstack/react-query";
import { CssResponsiveContainer } from "@/components/ui/css-responsive-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { subscriptionPlanFeatures, testimonials, faqs } from "@/lib/utils";
import { useLocation } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, StarHalf, Check, Info } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const SubscriptionOptions = () => {
  const { user } = useAuth();
  const [_, setLocation] = useLocation();
  
  const { data: plans, isLoading } = useQuery({
    queryKey: ["/api/plans"],
  });
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-amber-400 text-amber-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-amber-400 text-amber-400" />);
    }
    
    return stars;
  };
  
  const premiumPlan = plans?.find(plan => plan.id === 'premium');
  const hasPremiumAccess = user?.subscriptionPlan === 'premium';
  
  return (
    <CssResponsiveContainer>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Upgrade Your Access</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Get full access to all premium medical MCQs with our one-time payment option.</p>
        </div>
        
        {/* Payment Options */}
        <div className="max-w-3xl mx-auto mb-12">
          {isLoading ? (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <Skeleton className="h-7 w-32 mb-1" />
                <Skeleton className="h-5 w-40 mb-4" />
                <Skeleton className="h-10 w-24" />
              </div>
              <div className="p-6">
                {Array(6).fill(0).map((_, j) => (
                  <div key={j} className="flex items-center mb-3">
                    <Skeleton className="h-5 w-5 mr-2" />
                    <Skeleton className="h-5 w-full" />
                  </div>
                ))}
              </div>
              <div className="p-6 pt-0">
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          ) : (
            <Card className="shadow-lg">
              <CardHeader className="text-center bg-gradient-to-b from-primary/5 to-transparent">
                <CardTitle className="text-2xl">Full Access Pass</CardTitle>
                <CardDescription>One-time payment, lifetime access</CardDescription>
                <div className="mt-4 text-4xl font-bold">£30</div>
              </CardHeader>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Info className="w-4 h-4 mr-2 text-primary" />
                  What you'll get:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Access to all premium modules and categories</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>5,000+ high-quality medical MCQs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Detailed explanations for all questions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Comprehensive performance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Lifetime access with no recurring fees</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                {hasPremiumAccess ? (
                  <Button className="w-full" disabled>
                    You already have full access
                  </Button>
                ) : (
                  <Button className="w-full" onClick={() => setLocation("/payment/premium")}>
                    Unlock Premium Access
                  </Button>
                )}
              </CardFooter>
            </Card>
          )}
        </div>
        
        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">What Our Subscribers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-amber-400 flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-gray-500 ml-1 text-sm">• {testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <AccordionTrigger className="p-4 font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </CssResponsiveContainer>
  );
};

export default SubscriptionOptions;
