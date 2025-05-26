import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  annualPrice?: number;
  features: Feature[];
  isPopular?: boolean;
  isAnnual?: boolean;
  isCurrentPlan?: boolean;
}

const PricingCard = ({
  id,
  name,
  description,
  price,
  annualPrice,
  features,
  isPopular = false,
  isAnnual = false,
  isCurrentPlan = false,
}: PricingCardProps) => {
  const displayPrice = isAnnual && annualPrice ? annualPrice : price;
  
  return (
    <Card className={`overflow-hidden border ${
      isPopular ? "border-2 border-primary relative transform scale-105" : "transition-all hover:shadow-xl hover:-translate-y-1"
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-bold">
          POPULAR
        </div>
      )}
      <CardHeader className={`p-6 ${
        isPopular 
          ? "bg-primary bg-opacity-10 border-b border-primary" 
          : "bg-gray-50 border-b border-gray-200"
      }`}>
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-gray-800">{formatCurrency(displayPrice)}</span>
          <span className="text-gray-500 ml-1">/{isAnnual ? 'year' : 'month'}</span>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start ${feature.included ? '' : 'text-gray-400'}`}>
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-gray-300 mt-0.5 mr-2 flex-shrink-0" />
              )}
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {isCurrentPlan ? (
          <Button
            className="w-full"
            variant="outline"
            disabled
          >
            Current Plan
          </Button>
        ) : (
          <Link href={`/payment/${id}`}>
            <Button
              className="w-full"
              variant={isPopular ? "default" : "outline"}
            >
              Select {name}
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
