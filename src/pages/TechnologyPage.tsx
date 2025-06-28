
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import MeteorField from "@/components/three/meteor-field";
import { CTAButton } from "@/components/cta-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Code, Server, Cpu } from "lucide-react";

export default function TechnologyPage() {
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
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
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Website Development",
      description:
        "Modern, responsive websites built with the latest technologies to ensure exceptional user experience.",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "App Development",
      description:
        "Custom mobile and web applications designed to meet your specific business needs.",
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Marketplace Solutions",
      description:
        "Comprehensive e-commerce and marketplace platforms to help you reach a wider audience.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "IoT Integration",
      description:
        "Connect your physical products with digital experiences through IoT solutions.",
    },
  ];

  const testimonials = [
    {
      quote:
        "SIDPIN transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand.",
      author: "Jane Smith",
      position: "CEO, TechStart",
    },
    {
      quote:
        "Their development team created a custom app that streamlined our operations and improved customer satisfaction.",
      author: "David Johnson",
      position: "CTO, InnovateCorp",
    },
    {
      quote:
        "Working with SIDPIN was seamless. They understood our vision and delivered a product beyond our expectations.",
      author: "Lisa Chen",
      position: "Founder, NextLevel",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <MeteorField />
        <div className="container mx-auto px-6 py-16 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="text-gradient">From startup dreams</span>
              <br /> 
              <span className="text-foreground">to tech reality</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              We build cutting-edge digital solutions that transform businesses and create meaningful experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton>Build My Digital Foundation</CTAButton>
              <CTAButton variant="outline">Learn More</CTAButton>
            </div>
          </div>
        </div>

        {/* Animated down arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
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
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Building Tomorrow's Technology
              </h3>
              <p className="text-muted-foreground mb-6">
                At SIDPIN, we understand that technology is the backbone of modern business. Our aim is to provide innovative technical solutions that not only meet your current needs but also position your business for future growth.
              </p>
              <p className="text-muted-foreground">
                With a team of experienced developers and digital strategists, we focus on creating scalable, secure, and user-friendly digital products that solve real problems and create tangible value.
              </p>
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
                    <strong>User-Centered Design</strong>: Creating intuitive digital experiences that prioritize your users' needs.
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
                    <strong>Scalable Solutions</strong>: Building platforms that grow with your business.
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
                    <strong>Innovative Approach</strong>: Staying ahead of technological trends to provide cutting-edge solutions.
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
                    <strong>Technical Excellence</strong>: Delivering clean, efficient, and maintainable code.
                  </span>
                </li>
              </ul>
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
              We provide comprehensive technology solutions to help your business thrive in the digital landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card hover:shadow-lg transition-shadow border-border/50"
              >
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        ref={sectionRefs.portfolio}
        id="portfolio"
        className="py-20 bg-muted/50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent projects that showcase our technical expertise and creativity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio items would go here - placeholders for now */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={cn(
                  "relative overflow-hidden rounded-lg h-64 group cursor-pointer",
                  "bg-gradient-to-br from-purple-600/80 to-secondary/80"
                )}
              >
                <div className="absolute inset-0 flex items-center justify-center p-6 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-center text-background">
                    <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                    <p className="mb-4">
                      A brief description of this amazing project and the technologies used.
                    </p>
                    <button className="px-4 py-2 bg-primary text-white rounded-md">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={sectionRefs.testimonials}
        id="testimonials"
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's what our clients have to say about working with us.
            </p>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build your digital foundation?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Let's work together to create a technology solution that takes your business to the next level.
          </p>
          <CTAButton
            variant="secondary"
            className="border-2 border-white"
          >
            Get Started Now
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
