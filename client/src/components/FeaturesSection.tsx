import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Target, 
  BookOpen, 
  TrendingUp, 
  Clock, 
  Shield,
  Brain,
  Globe,
  Users
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant AI Scoring",
      description: "Get your IELTS essay scored in seconds with our advanced AI technology trained on thousands of real IELTS essays.",
      badge: "Fast",
      color: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: Target,
      title: "IELTS-Standard Accuracy",
      description: "Our scoring algorithm follows official IELTS band descriptors to provide accurate, reliable assessments.",
      badge: "Accurate",
      color: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: BookOpen,
      title: "Detailed Feedback",
      description: "Receive comprehensive feedback on all four IELTS criteria with specific suggestions for improvement.",
      badge: "Comprehensive",
      color: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your improvement over time with detailed analytics and performance insights.",
      badge: "Analytics",
      color: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: Brain,
      title: "Smart Recommendations",
      description: "Get personalized study recommendations based on your writing patterns and areas for improvement.",
      badge: "Personalized",
      color: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: Globe,
      title: "Multiple Task Types",
      description: "Practice with various IELTS Writing Task 1 and Task 2 prompts covering all common topics.",
      badge: "Variety",
      color: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: Clock,
      title: "Timed Practice",
      description: "Simulate real exam conditions with built-in timers and time management guidance.",
      badge: "Realistic",
      color: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your essays are processed securely and never shared. Complete privacy guaranteed.",
      badge: "Secure",
      color: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: Users,
      title: "Expert Validation",
      description: "Our AI has been trained and validated by certified IELTS examiners and language experts.",
      badge: "Expert",
      color: "text-emerald-600 dark:text-emerald-400"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Why Choose Evalynn.ai
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Excel in IELTS Writing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform provides comprehensive IELTS essay assessment with the accuracy 
            and reliability you need to achieve your target band score.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card hover:shadow-lg transition-all duration-300 group hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 ${feature.color} group-hover:scale-110 transition-all duration-200`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto shadow-glow bg-gradient-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of students who have improved their IELTS writing scores with our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="secondary" className="text-sm">
                  <Users className="h-4 w-4 mr-1" />
                  10,000+ Active Users
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  Average +1.5 Band Improvement
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  <Shield className="h-4 w-4 mr-1" />
                  99.9% Uptime
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;