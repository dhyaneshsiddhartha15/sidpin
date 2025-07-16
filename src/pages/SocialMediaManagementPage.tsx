
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Share2, 
  Calendar, 
  Palette, 
  MessageSquare, 
  Users, 
  BarChart, 
  CheckCircle,
  Target,
  Heart,
  TrendingUp,
  Eye,
  Megaphone
} from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import agfitness from '../assets/insta/agfitness.jpg'
import navdeep from '../assets/insta/navdeep.jpg'
import yog from '../assets/insta/yog.jpg'
import rudradharma from '../assets/insta/rudradharma.jpg'
import swati from '../assets/insta/swati.jpg'
import astro from '../assets/insta/astro.jpg'
import ganges from '../assets/insta/ganges.jpg'
import yog2 from '../assets/insta/yog2.jpg'
import panch from '../assets/insta/panch.jpg'

const services = [
  { 
    name: "Content Planning & Strategy", 
    description: "We begin by understanding your brand, audience, and goals. Based on this, we create a monthly content calendar with a mix of promotional, educational, and engaging content tailored to each platform.",
    icon: Calendar,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    name: "Creative Content Creation", 
    description: "Our team designs eye-catching graphics, videos, and reels that align with your brand identity. Every post is crafted to maximize reach and engagement using the latest trends and visual styles.",
    icon: Palette,
    color: "from-purple-500 to-pink-500"
  },
  { 
    name: "Social Media Copywriting", 
    description: "Captions that connect, hashtags that work, and CTAs that drive results—we write copy that converts, educates, and entertains your followers.",
    icon: MessageSquare,
    color: "from-green-500 to-emerald-500"
  },
  { 
    name: "Platform Management & Scheduling", 
    description: "We handle everything—from post scheduling and publishing to managing stories, reels, and highlights—ensuring your brand stays consistent and active across all channels.",
    icon: Target,
    color: "from-orange-500 to-red-500"
  },
  { 
    name: "Community Engagement", 
    description: "We don't just post and disappear. Our team actively monitors comments, messages, and mentions to build strong relationships with your audience and respond to queries promptly.",
    icon: Users,
    color: "from-indigo-500 to-purple-500"
  },
  { 
    name: "Performance Analytics & Reporting", 
    description: "We track everything—reach, engagement, follower growth, and more. Monthly reports help you understand what's working and where to improve for better ROI.",
    icon: BarChart,
    color: "from-teal-500 to-blue-500"
  }
];

const whyChooseUs = [
  { 
    icon: Target, 
    title: "Data-Driven Approach", 
    description: "We use analytics and insights to optimize your social media strategy for maximum impact and ROI",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Users, 
    title: "Experienced Team", 
    description: "Our creative professionals understand social media trends and know how to engage your target audience effectively",
    color: "from-purple-500 to-pink-500"
  },
  { 
    icon: BarChart, 
    title: "Transparent Reporting", 
    description: "Regular detailed reports and insights to track your social media growth and performance metrics",
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: Heart, 
    title: "Affordable Pricing", 
    description: "Budget-friendly social media management packages designed for startups and small businesses",
    color: "from-orange-500 to-red-500"
  }
];

const idealFor = [
  "Local & Small Businesses",
  "Personal Brands & Influencers", 
  "Coaches, Trainers & Professionals",
  "Hotels, Cafes & E-commerce Brands"
];

const faqData = [
  {
    question: "What is social media management?",
    answer: "Social media management involves creating, scheduling, publishing, and analyzing content across platforms like Instagram, Facebook, LinkedIn, Twitter (X), and others. It also includes community engagement and performance tracking to ensure consistent brand presence and audience growth."
  },
  {
    question: "Why does my business need social media management?",
    answer: "In today's digital world, customers look at your social media before making decisions. A professionally managed social media presence helps build trust, increase engagement, boost visibility, and generate leads—all while saving you time and effort."
  },
  {
    question: "Will I have control over what gets posted?",
    answer: "Yes, absolutely. We provide you with a content calendar in advance. You can review, suggest changes, or approve the content before anything goes live."
  },
  {
    question: "Do you also create reels and videos?",
    answer: "Yes. At Sidpin, we specialize in short-form video content like Reels, YouTube Shorts, and Instagram Stories. We also handle editing, captions, thumbnails, and effects as per your brand's tone."
  },
  {
    question: "How often do you post on my social media?",
    answer: "It depends on your chosen plan. Typically, we offer 3 to 6 posts per week, along with story updates and reels (if included in your package). Frequency is customizable."
  },
  {
    question: "Do you run ads as well?",
    answer: "While social media management focuses on organic content, we also offer Meta Ads (Facebook & Instagram) and LinkedIn Ads as part of our digital marketing services. Ask us for a combined package."
  },
  {
    question: "How do I get started with Sidpin's social media services?",
    answer: "Simply reach out to us via WhatsApp or our contact form, and we'll schedule a free consultation to understand your needs, suggest a package, and build a custom strategy for your business."
  }
];

