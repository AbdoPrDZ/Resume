
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Github, 
  MessageCircle, 
  Send
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "abdopr47@gmail.com", link: "mailto:abdopr47@gmail.com" },
    { icon: <Phone size={20} />, label: "Phone", value: "+213778185797", link: "tel:+213778185797" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", value: "abdoprdz", link: "https://linkedin.com/in/abdoprdz" },
    { icon: <Twitter size={20} />, label: "Twitter", value: "abdoprdz", link: "https://twitter.com/abdoprdz" },
    { icon: <Facebook size={20} />, label: "Facebook", value: "abdoprdz", link: "https://facebook.com/abdoprdz" },
    { icon: <Instagram size={20} />, label: "Instagram", value: "abdoprdz", link: "https://instagram.com/abdoprdz" },
    { icon: <MessageCircle size={20} />, label: "WhatsApp", value: "+213778185797", link: "https://wa.me/213778185797" },
    { icon: <Send size={20} />, label: "Telegram", value: "@abdo_programming", link: "https://t.me/abdo_programming" },
  ];

  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AbdoPrDZ</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Software developer specializing in building exceptional web and mobile applications.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              {contactInfo.slice(0, 4).map((item, index) => (
                <li key={index} className="flex items-center">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.icon}
                    <span>{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <ul className="space-y-2">
              {contactInfo.slice(4).map((item, index) => (
                <li key={index} className="flex items-center">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.icon}
                    <span>{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Abdelrahmane GUERGUER. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/AbdoPrDZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
