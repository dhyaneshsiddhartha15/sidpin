
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Smartphone, 
  Zap, 
  Target,
  Users,
  Award,
  MapPin,
  DollarSign,
  CheckCircle,
  Calendar,
  ExternalLink,
  ShoppingCart,
  MessageCircle,
  Navigation,
  Code,
  Clock,
  HeartHandshake
} from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { 
    name: "Cross-Platform App Development", 
    description: "Building apps using Flutter and React Native for both Android and iOS platforms within budget and timeline",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    name: "E-commerce App Development", 
    description: "Robust e-commerce apps with secure payments, inventory management, and AI-powered features",
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-500"
  },
  { 
    name: "Social Media App Development", 
    description: "Interactive social media apps with real-time updates and user-friendly interfaces",
    icon: MessageCircle,
    color: "from-purple-500 to-pink-500"
  },
  { 
    name: "Location-based App Development", 
    description: "Apps with GPS, Geolocation, Offline Access, and Map APIs for travel, delivery, and fitness",
    icon: Navigation,
    color: "from-orange-500 to-red-500"
  },
  { 
    name: "Custom App Development", 
    description: "Fully customized mobile applications tailored to your unique business goals and requirements",
    icon: Code,
    color: "from-indigo-500 to-purple-500"
  }
];

const whyChooseUs = [
  { 
    icon: Target, 
    title: "Tailored Solutions", 
    description: "Custom mobile apps that reflect your brand and business goals",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Award, 
    title: "5+ Years of Experience", 
    description: "Solid background in native and cross-platform development for MVPs to enterprise apps",
    color: "from-purple-500 to-pink-500"
  },
  { 
    icon: Users, 
    title: "Expert Development Team", 
    description: "Latest technologies to deliver scalable and secure mobile solutions",
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: CheckCircle, 
    title: "Highly Rated by Clients", 
    description: "Trusted and appreciated by startups and small businesses across platforms",
    color: "from-orange-500 to-red-500"
  },
  { 
    icon: DollarSign, 
    title: "Affordable & Transparent Pricing", 
    description: "High-quality results delivered on time and within your budget",
    color: "from-indigo-500 to-purple-500"
  },
  { 
    icon: HeartHandshake, 
    title: "Post-Launch Support & Optimization", 
    description: "Ongoing updates and technical support to help you grow your app",
    color: "from-teal-500 to-blue-500"
  }
];

const faqData = [
  {
    question: "What is the best way to develop an app?",
    answer: "The best approach depends on your goals, budget, and target audience. Native development offers the best performance, while cross-platform development (like Flutter or React Native) is cost-effective for both Android and iOS."
  },
  {
    question: "How long does it take to develop an app?",
    answer: "Development time typically ranges from 4 weeks to 6 months depending on the app's complexity, features, and testing requirements."
  },
  {
    question: "What are the costs associated with app development?",
    answer: "Costs can vary based on app features, technology stack, design complexity, and development time. We offer flexible pricing to suit startups and small businesses."
  }
];

const portfolioProjects = [
  {
    title: "FitTracker Pro",
    description: "A comprehensive fitness tracking app with workout plans and nutrition tracking.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "DeliveryWala",
    description: "Food delivery app with real-time tracking and secure payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=500&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "StudyBuddy",
    description: "Educational app for students with interactive learning modules.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "TravelMate",
    description: "Travel companion app with itinerary planning and local recommendations.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=500&auto=format&fit=crop",
    link: "#"
  }
];

export default function MobileAppDevelopmentPage() {
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
                <Smartphone className="h-6 w-6 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-heading">
                Mobile App Development
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              An Innovative Mobile App Development Company in Uttarakhand, India
            </p>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Stuck on how to build your mobile app? Sidpin delivers cutting-edge app development services 
              across Android, iOS, and cross-platform frameworks like Flutter.
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
                  High-Quality Mobile Apps Built with the Latest Technology
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Sidpin is a leading mobile application development company based in Uttarakhand, India, 
                  specializing in building custom mobile apps for Android, iOS, and Flutter platforms.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Future-Ready Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              📱 Future-Ready Mobile App Development to Elevate Your Business
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto mb-8">
              We empower businesses with innovative mobile solutions that engage users and deliver measurable impact. 
              From initial concept to launch, our team at Sidpin transforms your ideas into powerful, scalable, 
              and aesthetically pleasing mobile applications.
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
                Book an Appointment
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              🛠️ Our Mobile App Development Services
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              Unlock your business's full potential with our end-to-end mobile app development services. 
              From design and development to deployment and support, we create smart, user-centric apps tailored to your needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
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
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              📱 Our Mobile App Portfolio
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              Explore our past mobile projects — a reflection of our dedication to quality and innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm"
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
              💡 Why Sidpin for Mobile App Development?
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

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your mobile app project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton variant="primary" size="lg" className="text-lg px-8 py-4">
                Get Started Today
              </CTAButton>
              <CTAButton variant="outline" size="lg" className="text-lg px-8 py-4">
                View Portfolio
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
