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

      <div className="container relative z-10 py-8 md:py-12">
        <div className="relative rounded-3xl py-8 md:py-12 px-6 md:px-12">
          {/* Background with hero image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <img 
              src={heroBg} 
              alt="" 
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-brand-600/30" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <p className="text-brand-200 text-sm font-medium mb-4">
                Seu destino para descobertas incríveis
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Baixe o App – É Grátis!
              </h2>

              <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Descubra os melhores lugares, ganhe pontos e troque por cupons de desconto gratuitos.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* Google Play Button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-xl text-white transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <PlayCircle className="w-8 h-8" />
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-wide opacity-80">Disponível no</span>
                    <span className="block text-lg font-semibold -mt-0.5">Google Play</span>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-xl text-white transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Apple className="w-8 h-8" />
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-wide opacity-80">Baixar na</span>
                    <span className="block text-lg font-semibold -mt-0.5">App Store</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side - Phone Mockups */}
            <div className="relative flex justify-center items-end -mt-32 md:-mt-40 translate-y-16 md:translate-y-24">
              {/* Glow effect behind phones */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] md:w-[550px] h-[400px] md:h-[550px] bg-white/20 rounded-full blur-[80px]" />
              </div>
              
              <div className="relative flex items-end justify-center">
                {/* Back phone - left */}
                <div className="absolute -left-16 md:-left-32 bottom-0 w-[180px] md:w-[260px] transform -rotate-6 hidden sm:block">
                  <img
                    src={appClube}
                    alt="Ondir App - Clube"
                    className="w-full drop-shadow-2xl rounded-[2rem]"
                  />
                </div>

                {/* Main phone - center */}
                <div className="relative z-10 w-[250px] md:w-[340px]">
                  <img
                    src={appMockup}
                    alt="Ondir App"
                    className="w-full drop-shadow-2xl rounded-[2rem]"
                  />
                </div>

                {/* Back phone - right */}
                <div className="absolute -right-16 md:-right-32 bottom-0 w-[180px] md:w-[260px] transform rotate-6 hidden sm:block">
                  <img
                    src={appPesquisa}
                    alt="Ondir App - Pesquisa"
                    className="w-full drop-shadow-2xl rounded-[2rem]"
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
