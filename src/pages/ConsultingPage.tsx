
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FloatingSpheres from "@/components/three/floating-sphere";
import { CTAButton } from "@/components/cta-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target,
  Palette,
  Code,
  Users,
  Search,
  Shield,
  BarChart,
  Lightbulb
} from "lucide-react";

export default function ConsultingPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const consultingSteps = [
    {
      phase: "01",
      title: "Plan",
      icon: <Target className="h-12 w-12 text-primary" />,
      description: "Strategic planning and goal setting",
      details: [
        "Business goals analysis",
        "Target audience research",
        "Competitive landscape review",
        "Technical requirements gathering",
        "Project timeline planning",
        "Budget optimization"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      phase: "02", 
      title: "Design",
      icon: <Palette className="h-12 w-12 text-primary" />,
      description: "UI/UX design and visual branding",
      details: [
        "UI/UX design strategy",
        "Visual appeal optimization",
        "Brand identity development",
        "User experience mapping",
        "Responsive design planning",
        "Accessibility considerations"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      phase: "03",
      title: "Develop",
      icon: <Code className="h-12 w-12 text-primary" />,
      description: "Scalable development and implementation",
      details: [
        "Scalable framework selection",
        "Performance optimization",
        "Security implementation",
        "Quality assurance testing",
        "Cross-platform compatibility",
        "Deployment strategy"
      ],
      color: "from-green-500 to-teal-600"
    }
  ];

  const expertiseAreas = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation planning"
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO Consulting",
      description: "Search engine optimization strategies"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security Audits",
      description: "Website security assessments and improvements"
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Performance Analysis",
      description: "Website performance optimization consulting"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Technology Selection",
      description: "Best technology stack recommendations"
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
              <span className="text-gradient">Web Development</span>
              <br />
              <span className="text-foreground">Consulting</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Strategic guidance and expert consulting to help you make informed decisions about your web development projects.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Process</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure your project success from conception to deployment.
            </p>
          </motion.div>

          <div className="space-y-12">
            {consultingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <Card className="bg-card hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                    <CardHeader className="pb-4 relative">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.phase}
                        </div>
                        <div className="group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardHeader>
                    <CardContent className="relative">
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary"></span>
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.color} opacity-20 flex items-center justify-center`}>
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} opacity-40 flex items-center justify-center`}>
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Consulting Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our consulting services cover all aspects of web development and digital strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card rounded-lg border border-border/50 hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 flex justify-center">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Consulting?</h2>
              <ul className="space-y-4">
                {[
                  "5+ years of industry experience",
                  "Proven track record with 50+ projects",
                  "Technology-agnostic approach",
                  "Tailored solutions for your business",
                  "Ongoing support and maintenance",
                  "Cost-effective project planning"
                ].map((benefit, index) => (
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
                    <span className="text-muted-foreground">{benefit}</span>
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
              <h3 className="text-xl font-semibold mb-4">Free Initial Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Get started with a complimentary consultation session where we'll discuss your project requirements, challenges, and goals.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-sm">Project requirement analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-sm">Technology recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-sm">Timeline and budget estimates</span>
                </div>
              </div>
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
              Ready to Plan Your Next Project?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
              Schedule a free consultation and let's discuss how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton
                variant="secondary"
                className="border-2 border-white"
                asChild
              >
                <Link to="/contact">Schedule Consultation</Link>
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
