
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Target, 
  TrendingUp, 
  BarChart, 
  Mail, 
  Users, 
  Eye, 
  CheckCircle,
  Calendar,
  ExternalLink,
  MessageSquare,
  Globe,
  Megaphone,
  MousePointer,
  Share2,
  DollarSign,
  Award,
  Zap
} from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { 
    name: "Search Engine Optimization (SEO)", 
    description: "Improve your website's visibility on Google and other search engines with technical SEO, on-page & off-page optimization, and local SEO.",
    icon: Search,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    name: "Pay-Per-Click (PPC) Advertising", 
    description: "Instantly generate leads through paid search campaigns on Google, Facebook, and Instagram with keyword research and conversion tracking.",
    icon: MousePointer,
    color: "from-green-500 to-emerald-500"
  },
  { 
    name: "Social Media Marketing (SMM)", 
    description: "Grow your audience and strengthen brand presence on Instagram, Facebook, and LinkedIn with strategic content creation.",
    icon: Share2,
    color: "from-purple-500 to-pink-500"
  },
  { 
    name: "Email Marketing", 
    description: "Nurture leads and build long-term customer loyalty through personalized and targeted email campaigns.",
    icon: Mail,
    color: "from-orange-500 to-red-500"
  },
  { 
    name: "Content Marketing", 
    description: "Build authority and trust with powerful, informative content that attracts and converts with SEO-focused strategies.",
    icon: MessageSquare,
    color: "from-indigo-500 to-purple-500"
  },
  { 
    name: "Search Engine Marketing (SEM)", 
    description: "Get found faster with paid ads on Google Search & Display Network with retargeting and landing page optimization.",
    icon: Target,
    color: "from-teal-500 to-blue-500"
  }
];

const whyNeedDigitalMarketing = [
  { 
    icon: Eye, 
    title: "Increase Online Visibility", 
    description: "Optimize your website and social media profiles for better rankings and more organic traffic",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Award, 
    title: "Build Strong Brand Awareness", 
    description: "Use engaging content to connect emotionally with your target audience and stay top-of-mind",
    color: "from-purple-500 to-pink-500"
  },
  { 
    icon: Users, 
    title: "Connect Directly with Customers", 
    description: "Leverage tools like email and social media to interact with customers and build loyalty",
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: BarChart, 
    title: "Track Campaign Performance", 
    description: "Use real-time analytics to evaluate and fine-tune your strategies for better outcomes",
    color: "from-orange-500 to-red-500"
  }
];

const whyChooseUs = [
  { 
    icon: Target, 
    title: "Data-Driven, Result-Oriented Approach", 
    description: "We use analytics and insights to drive campaign decisions and optimize performance",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Users, 
    title: "Experienced & Creative Team", 
    description: "Our team combines years of experience with creative innovation for standout campaigns",
    color: "from-purple-500 to-pink-500"
  },
  { 
    icon: BarChart, 
    title: "Transparent Reporting & Monthly Insights", 
    description: "Regular detailed reports and insights to track your campaign's progress and ROI",
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: DollarSign, 
    title: "Affordable Pricing for Startups & SMBs", 
    description: "Budget-friendly packages designed specifically for small and medium businesses",
    color: "from-orange-500 to-red-500"
  },
  { 
    icon: CheckCircle, 
    title: "End-to-End Digital Campaign Execution", 
    description: "Complete campaign management from strategy to execution and optimization",
    color: "from-indigo-500 to-purple-500"
  },
  { 
    icon: Zap, 
    title: "Strong Focus on ROI & Lead Generation", 
    description: "Every campaign is designed to generate measurable results and quality leads",
    color: "from-teal-500 to-blue-500"
  }
];

const faqData = [
  {
    question: "What is digital marketing?",
    answer: "Digital marketing involves promoting products or services using online platforms such as search engines, social media, email, and paid advertising."
  },
  {
    question: "What is a digital marketing campaign?",
    answer: "A digital marketing campaign is a series of online marketing actions (ads, content, social media posts) designed to achieve a specific goal like brand awareness, lead generation, or sales."
  },
  {
    question: "What is a digital marketing strategy?",
    answer: "A digital marketing strategy outlines your marketing goals, target audience, channels to be used, and the plan to measure success."
  },
  {
    question: "What does an eCommerce digital marketing agency do?",
    answer: "It helps online stores drive traffic, optimize product listings, set up conversion tracking, and create ad campaigns to increase sales."
  },
  {
    question: "What's the difference between digital marketing and social media marketing?",
    answer: "Social media marketing is a subset of digital marketing, focusing only on platforms like Facebook and Instagram, while digital marketing includes SEO, PPC, email, content, and more."
  },
  {
    question: "How do SEO and digital marketing work together?",
    answer: "SEO is a major pillar of digital marketing that helps drive organic traffic, while digital marketing combines SEO with other channels to create an all-rounded online strategy."
  },
  {
    question: "How can digital marketing help my business?",
    answer: "It helps you generate leads, build brand credibility, engage customers, and increase sales — all measurable and trackable in real time."
  },
  {
    question: "What are the differences between traditional and digital marketing?",
    answer: "Traditional marketing includes TV, print, and radio. Digital marketing is online, cost-effective, measurable, and more targeted."
  }
];

export default function DigitalMarketingPage() {
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
                <Megaphone className="h-6 w-6 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-heading">
                Digital Marketing
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              Top-Ranked SEO & Digital Marketing Agency in India
            </p>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Unlock the power of affordable, ROI-focused digital marketing strategies designed to elevate your online presence and accelerate business growth.
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
                  <TrendingUp className="h-8 w-8 text-white" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Affordable Digital Marketing Services to Boost Your Business Growth
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  At Sidpin, we specialize in customized digital marketing solutions that deliver real results — without exceeding your budget.
                </p>
                <p className="text-md text-foreground/70 leading-relaxed">
                  Our services include SEO, Social Media Marketing, Paid Advertising (PPC), Content Marketing, and Email Campaigns — all tailored to maximize your visibility, engagement, and conversions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Empowering Business Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              📈 Empowering Your Business with Proven Digital Growth Strategies
            </h2>
            
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
                Book an Appointment
              </Button>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyNeedDigitalMarketing.map((item, index) => (
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
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
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
              🚀 Digital Marketing Services We Offer
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              Unlock your business's full potential with our comprehensive digital marketing services designed to drive growth and maximize ROI.
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

      {/* Why Choose Sidpin Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              ⭐ Why Sidpin's Digital Marketing Services Stand Out
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
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
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
              Ready to Boost Your Digital Presence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your digital marketing goals and create a strategy that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary hover:border-primary">
                Get Started Today
              </CTAButton>
              <CTAButton variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary hover:border-primary">
                View Our Portfolio
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
