import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    timeline: "",
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
  
    const subject = encodeURIComponent(
      `Contact: ${formData.name} — ${formData.projectType || "General"}`
    );
  
    const body = encodeURIComponent(
  `Name: ${formData.name}
  Email: ${formData.email}
  Company: ${formData.company || "-"}
  Project Type: ${formData.projectType || "-"}
  Timeline: ${formData.timeline || "-"}
  
  Message:
  ${formData.message}`
    );
  
    window.location.href = `mailto:info@otcr-consulting.com?subject=${subject}&body=${body}`;
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
              Contact <span className="text-primary">OTCR Consulting</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your business? Let's discuss how we can help you achieve 
              your strategic objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gradient-to-br from-background via-background/95 to-primary/5 relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex justify-center">
            <div className="w-full max-w-2xl">
            {/* Contact Form */}
              <Card className="shadow-strong border-2 border-primary/20 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden group">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Contact Us</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you with a customized proposal.
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="strategy">Strategic Planning</SelectItem>
                          <SelectItem value="operations">Operations Consulting</SelectItem>
                          <SelectItem value="market-research">Market Research</SelectItem>
                          <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (&lt; 1 month)</SelectItem>
                          <SelectItem value="short-term">Short-term (1-3 months)</SelectItem>
                          <SelectItem value="medium-term">Medium-term (3-6 months)</SelectItem>
                          <SelectItem value="long-term">Long-term (6+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, challenges, and objectives..."
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
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;