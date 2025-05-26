import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDate, formatCurrency } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const profileFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  specialization: z.string().optional(),
});

const passwordFormSchema = z.object({
  currentPassword: z.string().min(8, "Password must be at least 8 characters"),
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;
type PasswordFormValues = z.infer<typeof passwordFormSchema>;

const UserProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  
  const { data: userStats, isLoading: isLoadingStats } = useQuery({
    queryKey: ["/api/user/stats"],
  });
  
  const { data: userPayments, isLoading: isLoadingPayments } = useQuery({
    queryKey: ["/api/user/payments"],
  });
  
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      specialization: user?.specialization || "",
    },
  });
  
  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  
  const onProfileSubmit = async (data: ProfileFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("PATCH", "/api/user/profile", data);
      queryClient.invalidateQueries({ queryKey: ["/api/auth/user"] });
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Update Failed",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const renderSubscriptionStatus = () => {
    if (!user?.subscriptionStatus) return "No Active Subscription";
    
    switch (user.subscriptionStatus) {
      case "active":
        return (
          <span className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full">
            Active
          </span>
        );
      case "trialing":
        return (
          <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
            Trial
          </span>
        );
      case "canceled":
        return (
          <span className="text-sm px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
            Canceled
          </span>
        );
      case "past_due":
        return (
          <span className="text-sm px-3 py-1 bg-amber-100 text-amber-800 rounded-full">
            Past Due
          </span>
        );
      default:
        return (
          <span className="text-sm px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
            {user.subscriptionStatus}
          </span>
        );
    }
  };
  
  return (
    <div className="max-w-6xl mx-auto">
      {/* Profile and Subscription Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Profile Card */}
        <Card className="shadow-md p-6">
          <div className="flex flex-col items-center text-center mb-4">
            <Avatar className="w-24 h-24 mb-4 border-4 border-primary">
              <AvatarImage src={user?.profileImageUrl} />
              <AvatarFallback className="text-4xl bg-primary/10">
                {user?.firstName?.[0]}{user?.lastName?.[0] || ''}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">
              {user?.firstName} {user?.lastName}
            </h3>
            <p className="text-gray-500">{user?.email}</p>
            
            <div className="mt-4 w-full">
              {user?.subscriptionPlan && (
                <span className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                  {user.subscriptionPlan.charAt(0).toUpperCase() + user.subscriptionPlan.slice(1)} Member
                </span>
              )}
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <ul className="space-y-2">
              <li>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${activeTab === "profile" ? "text-primary" : ""}`}
                  onClick={() => setActiveTab("profile")}
                >
                  <i className="bi bi-person-circle mr-2"></i>
                  <span>Profile Settings</span>
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${activeTab === "subscription" ? "text-primary" : ""}`}
                  onClick={() => setActiveTab("subscription")}
                >
                  <i className="bi bi-credit-card mr-2"></i>
                  <span>Subscription</span>
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${activeTab === "payment-history" ? "text-primary" : ""}`}
                  onClick={() => setActiveTab("payment-history")}
                >
                  <i className="bi bi-receipt mr-2"></i>
                  <span>Payment History</span>
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${activeTab === "preferences" ? "text-primary" : ""}`}
                  onClick={() => setActiveTab("preferences")}
                >
                  <i className="bi bi-gear mr-2"></i>
                  <span>Preferences</span>
                </Button>
              </li>
              <li>
                <a 
                  href="/api/logout" 
                  className="flex items-center w-full px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded-md transition"
                >
                  <i className="bi bi-box-arrow-right mr-2"></i>
                  <span>Log Out</span>
                </a>
              </li>
            </ul>
          </div>
        </Card>
        
        {/* Subscription Details */}
        <div className="md:col-span-2">
          <Card className="shadow-md mb-6">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Current Subscription</h3>
                {renderSubscriptionStatus()}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Plan</h4>
                  <p className="font-medium">
                    {user?.subscriptionPlan 
                      ? `${user.subscriptionPlan.charAt(0).toUpperCase() + user.subscriptionPlan.slice(1)} (Monthly)`
                      : "No Active Plan"}
                  </p>
                </div>
                {user?.subscriptionExpiresAt && (
                  <div>
                    <h4 className="text-sm text-gray-500 mb-1">Next Billing Date</h4>
                    <p className="font-medium">{formatDate(user.subscriptionExpiresAt)}</p>
                  </div>
                )}
                {/* Additional subscription info would go here */}
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <a href="/subscription">
                    {user?.subscriptionPlan ? "Change Plan" : "Get Subscription"}
                  </a>
                </Button>
                {user?.subscriptionStatus === "active" && (
                  <Button variant="outline">
                    Update Payment Method
                  </Button>
                )}
                {user?.subscriptionStatus === "active" && (
                  <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                    Cancel Subscription
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Usage Stats */}
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Usage Statistics</h3>
              
              {isLoadingStats ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="p-4 bg-blue-50 rounded-lg text-center">
                      <h4 className="text-2xl font-bold text-primary">
                        {userStats?.stats?.totalAttempted || 0}
                      </h4>
                      <p className="text-gray-500 text-sm">Questions Answered</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <h4 className="text-2xl font-bold text-green-600">
                        {userStats?.stats?.accuracy?.toFixed(0) || 0}%
                      </h4>
                      <p className="text-gray-500 text-sm">Accuracy Rate</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg text-center">
                      <h4 className="text-2xl font-bold text-purple-600">
                        {userStats?.recentSessions?.length || 0}
                      </h4>
                      <p className="text-gray-500 text-sm">Study Sessions</p>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg text-center">
                      <h4 className="text-2xl font-bold text-amber-600">
                        {userStats?.stats?.totalCorrect || 0}
                      </h4>
                      <p className="text-gray-500 text-sm">Correct Answers</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-medium mb-2">Recent Activity</h4>
                    {userStats?.recentAttempts?.length ? (
                      <div className="space-y-2">
                        {userStats.recentAttempts.map((attempt: any, index: number) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-md flex justify-between">
                            <div>
                              <p className="font-medium">Question #{attempt.questionId}</p>
                              <p className="text-sm text-gray-500">
                                {attempt.isCorrect ? "Answered correctly" : "Answered incorrectly"}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">{formatDate(attempt.attemptedAt)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-gray-500 py-4">No recent activity</p>
                    )}
                  </div>
                </>
              )}
              
              <div className="text-center">
                <Button variant="link">
                  View Full Activity History
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Account Content Tabs */}
      <Card className="shadow-md mb-8">
        <CardContent className="p-6">
          <div className={activeTab === "profile" ? "" : "hidden"}>
            <h3 className="text-xl font-bold mb-6">Profile Settings</h3>
            
            <Form {...profileForm}>
              <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={profileForm.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={profileForm.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={profileForm.control}
                    name="specialization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Medical Specialization</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value || ""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select specialization" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general_medicine">General Medicine</SelectItem>
                            <SelectItem value="cardiology">Cardiology</SelectItem>
                            <SelectItem value="neurology">Neurology</SelectItem>
                            <SelectItem value="pediatrics">Pediatrics</SelectItem>
                            <SelectItem value="surgery">Surgery</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      'Save Changes'
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          
          <div className={activeTab === "subscription" ? "" : "hidden"}>
            <h3 className="text-xl font-bold mb-6">Subscription Management</h3>
            
            <div className="mb-6">
              <Button asChild>
                <a href="/subscription">View Available Plans</a>
              </Button>
            </div>
          </div>
          
          <div className={activeTab === "payment-history" ? "" : "hidden"}>
            <h3 className="text-xl font-bold mb-6">Payment History</h3>
            
            {isLoadingPayments ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : userPayments?.length ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {userPayments.map((payment: any) => (
                      <tr key={payment.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(payment.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {payment.description || "Subscription payment"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatCurrency(payment.amount, payment.currency)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            payment.status === "paid" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center text-gray-500 py-4">No payment history found.</p>
            )}
          </div>
          
          <div className={activeTab === "preferences" ? "" : "hidden"}>
            <h3 className="text-xl font-bold mb-6">Preferences</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-4">Email Notifications</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Weekly Progress Summary</p>
                    <p className="text-sm text-gray-500">Receive a weekly email with your study progress</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <label className="text-sm">Off</label>
                    <div className="relative inline-block w-12 align-middle">
                      <input type="checkbox" id="notify-weekly" className="sr-only peer" defaultChecked />
                      <div className="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-primary"></div>
                      <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-all peer-checked:left-5"></div>
                    </div>
                    <label className="text-sm">On</label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Special Offers & Updates</p>
                    <p className="text-sm text-gray-500">Stay informed about new features and promotions</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <label className="text-sm">Off</label>
                    <div className="relative inline-block w-12 align-middle">
                      <input type="checkbox" id="notify-offers" className="sr-only peer" defaultChecked />
                      <div className="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-primary"></div>
                      <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-all peer-checked:left-5"></div>
                    </div>
                    <label className="text-sm">On</label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button>Save Preferences</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
