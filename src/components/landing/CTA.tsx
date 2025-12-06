import { Apple, PlayCircle } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
import appClube from "@/assets/app-clube.png";
import appPesquisa from "@/assets/app-pesquisa.png";

const CTA = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Wave SVG at top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600">
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-300/20 rounded-full blur-3xl" />
        
        {/* Curved lines decoration */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <path
              d="M-100 300C200 200 400 400 700 300C1000 200 1200 400 1540 300"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M-100 350C200 250 400 450 700 350C1000 250 1200 450 1540 350"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M-100 400C200 300 400 500 700 400C1000 300 1200 500 1540 400"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Baixe o App – É Grátis!
              <br />
              <span className="text-brand-100">Explore sua cidade</span>
            </h2>

            <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Descubra os melhores lugares, ganhe pontos e troque por cupons de desconto gratuitos. Baixe agora e comece a explorar!
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
              <div className="absolute -left-16 top-8 w-[180px] md:w-[220px] transform -rotate-6 opacity-80 hidden sm:block">
                <img
                  src={appClube}
                  alt="Ondir App - Clube"
                  className="w-full drop-shadow-2xl rounded-[2rem]"
                />
              </div>

              {/* Main phone - center */}
              <div className="relative z-10 w-[220px] md:w-[280px]">
                <img
                  src={appMockup}
                  alt="Ondir App"
                  className="w-full drop-shadow-2xl rounded-[2rem]"
                />
              </div>

              {/* Back phone - right */}
              <div className="absolute -right-16 top-8 w-[180px] md:w-[220px] transform rotate-6 opacity-80 hidden sm:block">
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
    </section>
  );
};

export default CTA;
