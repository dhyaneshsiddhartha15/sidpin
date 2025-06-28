
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import ParticleWaveBackground from "@/components/three/particle-wave";
import { CTAButton } from "@/components/cta-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Video, 
  Link as LinkIcon, 
  Users 
} from "lucide-react";

export default function ContentPage() {
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
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Content Creation",
      description:
        "Compelling blog posts, articles, and whitepapers that establish authority and drive engagement.",
    },
    {
      icon: <Video className="h-8 w-8 text-primary" />,
      title: "Video Production",
      description:
        "High-quality video content that captures attention and communicates your message effectively.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Influencer Marketing",
      description:
        "Strategic partnerships with relevant influencers to expand your reach and build credibility.",
    },
    {
      icon: <LinkIcon className="h-8 w-8 text-primary" />,
      title: "Public Relations",
      description:
        "Media relations and strategic communication to enhance your brand's reputation and visibility.",
    },
  ];

  const testimonials = [
    {
      quote:
        "SIDPIN created a content strategy that perfectly captured our brand voice and resonated with our audience. The engagement on our blog has increased tenfold.",
      author: "Emily Parker",
      position: "Content Director, StoryBrand",
    },
    {
      quote:
        "Their influencer marketing campaign helped us reach new audiences we hadn't been able to tap into before. The ROI was exceptional.",
      author: "James Wilson",
      position: "VP Marketing, FreshStart",
    },
    {
      quote:
        "The PR strategy developed by SIDPIN secured us coverage in major industry publications, significantly elevating our brand's credibility.",
      author: "Sophia Lee",
      position: "PR Manager, InnovateGroup",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <ParticleWaveBackground />
        <div className="container mx-auto px-6 py-16 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Tell your story with</span>
              <br /> 
              <span className="text-foreground">impact and purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Craft compelling narratives that connect with your audience, build your brand, and drive meaningful engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton>Tell My Story</CTAButton>
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
                Content That Connects and Converts
              </h3>
              <p className="text-muted-foreground mb-6">
                At SIDPIN, we believe that great content is the foundation of effective communication. Our aim is to help you tell your story in a way that authentically represents your brand and resonates with your audience.
              </p>
              <p className="text-muted-foreground">
                Whether through compelling written content, engaging video, strategic PR, or influential partnerships, we develop content strategies that not only capture attention but also drive meaningful engagement and conversions.
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
                    <strong>Strategic Storytelling</strong>: Crafting narratives that align with your business objectives.
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
                    <strong>Audience Engagement</strong>: Creating content that sparks conversation and builds community.
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
                    <strong>Brand Consistency</strong>: Maintaining a consistent voice and message across all channels.
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
                    <strong>Results-Oriented</strong>: Creating content that drives specific, measurable outcomes.
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
              We offer a comprehensive range of content and PR services to help you tell your story effectively.
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
              Explore our content creation and PR success stories.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio items would go here - placeholders for now */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={cn(
                  "relative overflow-hidden rounded-lg h-64 group cursor-pointer",
                  "bg-gradient-to-br from-secondary to-purple-600/80"
                )}
              >
                <div className="absolute inset-0 flex items-center justify-center p-6 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-center text-background">
                    <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                    <p className="mb-4">
                      A brief description of this amazing content project and the results achieved.
                    </p>
                    <button className="px-4 py-2 bg-primary text-white rounded-md">
                      Read Case Study
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
              Here's what our clients have to say about our content and PR services.
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
            Ready to tell your story?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Let's create content that captures attention, builds your brand, and drives meaningful engagement.
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
