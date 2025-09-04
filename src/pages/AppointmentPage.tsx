import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CalendarClock,
  Clock,
  Calendar as CalendarIcon,
} from "lucide-react";
import { format, addDays, isSameDay } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { MeteorEffect } from "@/components/three/meteor-effect";

// Timeslots for each day
const availableTimeslots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];


interface ContactInfo {
  name: string;
  email: string;
  phoneNo: string;
  note: string;
}

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [appointmentType, setAppointmentType] =
    useState<string>("consultation");
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: "",
    email: "",
    phoneNo: "",
    note: "",
  });


  type FormStatus = {
    isSubmitting: boolean;
    isSuccess: boolean;
    error: string | null;
  }


  const [status, setStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Today
  const today = new Date();

  // Generate next 30 weekdays
  const availableDays = Array.from({ length: 30 }, (_, i) => {
    const date = addDays(today, i + 1);
    const day = date.getDay();
    return day === 0 || day === 6 ? null : date; // Skip weekends
  }).filter(Boolean) as Date[];

  // Disable dates not in availableDays
  const disabledDays = (date: Date) =>
    !availableDays.some((d) => isSameDay(d, date));


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus({ isSubmitting: true, isSuccess: false, error: null });

    if (!selectedDate || !selectedTime) {
      toast({
        title: "Missing information",
        description: "Please select both a date and time for your appointment.",
        variant: "destructive",
      });
      return;
    }

    if (!contactInfo.name || !contactInfo.email) {
      toast({
        title: "Missing information",
        description: "Please provide your name and email address.",
        variant: "destructive",
      });
      return;
    }

    // ✅ Build payload for backend
    const payload = {
      ...contactInfo,
      appointmentType,
      date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
      time: selectedTime,
    };

    try {

      const response = await fetch("https://sidpin-backend.vercel.app/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to book appointment.");
      }

      toast({
        title: "Appointment Scheduled!",
        description: `Your ${appointmentType} is confirmed for ${format(
          selectedDate,
          "EEEE, MMMM d"
        )} at ${selectedTime}. A confirmation has been sent to your email.`,
      });


      // Redirect to home after 2s
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong while scheduling. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 relative">
      <MeteorEffect count={5} />

      <div className="max-w-5xl mx-auto pt-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-heading mb-3">
            Book Your Appointment
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schedule a meeting with our team to discuss your digital marketing
            needs and how we can help amplify your brand.
          </p>
        </div>

        <div className="glass-panel p-6 md:p-8 rounded-2xl mb-10">
          {/* Appointment Type */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              {
                type: "consultation",
                title: "Initial Consultation",
                desc: "30-minute discovery call to discuss your goals",
              },
              {
                type: "strategy",
                title: "Strategy Session",
                desc: "60-minute deep dive into your marketing needs",
              },
              {
                type: "review",
                title: "Project Review",
                desc: "45-minute session for existing clients",
              },
            ].map((option) => (
              <Card
                key={option.type}
                className={`hover:shadow-md transition-shadow cursor-pointer ${appointmentType === option.type
                  ? "border border-primary/40 bg-primary/5"
                  : ""
                  }`}
              >
                <CardHeader className="pb-2">
                  <CalendarClock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{option.title}</CardTitle>
                  <CardDescription>{option.desc}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant={
                      appointmentType === option.type ? "default" : "outline"
                    }
                    className="w-full"
                    onClick={() => setAppointmentType(option.type)}
                  >
                    Select
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-5 gap-8"
          >
            {/* Calendar + Times */}
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
                        Available times for{" "}
                        {format(selectedDate, "MMMM d, yyyy")}:
                      </h3>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {availableTimeslots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-3 rounded-md text-sm transition-colors ${selectedTime === time
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

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-xl font-heading mb-4">Your Information</h2>

              {[
                { id: "name", label: "Full Name*", type: "text", required: true },
                {
                  id: "email",
                  label: "Email Address*",
                  type: "email",
                  required: true,
                },
                { id: "phoneNo", label: "Phone Number", type: "tel" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium mb-1"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required={field.required}
                    value={(contactInfo as any)[field.id]}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md border border-input"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="note"
                  className="block text-sm font-medium mb-1"
                >
                  Additional Notes
                </label>
                <textarea
                  id="note"
                  name="note"
                  rows={3}
                  value={contactInfo.note}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md border border-input resize-none"
                  placeholder="Tell us about your needs or any specific questions"
                />
              </div>

              <Button
                type="submit"
                className="w-full btn-3d mt-6"
                disabled={!selectedDate || !selectedTime}
              >
                {status.isSubmitting ? "Scheduling..." : "Schedule Appointment"}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-2">
                You will receive a confirmation email with meeting details.
              </p>
            </div>
          </form>
        </div>

        {/* Contact Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-heading mb-3">
            Need immediate assistance?
          </h3>
          <p className="text-muted-foreground mb-4">
            If you need to speak with someone right away, please call us at{" "}
            <span className="font-semibold">(555) 123-4567</span> during
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

