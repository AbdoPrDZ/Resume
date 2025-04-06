
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

export const contactInfo = [
  { 
    icon: <Mail size={20} />, 
    label: "Email", 
    value: "abdopr47@gmail.com", 
    link: "mailto:abdopr47@gmail.com" 
  },
  { 
    icon: <Phone size={20} />, 
    label: "Phone", 
    value: "+213778185797", 
    link: "tel:+213778185797" 
  },
  { 
    icon: <Linkedin size={20} />, 
    label: "LinkedIn", 
    value: "abdoprdz", 
    link: "https://linkedin.com/in/abdoprdz" 
  },
  { 
    icon: <Twitter size={20} />, 
    label: "Twitter", 
    value: "abdoprdz", 
    link: "https://twitter.com/abdoprdz" 
  },
  { 
    icon: <Facebook size={20} />, 
    label: "Facebook", 
    value: "abdoprdz", 
    link: "https://facebook.com/abdoprdz" 
  },
  { 
    icon: <Instagram size={20} />, 
    label: "Instagram", 
    value: "abdoprdz", 
    link: "https://instagram.com/abdoprdz" 
  },
  { 
    icon: <MessageCircle size={20} />, 
    label: "WhatsApp", 
    value: "+213778185797", 
    link: "https://wa.me/213778185797" 
  },
  { 
    icon: <Send size={20} />, 
    label: "Telegram", 
    value: "@abdo_programming", 
    link: "https://t.me/abdo_programming" 
  },
  { 
    icon: <Github size={20} />, 
    label: "Github", 
    value: "abdoprdz", 
    link: "https://github.com/AbdoPrDZ" 
  },
];

interface ContactInfoProps {
  className?: string;
  showIcons?: boolean;
  displayCount?: number;
}

const ContactInfo = ({ className = "", showIcons = true, displayCount }: ContactInfoProps) => {
  const displayedContacts = displayCount ? contactInfo.slice(0, displayCount) : contactInfo;
  
  return (
    <div className={className}>
      <ul className="space-y-2">
        {displayedContacts.map((item, index) => (
          <li key={index} className="flex items-center">
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
            >
              {showIcons && item.icon}
              <span>{item.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;
