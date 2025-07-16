
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTAButton } from "@/components/cta-button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Laptop3D } from "@/components/three/laptop-3d";
import rudradharma from '../assets/rudradharma.png';
import panchbhootyog from '../assets/panchbhootyog.png';
import panchbhootyatra from '../assets/panchbhootyatra.png';
import sutraspiritualclinic from '../assets/sutraspiritualclinic.png';
import yogadhyanyan from '../assets/yogadhyayan.png';

export default function OurWorkPage() {
  const portfolioProjects = [
    {
      title: "Rudra Dharma E-commerce",
      description: "Premium e-commerce platform for spiritual and religious products with advanced shopping features, secure payment integration, and inventory management system.",
      image: rudradharma,
      technologies: ["E-commerce", "WordPress", "Payment Gateway", "WooCommerce"],
      link: "https://www.rudradharma.com",
      category: "E-commerce"
    },
    {
      title: "Yoga Dhyayan",
      description: "Comprehensive spiritual learning and yoga practice platform featuring online courses, meditation guides, and community engagement tools for holistic wellness.",
      image: yogadhyanyan,
      technologies: ["Yoga", "Learning Management", "CMS", "Community Platform"],
      link: "https://yogadhyayan.com",
      category: "Education"
    },
    {
      title: "Panchbhoot Yog",
      description: "Modern holistic yoga and wellness center website with class scheduling, instructor profiles, membership management, and online booking system.",
      image: panchbhootyog,
      technologies: ["Wellness", "Yoga", "Booking System", "Membership"],
      link: "https://Panchbhootyog.com",
      category: "Health & Wellness"
    },
    {
      title: "Panchbhoot Yatra",
      description: "Comprehensive spiritual travel and pilgrimage booking platform with tour packages, accommodation booking, and travel guide services.",
      image: panchbhootyatra,
      technologies: ["Travel", "Booking Platform", "Tour Management", "Payment Integration"],
      link: "https://Panchbhootyatra.com",
      category: "Travel & Tourism"
    },
    // {
    //   title: "Himalayan Wedding",
    //   description: "Luxury destination wedding planning platform specializing in Himalayan venues with vendor management, event coordination, and booking services.",
    //   image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    //   technologies: ["Wedding Planning", "Event Management", "Vendor Network", "Booking System"],
    //   link: "https://Himalayanwedding.com",
    //   category: "Events & Wedding"
    // },
    {
      title: "Sutra Spiritual Clinic",
      description: "Advanced holistic healing and spiritual wellness services platform with appointment booking, practitioner profiles, and wellness tracking.",
      image: sutraspiritualclinic,
      technologies: ["Healthcare", "Wellness Platform", "Appointment System", "Patient Management"],
      link: "https://sutraspiritualclinic.com",
      category: "Healthcare"
    },
    {
      title: "Doha Bus",
      description: "Comprehensive public transportation booking and tracking system with real-time updates, route planning, and mobile payment integration.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      technologies: ["Transportation", "Mobile App", "Real-time Tracking", "Payment Gateway"],
      link: "https://www.dohabus.com/",
      category: "Transportation"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", description: "Successfully delivered projects across various industries" },
    { number: "50+", label: "Happy Clients", description: "Satisfied clients worldwide trust our expertise" },
    { number: "5+", label: "Years Experience", description: "Years of excellence in digital solutions" },
    { number: "100%", label: "Success Rate", description: "Perfect track record of project delivery" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section with 3D Laptop */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Creative Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover our portfolio of successful projects and digital transformations across various industries. 
            Each project represents our commitment to excellence and innovation.
          </p>
          
          <div className="mb-16">
            <Laptop3D />
          </div>
        </motion.div>

        {/* Stats Section with 3D Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                rotateX: 5,
                transition: { duration: 0.2 }
              }}
              className="perspective-1000"
            >
              <Card className="bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-2 border-primary/20 hover:shadow-2xl transition-all duration-300 h-full transform-gpu hover:shadow-primary/25">
                <CardContent className="p-6 text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                  <h4 className="font-semibold text-lg mb-2">{stat.label}</h4>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Projects with Enhanced 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 5, 
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="perspective-1000"
            >
              <Card className="bg-card hover:shadow-2xl transition-all duration-500 border-border/50 overflow-hidden h-full group transform-gpu hover:shadow-primary/20 relative">
                {/* 3D Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* External Link Button */}
                  <div className="absolute top-4 right-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors group-hover:scale-110 transform duration-200"
                    >
                      <ExternalLink className="h-4 w-4 text-gray-800" />
                    </a>
                  </div>
                </div>
                
                {/* Content Section */}
                <CardHeader className="pb-2 relative z-10">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                {/* 3D Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 sm:p-12 rounded-2xl border border-primary/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. Get in touch with us to discuss your next digital project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
            asChild>
              <Link to="/contact">Start Your Project</Link>
            </CTAButton>
            <CTAButton variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
            asChild>
              <Link to="/get-quote">Get a Quote</Link>
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
