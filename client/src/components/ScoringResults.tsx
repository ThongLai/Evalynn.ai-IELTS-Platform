import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Link2, 
  BookOpen, 
  Lightbulb, 
  TrendingUp, 
  Download,
  Share2
} from "lucide-react";

const ScoringResults = () => {
  const overallScore = 7.5;
  const criteria = [
    {
      name: "Task Response",
      score: 7.0,
      description: "How well you answer the question and develop your ideas",
      feedback: "Good response to the task with relevant ideas. Consider developing arguments more fully with specific examples."
    },
    {
      name: "Coherence & Cohesion",
      score: 8.0,
      description: "Organization and logical flow of your essay",
      feedback: "Excellent organization with clear paragraphing. Strong use of linking words and cohesive devices."
    },
    {
      name: "Lexical Resource",
      score: 7.5,
      description: "Range and accuracy of vocabulary used",
      feedback: "Good range of vocabulary with some sophisticated word choices. Minor inaccuracies in word formation."
    },
    {
      name: "Grammar & Accuracy",
      score: 7.5,
      description: "Range and accuracy of grammatical structures",
      feedback: "Good variety of complex structures with generally accurate grammar. Few minor errors that don't impede communication."
    }
  ];

  const strengths = [
    "Clear thesis statement and position",
    "Well-structured paragraphs",
    "Good use of examples and explanations",
    "Appropriate formal register"
  ];

  const improvements = [
    "Add more specific examples to support arguments",
    "Use more sophisticated linking phrases",
    "Expand conclusion with stronger final thoughts",
    "Check article usage (a, an, the)"
  ];

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-success";
    if (score >= 7) return "text-primary";
    if (score >= 6) return "text-warning";
    return "text-destructive";
  };

  const getScoreBg = (score: number) => {
    if (score >= 8) return "bg-success";
    if (score >= 7) return "bg-primary";
    if (score >= 6) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <section id="scoring-results" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overall Score */}
          <Card className="shadow-glow border-primary/20 bg-gradient-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Your IELTS Writing Score</CardTitle>
              <div className="flex items-center justify-center">
                <div className={`text-6xl font-bold ${getScoreColor(overallScore)} mr-4`}>
                  {overallScore}
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-foreground">Band Score</div>
                  <div className="text-sm text-muted-foreground">Good User</div>
                </div>
              </div>
              <Badge variant="secondary" className="mt-4 bg-success/10 text-success">
                <TrendingUp className="h-4 w-4 mr-1" />
                Above Average Performance
              </Badge>
            </CardHeader>
          </Card>

          {/* Detailed Criteria Scores */}
          <div className="grid md:grid-cols-2 gap-6">
            {criteria.map((criterion, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-smooth">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{criterion.name}</CardTitle>
                    <div className={`text-2xl font-bold ${getScoreColor(criterion.score)}`}>
                      {criterion.score}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {criterion.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Progress 
                      value={(criterion.score / 9) * 100} 
                      className="h-2"
                    />
                    <p className="text-sm text-foreground leading-relaxed">
                      {criterion.feedback}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Strengths and Improvements */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Strengths */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-success">
                  <Target className="h-5 w-5" />
                  <span>Strengths</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {strengths.map((strength, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Areas for Improvement */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Lightbulb className="h-5 w-5" />
                  <span>Areas to Improve</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Ready to improve your score?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get personalized practice recommendations and track your progress.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Results
                  </Button>
                  <Button className="button-gradient">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Practice More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScoringResults;