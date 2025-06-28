
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function ContactForm({ className }: { className?: string }) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    services: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter(service => service !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Quote Request Received",
        description: "Thank you for your interest. Our team will contact you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        services: [],
      });
    }, 1500);
  };

  const services = [
    "SEO Optimization",
    "Digital Advertising",
    "Social Media Marketing",
    "Brand Development",
    "Website Design",
    "Photography"
  ];

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Your Name*
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-background rounded-md border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address*
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-background rounded-md border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-background rounded-md border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-background rounded-md border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">
          Services You're Interested In
        </label>
        <div className="grid grid-cols-2 gap-2">
          {services.map(service => (
            <div key={service} className="flex items-center">
              <input
                type="checkbox"
                id={`service-${service}`}
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleCheckboxChange}
                className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor={`service-${service}`} className="text-sm">
                {service}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Tell us about your project*
        </label>
        <textarea
          required
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 bg-background rounded-md border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
        ></textarea>
      </div>
      
      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Request Free Quote"}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy. Your information will not be shared with third parties.
      </p>
    </form>
  );
}
