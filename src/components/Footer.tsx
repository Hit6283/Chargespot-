import { Mail, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" }
  ];

  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:hello@chargespot.com", label: "Email" }
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">ChargeSpot</h3>
            <p className="text-muted-foreground">Share Power Like a Hotspot</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ChargeSpot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
