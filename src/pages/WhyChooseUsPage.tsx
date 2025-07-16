
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FloatingSpheres from "@/components/three/floating-sphere";
import { CTAButton } from "@/components/cta-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target,
  Award,
  Users,
  Star,
  DollarSign,
  MapPin,
  Clock,
  Shield,
  Lightbulb
} from "lucide-react";

export default function WhyChooseUsPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const reasons = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Tailored Approach",
      description: "Every project is customized to meet your specific business goals and requirements. We don't believe in one-size-fits-all solutions.",
      details: [
        "Custom requirement analysis",
        "Personalized development strategy",
        "Flexible project management",
        "Ongoing consultation"
      ]
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "5+ Years of Experience",
      description: "Our team brings over 5 years of combined expertise in modern web technologies and digital solutions.",
      details: [
        "Proven track record",
        "Industry best practices",
        "Modern technology stack",
        "Continuous learning"
      ]
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Skilled & Experienced Team",
      description: "Our developers, designers, and consultants are experts in their respective fields with hands-on experience.",
      details: [
        "Full-stack developers",
        "UI/UX designers",
        "Project managers",
        "Quality assurance specialists"
      ]
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Top-Rated for Small Business Sites",
      description: "We specialize in creating powerful, professional websites that help small businesses compete online.",
      details: [
        "Small business focus",
        "Quick time-to-market",
        "Cost-effective solutions",
        "Ongoing support"
      ]
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Affordable Pricing",
      description: "Quality web development doesn't have to break the bank. We offer competitive pricing without compromising quality.",
      details: [
        "Transparent pricing",
        "No hidden costs",
        "Flexible payment options",
        "Value for money"
      ]
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: "Uttarakhand-Based Support",
      description: "Local presence with global standards. We provide personalized support and understand the regional market needs.",
      details: [
        "Local market understanding",
        "Regional language support",
        "Time zone advantage",
        "Face-to-face meetings available"
      ]
    }
  ];

  const additionalBenefits = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure Development",
      description: "Industry-standard security practices implemented"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation Focus",
      description: "Latest technologies and innovative solutions"
    }
  ];

  return (
    <div className="min-h-screen relative font-outfit">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <FloatingSpheres numberOfSpheres={10} />
        <div className="container mx-auto px-6 py-16 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">Why Choose</span>
              <br />
              <span className="text-foreground">Sidpin?</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover what makes us the preferred choice for businesses looking for reliable, professional web development services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
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
                      {reason.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{reason.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-2">
                      {reason.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></span>
                          <span>{detail}</span>
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

      {/* Additional Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Benefits</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card rounded-lg border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "5+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-lg bg-card shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
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
              Experience the Sidpin Difference
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
              Join the growing number of businesses that trust Sidpin for their web development needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton
                // variant="secondary"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/contact">Start Your Project</Link>
              </CTAButton>
              <CTAButton
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/services">View Our Services</Link>
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
