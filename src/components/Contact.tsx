import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "Call for appointments"],
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Beauty Boulevard, Suite 100", "Your City, State 12345"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@kooswigs.com", "Quick response guaranteed"],
    },
  ];

  const hours = [
    { day: "Monday", time: "9:00 AM - 7:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 8:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 8:00 PM" },
    { day: "Thursday", time: "9:00 AM - 8:00 PM" },
    { day: "Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "8:00 AM - 5:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <footer id="contact" className="bg-teal-section text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <h3 className="font-elegant text-3xl font-bold mb-6">
              KOO'S WIGS & DESIGN
            </h3>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Transform your look with premium quality wigs and professional hair services. 
              Your confidence is our commitment.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-white/80">{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 mr-3" />
              <h4 className="font-semibold text-xl">Store Hours</h4>
            </div>
            <div className="space-y-3">
              {hours.map((schedule, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-white/80">{schedule.day}:</span>
                  <span className="font-medium">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* App & Social */}
          <div>
            <h4 className="font-semibold text-xl mb-6">Stay Connected</h4>
            
            <div className="mb-8">
              <p className="text-white/80 mb-4">Download our app for exclusive offers</p>
              <Button variant="hero" className="w-full">
                KOO'S WIGS APP
              </Button>
            </div>

            <div className="space-y-4">
              <h5 className="font-medium text-lg">Follow Us</h5>
              <div className="flex space-x-4">
                <Button variant="hero" size="icon">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="hero" size="icon">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 mb-4 md:mb-0">
              <p>Conveniently located in the beauty district</p>
              <p className="text-sm">Please use our main entrance for easy access</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="elegant" size="lg">
                Book Consultation
              </Button>
              <Button variant="hero" size="lg">
                Browse Catalog
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-white/60">
              © 2024 Koo's Wigs & Design. All rights reserved. | 
              <span className="ml-2">Transforming lives through beautiful hair.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;