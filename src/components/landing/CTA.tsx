import { Apple, PlayCircle } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
import appClube from "@/assets/app-clube.png";
import appPesquisa from "@/assets/app-pesquisa.png";

const CTA = () => {
  return (
    <section className="relative">
      {/* Split background - 50% white, 50% dark */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-white" />
        <div className="h-1/2 bg-gray-900" />
      </div>

      <div className="container relative z-10 py-8 md:py-12">
        <div className="relative bg-brand-500 rounded-3xl py-12 md:py-16 px-6 md:px-12 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-72 h-72 bg-brand-400/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-400/20 rounded-full blur-3xl" />
            
            {/* Curved lines decoration */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 500" preserveAspectRatio="none">
              <path
                d="M-100 250C150 150 350 350 600 250C850 150 950 350 1100 250"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M-100 300C150 200 350 400 600 300C850 200 950 400 1100 300"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
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
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Back phone - left */}
                <div className="absolute -left-12 top-6 w-[140px] md:w-[180px] transform -rotate-6 opacity-80 hidden sm:block">
                  <img
                    src={appClube}
                    alt="Ondir App - Clube"
                    className="w-full drop-shadow-2xl rounded-[2rem]"
                  />
                </div>

                {/* Main phone - center */}
                <div className="relative z-10 w-[180px] md:w-[220px]">
                  <img
                    src={appMockup}
                    alt="Ondir App"
                    className="w-full drop-shadow-2xl rounded-[2rem]"
                  />
                </div>

                {/* Back phone - right */}
                <div className="absolute -right-12 top-6 w-[140px] md:w-[180px] transform rotate-6 opacity-80 hidden sm:block">
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
