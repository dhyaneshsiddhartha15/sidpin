
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FloatingSpheres from "@/components/three/floating-sphere";
import { CTAButton } from "@/components/cta-button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Code,
  Database,
  Smartphone,
  ShoppingCart,
  Cog,
  Globe,
  Building,
  Layers,
  ArrowRight
} from "lucide-react";

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "WordPress Web Development",
      description: "Custom WordPress solutions with modern themes, plugins, and optimization for performance and SEO.",
      features: ["Custom Theme Development", "Plugin Integration", "Performance Optimization", "SEO Ready"]
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "PHP Web Development",
      description: "Robust PHP applications using Laravel, CodeIgniter, and custom frameworks for scalable solutions.",
      features: ["Laravel Development", "Custom PHP Solutions", "Database Integration", "API Development"]
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Custom Web Development",
      description: "Tailored web applications built from scratch using modern technologies and best practices.",
      features: ["Custom Architecture", "Modern Frameworks", "Scalable Solutions", "Performance Focused"]
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Progressive Web Apps (PWA)",
      description: "App-like experiences that work offline and provide native mobile app functionality.",
      features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-Platform"]
    },
    {
      icon: <Cog className="h-10 w-10 text-primary" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration and data management across platforms.",
      features: ["RESTful APIs", "GraphQL", "Authentication", "Documentation"]
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: "E-commerce & CMS Development",
      description: "Complete e-commerce solutions with content management systems for easy maintenance.",
      features: ["Shopping Cart Integration", "Payment Gateways", "Inventory Management", "Admin Panels"]
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Small Business Website Development",
      description: "Affordable, professional websites designed specifically for small businesses and startups.",
      features: ["Budget-Friendly", "Quick Turnaround", "Mobile Responsive", "SEO Optimized"]
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "MEAN Stack Development",
      description: "Full-stack JavaScript solutions using MongoDB, Express.js, Angular, and Node.js.",
      features: ["MongoDB Database", "Express.js Backend", "Angular Frontend", "Node.js Runtime"]
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "MERN Stack Development",
      description: "Modern React-based applications with MongoDB, Express.js, React, and Node.js.",
      features: ["React Frontend", "Node.js Backend", "MongoDB Database", "Real-time Features"]
    }
  ];

  return (
    <div className="min-h-screen relative font-outfit">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <FloatingSpheres numberOfSpheres={12} />
        <div className="container mx-auto px-6 py-16 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">Our Services</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive web development solutions emphasizing performance, mobile-responsiveness, and SEO-optimized results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden h-full group hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
                  <CardHeader className="pb-4 relative">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Web Development Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Responsive Web Development</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Every website we create is built with a mobile-first approach, ensuring perfect functionality across all devices and screen sizes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
              <ul className="space-y-4">
                {[
                  "Mobile-first responsive design",
                  "Cross-browser compatibility",
                  "Fast loading times",
                  "SEO optimization",
                  "Accessibility compliance",
                  "Performance monitoring"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl"
            >
              <h4 className="text-xl font-semibold mb-4">Why Responsive Matters</h4>
              <p className="text-muted-foreground mb-4">
                With over 60% of web traffic coming from mobile devices, responsive design isn't optional—it's essential for business success.
              </p>
              <p className="text-muted-foreground">
                Our responsive solutions ensure your website looks and functions perfectly on smartphones, tablets, and desktops, providing an optimal user experience across all platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-foreground/20 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
              Let's discuss your requirements and create a custom solution that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton
                variant="secondary"
                className="border-2 border-white"
                asChild
              >
                <Link to="/contact">Get Free Quote</Link>
              </CTAButton>
              <CTAButton
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/technologies">View Technologies</Link>
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
