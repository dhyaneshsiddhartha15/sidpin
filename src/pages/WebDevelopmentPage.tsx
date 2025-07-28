import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Smartphone, 
  Database, 
  Shield, 
  Zap, 
  Target,
  Users,
  Award,
  MapPin,
  DollarSign,
  CheckCircle,
  Globe,
  Lightbulb,
  Layers,
  Calendar,
  ExternalLink
} from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import rudradharma from '../assets/rudradharma.png';
import panchbhootyog from '../assets/panchbhootyog.png';
import panchbhootyatra from '../assets/panchbhootyatra.png';
import sutraspiritualclinic from '../assets/sutraspiritualclinic.png';
import yogadhyanyan from '../assets/yogadhyayan.png';
import doha from '../assets/doha.png';

const services = [
  { name: "WordPress Web Development", description: "SEO-optimized and easy-to-manage sites" },
  { name: "PHP Web Development", description: "Dynamic, secure, and scalable solutions" },
  { name: "Custom Web Development", description: "Tailored to your unique needs" },
  { name: "Progressive Web Apps (PWAs)", description: "Fast, reliable, app-like experience" },
  { name: "API Development", description: "Enhanced connectivity and performance" },
  { name: "E-commerce & CMS", description: "Scalable and user-friendly platforms" },
  { name: "Small Business Websites", description: "Affordable packages for startups & SMEs" },
  { name: "MEAN Stack Development", description: "Flexible, scalable full-stack solutions" },
  { name: "MERN Stack Development", description: "High-performance applications" },
  { name: "Responsive Web Development", description: "Flawless across all devices" }
];

const whyChooseUs = [
  { 
    icon: Target, 
    title: "Tailored Approach", 
    description: "Custom website development based on your specific needs",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Award, 
    title: "5+ Years of Experience", 
    description: "Proven success in launching and improving websites",
    color: "from-purple-500 to-pink-500"
  },
  { 
    icon: Users, 
    title: "Skilled Team", 
    description: "Modern, secure, and scalable solutions using the latest tech",
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: CheckCircle, 
    title: "Top-Rated for Small Businesses", 
    description: "Excellent local feedback and reviews",
    color: "from-orange-500 to-red-500"
  },
  { 
    icon: DollarSign, 
    title: "Affordable Pricing", 
    description: "High quality at cost-effective rates",
    color: "from-indigo-500 to-purple-500"
  },
  { 
    icon: MapPin, 
    title: "Uttarakhand-Based Support", 
    description: "Personalized local attention",
    color: "from-teal-500 to-blue-500"
  }
];

const technologies = [
  "PHP", "WordPress", "Laravel", "Drupal", "CodeIgniter", 
  "CakePHP", "Joomla", "Python", "TypeScript", "Node.js",
  "React.js", "Angular", "MongoDB"
];

const portfolioProjects = [
  {
        title: "Rudra Dharma E-commerce",
        description: "Premium e-commerce platform for spiritual and religious products",
        image: rudradharma,
        technologies: ["E-commerce", "WordPress", "Payment Gateway"],
        link: "https://www.rudradharma.com"
      },
  {
      title: "Yoga Dhyayan",
      description: "Spiritual learning and yoga practice platform",
      image: yogadhyanyan,
      technologies: ["Yoga", "Learning", "CMS"],
      link: "https://yogadhyayan.com"
    },
    {
      title: "Panchbhoot Yog",
      description: "Holistic yoga and wellness center website",
      image: panchbhootyog,
      technologies: ["Wellness", "Yoga", "Booking"],
      link: "https://Panchbhootyog.com"
    },
    {
      title: "Panchbhoot Yatra",
      description: "Spiritual travel and pilgrimage booking platform",
      image: panchbhootyatra,
      technologies: ["Travel", "Booking", "Tours"],
      link: "https://Panchbhootyatra.com"
    },
    {
      title: "Sutra Spiritual Clinic",
      description: "Holistic healing and spiritual wellness services",
      image: sutraspiritualclinic,
      technologies: ["Healthcare", "Wellness", "Booking"],
      link: "https://sutraspiritualclinic.com"
    },
    {
      title: "Doha Bus", 
      description: "Public transportation booking and tracking system",
      image: doha,
      technologies: ["Transport", "Booking", "Mobile App"],
      link: "https://www.dohabus.com/"
    }
  ];

