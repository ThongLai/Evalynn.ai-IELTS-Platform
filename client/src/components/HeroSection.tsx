import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 text-sm">
                <Star className="h-4 w-4 text-warning" fill="currentColor" />
                <span className="text-white">Trusted by 10,000+ IELTS students</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Master IELTS
                <span className="block text-gradient-white">
                  Writing with AI
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                Get instant, accurate IELTS essay scoring powered by advanced AI. 
                Improve your band score with detailed feedback and personalized recommendations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow transition-spring"
              >
                Start Scoring Essays
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 transition-smooth"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm">Instant Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm">IELTS Standards</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
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
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-lg shadow-soft animate-glow">
              <div className="text-sm font-semibold">Band Score</div>
              <div className="text-2xl font-bold">7.5</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white text-foreground px-4 py-2 rounded-lg shadow-soft">
              <div className="text-sm text-muted-foreground">Analysis Complete</div>
              <div className="text-lg font-semibold text-success">✓ Excellent</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;