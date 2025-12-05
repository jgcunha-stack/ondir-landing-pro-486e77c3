import { Button } from "@/components/ui/button";
import { Apple, PlayCircle, MapPin, Star, Calendar } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
import logoWhite from "@/assets/logo-white.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
              <Star className="w-4 h-4 fill-current" />
              <span>+10.000 usuários satisfeitos</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Um olhar guiado para{" "}
              <span className="relative">
                novas experiências
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 298 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-brand-300"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-brand-100 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Descubra os melhores restaurantes, bares e eventos perto de você. 
              Recomendações personalizadas, reservas instantâneas e ofertas exclusivas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" className="gap-3">
                <Apple className="w-5 h-5" />
                App Store
              </Button>
              <Button variant="heroOutline" size="lg" className="gap-3">
                <PlayCircle className="w-5 h-5" />
                Google Play
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">500+</p>
                <p className="text-sm text-brand-200">Estabelecimentos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">10k+</p>
                <p className="text-sm text-brand-200">Downloads</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">4.9</p>
                <p className="text-sm text-brand-200">Avaliação</p>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -left-4 top-20 bg-primary-foreground rounded-2xl p-4 shadow-xl animate-float z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Perto de você</p>
                    <p className="text-sm font-semibold text-foreground">23 lugares</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-40 bg-primary-foreground rounded-2xl p-4 shadow-xl animate-float z-10" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-success-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Reserva confirmada</p>
                    <p className="text-sm font-semibold text-foreground">Hoje, 20h</p>
                  </div>
                </div>
              </div>

              {/* Phone Frame */}
              <div className="relative w-[280px] md:w-[320px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl" />
                <div className="rounded-[2.5rem] overflow-hidden">
                  <img
                    src={appMockup}
                    alt="Ondir App"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
