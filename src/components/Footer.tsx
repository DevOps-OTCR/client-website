import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-primary">OTCR</div>
              <div className="text-lg font-medium text-foreground">Consulting</div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering businesses through strategic consulting and innovative solutions. 
              Led by top student talent, delivering real-world impact.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>info@otcr-consulting.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>University of Illinois at Urbana-Champaign, Champaign, IL</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Past Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/otcr-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/otcr_consulting/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-border mt-8 pt-8 flex justify-center">
          <p className="text-sm text-muted-foreground">
            © 2024 OTCR Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;