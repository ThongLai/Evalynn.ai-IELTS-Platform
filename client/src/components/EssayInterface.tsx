"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, Zap, Target } from "lucide-react";
import { useState } from "react";

const EssayInterface = () => {
  const [essay, setEssay] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const wordCount = essay.trim().split(/\s+/).filter(word => word.length > 0).length;
  const minWords = 250;
  const progress = Math.min((wordCount / minWords) * 100, 100);

  const handleSubmit = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      // Scroll to results section
      document.getElementById('scoring-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 3000);
  };

  return (
    <section id="essay-interface" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Try Our IELTS Essay Scorer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Write your IELTS Task 2 essay below and get instant AI-powered scoring with detailed feedback.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card border-border/50">
            <CardHeader className="bg-gradient-card">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>IELTS Writing Task 2</span>
                </CardTitle>
                <Badge variant="secondary" className="text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  40 minutes
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6 p-6">
              {/* Essay Prompt */}
              <div className="bg-accent/20 p-4 rounded-lg border-l-4 border-accent">
                <h3 className="font-semibold text-accent-foreground mb-2">Essay Prompt:</h3>
                <p className="text-sm text-accent-foreground leading-relaxed">
                  Some people believe that technology has made our lives more complicated, while others think it has made life easier. Discuss both views and give your own opinion.
                </p>
              </div>

              {/* Writing Area */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">
                    Your Essay
                  </label>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`${wordCount >= minWords ? 'text-success' : 'text-muted-foreground'}`}>
                      {wordCount} words
                    </span>
                    <span className="text-muted-foreground">
                      (minimum {minWords})
                    </span>
                  </div>
                </div>
                
                <Textarea
                  placeholder="Start writing your IELTS essay here..."
                  value={essay}
                  onChange={(e) => setEssay(e.target.value)}
                  className="min-h-[400px] text-base leading-relaxed resize-none focus:ring-primary"
                />
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Word count progress</span>
                    <span className={`font-medium ${progress >= 100 ? 'text-success' : 'text-primary'}`}>
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button 
                  onClick={handleSubmit}
                  disabled={wordCount < minWords || isAnalyzing}
                  className="flex-1 button-gradient text-white shadow-soft hover:shadow-glow transition-spring"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                      Analyzing Essay...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-4 w-4" />
                      Get AI Score & Feedback
                    </>
                  )}
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="transition-smooth"
                >
                  <Target className="mr-2 h-4 w-4" />
                  Save as Draft
                </Button>
              </div>

              {/* Analysis Progress */}
              {isAnalyzing && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-primary font-medium">AI Analysis in Progress</span>
                        <span className="text-muted-foreground">Please wait...</span>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                          Task Response Analysis Complete
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                          Coherence & Cohesion Assessment Complete
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                          Lexical Resource Evaluation in Progress
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-muted rounded-full mr-2"></div>
                          Grammar & Accuracy Analysis Pending
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EssayInterface;