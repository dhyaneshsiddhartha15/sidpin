
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Smartphone, Code, Share2 } from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: Code,
    path: "/services/web-development",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    path: "/services/mobile-app-development",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Digital Marketing",
    icon: Target,
    path: "/services/digital-marketing",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Social Media Management",
    icon: Share2,
    path: "/services/social-media-management",
    color: "from-purple-500 to-pink-500"
  }
];

export function ServiceDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-2xl p-4 min-w-[300px]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="grid gap-3">
        {services.map((service, index) => (
          <motion.div
            key={service.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
              z: 10
            }}
            className="transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Link to={service.path}>
              <Card className="p-4 hover:shadow-xl transition-all duration-300 border-border/50 bg-gradient-to-r from-background/50 to-background group relative overflow-hidden">
                <div className="flex items-center gap-3 relative z-10">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </span>
                </div>
                
                {/* 3D effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
