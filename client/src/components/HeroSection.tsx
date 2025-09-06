import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero-gradient dark:hero-gradient-dark relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="glass-badge inline-flex items-center space-x-2 rounded-full px-4 py-2 text-sm">
                <Star className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="currentColor" />
                <span className="text-emerald-800 dark:text-emerald-200 font-medium">Trusted by 10,000+ IELTS students</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 dark:text-white leading-tight">
                Master IELTS
                <span className="block text-emerald-900 dark:text-white">
                  Writing with AI
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-emerald-800 dark:text-white/95 leading-relaxed max-w-xl">
                Get instant, accurate IELTS essay scoring powered by advanced AI. 
                Improve your band score with detailed feedback and personalized recommendations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-primary-green px-8"
              >
                Start Scoring Essays
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white dark:border-emerald-300 dark:text-emerald-300 dark:hover:bg-emerald-300 dark:hover:text-emerald-900"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-emerald-700 dark:text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm">Instant Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm">IELTS Standards</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm">Detailed Feedback</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-float">
            <Card className="overflow-hidden shadow-glow border-white/20">
              <Image 
                src="/assets/hero-image.jpg"
                alt="IELTS Essay Scoring Platform Interface" 
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </Card>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-3 rounded-xl shadow-lg animate-glow">
              <div className="text-sm font-medium">Your band score result:</div>
              <div className="text-2xl font-bold">7.5</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-600 dark:text-gray-300">Analysis Complete</div>
              <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">✓ Excellent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;