const portfolioData = [
  {
    handle: "@a.g.fitness2025",
    // businessType: "Local Restaurant", 
    // growth: "+250%",
    // engagement: "8.5%",
    color: "from-pink-500 to-purple-500",
    bgColor: "from-pink-100 to-purple-100",
    link: "https://www.instagram.com/a.g.fitness2025/",
    image: agfitness // Can add image URLs later
  },
  {
    handle: "@panchbhootyog",
    // businessType: "Local Restaurant", 
    // growth: "+250%",
    // engagement: "8.5%",
    color: "from-pink-500 to-purple-500",
    bgColor: "from-pink-100 to-purple-100",
    link: "https://www.instagram.com/panchbhootyog/",
    image: panch // Can add image URLs later
  },
  {
    handle: "@yog.adhyayan",
    // businessType: "Local Restaurant", 
    // growth: "+250%",
    // engagement: "8.5%",
    color: "from-pink-500 to-purple-500",
    bgColor: "from-pink-100 to-purple-100",
    link: "https://www.instagram.com/yog.adhyayan/",
    image: yog2 // Can add image URLs later
  },
  {
    handle: "@yog_adhyayan108",
    // businessType: "Local Restaurant", 
    // growth: "+250%",
    // engagement: "8.5%",
    color: "from-pink-500 to-purple-500",
    bgColor: "from-pink-100 to-purple-100",
    link: "https://www.instagram.com/yog_adhyayan108/",
    image: yog // Can add image URLs later
  },
  {
    handle: "@rudradharmarudraksha",
    // businessType: "Local Restaurant", 
    // growth: "+250%",
    // engagement: "8.5%",
    color: "from-pink-500 to-purple-500",
    bgColor: "from-pink-100 to-purple-100",
    link: "https://www.instagram.com/rudradharmarudraksha/",
    image: rudradharma // Can add image URLs later
  },
  {
    handle: "@navdeepfoundation",
    // businessType: "Local Restaurant", 
    // growth: "+250%",
    // engagement: "8.5%",
    color: "from-pink-500 to-purple-500",
    bgColor: "from-pink-100 to-purple-100",
    link: "https://www.instagram.com/navdeepfoundation/",
    image: navdeep // Can add image URLs later
  },
  {
    handle: "@amatrabytheganges",
    // businessType: "Local Restaurant", 
    // growth: "+250%",
    // engagement: "8.5%",
    color: "from-pink-500 to-purple-500",
    bgColor: "from-pink-100 to-purple-100",
    link: "https://www.instagram.com/amatrabytheganges/",
    image: ganges // Can add image URLs later
  },
  {
    handle: "@_astro_pandit",
    // businessType: "Local Restaurant", 
    // growth: "+250%",
    // engagement: "8.5%",
    color: "from-pink-500 to-purple-500",
    bgColor: "from-pink-100 to-purple-100",
    link: "https://www.instagram.com/_astro_pandit/",
    image: astro // Can add image URLs later
  },
  {
    handle: "@swaatiraitiwari",
    // businessType: "Local Restaurant", 
    // growth: "+250%",
    // engagement: "8.5%",
    color: "from-pink-500 to-purple-500",
    bgColor: "from-pink-100 to-purple-100",
    link: "https://www.instagram.com/swaatiraitiwari/",
    image: swati // Can add image URLs later
  },
  
];

export default function SocialMediaManagementPage() {
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
                <Share2 className="h-6 w-6 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-heading">
                Social Media Management
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              Build Your Brand. Engage Your Audience. Grow Your Business.
            </p>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Are you struggling to maintain a consistent presence on social media? Let Sidpin's Social Media Management Services help you stay active, relevant, and results-driven across all major platforms.
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
                  <Megaphone className="h-8 w-8 text-white" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Professional Social Media Management for Business Growth
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  We help businesses in Uttarakhand and beyond create a powerful digital identity on platforms like Instagram, Facebook, LinkedIn, Twitter (X), and YouTube, with strategies tailored to their goals and audience behavior.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Ready to grow your social media the smart way?
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
              Let Sidpin manage your socials—while you focus on running your business.
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
              What We Offer in Social Media Management
            </h2>
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

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Why Choose Sidpin?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <CardTitle className="text-xl font-bold flex items-center gap-2 justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      {item.title}
                    </CardTitle>
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

      {/* Ideal For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Ideal For:
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {idealFor.map((item, index) => (
              <motion.div
                key={index}
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
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-semibold text-lg">{item}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Portfolio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Instagram Portfolio
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how we've helped businesses grow their social media presence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((item, index) => (
              <motion.div
                key={item.handle}
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
                <Card className="border-border/50 bg-gradient-to-br from-background/50 to-background group hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{item.handle}</CardTitle>
                    {/* <p className="text-sm text-muted-foreground">{item.businessType}</p> */}
                  </CardHeader>
                  <CardContent>
                    <div className={`aspect-square bg-gradient-to-br ${item.bgColor} rounded-lg mb-4 flex items-center justify-center`}>
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={`${item.handle} post preview`} 
                          className="w-full h-full object-cover object-top rounded-lg hover:scale-110 transition-transform duration-300 " 
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground">Instagram Preview</p>
                      )}
                    </div>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                      >
                        View Profile
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border-primary/20 text-primary hover:text-primary/80"
            >
              View More Portfolio
            </Button>
          </motion.div> */}
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
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-lg text-muted-foreground">About Social Media Management Services</p>
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
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create a social media strategy that engages your audience and drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<CTAButton variant="outline" size="lg"                 className="border-2 border-white text-white hover:bg-white hover:text-primary hover:border-primary">
                Get Started Today
              </CTAButton>
<CTAButton variant="outline" size="lg"                 className="border-2 border-white text-white hover:bg-white hover:text-primary hover:border-primary">
                View Our Work
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
