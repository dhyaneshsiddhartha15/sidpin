
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingSpheres from "@/components/three/floating-sphere";
import DigitalExperienceAnimation from "@/components/three/digital-experience-animation";
import { CTAButton } from "@/components/cta-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import rudradharma from '../assets/rudradharma.png';
// import panchbhootyog from '../assets/panchbhootyog.png';
// import panchbhootyatra from '../assets/panchbhootyatra.png';
// import sutraspiritualclinic from '../assets/sutraspiritualclinic.png';
// import yogadhyanyan from '../assets/yogadhyayan.png';

import { 
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Zap,
  Users,
  Trophy,
  Target,
  TrendingUp,
  Search,
  Megaphone,
  ExternalLink
} from "lucide-react";

export default function HomePage() {
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    digitalExperience: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    work: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      const section = sectionRefs[sectionId]?.current;
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing strategies that drive growth and engagement. We create data-driven campaigns that connect with your target audience, increase brand visibility, and deliver measurable results across all digital channels including social media, search engines, and email marketing platforms."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Expert Development",
      description: "5+ years of experience in modern web technologies and frameworks. Our skilled developers create high-performance websites and web applications using cutting-edge technologies like React, Node.js, and cloud platforms to ensure scalability, security, and optimal user experiences."
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO & SEM",
      description: "Advanced SEO strategies and search engine marketing for maximum visibility. We optimize your website for search engines, conduct keyword research, create compelling ad campaigns, and implement technical SEO best practices to improve your organic rankings and drive qualified traffic."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile-First Design",
      description: "Responsive solutions that work perfectly on all devices and screen sizes. Our mobile-first approach ensures your website delivers exceptional user experiences across smartphones, tablets, and desktops, with fast loading times and intuitive navigation that keeps users engaged."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Performance Analytics",
      description: "Data-driven insights and analytics to optimize your digital presence. We track key performance indicators, analyze user behavior, monitor conversion rates, and provide detailed reports that help you make informed decisions to improve your digital marketing ROI and business growth."
    },
    {
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      title: "Brand Promotion",
      description: "Strategic brand promotion across multiple digital channels and platforms. We create cohesive brand messaging, develop engaging content marketing strategies, manage social media presence, and execute integrated marketing campaigns that build brand awareness and customer loyalty."
    }
  ];

  // const portfolioProjects = [
  //   {
  //     title: "Rudra Dharma E-commerce",
  //     description: "Premium e-commerce platform for spiritual and religious products",
  //     image: rudradharma,
  //     technologies: ["E-commerce", "WordPress", "Payment Gateway"],
  //     link: "https://www.rudradharma.com"
  //   },
  //   {
  //     title: "Yoga Dhyayan",
  //     description: "Spiritual learning and yoga practice platform",
  //     image: yogadhyanyan,
  //     technologies: ["Yoga", "Learning", "CMS"],
  //     link: "https://yogadhyayan.com"
  //   },
  //   {
  //     title: "Panchbhoot Yog",
  //     description: "Holistic yoga and wellness center website",
  //     image: panchbhootyog,
  //     technologies: ["Wellness", "Yoga", "Booking"],
  //     link: "https://Panchbhootyog.com"
  //   },
  //   {
  //     title: "Panchbhoot Yatra",
  //     description: "Spiritual travel and pilgrimage booking platform",
  //     image: panchbhootyatra,
  //     technologies: ["Travel", "Booking", "Tours"],
  //     link: "https://Panchbhootyatra.com"
  //   },
  //   {
  //     title: "Sutra Spiritual Clinic",
  //     description: "Holistic healing and spiritual wellness services",
  //     image: sutraspiritualclinic,
  //     technologies: ["Healthcare", "Wellness", "Booking"],
  //     link: "https://sutraspiritualclinic.com"
  //   },
  //   {
  //     title: "Doha Bus",
  //     description: "Public transportation booking and tracking system",
  //     image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
  //     technologies: ["Transport", "Booking", "Mobile App"],
  //     link: "https://www.dohabus.com/"
  //   }
  // ];

  return (
    <div className="min-h-screen relative font-outfit">
      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
      >
        {/* <FloatingSpheres numberOfSpheres={5} /> */}
        <FloatingSpheres />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient">Transform Your Digital Presence</span>
              <br /> 
              <span className="text-foreground">with Expert Marketing & Development</span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Sidpin, we're your complete digital marketing and web development partner. From strategic digital campaigns to cutting-edge web solutions, we help businesses thrive in the digital landscape with measurable results and powerful online experiences.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CTAButton asChild className="w-full sm:w-auto text-white">
                <Link to="/contact">Start Your Digital Journey</Link>
              </CTAButton>
              {/* <CTAButton variant="outline" asChild className="w-full sm:w-auto"> */}
              <CTAButton asChild className="w-full sm:w-auto text-white">
                <Link to="/services">Explore Our Services</Link>
              </CTAButton>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1, duration: 0.8 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }}
        >
          <a
            href="#digitalExperience"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* Digital Experience Section */}
      <section
        ref={sectionRefs.digitalExperience}
        id="digitalExperience"
        className="py-20 bg-muted/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Digital Experience With Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              We create immersive digital experiences that connect your brand with your audience through innovative technology and creative design.
            </p>
          </motion.div>
          
          <div className="mb-16">
            <DigitalExperienceAnimation />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Interactive Web Experiences",
                description: "Engaging websites with 3D elements, smooth animations, and intuitive user interfaces that captivate visitors and drive conversions through innovative design and cutting-edge technology implementation.",
                icon: <Globe className="h-8 w-8 text-primary" />
              },
              {
                title: "Digital Marketing Campaigns",
                description: "Data-driven campaigns that deliver measurable results through strategic planning, audience targeting, content optimization, and performance tracking across multiple digital channels.",
                icon: <TrendingUp className="h-8 w-8 text-primary" />
              },
              {
                title: "Brand Digital Transformation",
                description: "Complete digital makeover for modern businesses including brand identity development, online presence optimization, and integrated digital strategy implementation for sustainable growth.",
                icon: <Zap className="h-8 w-8 text-primary" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg border border-border/50 hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={sectionRefs.features}
        id="features"
        className="py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Choose Sidpin?</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              We combine technical expertise with creative vision to deliver exceptional digital solutions that drive results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden h-full group hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
                  <CardHeader className="pb-2 relative">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      {/* <section
        ref={sectionRefs.work}
        id="work"
        className="py-20 bg-muted/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Discover our portfolio of successful projects and digital transformations across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden h-full group hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 text-gray-800" />
                      </a>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton asChild>
              <Link to="/contact" className="inline-flex items-center gap-2 text-white">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </CTAButton>
          </div>
        </div>
      </section> */}

      {/* Services Preview Section */}
      <section
        ref={sectionRefs.services}
        id="services"
        className="py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              From digital marketing strategies to custom web development, we provide comprehensive digital services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              {
                title: "Digital Marketing Strategy",
                description: "Professional digital marketing strategy solutions that drive growth and engagement through targeted campaigns, SEO optimization, social media management, and comprehensive analytics to maximize your online presence and conversion rates."
              },
              {
                title: "WordPress Development",
                description: "Professional WordPress development solutions featuring custom themes, plugin integration, e-commerce functionality, and performance optimization to create powerful, scalable websites that meet your business objectives."
              },
              {
                title: "Custom Web Development",
                description: "Professional custom web development solutions using modern technologies like React, Node.js, and cloud platforms to build high-performance, scalable applications tailored to your specific business requirements."
              },
              {
                title: "E-commerce Solutions",
                description: "Professional e-commerce solutions with secure payment gateways, inventory management, order processing, and user-friendly interfaces designed to maximize sales and provide exceptional shopping experiences."
              },
              {
                title: "SEO & SEM Services",
                description: "Professional SEO & SEM services including keyword research, on-page optimization, link building, and paid advertising campaigns to improve search rankings and drive qualified traffic to your website."
              },
              {
                title: "Progressive Web Apps",
                description: "Professional progressive web app solutions that combine the best of web and mobile apps, offering offline functionality, push notifications, and app-like experiences across all devices."
              },
              {
                title: "API Development",
                description: "Professional API development solutions for seamless data integration, third-party service connections, and custom functionality that enables your applications to communicate effectively and efficiently."
              },
              {
                title: "Brand Development",
                description: "Professional brand development solutions including logo design, brand identity creation, messaging strategy, and visual guidelines to establish a strong, memorable brand presence in your market."
              },
              {
                title: "Mobile-First Design",
                description: "Professional mobile-first design solutions that prioritize user experience across all devices, ensuring responsive layouts, fast loading times, and intuitive navigation for optimal engagement."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg border border-border/50 hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton 
            asChild>
              <Link to="/services" className="inline-flex items-center gap-2 text-white">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={sectionRefs.cta}
        className="py-20 bg-gradient-to-r from-primary to-primary-foreground/20 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto opacity-90 px-4">
              Let's discuss your project and create a solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <CTAButton
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
                asChild
              >
                <Link to="/contact">Get Free Consultation</Link>
              </CTAButton>
              <CTAButton
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
                asChild
              >
                <Link to="/why-choose-us">Learn More About Us</Link>
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
