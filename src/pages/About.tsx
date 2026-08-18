import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, TrendingUp, Linkedin, Mail, Code2, Layers, Database, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import headshot images
import aaronImg from "@/assets/aaron.jpeg";
import lakshImg from "@/assets/laksh.jpeg";
import shritanImg from "@/assets/shritan.jpeg";
import ivanImg from "@/assets/ivan.jpeg";
import rohanImg from "@/assets/rohan.jpeg";
import manImg from "@/assets/man.jpeg";
import anuImg from "@/assets/anu.jpeg";
import chinmayImg from "@/assets/chinmay.jpeg";
import rishabhImg from "@/assets/rishabh.jpeg";
import img2546 from "@/assets/IMG_2546.jpg";

const About = () => {
  const leadership = [
    {
      name: "Aaron Poetzel",
      role: "Internal Operations Partner",
      bio: "",
      education: "University of Illinois at Urbana-Champaign",
      linkedin: "https://www.linkedin.com/in/aaron-poetzel/",
      email: "poetzel3@illinois.edu",
      image: aaronImg,
      objectPosition: "50% 50%",
    },
    {
      name: "Laksh Sharma",
      role: "Executive Partner",
      bio: "",
      education: "University of Illinois at Urbana-Champaign",
      linkedin: "https://linkedin.com/in/laksh-sharma-690b6a298",
      email: "lsharma2@illinois.edu",
      image: lakshImg,
      objectPosition: "50% 50%",
    },
    {
      name: "Man Kwanpracha",
      role: "Project Excellence Partner",
      bio: "",
      education: "University of Illinois at Urbana-Champaign",
      linkedin: "",
      email: "",
      image: manImg,
      objectPosition: "50% 50%",
    },
    {
      name: "Shritan Bhupathiraju",
      role: "Corporate Affairs Partner",
      bio: "",
      education: "University of Illinois at Urbana-Champaign",
      linkedin: "",
      email: "",
      image: shritanImg,
      objectPosition: "50% 50%",
    },
    {
      name: "Ivan Nang",
      role: "Professional Development Partner",
      bio: "",
      education: "University of Illinois at Urbana-Champaign",
      linkedin: "",
      email: "",
      image: ivanImg,
      objectPosition: "50% 50%",
    },
    {
      name: "Anu Ghosh",
      role: "Alumni Relations Partner",
      bio: "",
      education: "University of Illinois at Urbana-Champaign",
      linkedin: "",
      email: "",
      image: anuImg,
      objectPosition: "50% 50%",
    },
    {
      name: "Chinmay Rawat",
      role: "Technology Partner",
      bio: "",
      education: "University of Illinois at Urbana-Champaign",
      linkedin: "",
      email: "",
      image: chinmayImg,
      objectPosition: "50% 50%",
    },
    {
      name: "Rohan Raman",
      role: "Social Partner",
      bio: "",
      education: "University of Illinois at Urbana-Champaign",
      linkedin: "",
      email: "",
      image: rohanImg,
      objectPosition: "50% 50%",
    },
    {
      name: "Rishabh Chhabra",
      role: "Finance Partner",
      bio: "",
      education: "University of Illinois at Urbana-Champaign",
      linkedin: "",
      email: "",
      image: rishabhImg,
      objectPosition: "50% 50%",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">OTCR Consulting</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              At OTCR Consulting, we are more than just a student-run organization — we are a powerhouse of ambition, strategy, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
              Based out of the University of Illinois Urbana-Champaign, we bring together top talent from across disciplines to deliver bold, data-driven solutions to clients. Whether we're helping a startup scale or a Fortune 500 rethink its strategy, we build with intent and execute with impact.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <img
              src={img2546}
              alt="OTCR lively"
              className="image-modern w-full max-w-2xl"
              style={{ maxHeight: 400 }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Target size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Strategic Planning</h3>
                <p className="text-muted-foreground">
                  Comprehensive market analysis and strategic roadmap development
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <TrendingUp size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Growth Optimization</h3>
                <p className="text-muted-foreground">
                  Data-driven approaches to accelerate business growth and expansion
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Lightbulb size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Innovation Consulting</h3>
                <p className="text-muted-foreground">
                  Digital transformation and innovation strategy implementation
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Users size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Operational Excellence</h3>
                <p className="text-muted-foreground">
                  Process optimization and organizational efficiency improvements
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Code2 size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Technology Consulting</h3>
                <p className="text-muted-foreground">
                  Technical strategy and delivery for technology clients, from architecture and system design to full-stack implementation
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Layers size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Product Engineering</h3>
                <p className="text-muted-foreground">
                  Designing and maintaining the internal platforms OTCR runs on, from project dashboards to recruiting and knowledge systems
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Database size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Data &amp; AI Solutions</h3>
                <p className="text-muted-foreground">
                  Applied data and AI engagements, including retrieval-based tools that turn firm and client knowledge into searchable insight
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <Workflow size={32} className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Automation &amp; Integration</h3>
                <p className="text-muted-foreground">
                  Connecting systems and automating workflows across the tools teams already rely on day to day
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the minds driving the momentum — our leadership team brings vision, hustle, and heart to every step of the OTCR journey.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="w-full md:w-[calc(50%_-_1rem)] lg:w-[calc(33.333%_-_1.333rem)] xl:w-[calc(25%_-_1.5rem)] p-6 shadow-medium hover:shadow-strong transition-all duration-300 border border-primary/20 hover:border-primary/40">
                <CardContent className="space-y-4">
                  <div className="w-full grid place-items-center mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full block object-cover"
                        style={{ objectPosition: leader.objectPosition ?? "50% 50%" }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";
                        }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground text-center">{leader.name}</h3>
                  <div className="flex justify-center">
                    <Badge variant="secondary">{leader.role}</Badge>
                  </div>
                  
                  {leader.bio && (
                    <p className="text-sm text-muted-foreground text-center">{leader.bio}</p>
                  )}
                  
                  <div className="flex justify-center space-x-3 pt-2 border-t border-border">
                    {leader.linkedin && (
                      <a 
                        href={leader.linkedin} 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {leader.email && (
                      <a 
                        href={`mailto:${leader.email}`} 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join Our Team or Partner With Us
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you're a talented student looking to gain consulting experience or a 
            business seeking strategic guidance, we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Partner With Us</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
