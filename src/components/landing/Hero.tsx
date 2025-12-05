import { Button } from "@/components/ui/button";
import { Apple, PlayCircle, MapPin, Star, Calendar, Heart, Bell, Utensils, Coffee, Clock, Users, Trophy } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-50 via-white to-brand-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--brand-200)/0.5),transparent)]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-brand-100/60 to-transparent rounded-full blur-3xl" />
        
        {/* Blue blob shapes inspired by reference */}
        <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-brand-400/15 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Decorative dots pattern */}
        <div className="absolute top-[15%] left-[8%] w-3 h-3 bg-brand-400/60 rounded-full animate-pulse-soft" />
        <div className="absolute top-[25%] right-[12%] w-2 h-2 bg-brand-500/50 rounded-full animate-float-fast" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-[35%] left-[12%] w-4 h-4 bg-brand-300/50 rounded-full animate-float-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[50%] right-[5%] w-2 h-2 bg-brand-600/40 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-[45%] right-[15%] w-3 h-3 bg-brand-400/50 rounded-full animate-pulse-soft" style={{ animationDelay: "2s" }} />
        
        {/* Decorative circles/rings */}
        <div className="absolute top-[30%] left-[3%] w-20 h-20 border-2 border-brand-200/40 rounded-full" />
        <div className="absolute bottom-[25%] right-[3%] w-16 h-16 border border-brand-300/30 rounded-full" />
      </div>

      <div className="container relative pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Hero Content - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500/10 backdrop-blur-sm rounded-full text-brand-700 text-sm font-semibold mb-6 animate-fade-up border border-brand-200/50">
            <Star className="w-4 h-4 fill-brand-500 text-brand-500" />
            <span>+10.000 usuários satisfeitos</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Planeje, Descubra e{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Economize</span>
            </span>
            {" "}com o Ondir
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Encontre os melhores restaurantes, bares e eventos. Faça reservas, acumule pontos e ganhe recompensas exclusivas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="gap-3 shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 transition-all duration-300 hover:-translate-y-1 px-8">
              <Apple className="w-5 h-5" />
              App Store
            </Button>
            <Button variant="outline" size="lg" className="gap-3 border-2 border-brand-200 text-brand-700 hover:bg-brand-50 hover:border-brand-300 transition-all duration-300 hover:-translate-y-1 px-8">
              <PlayCircle className="w-5 h-5" />
              Google Play
            </Button>
          </div>
        </div>

        {/* Phone Mockup Section with Floating Cards */}
        <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative max-w-[900px] w-full flex justify-center">
            
            {/* Floating Notification Cards - Left Side - Hidden on mobile */}
            
            {/* Card 1 - Points/Rewards */}
            <div className="hidden md:block absolute left-[5%] lg:left-[8%] top-[5%] bg-white rounded-2xl p-4 shadow-xl shadow-brand-500/10 animate-notification-pop z-20 border border-brand-100/50 hover:scale-105 transition-transform duration-300 max-w-[200px]" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center shadow-inner">
                  <Trophy className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Seus pontos</p>
                  <p className="text-lg font-bold text-gray-800">1.250 pts</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Location */}
            <div className="hidden md:block absolute left-[2%] lg:left-[5%] top-[35%] bg-white rounded-2xl p-4 shadow-xl shadow-brand-500/10 animate-notification-pop z-20 border border-brand-100/50 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "1.1s" }}>
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

            {/* Card 3 - Time/Schedule */}
            <div className="hidden lg:block absolute left-[8%] bottom-[15%] bg-white rounded-2xl p-4 shadow-xl shadow-brand-500/10 animate-notification-pop z-20 border border-brand-100/50 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "1.4s" }}>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center shadow-inner">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Aberto agora</p>
                  <p className="text-sm font-bold text-gray-800">Até 23h</p>
                </div>
              </div>
            </div>

            {/* Floating Notification Cards - Right Side - Hidden on mobile */}
            
            {/* Card 4 - Reservation */}
            <div className="hidden md:block absolute right-[5%] lg:right-[8%] top-[8%] bg-white rounded-2xl p-4 shadow-xl shadow-brand-500/10 animate-notification-pop z-20 border border-brand-100/50 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "0.9s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-inner">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Reserva confirmada</p>
                  <p className="text-sm font-bold text-gray-800">Hoje, 20h</p>
                </div>
              </div>
            </div>

            {/* Card 5 - Notification/Offer */}
            <div className="hidden md:block absolute right-[2%] lg:right-[5%] top-[38%] bg-white rounded-2xl p-4 shadow-xl shadow-brand-500/10 animate-notification-pop z-20 border border-brand-100/50 hover:scale-105 transition-transform duration-300 max-w-[180px]" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center shadow-inner">
                  <Bell className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Oferta especial</p>
                  <p className="text-sm font-bold text-green-600">20% OFF</p>
                </div>
              </div>
            </div>

            {/* Card 6 - Favorite */}
            <div className="hidden lg:block absolute right-[8%] bottom-[12%] bg-white rounded-2xl p-4 shadow-xl shadow-brand-500/10 animate-notification-pop z-20 border border-brand-100/50 hover:scale-105 transition-transform duration-300" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center shadow-inner">
                  <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Favoritos</p>
                  <p className="text-sm font-bold text-gray-800">12 salvos</p>
                </div>
              </div>
            </div>

            {/* Small floating icon bubbles - Hidden on mobile */}
            <div className="hidden md:flex absolute left-[15%] top-[60%] w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center animate-float-fast z-10 border border-brand-100/50" style={{ animationDelay: "0.3s" }}>
              <Utensils className="w-5 h-5 text-brand-500" />
            </div>
            <div className="hidden md:flex absolute right-[12%] top-[55%] w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center animate-float z-10 border border-brand-100/50" style={{ animationDelay: "1.8s" }}>
              <Coffee className="w-5 h-5 text-brand-500" />
            </div>
            <div className="hidden lg:flex absolute left-[20%] bottom-[5%] w-9 h-9 bg-white rounded-full shadow-lg items-center justify-center animate-float-slow z-10 border border-brand-100/50" style={{ animationDelay: "0.8s" }}>
              <Users className="w-4 h-4 text-brand-500" />
            </div>

            {/* Glow effect behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[350px] h-[500px] md:h-[600px] bg-gradient-to-br from-brand-400/20 to-brand-600/10 rounded-full blur-3xl" />

            {/* Phone Mockup - Using the uploaded mockup with built-in frame */}
            <div className="relative w-[280px] md:w-[320px] lg:w-[360px] mx-auto transform hover:scale-[1.02] transition-transform duration-500 z-10">
              <img
                src={appMockup}
                alt="Ondir App - Lista de restaurantes"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap gap-6 md:gap-12 justify-center mt-12 md:mt-16 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="text-center px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-brand-100/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-3xl md:text-4xl font-bold text-brand-600">500+</p>
            <p className="text-sm text-gray-500 font-medium">Estabelecimentos</p>
          </div>
          <div className="text-center px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-brand-100/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-3xl md:text-4xl font-bold text-brand-600">10k+</p>
            <p className="text-sm text-gray-500 font-medium">Downloads</p>
          </div>
          <div className="text-center px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-brand-100/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-3xl md:text-4xl font-bold text-brand-600">4.9</p>
            <p className="text-sm text-gray-500 font-medium">Avaliação</p>
          </div>
          <div className="text-center px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-brand-100/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-3xl md:text-4xl font-bold text-brand-600">50k+</p>
            <p className="text-sm text-gray-500 font-medium">Reservas</p>
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
