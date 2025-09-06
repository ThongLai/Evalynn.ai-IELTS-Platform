import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      country: "China",
      initialScore: 6.0,
      finalScore: 7.5,
      testimonial: "Evalynn.ai helped me identify exactly what I was missing in my essays. The detailed feedback on coherence and cohesion was game-changing. I improved from 6.0 to 7.5 in just 3 months!",
      avatar: "SC"
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt",
      initialScore: 5.5,
      finalScore: 7.0,
      testimonial: "The AI feedback is incredibly detailed and accurate. It's like having a personal IELTS tutor available 24/7. The progress tracking helped me stay motivated throughout my preparation.",
      avatar: "AH"
    },
    {
      name: "Maria Rodriguez",
      country: "Mexico",
      initialScore: 6.5,
      finalScore: 8.0,
      testimonial: "What impressed me most was how the platform adapted to my learning style. The personalized recommendations really helped me focus on my weak areas and achieve my target score.",
      avatar: "MR"
    },
    {
      name: "Raj Patel",
      country: "India",
      initialScore: 6.0,
      finalScore: 7.5,
      testimonial: "The instant scoring feature saved me so much time. I could practice multiple essays in a day and get immediate feedback. This intensive practice approach really paid off!",
      avatar: "RP"
    },
    {
      name: "Emma Thompson",
      country: "UK",
      initialScore: 7.0,
      finalScore: 8.5,
      testimonial: "As someone preparing for academic IELTS, the variety of Task 2 topics was excellent. The feedback helped me refine my argumentation skills and achieve the score I needed for university.",
      avatar: "ET"
    },
    {
      name: "Yuki Tanaka",
      country: "Japan",
      initialScore: 5.5,
      finalScore: 7.0,
      testimonial: "The grammar and vocabulary suggestions were spot-on. Evalynn.ai helped me understand complex sentence structures and improve my lexical resource significantly.",
      avatar: "YT"
    }
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="h-4 w-4 text-warning fill-current" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Student Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Results from Real Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our AI-powered IELTS writing assessment has helped thousands of students 
            achieve their target band scores and reach their academic goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-soft transition-spring relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-accent/20 group-hover:text-accent/40 transition-smooth">
                <Quote className="h-8 w-8" />
              </div>
              
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {renderStars(5)}
                </div>

                {/* Testimonial */}
                <p className="text-foreground leading-relaxed text-sm">
                  "{testimonial.testimonial}"
                </p>

                {/* Score Improvement */}
                <div className="flex items-center space-x-4 py-3 px-4 bg-gradient-card rounded-lg">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Before</div>
                    <div className="text-lg font-bold text-foreground">{testimonial.initialScore}</div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="h-2 bg-gradient-hero rounded-full"></div>
                    <div className="text-xs text-success font-medium mt-1">
                      +{(testimonial.finalScore - testimonial.initialScore).toFixed(1)} improvement
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">After</div>
                    <div className="text-lg font-bold text-success">{testimonial.finalScore}</div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.country}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto shadow-glow bg-gradient-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-sm text-muted-foreground">Essays Scored</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-success mb-2">1.5+</div>
                  <div className="text-sm text-muted-foreground">Average Band Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Student Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-warning mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;