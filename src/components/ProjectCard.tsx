
import { Github, Link } from "lucide-react";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveLink?: string;
  className?: string;
  style?: CSSProperties;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  liveLink,
  className,
  style,
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "bg-card border rounded-lg overflow-hidden card-hover p-6",
        className
      )}
      style={style}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-3 mt-auto">
        {github && (
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            <Github size={16} className="mr-1" />
            <span>GitHub</span>
          </a>
        )}
        
        {liveLink && (
          <a 
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            <Link size={16} className="mr-1" />
            <span>Preview</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
