import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import img2548 from "@/assets/IMG_2548.jpg";
import img2547 from "@/assets/IMG_2547.jpg";
import img2549 from "@/assets/IMG_2549.jpg";

const Services = () => {
  const fullTimeProjects = {
    title: "Full-Semester Projects",
    duration: "16 weeks",
    commitment: "Full-time engagement",
    description: "Comprehensive strategic consulting engagements that provide deep, transformational insights and implementation support.",
    features: [
      "Comprehensive market analysis",
      "Strategic roadmap development",
      "Implementation planning",
      "Executive presentation",
      "Post-project support"
    ],
    timeline: [
      { week: "Weeks 1-2", activity: "Discovery & Scoping", details: "Stakeholder interviews and data gathering" },
      { week: "Weeks 3-6", activity: "Research & Analysis", details: "Market research and competitive analysis" },
      { week: "Weeks 7-10", activity: "Strategy Development", details: "Framework development and scenario planning" },
      { week: "Weeks 11-14", activity: "Solution Design", details: "Detailed recommendations and roadmap" },
      { week: "Weeks 15-16", activity: "Delivery & Handoff", details: "Final presentation and documentation" }
    ],
    pricing: "Custom Pricing",
    industries: ["Technology", "Healthcare", "Financial Services", "Retail", "Manufacturing"]
  };

  const halfSemesterProjects = {
    title: "Half-Semester Projects",
    duration: "8 weeks",
    commitment: "Focused engagement",
    description: "Targeted consulting projects that address specific business challenges with rapid turnaround and actionable insights.",
    features: [
      "Focused problem solving",
      "Rapid analysis and insights",
      "Actionable recommendations",
      "Stakeholder presentation",
      "Quick implementation guide"
    ],
    timeline: [
      { week: "Week 1", activity: "Project Kickoff", details: "Problem definition and stakeholder alignment" },
      { week: "Weeks 2-3", activity: "Analysis Phase", details: "Data analysis and hypothesis testing" },
      { week: "Weeks 4-5", activity: "Solution Development", details: "Recommendation formulation and validation" },
      { week: "Weeks 6-7", activity: "Refinement", details: "Solution refinement and feasibility analysis" },
      { week: "Week 8", activity: "Final Delivery", details: "Presentation and handoff documentation" }
    ],
    pricing: "Custom Pricing",
    industries: ["Startups", "SMEs", "Non-profits", "Government", "Education"]
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose from our flexible engagement models designed to meet your specific business needs 
              and timeline requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
           {/* Decorative images for vibrancy - side by side with advanced effects */}
           <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
             {[{src: img2548, alt: 'OTCR consulting left'}, {src: img2547, alt: 'OTCR consulting right'}].map((img) => (
               <div key={img.alt} className="relative w-full max-w-2xl flex-1 flex justify-center items-center">

                 <img src={img.src} alt={img.alt} className="image-modern w-full" style={{maxHeight: 440}} />
               </div>
             ))}
           </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Full-Time Projects */}
            <Card className="shadow-strong">
              <CardHeader className="bg-gradient-primary text-primary-foreground">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Calendar size={28} />
                  {fullTimeProjects.title}
                </CardTitle>
                <div className="flex gap-4 mt-2">
                  <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                    {fullTimeProjects.duration}
                  </Badge>
                  <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                    {fullTimeProjects.commitment}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <p className="text-muted-foreground">{fullTimeProjects.description}</p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {fullTimeProjects.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Target Industries</h4>
                  <div className="flex flex-wrap gap-2">
                    {fullTimeProjects.industries.map((industry, index) => (
                      <Badge key={index} variant="outline">{industry}</Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Investment</span>
                    <span className="font-semibold text-foreground">{fullTimeProjects.pricing}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Half-Semester Projects */}
            <Card className="shadow-strong">
              <CardHeader className="bg-gradient-accent text-accent-foreground">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Clock size={28} />
                  {halfSemesterProjects.title}
                </CardTitle>
                <div className="flex gap-4 mt-2">
                  <Badge variant="secondary" className="bg-accent-foreground/20 text-accent-foreground">
                    {halfSemesterProjects.duration}
                  </Badge>
                  <Badge variant="secondary" className="bg-accent-foreground/20 text-accent-foreground">
                    {halfSemesterProjects.commitment}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <p className="text-muted-foreground">{halfSemesterProjects.description}</p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {halfSemesterProjects.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Target Industries</h4>
                  <div className="flex flex-wrap gap-2">
                    {halfSemesterProjects.industries.map((industry, index) => (
                      <Badge key={index} variant="outline">{industry}</Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Investment</span>
                    <span className="font-semibold text-foreground">{halfSemesterProjects.pricing}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

            {/* Timeline Sections */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Timelines
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures consistent delivery and maximum value creation 
              throughout the engagement lifecycle.
            </p>
          </div>

          <div className="space-y-16">
            {/* Full-Time Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Full-Semester Project Timeline
              </h3>
              <div className="relative">
                {/* Horizontal Timeline line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary/50 transform -translate-y-1/2"></div>
                
                <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                  {fullTimeProjects.timeline.map((phase, index) => (
                    <div key={index} className="relative flex flex-col items-center flex-1">
                      {/* Content */}
                      <div className="w-full max-w-sm">
                        <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
                          <CardContent className="p-6 text-center">
                            <div className="space-y-4">
                              <div>
                                <Badge variant="default" className="text-sm px-3 py-1 mb-3">
                                  {phase.week}
                                </Badge>
                                <h4 className="font-semibold text-foreground text-base mb-2">{phase.activity}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{phase.details}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Half-Semester Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Half-Semester Project Timeline
              </h3>
              <div className="relative">
                {/* Horizontal Timeline line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent to-accent/50 transform -translate-y-1/2"></div>
                
                <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                  {halfSemesterProjects.timeline.map((phase, index) => (
                    <div key={index} className="relative flex flex-col items-center flex-1">
                      {/* Content */}
                      <div className="w-full max-w-sm">
                        <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
                          <CardContent className="p-6 text-center">
                            <div className="space-y-4">
                              <div>
                                <Badge variant="default" className="text-sm px-3 py-1 mb-3 bg-accent text-accent-foreground">
                                  {phase.week}
                                </Badge>
                                <h4 className="font-semibold text-foreground text-base mb-2">{phase.activity}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{phase.details}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Decorative image for vibrancy with advanced effects */}
                      <div className="flex justify-center mb-10">
            {/* Animated blue gradient border */}

                          <img src={img2549} alt="OTCR team structure" className="image-modern w-full max-w-xl" style={{maxHeight: 350}} />
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Team Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our hierarchical structure ensures quality delivery while providing clear 
              career progression paths for our talented team members.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Tree structure line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/50 transform -translate-x-1/2"></div>
              
              <div className="space-y-8">
                {/* Executive Level */}
                <div className="relative flex justify-center">
                  <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform -translate-x-1/2"></div>
                  <Card className="w-80 shadow-medium hover:shadow-strong transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Managing Partner</h3>
                      <p className="text-muted-foreground text-sm mb-3">Responsible for sourcing projects and maintaining client relationships</p>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Leadership</Badge>
                    </CardContent>
                  </Card>
                </div>

                {/* Engagement Partner Level */}
                <div className="relative flex justify-center">
                  <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform -translate-x-1/2"></div>
                  <Card className="w-80 shadow-medium hover:shadow-strong transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Engagement Partner</h3>
                      <p className="text-muted-foreground text-sm mb-3">Oversees one/two projects and an internal firm pillar</p>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Senior</Badge>
                    </CardContent>
                  </Card>
                </div>

                {/* Project Manager Level */}
                <div className="relative flex justify-center">
                  <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform -translate-x-1/2"></div>
                  <Card className="w-80 shadow-medium hover:shadow-strong transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Project Manager</h3>
                      <p className="text-muted-foreground text-sm mb-3">Leads all aspects of a project, like client communication and team management</p>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Senior</Badge>
                    </CardContent>
                  </Card>
                </div>

                {/* Lead Consultant Level */}
                <div className="relative flex justify-center">
                  <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform -translate-x-1/2"></div>
                  <Card className="w-80 shadow-medium hover:shadow-strong transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Lead Consultant</h3>
                      <p className="text-muted-foreground text-sm mb-3">Assists the Project Manager with auditing deliverables, creating workstreams, and more</p>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Mid-level</Badge>
                    </CardContent>
                  </Card>
                </div>

                {/* Consultant Level */}
                <div className="relative flex justify-center">
                  <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform -translate-x-1/2"></div>
                  <Card className="w-80 shadow-medium hover:shadow-strong transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Consultant</h3>
                      <p className="text-muted-foreground text-sm mb-3">Staffed on a project and helps in internal initiatives</p>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Entry-level</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss which engagement model best fits your needs and timeline. 
            Our team is ready to help you achieve your strategic objectives.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;