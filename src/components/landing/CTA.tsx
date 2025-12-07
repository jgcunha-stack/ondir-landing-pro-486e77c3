import { Apple, PlayCircle } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
import appClube from "@/assets/app-clube.png";
import appPesquisa from "@/assets/app-pesquisa.png";
import heroBg from "@/assets/hero-bg.png";

const CTA = () => {
  return (
    <section className="relative">
      {/* Split background - 50% white, 50% dark */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-white" />
        <div className="h-1/2 bg-gray-900" />
      </div>

      <div className="container relative z-10 pt-32 md:pt-48 pb-6 md:pb-12 px-4">
        <div className="relative rounded-2xl md:rounded-3xl py-6 md:py-12 px-4 md:px-12">
          {/* Background with hero image */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden">
            <img 
              src={heroBg} 
              alt="" 
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-brand-600/30" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left animate-fade-up">
              <p className="text-brand-200 text-xs md:text-sm font-medium mb-2 md:mb-4">
                Seu destino para descobertas incríveis
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                Baixe o App – É Grátis!
              </h2>

              <p className="text-brand-100 text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
                Descubra os melhores lugares, ganhe pontos e troque por cupons de desconto gratuitos.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.1s" }}>
                {/* Google Play Button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-gray-900 hover:bg-gray-800 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg"
                >
                  <PlayCircle className="w-6 h-6 md:w-8 md:h-8" />
                  <div className="text-left">
                    <span className="block text-[9px] md:text-[10px] uppercase tracking-wide opacity-80">Disponível no</span>
                    <span className="block text-base md:text-lg font-semibold -mt-0.5">Google Play</span>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-gray-900 hover:bg-gray-800 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg"
                >
                  <Apple className="w-6 h-6 md:w-8 md:h-8" />
                  <div className="text-left">
                    <span className="block text-[9px] md:text-[10px] uppercase tracking-wide opacity-80">Baixar na</span>
                    <span className="block text-base md:text-lg font-semibold -mt-0.5">App Store</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side - Phone Mockups */}
            <div className="relative flex justify-center items-end -mt-32 md:-mt-56 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {/* Glow effect behind phones */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] md:w-[550px] h-[300px] md:h-[550px] bg-white/20 rounded-full blur-[80px] animate-pulse-soft" />
              </div>
              
              <div className="relative flex items-end justify-center">
                {/* Back phone - left */}
                <div className="absolute -left-8 md:-left-32 bottom-0 w-[120px] md:w-[260px] transform -rotate-6 hidden sm:block">
                  <img
                    src={appClube}
                    alt="Ondir App - Clube"
                    className="w-full drop-shadow-2xl rounded-[1.5rem] md:rounded-[2rem]"
                  />
                </div>

                {/* Main phone - center */}
                <div className="relative z-10 w-[180px] sm:w-[220px] md:w-[340px]">
                  <img
                    src={appMockup}
                    alt="Ondir App"
                    className="w-full drop-shadow-2xl rounded-[1.5rem] md:rounded-[2rem]"
                  />
                </div>

                {/* Back phone - right */}
                <div className="absolute -right-8 md:-right-32 bottom-0 w-[120px] md:w-[260px] transform rotate-6 hidden sm:block">
                  <img
                    src={appPesquisa}
                    alt="Ondir App - Pesquisa"
                    className="w-full drop-shadow-2xl rounded-[1.5rem] md:rounded-[2rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
