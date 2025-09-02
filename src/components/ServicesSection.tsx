import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Building, FileText } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Building className="w-12 h-12 text-primary" />,
      title: "Building Materials",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Architectural Design & Consultation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary" />,
      title: "Full Construction Services",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Your One-Stop Solution for All Building Needs
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;