
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

interface FounderCardProps {
  name: string;
  position: string;
  image: string;
  email: string;
  bio: string;
}

export function FounderCard({ name, position, image, email, bio }: FounderCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-card border-border/50">
      <div className="aspect-[4/3] relative">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-4">
        <h4 className="font-heading text-lg font-semibold">{name}</h4>
        <p className="text-muted-foreground text-sm mb-2">{position}</p>
        
        <div className="flex items-center text-sm mb-2">
          <Mail className="h-4 w-4 mr-2 text-primary" />
          <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
            {email}
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground mt-3">{bio}</p>
      </CardContent>
    </Card>
  );
}
