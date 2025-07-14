import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "5000+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Star, number: "500+", label: "Premium Wigs" },
    { icon: Heart, number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-secondary-foreground">
            <h2 className="font-elegant text-4xl md:text-5xl font-bold mb-6">
              About Koo's Wigs & Design
            </h2>
            
            <p className="text-lg mb-6 text-secondary-foreground/90 leading-relaxed">
              For over 15 years, Koo's Wigs & Design has been the trusted destination for premium quality wigs and professional hair services. We understand that your hair is more than just an accessory – it's an expression of your personality and confidence.
            </p>
            
            <p className="text-lg mb-6 text-secondary-foreground/90 leading-relaxed">
              Our founder, Ms. Koo, started this business with a simple mission: to help every client feel beautiful and confident. Whether you're dealing with medical hair loss, want to try a new look, or need the perfect style for a special occasion, we're here to help you achieve your hair goals.
            </p>

            <p className="text-lg mb-8 text-secondary-foreground/90 leading-relaxed">
              We pride ourselves on offering personalized consultations, high-quality products, and exceptional customer service. Our team of experienced stylists will work with you to find the perfect wig and style that suits your lifestyle and preferences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="elegant" size="lg">
                Meet Our Team
              </Button>
              <Button variant="hero" size="lg">
                Our Story
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="font-elegant text-3xl font-bold text-secondary-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-secondary-foreground/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
            <h3 className="font-elegant text-3xl font-semibold text-secondary-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-secondary-foreground/90 leading-relaxed">
              "To empower every individual to express their unique beauty and confidence through premium quality wigs and personalized hair services, delivered with compassion, expertise, and unwavering commitment to excellence."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;