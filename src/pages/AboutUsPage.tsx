
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Target, 
  Eye, 
  Calendar,
  CheckCircle,
  Building,
  Award,
  Zap,
  Globe,
  Code,
  TrendingUp,
  Smartphone
} from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  "Web development and mobile app development (including AI-based apps)",
  "Digital Marketing Solutions, such as Search Engine Optimisation, Search Engine Marketing, Social",
  "Analytics to track the success of projects and make informed decisions based on data",
  "Email Marketing campaigns",
  "Content Creation",
  "Developing and implementing effective online marketing strategies"
];

const industries = [
  { name: "Retail & Ecommerce", icon: Building },
  { name: "Education & e-Learning", icon: Users },
  { name: "Healthcare & Fitness", icon: Target },
  { name: "Logistics & Distribution", icon: TrendingUp },
  { name: "Social Network", icon: Globe },
  { name: "Real Estate", icon: Building },
  { name: "Travel & Hospitality", icon: Globe },
  { name: "Food & Restaurant", icon: Building },
  { name: "On-Demand Solution", icon: Smartphone },
  { name: "Gaming", icon: Code }
];

const clientTypes = [
  { name: "Start Up Business", description: "Innovative solutions for emerging companies" },
  { name: "Small & Medium Business", description: "Scalable solutions for growing businesses" },
  { name: "Enterprise", description: "Enterprise-level solutions for large organizations" },
  { name: "Agencies", description: "Partnership solutions for digital agencies" }
];

const stats = [
  { number: "100+", label: "Complete Projects" },
  { number: "50+", label: "Happy Clients" },
  { number: "100%", label: "Success Ratio" }
];

export default function AboutUsPage() {
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
                <Users className="h-6 w-6 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-heading">
                About Us
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              Your Digital Transformation Partner
            </p>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              14+ years of experience - Sid Pin Digital
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Who We Are
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-border/50 bg-gradient-to-br from-background/80 to-background hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    Sid Pin Digital is a leader in digital transformation. The world is going digital and businesses need to keep up with the times. As your digital partner, we provide full-spectrum IT solutions to help your business reach new heights.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    We provide 360 degree digital solutions that include:
                  </p>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-foreground/80">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg text-foreground/80 leading-relaxed mt-6 font-semibold">
                    We can help your business thrive online
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
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
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-12"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book An Appointment
            </Button>
          </motion.div>
          
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5
                }}
                className="transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="border-border/50 bg-gradient-to-br from-background/50 to-background hover:shadow-2xl transition-all duration-300 p-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5
              }}
              className="transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="h-full border-border/50 bg-gradient-to-br from-background/50 to-background hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Mission</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="Mission"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to boost all kinds of businesses by giving them complete digital solutions at a reasonable cost. We are determined to be a digital change partner for our clients, assisting them through the ever-evolving digital landscape and attaining their objectives with our thorough and cost-effective services.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5
              }}
              className="transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="h-full border-border/50 bg-gradient-to-br from-background/50 to-background hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Vision</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80"
                    alt="Vision"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <p className="text-muted-foreground leading-relaxed">
                    Our vision is to be the go-to partner for digital transformation for all businesses. We want to be the one-stop-shop for all digital needs, including digital marketing, web development and mobile application development, at an affordable cost. We are pledged to delivering excellent results, creating long-term relationships with our clients and helping them thrive in the digital era.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive services to many industries. Our experienced team can handle any project.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5
                }}
                className="transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="border-border/50 bg-gradient-to-br from-background/50 to-background hover:shadow-lg transition-all duration-300 p-4 text-center">
                  <industry.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="text-sm font-medium">{industry.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Who We Work With
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Working with a diverse range of clients, from start-ups to small and medium businesses, enterprises and agencies, our experienced team of professionals provide tailored solutions to meet the unique needs of each client. Specializing in creative, cost-effective and innovative solutions, we strive to help our clients reach their goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientTypes.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5
                }}
                className="transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="border-border/50 bg-gradient-to-br from-background/50 to-background hover:shadow-2xl transition-all duration-300 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <h3 className="text-xl font-bold">{client.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{client.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Founders */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Founders
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Meet Anand and Gautam, an entrepreneurial duo whose business is thriving. They are experts in digital marketing, web development, and mobile application development and have clients worldwide. They use their knowledge of the digital space to create tailored solutions for each client and are dedicated to helping them succeed in today's digital world.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5
              }}
              className="transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="border-border/50 bg-gradient-to-br from-background/50 to-background hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                      alt="Anand Siddhartha"
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-2xl font-bold mb-2">Anand Siddhartha</h3>
                    <Button variant="outline" size="sm" onClick={handleBookAppointment}>
                      Schedule A Call
                    </Button>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Highly skilled Full Stack Web and Mobile Application Developer with a great track record</li>
                    <li>• Bachelor's Degree holder in Information and Technology</li>
                    <li>• Postgraduate Diploma in Mobile Application Development</li>
                    <li>• 14 years of experience in website and mobile app development</li>
                    <li>• Worked for notable companies across various industries</li>
                    <li>• Passionate about AI and crypto and works to stay up-to-date with the latest IT trends</li>
                    <li>• His expertise and insights are invaluable to clients, helping them stay ahead in the ever-evolving IT landscape</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5
              }}
              className="transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="border-border/50 bg-gradient-to-br from-background/50 to-background hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80"
                      alt="Gautam Siddhartha"
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-2xl font-bold mb-2">Gautam Siddhartha</h3>
                    <Button variant="outline" size="sm" onClick={handleBookAppointment}>
                      Schedule A Call
                    </Button>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• An expert in providing digital marketing services</li>
                    <li>• Sees the value of a powerful online presence</li>
                    <li>• Assists businesses by giving a wide range of services like SEO, SEM, Social Media Management, Email Marketing, Content Management and much more</li>
                    <li>• Highly knowledgeable in numerous digital marketing tools and techniques</li>
                    <li>• Gives customized solutions that fit each customer's particular needs</li>
                    <li>• With their aid, businesses can raise their online visibility, interact with their target market, and drive growth and income</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Career opportunities"
              className="w-full h-64 object-cover rounded-2xl mb-8"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Career
            </h2>
            <h3 className="text-xl font-semibold mb-4">Build your future with us</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Start your career with us and build a better future for yourself
            </p>
            <CTAButton variant="primary" size="lg" className="text-lg px-8 py-4">
              Join Our Team
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
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
            <Card className="border-border/50 bg-gradient-to-br from-background/80 to-background hover:shadow-2xl transition-all duration-300 p-8">
              <h3 className="text-2xl font-bold mb-4">Our Office</h3>
              <p className="text-lg text-muted-foreground">
                First Floor, Birla Farm, Haripur Kalan, Haridwar, Motichur Range, Uttarakhand 249205
              </p>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
