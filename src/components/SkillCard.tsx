
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const SkillCard = ({ name, icon, className, style }: SkillCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center p-4 bg-card rounded-lg border card-hover",
        className
      )}
      style={style}
    >
      <div className="text-primary mb-2">
        {icon}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default SkillCard;
