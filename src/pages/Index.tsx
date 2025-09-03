import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Users, Award, Target, CheckCircle, Zap, TrendingUp, Globe, ArrowUpRight, Play, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/chicago-skyline-blue.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import img2542 from "@/assets/IMG_2542.jpg";
import img2543 from "@/assets/IMG_2543.jpg";
import img2544 from "@/assets/IMG_2544.jpg";
import img2545 from "@/assets/IMG_2545.jpg";
import img2546 from "@/assets/IMG_2546.jpg";
import img2547 from "@/assets/IMG_2547.jpg";
import img2548 from "@/assets/IMG_2548.jpg";
import img2549 from "@/assets/IMG_2549.jpg";
import redditLogo from "@/assets/reddit.webp";
import starbucksLogo from "@/assets/starbucks.jpg";
import morningstarLogo from "@/assets/morningstar.png";
import bloombergLogo from "@/assets/Bloomberg.webp";
import chicagoCubsLogo from "@/assets/ChicagoCubs.png";
import capitalOneLogo from "@/assets/CapitalOne.png";

const Index = () => {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const metrics = [
    {
      icon: Users,
      value: "50+",
      label: "Clients Served",
      description: "Successful partnerships with leading organizations"
    },
    {
      icon: Award,
      value: "Top",
      label: "Student Talent",
      description: "Elite consultants from University Of Illinois"
    },
    {
      icon: Target,
      value: "10+",
      label: "Years of Impact",
      description: "Proven track record of delivering results"
    }
  ];

  const quickMetrics = [
    { value: "200+", label: "Clients" },
    { value: "25+", label: "Years" },
    { value: "60+", label: "Consultants" }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Deliver results in weeks, not months"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Track record of measurable impact"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven",
      description: "Analytics-backed strategic insights"
    },
    {
      icon: Globe,
      title: "Holistic Perspective",
      description: "Diverse team of students from 23 different majors"
    }
  ];

  const pastClients = [
    { 
      name: "Google", 
      logo: "GG", 
      industry: "Technology",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
    },
    { 
      name: "Accenture", 
      logo: "AC", 
      industry: "Consulting",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png"
    },
    { 
      name: "Morningstar", 
      logo: "MS", 
      industry: "Financial Services",
      logoUrl: morningstarLogo
    },
    { 
      name: "Chicago Cubs", 
      logo: "CC", 
      industry: "Sports",
      logoUrl: chicagoCubsLogo
    },
    { 
      name: "Microsoft", 
      logo: "MS", 
      industry: "Technology",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
    { 
      name: "Starbucks", 
      logo: "SB", 
      industry: "Food & Beverage",
      logoUrl: starbucksLogo
    },
    { 
      name: "Capital One", 
      logo: "CO", 
      industry: "Financial Services",
      logoUrl: capitalOneLogo
    },
    { 
      name: "Bloomberg", 
      logo: "BB", 
      industry: "Media & Finance",
      logoUrl: bloombergLogo
    },
    { 
      name: "Reddit", 
      logo: "RD", 
      industry: "Social Media",
      logoUrl: redditLogo
    }
  ];
  

  const testimonials = [
    {
      quote: "The consultants on the OTCR team are top notch - they're phenomenal at taking high-level goals and running with them.",
      author: "Janice Yoshimura",
      role: "CEO Opus Search (formerly at McKinsey)",
      rating: 5
    },
    {
      quote: "The presentation and model the team created were no different than what I would see from McKinsey or Bain.",
      author: "Hunter Walk",
      role: "CEO PromptMed (formerly at Goldman Sachs)",
      rating: 5
    }
  ];

  // Auto-rotate clients
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClientIndex((prev) => {
        const next = prev + 3;
        return next >= pastClients.length ? 0 : next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [pastClients.length]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => {
        return (prev + 1) % testimonials.length;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - Full Screen with Elegant Background */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/30"></div>
        
        {/* Sophisticated animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-accent/15 animate-pulse"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="space-y-8">

            
            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="block text-white">OTCR</span>
              <span className="block text-primary mt-2">Consulting</span>
          </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses through strategic consulting and innovative solutions. 
            Led by top student talent, delivering real-world impact.
          </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              <Link to="/contact">
               Contact Us
                  <ArrowUpRight className="ml-2" size={24} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                <Link to="/projects">
                  <Play className="mr-2" size={24} />
                  View Our Work
              </Link>
            </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Quick Metrics Strip */}
      <section className="py-8 bg-gradient-subtle border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="p-8 rounded-xl bg-gradient-to-br from-card via-card/80 to-primary/5 border border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 relative overflow-hidden">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                    {metric.value}
                  </div>
                    <div className="text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wider">
                    {metric.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Modern Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose OTCR?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine academic excellence with practical business solutions
            </p>
          </div>
          {/* Decorative images for vibrancy - side by side */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <div className="image-container-modern mb-12">
              <img src={img2543} alt="OTCR vibrant left" className="image-modern w-full max-w-xl" style={{maxHeight: 260}} />
              <div className="image-overlay-modern"></div>
            </div>
            <div className="image-container-modern mb-12">
              <img src={img2544} alt="OTCR vibrant right" className="image-modern w-full max-w-xl" style={{maxHeight: 260}} />
              <div className="image-overlay-modern"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-card to-card/50 group">
                <CardContent className="space-y-6">
                  <div className="flex justify-center">
                    <div className="p-6 bg-gradient-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <feature.icon size={40} className="text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Clients Section - Enhanced Carousel */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've partnered with companies across diverse industries
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Enhanced Navigation Arrows */}
            <button
              onClick={() => setCurrentClientIndex((prev) => {
                const next = prev - 3;
                return next < 0 ? Math.max(0, pastClients.length - 3) : next;
              })}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-md rounded-full hover:bg-gradient-to-r hover:from-primary/30 hover:to-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl border border-primary/20"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentClientIndex((prev) => {
                const next = prev + 3;
                return next >= pastClients.length ? 0 : next;
              })}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-md rounded-full hover:bg-gradient-to-r hover:from-primary/30 hover:to-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl border border-primary/20"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="flex justify-center items-center overflow-hidden gap-6">
              {pastClients.map((client, index) => {
                const isVisible = index >= currentClientIndex && index < currentClientIndex + 3;
                const isActive = index === currentClientIndex;
                return (
                <div
                  key={index}
                  className={`flex-shrink-0 transition-all duration-700 ${
                      isVisible
                        ? 'block opacity-100 scale-100'
                        : 'hidden opacity-0 scale-95'
                    } ${isActive ? 'z-10' : 'z-0'}`}
                  >
                  <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-card via-card/80 to-primary/5 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                    {/* Animated background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-primary/3 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000"></div>
                    
                    <CardContent className="text-center relative z-10">
                      <div className="w-36 h-24 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl p-4 relative border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                        <img 
                          src={client.logoUrl} 
                          alt={`${client.name} logo`}
                          className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.opacity = '0';
                            const fallback = target.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                            if (fallback) {
                              fallback.style.display = 'flex';
                              fallback.style.opacity = '1';
                            }
                          }}
                          onLoad={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.opacity = '1';
                          }}
                        />
                        <div className="logo-fallback absolute inset-0 hidden items-center justify-center w-full h-full bg-gradient-primary rounded-2xl opacity-0 transition-opacity duration-300">
                        <span className="text-primary-foreground font-bold text-2xl">{client.logo}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{client.name}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{client.industry}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
            </div>
            
            {/* Enhanced Navigation dots */}
            <div className="flex justify-center mt-12 space-x-4">
              {Array.from({ length: Math.ceil(pastClients.length / 3) }, (_, groupIndex) => (
                <button
                  key={groupIndex}
                  onClick={() => setCurrentClientIndex(groupIndex * 3)}
                  className={`w-5 h-5 rounded-full transition-all duration-500 shadow-lg ${
                    Math.floor(currentClientIndex / 3) === groupIndex
                      ? 'bg-gradient-to-r from-primary to-primary/80 scale-125 shadow-primary/50'
                      : 'bg-muted-foreground/20 hover:bg-muted-foreground/40 hover:scale-110 border border-muted-foreground/10'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section - Rotating Cards */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the leaders who have 
              experienced the OTCR difference firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[currentTestimonialIndex, (currentTestimonialIndex + 1) % testimonials.length].map((index) => (
              <Card key={index} className="p-8 shadow-strong border-0 bg-gradient-to-br from-card to-card/50 relative overflow-hidden group">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <CardContent className="space-y-6 relative z-10">
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <Star key={i} size={24} className="fill-accent text-accent animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  <blockquote className="text-foreground italic text-lg md:text-xl leading-relaxed text-center font-light">
                    "{testimonials[index].quote}"
                  </blockquote>
                  <div className="border-t border-border pt-6 text-center">
                    <div className="font-semibold text-foreground text-lg mb-1">
                      {testimonials[index].author}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonials[index].role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentTestimonialIndex === index
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          {/* Decorative image for vibrancy */}
          <div className="flex justify-center items-center mb-12">
            <img src={img2545} alt="OTCR lively" className="image-modern w-full max-w-2xl" style={{maxHeight: 340}} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Let's discuss how OTCR can help you achieve your strategic objectives 
            and unlock new growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="accent" size="lg" asChild className="px-12 py-6 text-xl hover:scale-105 transition-transform duration-300">
            <Link to="/contact">
              Start Your Project
                <ArrowRight className="ml-3" size={24} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="px-12 py-6 text-xl text-white border-white hover:bg-white hover:text-primary font-semibold">
              <Link to="/about">
                Learn More
                <ChevronRight className="ml-3" size={24} />
            </Link>
          </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
