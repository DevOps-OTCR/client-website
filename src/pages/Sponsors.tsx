import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Presentation, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Sponsors = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Sponsorship interest sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Sponsors</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in becoming a sponsor? Partner with OTCR to support student innovation while gaining access to top campus talent and cutting-edge insights.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Documents Section */}
      <section className="pt-20 pb-4 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Sponsor Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our partnership materials to learn more about how we can work together
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* PDF Document Card */}
            <Card className="group relative overflow-hidden shadow-medium hover:shadow-strong transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card via-card to-card/80 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-10 text-center space-y-8 relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative p-8 bg-gradient-to-br from-primary to-primary/90 rounded-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <FileText size={56} className="text-primary-foreground drop-shadow-lg" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Sponsorship Brochure</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Comprehensive overview of our partnership opportunities, benefits, and collaboration framework
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground bg-muted/50 rounded-full px-4 py-2 w-fit mx-auto">
                  <FileText size={18} />
                  <span className="font-medium">PDF Document</span>
                </div>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full h-14 text-lg font-semibold group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg transition-all duration-300 border-2 hover:border-primary"
                  onClick={() => window.open('https://drive.google.com/file/d/1qwacl3H_ngg6K5MGj8FOuvEZDpp3Jiq7/view?usp=sharing', '_blank')}
                >
                  <Download className="mr-3" size={24} />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
            {/* PPT Document Card */}
            <Card className="group relative overflow-hidden shadow-medium hover:shadow-strong transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-card via-card to-card/80 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-10 text-center space-y-8 relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative p-8 bg-gradient-to-br from-accent to-accent/90 rounded-3xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg">
                      <Presentation size={56} className="text-accent-foreground drop-shadow-lg" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">Sponsorship Presentation</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Visual presentation showcasing our capabilities, success stories, and partnership value proposition
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground bg-muted/50 rounded-full px-4 py-2 w-fit mx-auto">
                  <Presentation size={18} />
                  <span className="font-medium">PowerPoint</span>
                </div>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full h-14 text-lg font-semibold group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-lg transition-all duration-300 border-2 hover:border-accent"
                  onClick={() => window.open('https://drive.google.com/file/d/1XujW-2uq1nDcHLLzMuaE5oi3NlHy3VAY/view?usp=sharing', '_blank')}
                >
                  <Download className="mr-3" size={24} />
                  Download PPT
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Sponsorship Contact Form Section */}
      <section className="pt-4 pb-12 bg-gradient-to-br from-background via-background/95 to-primary/5 relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <Card className="shadow-strong border-2 border-primary/20 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Interested in Sponsoring?</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will reach out to you about sponsorship opportunities.
                  </p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your Company Name"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Sponsorship Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your interest in sponsoring..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0" 
                      variant="default"
                    >
                      Send Sponsorship Interest
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Corporate Affairs Contact Section */}
      <section className="py-8 bg-background text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-2xl font-bold mb-2">Reach out to our corporate affairs to get started now!</h3>
          <p className="text-lg">Corporate Affairs: <a href="mailto:corporateaffairs@otcr-consulting.com" className="text-primary underline">corporateaffairs@otcr-consulting.com</a></p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Partner?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create value together through strategic partnership
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsors;