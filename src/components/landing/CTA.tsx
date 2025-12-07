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

      <div className="container relative z-10 py-2 md:py-12 px-4 md:px-4">
        {/* Card with overflow hidden to cut the phone */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden max-w-md md:max-w-none mx-auto">
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

          {/* Card Content - Mobile */}
          <div
            className="relative z-10 md:hidden"
            style={{
              paddingTop: '8px',    // Controle em pixels - parte de cima (MOBILE)
              paddingBottom: '1px',  // Controle em pixels - parte de baixo (MOBILE)
              paddingLeft: '12px',   // Controle em pixels - lado esquerdo (MOBILE)
              paddingRight: '12px'   // Controle em pixels - lado direito (MOBILE)
            }}
          >
            <div
              className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-start"
              style={{
                marginBottom: '-250px' // Controle em pixels - pode usar valores negativos (MOBILE)
              }}
            >
              {/* Left side - Content */}
              <div className="text-center lg:text-left animate-fade-up pt-12 md:pt-20 lg:pt-44">
                <p className="text-brand-200 text-xs md:text-sm font-medium mb-2 md:mb-4">
                  Seu destino para descobertas incríveis
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  Baixe o App – É Grátis!
                </h2>

                <p className="text-brand-100 text-sm md:text-lg mb-4 md:mb-8 max-w-xl mx-auto lg:mx-0">
                  Descubra os melhores lugares, ganhe pontos e troque por cupons de desconto gratuitos.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  {/* Google Play Button */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ondirbr.ondir"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    href="https://apps.apple.com/br/app/ondir-descubra-onde-ir/id6749873726"
                    target="_blank"
                    rel="noopener noreferrer"
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
                {/* Main phone - Mobile */}
                <div
                  className="relative z-10 md:hidden translate-y-0"
                  style={{
                    width: '400px' // Controle em pixels - tamanho do celular (MOBILE)
                  }}
                >
                  <img
                    src={appMockup}
                    alt="Ondir App"
                    className="w-full drop-shadow-2xl rounded-[2rem]"
                  />
                </div>

                {/* Back phone - left - desktop only */}
                <div className="absolute left-4 md:left-8 top-24 md:top-32 w-[140px] md:w-[240px] transform -rotate-6 hidden sm:block z-0">
                  <img
                    src={appClube}
                    alt="Ondir App - Clube"
                    className="w-full drop-shadow-2xl rounded-[1.5rem] md:rounded-[2rem]"
                  />
                </div>

                {/* Back phone - right - desktop only */}
                <div className="absolute right-4 md:right-8 top-24 md:top-32 w-[140px] md:w-[240px] transform rotate-6 hidden sm:block z-0">
                  <img
                    src={appPesquisa}
                    alt="Ondir App - Pesquisa"
                    className="w-full drop-shadow-2xl rounded-[1.5rem] md:rounded-[2rem]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card Content - Desktop */}
          <div
            className="relative z-10 hidden md:block"
            style={{
              paddingTop: '24px',   // Controle em pixels - parte de cima (DESKTOP)
              paddingBottom: '24px', // Controle em pixels - parte de baixo (DESKTOP)
              paddingLeft: '32px',   // Controle em pixels - lado esquerdo (DESKTOP)
              paddingRight: '32px'   // Controle em pixels - lado direito (DESKTOP)
            }}
          >
            <div
              className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-start"
              style={{
                marginBottom: '0px' // Controle em pixels - pode usar valores negativos (DESKTOP)
              }}
            >
              {/* Left side - Content */}
              <div className="text-center lg:text-left animate-fade-up pt-12 md:pt-20 lg:pt-44">
                <p className="text-brand-200 text-xs md:text-sm font-medium mb-2 md:mb-4">
                  Seu destino para descobertas incríveis
                </p>

                <h2 className="text-5xl sm:text-6xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  Baixe o App – É Grátis!
                </h2>

                <p className="text-brand-100 text-sm md:text-lg mb-4 md:mb-8 max-w-xl mx-auto lg:mx-0">
                  Descubra os melhores lugares, ganhe pontos e troque por cupons de desconto gratuitos.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  {/* Google Play Button */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ondirbr.ondir"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    href="https://apps.apple.com/br/app/ondir-descubra-onde-ir/id6749873726"
                    target="_blank"
                    rel="noopener noreferrer"
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
                {/* Main phone - Desktop */}
                <div
                  className="relative z-10 hidden md:block translate-y-0"
                  style={{
                    width: '340px' // Controle em pixels - tamanho do celular (DESKTOP)
                  }}
                >
                  <img
                    src={appMockup}
                    alt="Ondir App"
                    className="w-full drop-shadow-2xl rounded-[2rem]"
                  />
                </div>

                {/* Back phone - left - desktop only */}
                <div className="absolute left-4 md:left-8 top-24 md:top-32 w-[140px] md:w-[240px] transform -rotate-6 hidden sm:block z-0">
                  <img
                    src={appClube}
                    alt="Ondir App - Clube"
                    className="w-full drop-shadow-2xl rounded-[1.5rem] md:rounded-[2rem]"
                  />
                </div>

                {/* Back phone - right - desktop only */}
                <div className="absolute right-4 md:right-8 top-24 md:top-32 w-[140px] md:w-[240px] transform rotate-6 hidden sm:block z-0">
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
      {/* Espaçamento com cor do footer */}
      <div className="bg-foreground h-8 md:h-12 lg:h-16"></div>
    </section>
  );
};

export default CTA;
