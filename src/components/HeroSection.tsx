import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero-overlay absolute inset-0" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Lorem Ipsum Dolor Sit Amet
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto animate-slide-up">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-hero transition-all duration-300 transform hover:scale-105 animate-slide-up"
          asChild
        >
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            Get Started Today
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;