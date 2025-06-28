
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BarChart, Globe, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("seo");

  const services = [
    {
      id: "seo",
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO Optimization",
      description: "Data-driven strategies to improve your search engine rankings and generate consistent organic traffic.",
      content: (
        <>
          <p className="mb-4">
            Our comprehensive SEO services are designed to increase your online visibility, drive targeted traffic, and improve your search rankings through sustainable, white-hat techniques.
          </p>
          <h4 className="text-lg font-heading mb-2">Our SEO Process:</h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">In-depth technical SEO audit</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">Competitor analysis & keyword research</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">On-page optimization & content strategy</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">Link building & off-page optimization</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">Performance tracking & regular reporting</span>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[85%]"></div>
            </div>
            <span className="text-sm font-semibold">85%</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Average traffic increase for our SEO clients in 6 months</p>
        </>
      )
    },
    {
      id: "advertising",
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Digital Advertising",
      description: "Targeted campaigns across Google, Meta, and other platforms to boost visibility and maximize your ROI.",
      content: (
        <>
          <p className="mb-4">
            Our digital advertising services help you reach your target audience at the right time and place with messaging that converts views to actions.
          </p>
          <h4 className="text-lg font-heading mb-2">Platforms We Specialize In:</h4>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="p-3 rounded-md bg-muted/50">
              <h5 className="font-medium mb-1">Google Ads</h5>
              <p className="text-xs text-muted-foreground">Search, Display, Shopping & YouTube</p>
            </div>
            <div className="p-3 rounded-md bg-muted/50">
              <h5 className="font-medium mb-1">Meta</h5>
              <p className="text-xs text-muted-foreground">Facebook & Instagram Ads</p>
            </div>
            <div className="p-3 rounded-md bg-muted/50">
              <h5 className="font-medium mb-1">LinkedIn</h5>
              <p className="text-xs text-muted-foreground">B2B & Professional Targeting</p>
            </div>
            <div className="p-3 rounded-md bg-muted/50">
              <h5 className="font-medium mb-1">Programmatic</h5>
              <p className="text-xs text-muted-foreground">Display & Video Campaigns</p>
            </div>
          </div>
          <p className="mb-3 text-sm">What sets our ad campaigns apart:</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">Precision audience targeting & retargeting</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">A/B testing for continuous improvement</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">Conversion tracking & attribution modeling</span>
            </li>
          </ul>
        </>
      )
    },
    {
      id: "social",
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Social Media Marketing",
      description: "High-impact content and engagement to grow your community and strengthen your brand voice.",
      content: (
        <>
          <p className="mb-4">
            Our social media services help you build authentic connections with your audience, increase engagement, and drive conversions through strategic content and community management.
          </p>
          <div className="grid grid-cols-3 gap-2 text-center mb-4">
            <div className="p-2 rounded-lg bg-muted/30">
              <p className="text-xl font-bold text-primary">48%</p>
              <p className="text-xs text-muted-foreground">Avg. Engagement Increase</p>
            </div>
            <div className="p-2 rounded-lg bg-muted/30">
              <p className="text-xl font-bold text-primary">67%</p>
              <p className="text-xs text-muted-foreground">Follower Growth</p>
            </div>
            <div className="p-2 rounded-lg bg-muted/30">
              <p className="text-xl font-bold text-primary">3.2x</p>
              <p className="text-xs text-muted-foreground">Conversion Rate</p>
            </div>
          </div>
          <h4 className="text-lg font-heading mb-2">Our Approach:</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">Custom content calendars & scheduling</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">High-quality visual & video content creation</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">Social listening & community management</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">Influencer partnership strategies</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">Crisis management & reputation monitoring</span>
            </li>
          </ul>
        </>
      )
    },
    {
      id: "branding",
      icon: <Instagram className="h-8 w-8 text-primary" />,
      title: "Brand Development",
      description: "Complete branding solutions to define your identity, from logos and taglines to brand strategy.",
      content: (
        <>
          <p className="mb-4">
            Our brand development services help you build a distinctive, memorable brand that resonates with your target audience and sets you apart from competitors.
          </p>
          <h4 className="text-lg font-heading mb-2">Our Brand Development Process:</h4>
          <div className="relative mb-6 mt-4">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted -translate-y-1/2"></div>
            <div className="flex justify-between relative">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mb-1 z-10">1</div>
                <span className="text-xs text-center">Discovery</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mb-1 z-10">2</div>
                <span className="text-xs text-center">Strategy</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mb-1 z-10">3</div>
                <span className="text-xs text-center">Design</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mb-1 z-10">4</div>
                <span className="text-xs text-center">Implementation</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs mb-1 z-10">5</div>
                <span className="text-xs text-center">Management</span>
              </div>
            </div>
          </div>
          <h4 className="text-lg font-heading mb-2">Brand Elements We Develop:</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">Visual identity (logo, color palette, typography)</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">Brand voice & messaging guidelines</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">Brand story & positioning</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 p-1 bg-primary/10 rounded-full mr-2">
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-sm">Brand application across all channels</span>
            </li>
          </ul>
        </>
      )
    },
  ];

  return (
    <Tabs defaultValue="seo" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
        {services.map(service => (
          <TabsTrigger 
            key={service.id} 
            value={service.id}
            className="px-4 py-3 data-[state=active]:shadow-md"
          >
            <div className="flex flex-col items-center">
              <div className={`mb-2 transition-all ${activeTab === service.id ? 'text-primary' : 'text-muted-foreground'}`}>
                {service.icon}
              </div>
              <span>{service.title}</span>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
      
      {services.map(service => (
        <TabsContent key={service.id} value={service.id}>
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">{service.icon}</div>
                <div>
                  <CardTitle className="text-2xl font-heading mb-1">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {service.content}
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <p className="text-sm text-muted-foreground">Starting at $499/month</p>
              <Button className="btn-3d">Learn More</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
