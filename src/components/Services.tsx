import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Palette, Users, Crown, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: "Premium Wigs",
      description: "High-quality human hair and synthetic wigs in various styles, colors, and lengths",
      features: ["Human Hair Wigs", "Synthetic Options", "Custom Fittings", "Style Consultations"]
    },
    {
      icon: Scissors,
      title: "Wig Styling & Cuts",
      description: "Professional styling and cutting services to customize your wig perfectly",
      features: ["Custom Cuts", "Professional Styling", "Texture Services", "Color Matching"]
    },
    {
      icon: Palette,
      title: "Hair Extensions",
      description: "Add length and volume with our premium hair extension services",
      features: ["Clip-In Extensions", "Tape-In Extensions", "Sew-In Extensions", "Color Blending"]
    },
    {
      icon: Heart,
      title: "Medical Wigs",
      description: "Compassionate care and specialized wigs for medical hair loss",
      features: ["Medical Consultations", "Insurance Assistance", "Comfortable Fittings", "Ongoing Support"]
    },
    {
      icon: Users,
      title: "Wig Maintenance",
      description: "Keep your wigs looking fresh with our professional maintenance services",
      features: ["Deep Cleaning", "Conditioning Treatments", "Style Refresh", "Storage Solutions"]
    },
    {
      icon: Sparkles,
      title: "Special Occasion",
      description: "Perfect styling for weddings, events, and special moments",
      features: ["Bridal Styling", "Event Hair", "Photo Shoots", "Performance Wigs"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From premium wig sales to professional styling services, we offer everything you need to achieve your perfect look
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white border-0">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-teal rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-elegant text-2xl font-semibold text-secondary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button variant="elegant" size="lg" className="px-8 py-6 text-lg">
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;