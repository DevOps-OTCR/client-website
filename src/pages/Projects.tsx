import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, TrendingUp, Users, Zap, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const [industryFilter, setIndustryFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  // Anonymized & de-scoped projects
  const projects = [
    {
      id: 1,
      title: "Gen-Z Loyalty Program Strategy",
      client: "Fortune 500 Retailer",
      industry: "Retail",
      duration: "Full-Semester",
      type: "Strategy",
      description:
        "Evaluated the loyalty landscape and designed a Gen-Z engagement strategy focused on adoption, personalization, and sustainable program mechanics.",
      results: [
        "End-to-end program assessment",
        "Gen-Z adoption playbook",
        "Competitive benchmarking",
        "Phased implementation roadmap",
      ],
      timeline: "16 weeks",
      teamSize: "5 consultants",
      technologies: ["Consumer Analytics", "Market Research", "Strategy Development"],
      deliverables: [
        "Executive summary deck",
        "Competitive scan",
        "Gen-Z engagement whitepaper",
        "Implementation roadmap",
      ],
    },
    {
      id: 2,
      title: "Student Monetization Strategy",
      client: "Global EdTech Platform",
      industry: "Education Technology",
      duration: "Full-Semester",
      type: "Strategy",
      description:
        "Mapped student journeys and identified privacy-aware monetization levers across products and ad inventory to improve LTV without degrading UX.",
      results: [
        "Personalization strategy",
        "Data-use guardrails",
        "Competitive analysis",
        "Journey optimization",
      ],
      timeline: "16 weeks",
      teamSize: "5 consultants",
      technologies: ["User Research", "Competitive Analysis", "Data Analytics", "Strategy Development"],
      deliverables: [
        "Journey map",
        "Competitive teardown",
        "Student interview synthesis",
        "Monetization business case",
      ],
    },
    {
      id: 3,
      title: "Wholesale Auction Readiness Assessment",
      client: "Automotive Software Provider",
      industry: "Automotive Technology",
      duration: "Full-Semester",
      type: "Strategy",
      description:
        "Assessed market entry readiness for an online wholesale auction offering, with success factors, infrastructure benchmarks, and KPI framework.",
      results: [
        "Go-to-market readiness",
        "Success factor rubric",
        "Landscape analysis",
        "KPI framework",
      ],
      timeline: "16 weeks",
      teamSize: "5 consultants",
      technologies: ["Market Analysis", "Competitive Intelligence", "KPI Development", "Strategy Assessment"],
      deliverables: [
        "Market landscape report",
        "Use-case concepts",
        "Operational benchmarks",
        "KPI trajectory model",
      ],
    },
    {
      id: 4,
      title: "Bakery Demand Forecasting Model",
      client: "National Supermarket Chain",
      industry: "Retail",
      duration: "Full-Semester",
      type: "Operations",
      description:
        "Built a minimum-demand forecasting approach for bakery categories to reduce shrink and improve on-shelf availability across regions.",
      results: [
        "Forecasting engine",
        "Demand driver insights",
        "Production planning inputs",
        "Shrink reduction levers",
      ],
      timeline: "16 weeks",
      teamSize: "5 consultants",
      technologies: ["Data Analytics", "Machine Learning", "Forecasting Models", "Operations Research"],
      deliverables: [
        "Model report",
        "Methodology brief",
        "Category insights",
        "Ops handoff deck",
      ],
    },
    {
      id: 5,
      title: "Mental Health Outreach Strategy",
      client: "Non-Profit Mental Health Org",
      industry: "Non-Profit",
      duration: "Half-Semester",
      type: "Strategy",
      description:
        "Identified high-leverage outreach channels and messaging cadence to expand impact and reach within target communities.",
      results: [
        "Channel prioritization",
        "Competitive scan",
        "Survey-driven insights",
        "Four focus areas",
      ],
      timeline: "8 weeks",
      teamSize: "5 consultants",
      technologies: ["Market Research", "Survey Analysis", "Competitive Intelligence", "Strategy Development"],
      deliverables: [
        "Competitor analyses",
        "SWOT synthesis",
        "Partnerships brief",
        "Roadmap deck",
      ],
    },
    {
      id: 6,
      title: "Macro Resilience Analysis for Recruiting Platform",
      client: "VC-Backed Talent Platform",
      industry: "Venture Capital",
      duration: "Half-Semester",
      type: "Market Research",
      description:
        "Analyzed how hiring patterns shift under recessionary conditions and outlined implications for product positioning and pipeline focus.",
      results: [
        "Recession trend report",
        "Segment prioritization",
        "Investor-oriented SWOT",
        "Scenario guidance",
      ],
      timeline: "8 weeks",
      teamSize: "5 consultants",
      technologies: ["Market Research", "Financial Analysis", "SWOT Analysis", "Industry Research"],
      deliverables: [
        "Trend summary",
        "Segment growth scan",
        "Strategic scenarios",
        "Executive readout",
      ],
    },
  ];

  const filteredProjects = projects.filter((project) => {
    return (
      (industryFilter === "all" || project.industry === industryFilter) &&
      (durationFilter === "all" || project.duration === durationFilter) &&
      (typeFilter === "all" || project.type === typeFilter)
    );
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "Strategy":
        return <TrendingUp size={20} />;
      case "Operations":
        return <Zap size={20} />;
      case "Market Research":
        return <Building2 size={20} />;
      case "Product Development":
        return <Users size={20} />;
      default:
        return <Building2 size={20} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Past Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our portfolio of successful consulting engagements across diverse industries and business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-muted-foreground" />
              <span className="font-medium text-foreground">Filter Projects:</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="Retail">Retail</SelectItem>
                  <SelectItem value="Education Technology">Education Technology</SelectItem>
                  <SelectItem value="Automotive Technology">Automotive Technology</SelectItem>
                  <SelectItem value="Financial Services">Financial Services</SelectItem>
                  <SelectItem value="Venture Capital">Venture Capital</SelectItem>
                  <SelectItem value="Non-Profit">Non-Profit</SelectItem>
                </SelectContent>
              </Select>

              <Select value={durationFilter} onValueChange={setDurationFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="Full-Semester">Full-Semester</SelectItem>
                  <SelectItem value="Half-Semester">Half-Semester</SelectItem>
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Project Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Strategy">Strategy</SelectItem>
                  <SelectItem value="Operations">Operations</SelectItem>
                  <SelectItem value="Market Research">Market Research</SelectItem>
                  <SelectItem value="Product Development">Product Development</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="shadow-medium hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-primary rounded-lg">{getIcon(project.type)}</div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        {/* Company name removed from UI intentionally */}
                        {/* <p className="text-muted-foreground">{project.client}</p> */}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="default">{project.industry}</Badge>
                    <Badge variant="secondary">{project.duration}</Badge>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Results</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <span className="text-sm text-muted-foreground">Timeline</span>
                      <p className="font-medium text-foreground">{project.timeline}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Team Size</span>
                      <p className="font-medium text-foreground">{project.teamSize}</p>
                    </div>
                  </div>

                  {/* Project Manager field removed */}
                  {/* {project.projectManager && (
                    <div>
                      <span className="text-sm text-muted-foreground">Project Manager</span>
                      <p className="font-medium text-foreground">{project.projectManager}</p>
                    </div>
                  )} */}

                  <div>
                    <span className="text-sm text-muted-foreground mb-2 block">Technologies Used</span>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects match your current filters.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setIndustryFilter("all");
                  setDurationFilter("all");
                  setTypeFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Create Your Success Story?
          </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our portfolio of satisfied clients who have achieved remarkable results through strategic consulting partnerships.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
