import { Apple, PlayCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-900">
      <div className="container">
        <div className="relative bg-brand-500 rounded-3xl py-12 md:py-16 px-6 md:px-12 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-72 h-72 bg-brand-400/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-400/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Small subtitle */}
            <p className="text-brand-200 text-sm font-medium mb-4">
              Seu destino para descobertas incríveis
            </p>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Baixe o App Agora!
            </h2>

            {/* Description */}
            <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
              Baixe o Ondir agora e comece a explorar os melhores lugares da sua cidade com cupons gratuitos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default CTA;
