import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Showcase = () => {
  return (
    <section className="py-20 bg-teal-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h2 className="font-elegant text-4xl md:text-5xl font-bold mb-6">
            Experience The Koo's Difference!
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-4">Visit Our Premium Showroom:</p>
            <p className="text-lg mb-2">123 Beauty Boulevard, Suite 100, Your City 12345</p>
            <p className="text-lg mb-4">Located in the heart of the beauty district with convenient parking</p>
            <p className="text-base opacity-90">
              No appointment needed for browsing - walk-ins welcome for consultations
            </p>
          </div>
        </div>

        <div className="bg-soft-mint rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-elegant text-3xl md:text-4xl font-bold text-secondary mb-6">
              What's New at Koo's?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-300">
              <div className="h-48 bg-gradient-teal"></div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">This Month</div>
                <h4 className="font-elegant text-xl font-semibold text-secondary mb-3">
                  New Luxury Collection
                </h4>
                <p className="text-muted-foreground mb-4">
                  Discover our latest premium human hair wigs featuring the most natural textures and colors.
                </p>
                <Button variant="outline" size="sm">
                  View Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-300">
              <div className="h-48 bg-gradient-hero"></div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">Limited Time</div>
                <h4 className="font-elegant text-xl font-semibold text-secondary mb-3">
                  Free Styling Session
                </h4>
                <p className="text-muted-foreground mb-4">
                  Complimentary professional styling with any premium wig purchase this month.
                </p>
                <Button variant="outline" size="sm">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-300">
              <div className="h-48 bg-elegant-gold"></div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">Special Event</div>
                <h4 className="font-elegant text-xl font-semibold text-secondary mb-3">
                  Wig Care Workshop
                </h4>
                <p className="text-muted-foreground mb-4">
                  Learn professional techniques to maintain and style your wigs at home.
                </p>
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-elegant text-3xl font-bold text-white mb-8">
            Celebrate The Beauty In You...
          </h3>
          <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
            Start Your Transformation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;