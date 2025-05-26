import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useLocation } from "wouter";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, Lock } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Make sure to call loadStripe outside of a component's render to avoid
// recreating the Stripe object on every render
let stripePromise: any = null;
if (import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
}

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  postcode: z.string().min(2, "Postcode is required"),
  country: z.string().min(2, "Country is required"),
  termsAgreed: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface Plan {
  id: string;
  name: string;
  price: number;
  annualPrice?: number;
}

interface PaymentFormProps {
  plan: Plan;
}

// Checkout form component that uses the Elements context
const CheckoutForm = ({ plan }: PaymentFormProps) => {
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  
  // Form definition
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      city: "",
      postcode: "",
      country: "US",
      termsAgreed: false,
    },
  });
  
  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    if (!stripe || !elements) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin + "/dashboard",
        },
      });
      
      if (error) {
        toast({
          title: "Payment Failed",
          description: error.message || "An unexpected error occurred.",
          variant: "destructive",
        });
      }
      // On successful payment, the user is redirected to the return_url
    } catch (error: any) {
      toast({
        title: "Payment Error",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Order Summary</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">
              {plan.name} Plan (One-time payment)
            </span>
            <span className="font-medium">
              {formatCurrency(plan.price, 'GBP')}
            </span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between items-center">
            <span className="font-bold">Total</span>
            <span className="font-bold">
              {formatCurrency(plan.price, 'GBP')}
            </span>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            This is a one-time payment that gives you lifetime access to all premium modules.
          </div>
        </div>
        
        <h3 className="text-lg font-medium text-gray-800 mb-4">Payment Details</h3>
        
        <PaymentElement />
        
        <h3 className="text-lg font-medium text-gray-800 mb-4 mt-6">Billing Information</h3>
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name on Card</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="CA">Canada</SelectItem>
                  <SelectItem value="GB">United Kingdom</SelectItem>
                  <SelectItem value="AU">Australia</SelectItem>
                  <SelectItem value="IN">India</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Main St" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="New York" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postcode</FormLabel>
                <FormControl>
                  <Input placeholder="BT269GT" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="termsAgreed"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 mb-6">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        
        <div className="flex justify-between items-center">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => setLocation("/subscription")}
          >
            Back to Plans
          </Button>
          <Button 
            type="submit" 
            disabled={isSubmitting || !stripe || !elements}
          >
            Complete Payment
          </Button>
        </div>
      </form>
    </Form>
  );
};

// Wrapper component that initializes Stripe and gets the client secret
const PaymentForm = ({ plan }: PaymentFormProps) => {
  const [clientSecret, setClientSecret] = useState("");
  const { toast } = useToast();
  
  useEffect(() => {
    if (!stripePromise) {
      toast({
        title: "Configuration Error",
        description: "Stripe API key is missing. Please contact support.",
        variant: "destructive",
      });
      return;
    }
    
    const createPaymentIntent = async () => {
      try {
        const response = await apiRequest("POST", "/api/create-payment-intent", {
          planId: plan.id,
        });
        
        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (error: any) {
        console.error("Error creating payment intent:", error);
        toast({
          title: "Error",
          description: error.message || "Failed to set up payment. Please try again.",
          variant: "destructive",
        });
      }
    };
    
    createPaymentIntent();
  }, [plan.id, toast]);
  
  if (!clientSecret || !stripePromise) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" aria-label="Loading" />
      </div>
    );
  }
  
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-800">Complete Your Purchase</h2>
        <p className="text-gray-600">Enter your payment details to unlock all premium modules</p>
      </CardHeader>
      <CardContent>
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm plan={plan} />
        </Elements>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">Your payment is secure. We use encryption to protect your personal information.</p>
          <div className="flex justify-center items-center mt-2 text-gray-400 text-sm">
            <Lock className="h-4 w-4 mr-1" />
            <span>Secure Payment Processing</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;
