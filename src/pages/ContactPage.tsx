
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FloatingSpheres from "@/components/three/floating-sphere";
import { CTAButton } from "@/components/cta-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "info@sidpin.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: "+91 123 456 7890",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details: "Uttarakhand, India",
      description: "Our headquarters location"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      details: "Mon - Fri: 9 AM - 6 PM",
      description: "IST (Indian Standard Time)"
    }
  ];

  const faqs = [
    {
      question: "What is the best programming language for web development?",
      answer: "It depends on your goals. Popular choices include PHP, Python, JavaScript (Node.js), and frameworks like Laravel, React, or Angular. We help you choose the right technology stack based on your specific project requirements, scalability needs, and business objectives."
    },
    {
      question: "What are the advantages of using a web framework?",
      answer: "Frameworks accelerate development, improve code quality, enhance security, and enable scalable solutions. They provide pre-built components, follow best practices, and offer standardized patterns that make development more efficient and maintainable."
    },
    {
      question: "What is the difference between client-side and server-side scripting?",
      answer: "Client-side scripting (JavaScript) runs on the browser and handles user interface interactions, while server-side scripting (PHP, Python, Node.js) runs on the server to create dynamic content, handle databases, and manage business logic."
    },
    {
      question: "How long does it take to develop a website?",
      answer: "Timeline varies based on complexity. A simple business website takes 2-4 weeks, while complex e-commerce or custom applications may take 6-12 weeks. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages including security updates, content updates, performance monitoring, backup management, and technical support to keep your website running smoothly."
    },
    {
      question: "What is responsive web design?",
      answer: "Responsive design ensures your website looks and functions perfectly on all devices - smartphones, tablets, and desktops. It automatically adjusts layout, images, and content to provide optimal user experience across different screen sizes."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen relative font-outfit">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20"
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
              <span className="text-gradient">Contact Us</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to start your project? Get in touch with our team for a free consultation and quote.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card hover:shadow-md transition-all duration-300 border-border/50 text-center h-full">
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex justify-center">
                      {info.icon}
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-2">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-30"></div>
                <CardHeader className="text-center relative">
                  <CardTitle className="text-2xl mb-2">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="pt-6 relative">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          className="w-full px-4 py-3 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-4 py-3 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          className="w-full px-4 py-3 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="+91 123 456 7890"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          className="w-full px-4 py-3 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="wordpress">WordPress Development</option>
                          <option value="custom">Custom Web Development</option>
                          <option value="ecommerce">E-commerce Development</option>
                          <option value="consulting">Web Development Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        className="w-full px-4 py-3 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Project inquiry"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 bg-background border border-input rounded-md resize-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                        required
                      />
                    </div>
                    
                    <div>
                      <CTAButton className="w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Send Message
                      </CTAButton>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our web development services and process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card border-border/50 overflow-hidden">
                    <CardHeader 
                      className="cursor-pointer hover:bg-muted/30 transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                        {openFaq === index ? (
                          <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                        )}
                      </div>
                    </CardHeader>
                    {openFaq === index && (
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground">
              Based in the beautiful state of Uttarakhand, serving clients globally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-lg border border-border/50 overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Uttarakhand, India</h3>
                <p className="text-muted-foreground">
                  Our team is based in Uttarakhand, providing local expertise with global standards.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
