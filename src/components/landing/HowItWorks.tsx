import { Download, Search, Trophy, Ticket, ArrowRight } from "lucide-react";
import appMockup from "@/assets/app-howitworks.png";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Baixe o App",
    description: "Disponível gratuitamente na App Store e Google Play.",
    color: "bg-brand-500",
  },
  {
    icon: Search,
    step: "02",
    title: "Explore e Interaja",
    description: "Descubra lugares incríveis, avalie e complete tarefas para ganhar pontos.",
    color: "bg-purple-500",
  },
  {
    icon: Trophy,
    step: "03",
    title: "Acumule Pontos",
    description: "Cada interação vale pontos. Quanto mais usar, mais você ganha!",
    color: "bg-amber-500",
  },
  {
    icon: Ticket,
    step: "04",
    title: "Troque por Cupons",
    description: "Use seus pontos em campanhas e ganhe cupons de desconto gratuitos.",
    color: "bg-green-500",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white via-blue-50 to-blue-500 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-48 md:w-72 h-48 md:h-72 bg-brand-100/30 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-purple-100/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>

      {/* Container com overflow-hidden para cortar o celular no mobile */}
      <div className="relative overflow-hidden md:overflow-visible">
        <div className="container relative z-10 px-4 md:px-4">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 md:mb-16 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-brand-100 rounded-full text-brand-600 text-xs md:text-sm font-semibold mb-2 md:mb-4">
              Como Funciona
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
              Comece em <span className="text-brand-500">4 passos</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">
              É simples, rápido e gratuito. Em poucos minutos você estará ganhando recompensas.
            </p>
          </div>

          {/* Split Layout */}
          <div
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto md:pb-0"
            style={{
              paddingBottom: '60px', // Espaço para o celular no mobile - controle em pixels
              marginBottom: '0px' // Controle em pixels - pode usar valores negativos (MOBILE)
            }}
          >
            {/* Phone Mockup */}
            <div className="relative order-2 lg:order-1 flex justify-center animate-fade-up md:pb-0" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-400/30 to-purple-400/30 rounded-[3rem] blur-2xl scale-90 animate-pulse-soft" />

                {/* Phone image - Mobile */}
                <img
                  src={appMockup}
                  alt="Ondir App"
                  className="relative z-10 md:hidden drop-shadow-2xl hover:scale-105 transition-transform duration-500 translate-y-8"
                  style={{
                    width: '400px' // Controle em pixels - tamanho do celular (MOBILE)
                  }}
                />

                {/* Phone image - Desktop */}
                <img
                  src={appMockup}
                  alt="Ondir App"
                  className="relative z-10 hidden md:block drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  style={{
                    width: '320px' // Controle em pixels - tamanho do celular (DESKTOP)
                  }}
                />

                {/* Floating elements - in front of phone */}
                <div className="absolute -left-2 md:-left-4 top-1/4 z-20 bg-white rounded-xl shadow-xl p-2 md:p-3 animate-float flex items-center gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Trophy className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-semibold text-gray-900">+50 pts</p>
                    <p className="text-[9px] md:text-[10px] text-gray-500">Avaliação</p>
                  </div>
                </div>

                <div className="absolute -right-2 md:-right-4 top-1/2 z-20 bg-white rounded-xl shadow-xl p-2 md:p-3 animate-float-slow flex items-center gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                    <Ticket className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-semibold text-gray-900">Cupom</p>
                    <p className="text-[9px] md:text-[10px] text-gray-500">Resgatado!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Steps */}
            <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className="group relative flex gap-4 items-start animate-fade-up"
                  style={{ animationDelay: `${0.1 + index * 0.15}s` }}
                >
                  {/* Timeline line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-7 top-14 w-0.5 h-[calc(100%+24px)] bg-gradient-to-b from-gray-200 to-transparent" />
                  )}

                  {/* Icon */}
                  <div className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 ${step.color} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    <span className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 bg-white text-gray-900 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold shadow-md">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-brand-200 transition-all duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base md:text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
