
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/cta-button";
import { Link } from "react-router-dom";

export default function TechnologiesPage() {
  const techCategories = [
    {
      category: "Frontend Technologies",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      technologies: [
        { name: "React.js", level: "Expert", icon: "⚛️" },
        { name: "Angular", level: "Advanced", icon: "🅰️" },
        { name: "Vue.js", level: "Intermediate", icon: "💚" },
        { name: "TypeScript", level: "Expert", icon: "📘" },
        { name: "JavaScript", level: "Expert", icon: "🟨" },
        { name: "HTML5/CSS3", level: "Expert", icon: "🎨" },
        { name: "Tailwind CSS", level: "Expert", icon: "🎨" },
        { name: "Bootstrap", level: "Advanced", icon: "🅱️" }
      ]
    },
    {
      category: "Backend Technologies",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      technologies: [
        { name: "PHP", level: "Expert", icon: "🐘" },
        { name: "Node.js", level: "Expert", icon: "🟢" },
        { name: "Python", level: "Advanced", icon: "🐍" },
        { name: "Laravel", level: "Expert", icon: "🔺" },
        { name: "CodeIgniter", level: "Advanced", icon: "🔥" },
        { name: "CakePHP", level: "Intermediate", icon: "🍰" },
        { name: "Express.js", level: "Advanced", icon: "⚡" },
        { name: "REST APIs", level: "Expert", icon: "🔗" }
      ]
    },
    {
      category: "CMS & Frameworks",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      technologies: [
        { name: "WordPress", level: "Expert", icon: "📝" },
        { name: "Drupal", level: "Advanced", icon: "💧" },
        { name: "Joomla", level: "Intermediate", icon: "🔵" },
        { name: "WooCommerce", level: "Expert", icon: "🛒" },
        { name: "Shopify", level: "Advanced", icon: "🛍️" },
        { name: "Magento", level: "Intermediate", icon: "🏪" },
        { name: "Custom CMS", level: "Expert", icon: "⚙️" }
      ]
    },
    {
      category: "Database & Cloud",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      technologies: [
        { name: "MySQL", level: "Expert", icon: "🗄️" },
        { name: "MongoDB", level: "Advanced", icon: "🍃" },
        { name: "PostgreSQL", level: "Advanced", icon: "🐘" },
        { name: "Redis", level: "Intermediate", icon: "🔴" },
        { name: "AWS", level: "Advanced", icon: "☁️" },
        { name: "Google Cloud", level: "Intermediate", icon: "🌩️" },
        { name: "Firebase", level: "Advanced", icon: "🔥" }
      ]
    },
    {
      category: "Digital Marketing Tools",
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30",
      technologies: [
        { name: "Google Analytics", level: "Expert", icon: "📊" },
        { name: "Google Ads", level: "Expert", icon: "🎯" },
        { name: "Facebook Ads", level: "Advanced", icon: "📘" },
        { name: "SEO Tools", level: "Expert", icon: "🔍" },
        { name: "Email Marketing", level: "Advanced", icon: "📧" },
        { name: "Social Media", level: "Expert", icon: "📱" },
        { name: "Content Marketing", level: "Advanced", icon: "✍️" }
      ]
    },
    {
      category: "Development Tools",
      color: "from-gray-500/20 to-slate-500/20",
      borderColor: "border-gray-500/30",
      technologies: [
        { name: "Git/GitHub", level: "Expert", icon: "🐙" },
        { name: "Docker", level: "Advanced", icon: "🐳" },
        { name: "VS Code", level: "Expert", icon: "💻" },
        { name: "Postman", level: "Advanced", icon: "📮" },
        { name: "Figma", level: "Advanced", icon: "🎨" },
        { name: "Adobe XD", level: "Intermediate", icon: "🎨" },
        { name: "Webpack", level: "Advanced", icon: "📦" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      case "Advanced":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Technology Stack</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We bring deep technical expertise across modern web technologies, frameworks, and digital marketing tools to deliver cutting-edge solutions that drive your business forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              Expert Level
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              Advanced Level
            </span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              Intermediate Level
            </span>
          </div>
        </motion.div>

        {/* Technology Categories */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-gradient-to-br ${category.color} border-2 ${category.borderColor} hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50 hover:shadow-md transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl">{tech.icon}</span>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getLevelColor(tech.level)}`}
                          >
                            {tech.level}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-foreground">{tech.name}</h3>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">Our Technical Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Technologies Mastered" },
              { number: "100+", label: "Projects Delivered" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Technical Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 sm:p-12 rounded-2xl border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Build with Cutting-Edge Technology?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's leverage our technical expertise to create innovative solutions that propel your business forward in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton asChild>
              <Link to="/contact">Start Your Project</Link>
            </CTAButton>
            <CTAButton variant="outline" asChild>
              <Link to="/consulting">Get Technical Consultation</Link>
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
