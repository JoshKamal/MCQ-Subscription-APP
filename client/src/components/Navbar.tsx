import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [location] = useLocation();
  const { user, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: "bi-speedometer2" },
    { href: "/practice", label: "Practice", icon: "bi-journals" },
    { href: "/modules", label: "Modules", icon: "bi-grid-3x3-gap" },
  ];

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
            <i className="bi bi-clipboard2-pulse"></i>
            <span>YR1 QUB Medicine Synoptic Prep</span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-2">
            {isAuthenticated && navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                className={`px-3 py-2 rounded-md hover:bg-primary-dark transition ${
                  location === link.href ? "bg-primary-dark" : ""
                }`}
              >
                <i className={`bi ${link.icon} mr-1`}></i>
                {link.label}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <Link 
                href="/account"
                className={`px-3 py-2 ${location === "/account" 
                  ? "bg-white text-primary" 
                  : "bg-transparent text-white hover:bg-primary-dark"} rounded-md transition`}
              >
                <i className="bi bi-person-circle mr-1"></i>
                Account
              </Link>
            ) : (
              <Button 
                variant="secondary" 
                className="text-primary"
                onClick={() => window.location.href = "/api/login"}
              >
                <i className="bi bi-box-arrow-in-right mr-1"></i>
                Log In
              </Button>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden text-white hover:bg-primary-dark p-2">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white p-0">
              <SheetHeader className="p-4 bg-primary text-white">
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center gap-3 p-4 border-b mb-4">
                      <Avatar>
                        <AvatarImage src={user?.profileImageUrl} />
                        <AvatarFallback>
                          {user?.firstName?.[0]}{user?.lastName?.[0] || ''}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user?.firstName} {user?.lastName}</p>
                        <p className="text-sm text-gray-500">{user?.email}</p>
                      </div>
                    </div>
                    {navLinks.map((link, index) => (
                      <Link 
                        key={index} 
                        href={link.href}
                        className="flex items-center px-3 py-3 rounded-md hover:bg-gray-100 transition"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <i className={`bi ${link.icon} mr-2 text-primary`}></i>
                        {link.label}
                      </Link>
                    ))}
                    <Link 
                      href="/account"
                      className="flex items-center px-3 py-3 rounded-md hover:bg-gray-100 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <i className="bi bi-person-circle mr-2 text-primary"></i>
                      Account
                    </Link>
                    <a 
                      href="/api/logout"
                      className="flex items-center px-3 py-3 rounded-md hover:bg-gray-100 transition mt-auto text-red-600"
                    >
                      <i className="bi bi-box-arrow-right mr-2"></i>
                      Log Out
                    </a>
                  </>
                ) : (
                  <Button 
                    className="mt-4"
                    onClick={() => window.location.href = "/api/login"}
                  >
                    <i className="bi bi-box-arrow-in-right mr-2"></i>
                    Log In
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