const consultingSteps = [
  {
    title: "Plan",
    icon: Lightbulb,
    items: ["Understand business goals", "Identify your target audience"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Design",
    icon: Layers,
    items: ["Build intuitive, attractive UI", "Reflect your brand identity"],
    color: "from-pink-500 to-purple-500"
  },
  {
    title: "Develop",
    icon: Code,
    items: ["Use scalable, secure frameworks", "Prioritize performance and usability"],
    color: "from-green-500 to-blue-500"
  }
];

const faqData = [
  {
    question: "What is the best programming language for web development?",
    answer: "It depends on your project's goals. Popular choices include PHP, Python, JavaScript (Node.js), and frameworks like Laravel, React, or Angular."
  },
  {
    question: "What are the advantages of using a web framework?",
    answer: "Frameworks accelerate development, improve code quality, enhance security, and allow for scalable solutions."
  },
  {
    question: "What is the difference between client-side and server-side scripting?",
    answer: "Client-side scripting (e.g., JavaScript) runs on the user's browser, while server-side scripting (e.g., PHP, Python) runs on the web server to generate dynamic content."
  }
];

export default function WebDevelopmentPage() {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate("/appointment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center"
              >
                <Code className="h-6 w-6 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-heading">
                Website Design & Development Services
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              Expert Web Development Agency Based in Uttarakhand
            </p>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Feeling stuck with your current website project? At Sidpin, we make your web journey seamless. 
              Whether you're launching a new website or revamping an old one, outsource your web design and 
              development to us for expert solutions, smooth delivery, and powerful results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Statement Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              rotateX: 5,
              rotateY: 5
            }}
            className="transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Card className="border-border/50 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8 md:p-12">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center"
                >
                  <Zap className="h-8 w-8 text-white" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Advanced Technology Excellence
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  We pride ourselves on using the latest and most advanced technologies for Website Design & Development.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Complete Web Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              🌐 Complete Web Solutions – From Concept to Code
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto mb-8">
              At Sidpin, we blend creativity, innovation, and advanced technologies to build high-performing, 
              visually stunning, and mobile-friendly websites and web applications.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            <p className="text-foreground/80">
              We create custom-built digital solutions aligned with your business goals—delivered on time, 
              within budget, and with exceptional user experience and modern aesthetics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Sidpin Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              💡 Why Choose Sidpin?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                className="transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="h-full border-border/50 bg-gradient-to-br from-background/50 to-background group hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              🛠️ Our Website Design & Development Services
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5
                }}
                className="transform-gpu"
              >
                <Card className="h-full border-border/50 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              📅 Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a consultation with our web development experts and let's bring your vision to life.
            </p>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5
              }}
              className="transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button
                onClick={handleBookAppointment}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book An Appointment
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              🎨 Our Website Portfolio
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              Each portfolio item demonstrates our dedication to quality, creativity, and business growth. 
              Explore how we've helped brands succeed through smart digital solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  z: 50
                }}
                className="transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="overflow-hidden border-border/50 bg-gradient-to-br from-background/80 to-background group hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div 
                      className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </motion.div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View Project
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              🧠 Web Development Consulting
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultingSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10
                }}
                className="transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="h-full border-border/50 bg-gradient-to-br from-background/50 to-background group hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{item}</span>
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

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              ❓ Frequently Asked Questions (FAQs)
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5
            }}
            className="transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Card className="border-border/50 bg-gradient-to-br from-background/80 to-background hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Ready to Transform Your Web Presence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton variant="outline" size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary hover:border-primary">
                Get Started Today
              </CTAButton>
              <CTAButton variant="outline" size="lg"                 className="border-2 border-white text-white hover:bg-white hover:text-primary hover:border-primary">
                View Portfolio
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
