import { Button } from "@/components/ui/button";
import { CheckCircle2, Apple, PlayCircle } from "lucide-react";
import appClube from "@/assets/app-clube.png";
import appPesquisa from "@/assets/app-pesquisa.png";
import appCronograma from "@/assets/app-cronograma.png";

const showcaseItems = [
  {
    badge: "Clube de Recompensas",
    title: "Ganhe pontos e troque por cupons",
    description: "Complete tarefas no app, acumule pontos e quando houver uma campanha ativa, troque seus pontos por cupons de desconto gratuitos nos estabelecimentos parceiros.",
    features: [
      "Tarefas simples para ganhar pontos",
      "Campanhas exclusivas com parceiros",
      "Cupons 100% gratuitos",
      "Valide direto no estabelecimento"
    ],
    image: appClube,
    imagePosition: "right"
  },
  {
    badge: "Explore",
    title: "Descubra novos lugares todos os dias",
    description: "Explore uma variedade de restaurantes incríveis, descubra eventos exclusivos e desfrute de passeios emocionantes com sua família todos os dias.",
    features: [
      "Busca por geolocalização",
      "Filtros personalizados",
      "Avaliações de usuários reais",
      "Fotos e informações completas"
    ],
    image: appPesquisa,
    imagePosition: "left"
  },
  {
    badge: "Cronogramas",
    title: "Planeje roteiros com amigos",
    description: "Crie cronogramas de viagem ou passeios com amigos. Adicione lugares, defina datas e compartilhe o roteiro para todos acompanharem.",
    features: [
      "Convide amigos para o roteiro",
      "Visualize no mapa",
      "Organize por dias",
      "Sincronize em tempo real"
    ],
    image: appCronograma,
    imagePosition: "right"
  }
];

const AppShowcase = () => {
  return (
    <section id="app-showcase" className="relative py-10 md:py-16 lg:py-20 bg-background overflow-hidden">
      {/* Bottom curved border */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 96V0C240 64 480 96 720 96C960 96 1200 64 1440 0V96H0Z"
            fill="hsl(var(--primary))"
          />
        </svg>
      </div>

      <div className="container max-w-6xl px-4 relative z-10">
        {showcaseItems.map((item, index) => (
          <div
            key={item.title}
            className={`relative flex flex-col ${
              item.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-6 lg:gap-12 mb-12 lg:mb-20 last:mb-0 animate-fade-up`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Content Side */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 md:px-3 md:py-1.5 bg-brand-500/10 backdrop-blur-sm rounded-full text-brand-600 text-xs md:text-sm font-semibold mb-3 md:mb-4 border border-brand-200/50 hover:scale-105 transition-transform duration-300">
                {item.badge}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
                {item.title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                {item.features.map((feature, featureIndex) => (
                  <li key={feature} className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground text-xs md:text-sm lg:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {index === 0 && (
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center lg:justify-start">
                  <Button size="default" className="gap-2 shadow-lg shadow-brand-500/30 text-sm">
                    <Apple className="w-4 h-4 md:w-5 md:h-5" />
                    App Store
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    className="gap-2 border-2 border-brand-200 text-brand-700 hover:bg-brand-50 text-sm"
                  >
                    <PlayCircle className="w-4 h-4 md:w-5 md:h-5" />
                    Google Play
                  </Button>
                </div>
              )}
            </div>

            {/* Phone Side */}
            <div className="relative flex-1 flex justify-center">
              {/* Phone Mockup */}
              <div className="relative w-[200px] sm:w-[240px] md:w-[300px] lg:w-[340px] z-10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src={item.image}
                  alt={`Ondir App - ${item.title}`}
                  className="w-full h-auto drop-shadow-2xl rounded-[1.5rem] md:rounded-[2rem]"
                />
              </div>

              {/* Floating badges - hidden on mobile */}
              <div
                className={`hidden lg:block absolute ${
                  item.imagePosition === "left" ? "right-[20%]" : "left-[20%]"
                } top-[15%] bg-white rounded-xl px-3 py-2 shadow-lg border border-brand-100/50 animate-float z-20`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-brand-100 to-brand-200 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-brand-600" />
                  </div>
                  <span className="text-xs font-semibold text-gray-800">{item.badge}</span>
                </div>
              </div>

              <div
                className={`hidden lg:block absolute ${
                  item.imagePosition === "left" ? "left-[15%]" : "right-[15%]"
                } bottom-[20%] bg-white rounded-xl px-3 py-2 shadow-lg border border-brand-100/50 animate-float-slow z-20`}
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-xs font-semibold text-gray-800">100% Gratuito</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppShowcase;
