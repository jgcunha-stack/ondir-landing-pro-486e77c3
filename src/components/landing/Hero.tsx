import { Button } from "@/components/ui/button";
import { Apple, PlayCircle, MapPin, Star, Calendar, Heart, Bell, Utensils, Coffee } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-50 via-white to-brand-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <div className="absolute top-10 left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-brand-200/40 to-brand-300/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-[5%] w-[600px] h-[600px] bg-gradient-to-tl from-brand-100/50 to-brand-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-[20%] w-[300px] h-[300px] bg-brand-300/20 rounded-full blur-2xl animate-pulse-soft" />
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--brand-200)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--brand-200)/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating decorative shapes */}
        <div className="absolute top-[15%] left-[5%] w-4 h-4 bg-brand-400 rounded-full animate-float opacity-60" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-brand-500 rounded-full animate-float-fast opacity-50" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[30%] left-[8%] w-5 h-5 bg-brand-300 rounded-full animate-float-slow opacity-40" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[60%] right-[8%] w-3 h-3 bg-brand-600 rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />
        
        {/* Rotating ring decoration */}
        <div className="absolute top-[20%] right-[25%] w-32 h-32 border-2 border-dashed border-brand-200/50 rounded-full animate-rotate-slow" />
        <div className="absolute bottom-[25%] left-[15%] w-24 h-24 border border-brand-300/30 rounded-full animate-rotate-slow" style={{ animationDirection: "reverse" }} />
      </div>

      <div className="container relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500/10 backdrop-blur-sm rounded-full text-brand-700 text-sm font-semibold mb-6 animate-fade-up border border-brand-200/50">
              <Star className="w-4 h-4 fill-brand-500 text-brand-500" />
              <span>+10.000 usuários satisfeitos</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Um olhar guiado para{" "}
              <span className="relative inline-block">
                <span className="text-gradient">novas experiências</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 298 10"
                    stroke="url(#underline-gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(221 83% 53%)" />
                      <stop offset="100%" stopColor="hsl(217 91% 60%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Descubra os melhores restaurantes, bares e eventos perto de você. 
              Recomendações personalizadas, reservas instantâneas e ofertas exclusivas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="gap-3 shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 transition-all duration-300 hover:-translate-y-1">
                <Apple className="w-5 h-5" />
                App Store
              </Button>
              <Button variant="outline" size="lg" className="gap-3 border-2 border-brand-200 text-brand-700 hover:bg-brand-50 hover:border-brand-300 transition-all duration-300 hover:-translate-y-1">
                <PlayCircle className="w-5 h-5" />
                Google Play
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center group">
                <p className="text-4xl font-bold text-brand-600 group-hover:scale-110 transition-transform duration-300">500+</p>
                <p className="text-sm text-gray-500 font-medium">Estabelecimentos</p>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block" />
              <div className="text-center group">
                <p className="text-4xl font-bold text-brand-600 group-hover:scale-110 transition-transform duration-300">10k+</p>
                <p className="text-sm text-gray-500 font-medium">Downloads</p>
              </div>
              <div className="h-12 w-px bg-gray-200 hidden sm:block" />
              <div className="text-center group">
                <p className="text-4xl font-bold text-brand-600 group-hover:scale-110 transition-transform duration-300">4.9</p>
                <p className="text-sm text-gray-500 font-medium">Avaliação</p>
              </div>
            </div>
          </div>

          {/* Phone Mockup with Floating Cards */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] bg-gradient-to-br from-brand-400/30 to-brand-600/20 rounded-full blur-3xl animate-pulse-glow" />
              
              {/* Floating Notification Cards */}
              
              {/* Card 1 - Location */}
              <div className="absolute -left-8 lg:-left-16 top-16 bg-white rounded-2xl p-4 shadow-xl shadow-brand-500/10 animate-notification-pop z-20 border border-brand-100/50 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-brand-100 to-brand-200 rounded-xl flex items-center justify-center shadow-inner">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Perto de você</p>
                    <p className="text-sm font-bold text-gray-800">23 lugares</p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Reservation */}
              <div className="absolute -right-4 lg:-right-12 top-32 bg-white rounded-2xl p-4 shadow-xl shadow-brand-500/10 animate-notification-pop z-20 border border-brand-100/50 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "0.9s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-inner">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Reserva confirmada</p>
                    <p className="text-sm font-bold text-gray-800">Hoje, 20h</p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Favorite */}
              <div className="absolute -left-4 lg:-left-8 bottom-40 bg-white rounded-2xl p-4 shadow-xl shadow-brand-500/10 animate-notification-pop z-20 border border-brand-100/50 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "1.2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center shadow-inner">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Novo favorito</p>
                    <p className="text-sm font-bold text-gray-800">Los Bravos</p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Notification */}
              <div className="absolute -right-2 lg:-right-6 bottom-56 bg-white rounded-2xl p-4 shadow-xl shadow-brand-500/10 animate-notification-pop z-20 border border-brand-100/50 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center shadow-inner">
                    <Bell className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Oferta especial</p>
                    <p className="text-sm font-bold text-gray-800">20% OFF</p>
                  </div>
                </div>
              </div>

              {/* Small floating icons */}
              <div className="absolute -left-12 top-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-float-fast z-10" style={{ animationDelay: "0.3s" }}>
                <Utensils className="w-5 h-5 text-brand-500" />
              </div>
              <div className="absolute -right-10 top-2/3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-float z-10" style={{ animationDelay: "1.8s" }}>
                <Coffee className="w-5 h-5 text-brand-500" />
              </div>

              {/* Phone Frame */}
              <div className="relative w-[280px] md:w-[300px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl shadow-brand-900/20 transform hover:scale-[1.02] transition-transform duration-500 z-10">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-b-2xl z-20" />
                {/* Screen */}
                <div className="rounded-[2.5rem] overflow-hidden bg-white">
                  <img
                    src={appMockup}
                    alt="Ondir App - Lista de restaurantes"
                    className="w-full h-auto"
                  />
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full" preserveAspectRatio="none">
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
