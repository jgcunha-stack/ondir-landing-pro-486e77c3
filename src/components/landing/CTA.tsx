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

      <div className="container relative z-10 py-6 md:py-12 px-4">
        {/* Card with overflow hidden to cut the phone */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Background with hero image */}
          <div className="absolute inset-0">
            <img 
              src={heroBg} 
              alt="" 
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-brand-600/30" />
          </div>

          <div className="relative z-10 py-6 md:py-12 px-4 md:px-12">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-start">
              {/* Left side - Content */}
              <div className="text-center lg:text-left animate-fade-up">
                <p className="text-brand-200 text-xs md:text-sm font-medium mb-2 md:mb-4">
                  Seu destino para descobertas incríveis
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  Baixe o App – É Grátis!
                </h2>

                <p className="text-brand-100 text-sm md:text-lg mb-4 md:mb-8 max-w-xl mx-auto lg:mx-0">
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

              {/* Right side - Phone Mockup (cut by overflow-hidden) */}
              <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
                {/* Main phone - bigger and extends more */}
                <div className="relative z-10 w-[320px] sm:w-[240px] md:w-[340px] translate-y-8 md:translate-y-24">
                  <img
                    src={appMockup}
                    alt="Ondir App"
                    className="w-full drop-shadow-2xl rounded-[2rem]"
                  />
                </div>

                {/* Back phone - left - desktop only */}
                <div className="absolute -left-8 md:-left-20 top-24 md:top-32 w-[140px] md:w-[240px] transform -rotate-6 hidden sm:block z-0">
                  <img
                    src={appClube}
                    alt="Ondir App - Clube"
                    className="w-full drop-shadow-2xl rounded-[1.5rem] md:rounded-[2rem]"
                  />
                </div>

                {/* Back phone - right - desktop only */}
                <div className="absolute -right-8 md:-right-20 top-24 md:top-32 w-[140px] md:w-[240px] transform rotate-6 hidden sm:block z-0">
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
