import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import FloatingSpheres from "@/components/three/floating-sphere";
import DigitalExperienceAnimation from "@/components/three/digital-experience-animation";
import { CTAButton } from "@/components/cta-button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Code, 
  MegaphoneIcon, 
  Image as ImageIcon, 
  Pencil,
  Building2,
  Star
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ProjectShowcase } from "@/components/project-showcase";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function LandingPage() {
  // Mouse cursor effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position for cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    digitalExperience: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
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

  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Technology",
      description: "We build strong digital foundations with customized, scalable, and secure tech solutions.",
      services: [
        "Website Design & Development",
        "E-commerce Website Development",
        "Mobile App Development",
        "Marketplace Development",
        "Internet of Things (IoT) Integration"
      ]
    },
    {
      icon: <MegaphoneIcon className="h-8 w-8 text-primary" />,
      title: "Digital Marketing",
      description: "Strategic marketing that connects your brand with the right audience at the right time.",
      services: [
        "Branding & Strategy",
        "Social Media Management",
        "Search Engine Optimization (SEO)",
        "Online Reputation Management (ORM)",
        "Web & Campaign Analytics"
      ]
    },
    {
      icon: <ImageIcon className="h-8 w-8 text-primary" />,
      title: "Media & Performance",
      description: "Create campaigns that sell — with precision-targeted media planning and execution.",
      services: [
        "Brand Media Campaigns",
        "Programmatic Media Buying",
        "Online Sales Strategy",
        "E-commerce Marketplace Promotion",
        "Meta (Facebook & Instagram) Ads",
        "Google Search & Display Ads"
      ]
    },
    {
      icon: <Pencil className="h-8 w-8 text-primary" />,
      title: "Digital Content Development",
      description: "Content that speaks, connects, and converts — built for digital-first brands.",
      services: [
        "Content Hub Development",
        "Creative Visuals & Graphics",
        "Video Production & Editing",
        "Influencer & Content Partnerships"
      ]
    },
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "PR & Brand Reputation",
      description: "Shape public perception and protect your brand identity across all platforms.",
      services: [
        "Digital PR Campaigns",
        "Crisis Management",
        "Brand Advocacy & Thought Leadership",
        "Online Reputation Management"
      ]
    },
    {
      icon: <ImageIcon className="h-8 w-8 text-primary" />,
      title: "Real Estate Photography",
      description: "High-impact property visuals that turn interest into inquiries.",
      services: [
        "Premium photo & video shoots for real estate listings",
        "Brochures and digital promotions",
        "Virtual tours",
        "Property showcases"
      ]
    }
  ];

  // Updated portfolio array with image paths
  const portfolio = [
    {
      title: "PanchbhootYog & PanchbhootYatra",
      description: "Bringing nature, spirituality, and wellness into the digital world.",
      details: "We manage their entire digital ecosystem — from social media to website design, including branding, reels, and campaign execution for yoga retreats and nature-based experiences.",
      imageSrc: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1000&auto=format&fit=crop",
      link: "/portfolio/panchbhootyog"
    },
    {
      title: "Kosmicc Energy",
      description: "An astrology & energy wellness brand taken online from scratch.",
      details: "From logo & branding to Instagram launch strategy, we created a bold and mystical brand identity that attracts a growing spiritual audience.",
      imageSrc: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?q=80&w=1000&auto=format&fit=crop",
      link: "/portfolio/kosmicc-energy"
    },
    {
      title: "YogAdhyayan Yoga School – Rishikesh",
      description: "International yoga school launch done digitally.",
      details: "We crafted their website, built the brand visually, and consistently manage educational content, YouTube videos, reels, and ads — attracting global yoga aspirants.",
      imageSrc: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1000&auto=format&fit=crop",
      link: "/portfolio/yogadhyayan"
    },
    {
      title: "Astro Anshul Pandit",
      description: "Astrology with a modern voice.",
      details: "We built a consistent presence across Instagram, YouTube, Facebook, ShareChat, Quora, and more, including video editing, daily posting, reels, and ad campaign strategy.",
      imageSrc: "https://images.unsplash.com/photo-1532968980994-550a8a5d6c1e?q=80&w=1000&auto=format&fit=crop",
      link: "/portfolio/astro-anshul"
    },
    {
      title: "Navdeep Foundation",
      description: "A non-profit with a powerful cause.",
      details: "We support their event promotions, volunteer outreach, and handle their social media visuals, video content, and impact storytelling.",
      imageSrc: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1000&auto=format&fit=crop",
      link: "/portfolio/navdeep-foundation"
    },
    {
      title: "Sutra Spiritual Clinic",
      description: "Spiritual lifestyle products & healing experiences.",
      details: "We designed product photography, created ad-ready videos, and structured their digital marketing to align with the vibe of mindful living.",
      imageSrc: "https://images.unsplash.com/photo-1598901847995-3bb087773203?q=80&w=1000&auto=format&fit=crop",
      link: "/portfolio/sutra-clinic"
    }
  ];

  const testimonials = [
    {
      quote: "SidPin transformed our digital presence. Their understanding of wellness brands is unmatched.",
      author: "Yoga Instructor",
      position: "PanchbhootYog"
    },
    {
      quote: "From zero online presence to a thriving digital community in just months. Truly exceptional work.",
      author: "Founder",
      position: "Kosmicc Energy"
    },
    {
      quote: "Our student enrollment increased 200% after SidPin revamped our digital strategy.",
      author: "Director",
      position: "YogAdhyayan Yoga School"
    }
  ];

  const uniqueSellingPoints = [
    {
      title: "Niche Expertise That Understands Emotion",
      description: "We specialize in working with brands rooted in wellness, spirituality, education, and energy, where connection matters more than conversion. We speak your brand's language — whether it's the calm of yoga, the mystery of astrology, or the devotion of a spiritual community."
    },
    {
      title: "Tailored Strategies — Not Templates",
      description: "Every client is unique, and so is our approach. We don't follow a copy-paste strategy — instead, we dive deep into your brand identity and create custom visuals, voice, and campaigns that truly resonate with your target audience."
    },
    {
      title: "Design + Storytelling + Performance",
      description: "We combine visual storytelling, powerful design, and platform-specific strategy to create content that doesn't just look good — it performs. Our creatives are built to engage, inspire, and convert."
    },
    {
      title: "End-to-End Execution",
      description: "From your first Instagram reel to your full-scale website or ad campaign, we take care of it all — seamlessly. Be it design, development, content, video, or analytics — we're your one-stop growth partner."
    },
    {
      title: "Emotion-Driven Digital Building",
      description: "We believe the strongest digital brands are those that connect emotionally. That's why we focus on authentic content, human-centric storytelling, and visuals that feel real — not robotic."
    },
    {
      title: "We Grow With You",
      description: "Most of our clients started small — and grew big with our strategies. We're not just a service provider; we're a growth partner invested in your long-term success."
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Cursor effect */}
      <motion.div 
        className="hidden lg:block fixed w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-secondary pointer-events-none blur-3xl opacity-20 z-0"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          duration: 0.05
        }}
      />

      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <FloatingSpheres />
        <div className="container mx-auto px-6 py-16 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="text-gradient">From startup dreams</span>
              <br /> 
              <span className="text-foreground">to established brands</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              We power digital journeys that lead to real success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton>Start Your Journey</CTAButton>
              <CTAButton variant="outline">Explore Our Work</CTAButton>
            </div>
          </div>
        </div>

        {/* Animated down arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#digitalExperience"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary"
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
        </div>
      </section>

      {/* Unlock Digital Experiences Section - NEW */}
      <section
        ref={sectionRefs.digitalExperience}
        id="digitalExperience"
        className="py-20 bg-gradient-to-br from-background to-muted/30"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Unlock Digital Experiences With Us</h2>
                <p className="text-lg text-foreground/80 mb-6">
                  In today's digital-first world, exceptional online experiences aren't just nice to have—they're essential. We combine cutting-edge technology with strategic creativity to build digital experiences that captivate, convert, and create lasting connections.
                </p>
                <p className="text-lg text-foreground/80 mb-8">
                  Our approach bridges technology and human emotion, delivering websites, applications, and digital touchpoints that don't just perform—they resonate.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Custom Digital Solutions</h3>
                      <p className="text-muted-foreground">Tailored digital experiences built around your unique business objectives and user needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Future-Proof Technology</h3>
                      <p className="text-muted-foreground">Built with scalable, resilient technologies that evolve alongside your business needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Performance-Driven Design</h3>
                      <p className="text-muted-foreground">Beautiful interfaces backed by data-informed decisions that drive measurable business results.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="order-1 md:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-panel rounded-2xl p-6 overflow-hidden"
              >
                <DigitalExperienceAnimation />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Aim Section */}
      <section
        ref={sectionRefs.about}
        id="about"
        className="py-20 bg-muted/50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Aim</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              At SidPin, our purpose is simple yet powerful — to fuel your growth at every stage with impactful digital strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-panel p-8 rounded-2xl">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-3">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <strong>Turn ideas into action:</strong> We help you shape your raw vision into a powerful digital identity.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-3">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <strong>Build brands that speak:</strong> Every design, video, or ad is crafted to reflect your brand's unique voice.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-3">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <strong>Drive real results, not just traffic:</strong> We focus on outcomes that grow revenue, not just vanity metrics.
                  </span>
                </li>
              </ul>
            </div>
            <div className="glass-panel p-8 rounded-2xl">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-3">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <strong>Be your long-term growth partner:</strong> We work with you, not for you — your success is our success.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-3">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <strong>Simplify the digital world for you:</strong> From tech to trends, we handle the complex so you can focus on your business.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-3">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <strong>Create trust through creativity:</strong> We blend storytelling, strategy, and technology to build lasting customer relationships.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-card shadow-sm">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-muted-foreground">Years of combined expertise</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card shadow-sm">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-muted-foreground">Projects successfully delivered</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card shadow-sm">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-muted-foreground">Happy and returning clients</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card shadow-sm">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-muted-foreground">Creative minds & digital specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={sectionRefs.services}
        id="services"
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive digital solutions to help your business thrive in today's competitive landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card hover:shadow-lg transition-shadow border-border/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
                <CardHeader className="pb-2 relative">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-2">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Updated with 3D showcase */}
      <section
        ref={sectionRefs.portfolio}
        id="portfolio"
        className="py-20 bg-muted/50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Real Results. Real Impact. Real Clients. We've partnered with powerful brands across wellness, spirituality, education, and marketing to build their digital presence from the ground up.
            </p>
          </div>

          {/* 3D Showcase Banner */}
          <div className="mb-16 relative overflow-hidden rounded-lg">
            <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-black to-purple-900 overflow-hidden rounded-xl">
              <div className="absolute inset-0 opacity-20">
                <FloatingSpheres numberOfSpheres={10} />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-full max-w-4xl"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/lovable-uploads/fca7961c-4c72-49ff-961b-502ed1637eb2.png"
                    alt="SidPin Project Showcase"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Showcased Projects with Enhanced 3D Effect */}
          <ProjectShowcase projects={portfolio} />
          
          {/* Media & Marketing Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Media & Marketing</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden glass-panel">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center max-w-3xl"
                >
                  <h3 className="text-3xl md:text-5xl font-bold mb-6">Let's Talk</h3>
                  <p className="text-xl md:text-2xl mb-10">
                    Dreaming big? Need insights? Got a question?<br />
                    We're here for you no matter who you are!
                  </p>
                  <CTAButton size="lg">Get in Touch</CTAButton>
                </motion.div>
              </div>
              
              {/* Stylized background based on cursor position */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black overflow-hidden">
                <div className="w-full h-full opacity-60">
                  <img 
                    src="/lovable-uploads/563d2d61-a2bf-4e2e-a5bf-114ddabc48f2.png"
                    alt="Media Background"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why We Stand Out Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Work Stands Out</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              At SidPin, we don't just deliver digital services — we craft digital journeys that reflect your brand's purpose, values, and vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueSellingPoints.map((point, index) => (
              <Card key={index} className="bg-card border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-start items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold ml-3">{point.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={sectionRefs.testimonials}
        id="testimonials"
        className="py-20 bg-muted/50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border-border/50 hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-primary opacity-70"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 8c-2.209 0-4 1.791-4 4v8c0 2.209 1.791 4 4 4h8c2.209 0 4-1.791 4-4v-8c0-2.209-1.791-4-4-4h-8zM22 8c-2.209 0-4 1.791-4 4v8c0 2.209 1.791 4 4 4h8c2.209 0 4-1.791 4-4v-8c0-2.209-1.791-4-4-4h-8z"></path>
                    </svg>
                  </div>
                  <p className="text-center mb-6 italic text-muted-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-center">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={sectionRefs.contact}
        id="contact"
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your digital journey? Reach out to us and let's create something amazing together.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border/50">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-4 py-2 bg-background border border-input rounded-md"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 bg-background border border-input rounded-md"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-4 py-2 bg-background border border-input rounded-md"
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 bg-background border border-input rounded-md resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <div>
                    <CTAButton className="w-full">Send Message</CTAButton>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to amplify your brand?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Let's create a digital strategy that sets your brand apart and drives sustainable growth.
          </p>
          <CTAButton
            variant="secondary"
            className="border-2 border-white"
          >
            Start Your Journey Now
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
