
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarClock, Clock, Calendar as CalendarIcon } from "lucide-react";
import { format, addDays, isSameDay } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { MeteorEffect } from "@/components/three/meteor-effect";

const availableTimeslots = [
  "9:00 AM", "10:00 AM", "11:00 AM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [appointmentType, setAppointmentType] = useState<string>("consultation");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Missing information",
        description: "Please select both a date and time for your appointment.",
        variant: "destructive"
      });
      return;
    }
    
    if (!contactInfo.name || !contactInfo.email) {
      toast({
        title: "Missing information",
        description: "Please provide your name and email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate appointment booking
    toast({
      title: "Appointment Scheduled!",
      description: `Your ${appointmentType} is confirmed for ${format(selectedDate, 'EEEE, MMMM d')} at ${selectedTime}.`,
    });
    
    // Redirect after successful booking
    setTimeout(() => navigate("/"), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };

  // Filter out past dates
  const today = new Date();
  const disabledDays = { before: today };

  // Generate available days (next 30 days excluding weekends)
  const availableDays = Array.from({ length: 30 }, (_, i) => {
    const date = addDays(today, i + 1);
    const day = date.getDay();
    // Skip weekends (0 is Sunday, 6 is Saturday)
    return day === 0 || day === 6 ? null : date;
  }).filter(Boolean) as Date[];

  return (
    <div className="min-h-screen py-20 px-4 relative">
      <MeteorEffect count={5} />
      
      <div className="max-w-5xl mx-auto pt-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-heading mb-3">Book Your Appointment</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schedule a meeting with our team to discuss your digital marketing needs and how we can help amplify your brand.
          </p>
        </div>
        
        <div className="glass-panel p-6 md:p-8 rounded-2xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="hover:shadow-md transition-shadow cursor-pointer border border-primary/30 bg-primary/5">
              <CardHeader className="pb-2">
                <CalendarClock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Initial Consultation</CardTitle>
                <CardDescription>30-minute discovery call to discuss your goals</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button 
                  variant={appointmentType === "consultation" ? "default" : "outline"} 
                  className="w-full"
                  onClick={() => setAppointmentType("consultation")}
                >
                  Select
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <CalendarClock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Strategy Session</CardTitle>
                <CardDescription>60-minute deep dive into your marketing needs</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button 
                  variant={appointmentType === "strategy" ? "default" : "outline"} 
                  className="w-full"
                  onClick={() => setAppointmentType("strategy")}
                >
                  Select
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <CalendarClock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Project Review</CardTitle>
                <CardDescription>45-minute session for existing clients</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button 
                  variant={appointmentType === "review" ? "default" : "outline"} 
                  className="w-full"
                  onClick={() => setAppointmentType("review")}
                >
                  Select
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3 space-y-6">
              <div>
                <h2 className="text-xl font-heading flex items-center mb-4">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  Select a Date & Time
                </h2>
                
                <div className="bg-card p-4 rounded-xl border-border">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={disabledDays}
                    className="rounded-md border mx-auto"
                  />
                  
                  {selectedDate && (
                    <div className="mt-6">
                      <h3 className="text-sm font-medium mb-3 flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Available times for {format(selectedDate, 'MMMM d, yyyy')}:
                      </h3>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {availableTimeslots.map(time => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-3 rounded-md text-sm transition-colors ${
                              selectedTime === time
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted hover:bg-muted/80"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-xl font-heading mb-4">Your Information</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={contactInfo.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md border border-input"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={contactInfo.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md border border-input"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={contactInfo.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md border border-input"
                />
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={contactInfo.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md border border-input resize-none"
                  placeholder="Tell us about your needs or any specific questions"
                />
              </div>
              
              <Button type="submit" className="w-full btn-3d mt-6" disabled={!selectedDate || !selectedTime}>
                Schedule Appointment
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-2">
                You will receive a confirmation email with meeting details.
              </p>
            </div>
          </form>
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-heading mb-3">Need immediate assistance?</h3>
          <p className="text-muted-foreground mb-4">
            If you need to speak with someone right away, please call us at <span className="font-semibold">(555) 123-4567</span> during 
            business hours (Mon-Fri, 9am-5pm EST).
          </p>
          <Button variant="outline" onClick={() => navigate("/contact")}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
