"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PenTool, User, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
            <PenTool className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gradient-green">Evalynn.ai</h1>
            <p className="text-xs text-muted-foreground">IELTS Essay Scoring</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            How It Works
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Testimonials
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Pricing
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="transition-smooth">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button size="sm" className="btn-primary-green">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-3">
            <a href="#features" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#how-it-works" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth">
              How It Works
            </a>
            <a href="#testimonials" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Testimonials
            </a>
            <a href="#pricing" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Pricing
            </a>
            <div className="pt-3 space-y-2">
              <div className="flex justify-center pb-2">
                <ThemeToggle />
              </div>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button size="sm" className="w-full btn-primary-green">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;