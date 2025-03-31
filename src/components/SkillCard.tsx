
import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  className?: string;
}

const SkillCard = ({ name, icon, className }: SkillCardProps) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-4 bg-card rounded-lg border card-hover",
      className
    )}>
      <div className="text-primary mb-2">
        {icon}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default SkillCard;
