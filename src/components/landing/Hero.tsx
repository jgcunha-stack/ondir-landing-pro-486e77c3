import { Button } from "@/components/ui/button";
import { Apple, PlayCircle, MapPin, Star, Calendar, Heart, Bell, Utensils, Coffee, Clock, Users, Trophy } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative h-[100vh] md:min-h-[130vh] lg:min-h-[125vh] overflow-hidden rounded-b-[3rem] md:rounded-b-[4rem]">
      {/* Blue Background with Concentric Circles */}
      <div className="absolute inset-0 rounded-b-[3rem] md:rounded-b-[4rem] overflow-hidden">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Additional subtle overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-600/20" />
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-3 h-3 bg-white/30 rounded-full animate-pulse-soft" />
        <div className="absolute top-[40%] left-[8%] w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[30%] right-[15%] w-4 h-4 bg-white/15 rounded-full animate-float-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative pt-28 pb-0 md:pt-32 md:pb-0 px-4 md:px-4">
        {/* Hero Content - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-4 md:mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-semibold mb-4 md:mb-6 animate-fade-up border border-white/20">
            <Star className="w-3 h-3 md:w-4 md:h-4 fill-white text-white" />
            <span>+10.000 usuários satisfeitos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Planeje, Descubra e{" "}
            <span className="relative inline-block">
              <span className="text-white">Economize</span>
            </span>
            {" "}com o Ondir
          </h1>

          <p className="text-base md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-up leading-relaxed px-2" style={{ animationDelay: "0.2s" }}>
            Encontre os melhores restaurantes, bares e eventos. Faça reservas, acumule pontos e ganhe recompensas exclusivas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up px-4" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="gap-2 md:gap-3 bg-white text-brand-600 hover:bg-white/90 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 px-6 md:px-8 text-sm md:text-base">
              <Apple className="w-4 h-4 md:w-5 md:h-5" />
              App Store
            </Button>
            <Button variant="outline" size="lg" className="gap-2 md:gap-3 border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:-translate-y-1 px-6 md:px-8 text-sm md:text-base">
              <PlayCircle className="w-4 h-4 md:w-5 md:h-5" />
              Google Play
            </Button>
          </div>
        </div>

        {/* Phone Mockup Section with Floating Cards */}
        <div className="relative flex justify-center animate-fade-up mt-6 md:mt-10" style={{ animationDelay: "0.4s" }}>
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] md:w-[300px] h-[800px] md:h-[500px] bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl" />

            {/* Phone Mockup - Using the uploaded mockup with built-in frame */}
            <div className="relative w-full max-w-none sm:max-w-[280px] md:max-w-[300px] lg:max-w-[340px] mx-auto transform hover:scale-[1.02] transition-transform duration-500 z-10 px-4 sm:px-0">
              <img
                src={appMockup}
                alt="Ondir App - Lista de restaurantes"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
