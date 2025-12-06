import { MapPin, Gift, Sparkles, Users, Star, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const benefits = [
  {
    id: 1,
    icon: MapPin,
    title: "Geolocalização",
    description: "Encontre os melhores estabelecimentos perto de você com recomendações personalizadas baseadas na sua localização.",
    discount: "Perto de você",
    color: "bg-brand-500",
  },
  {
    id: 2,
    icon: Gift,
    title: "Cupons Gratuitos",
    description: "Resgate cupons exclusivos sem pagar nada. Acumule pontos e troque por descontos reais em estabelecimentos parceiros.",
    discount: "100% Grátis",
    color: "bg-emerald-500",
  },
  {
    id: 3,
    icon: Trophy,
    title: "Sistema de Pontos",
    description: "Complete tarefas simples no app e ganhe pontos. Quanto mais você interage, mais recompensas você desbloqueia.",
    discount: "Ganhe Pontos",
    color: "bg-amber-500",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Recomendações",
    description: "Receba sugestões inteligentes de lugares e ofertas baseadas nos seus interesses e histórico de uso.",
    discount: "Para Você",
    color: "bg-purple-500",
  },
  {
    id: 5,
    icon: Users,
    title: "Cronogramas",
    description: "Acompanhe eventos e programações dos seus estabelecimentos favoritos. Nunca perca uma promoção especial.",
    discount: "Fique por Dentro",
    color: "bg-pink-500",
  },
  {
    id: 6,
    icon: Star,
    title: "Avaliações Reais",
    description: "Veja avaliações genuínas de outros usuários e compartilhe suas próprias experiências com a comunidade.",
    discount: "Confiável",
    color: "bg-brand-600",
  },
];

const Features = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Left side - Title and benefits list */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 rounded-full text-brand-600 text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Benefícios
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Por que usar
                <br />
                <span className="text-brand-500">o Ondir?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Descubra como o Ondir transforma sua experiência local em recompensas reais.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit) => (
                <span
                  key={benefit.id}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 transition-colors cursor-pointer"
                >
                  {benefit.title}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Single coupon carousel with arrows on sides */}
          <div className="flex items-center justify-center gap-0">
            {/* Left arrow */}
            <button
              onClick={scrollPrev}
              className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-brand-200 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all text-brand-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Carousel */}
            <div className="overflow-hidden w-[300px] sm:w-[340px] mx-4" ref={emblaRef}>
              <div className="flex gap-8">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="flex-shrink-0 w-full"
                  >
                    {/* Coupon Card - New Design */}
                    <div className="relative bg-white rounded-3xl shadow-xl border border-brand-100 overflow-hidden">
                      {/* Top colored section */}
                      <div className="bg-brand-500 p-5 pb-6 relative">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <benefit.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-bold text-white/90 tracking-wide">
                            ONDIR
                          </span>
                        </div>
                        <div className="mt-3 text-lg font-bold text-white">
                          {benefit.discount}
                        </div>
                        
                        {/* Curved bottom edge */}
                        <div className="absolute -bottom-5 left-0 right-0 h-6 bg-white rounded-t-[2rem]"></div>
                      </div>

                      {/* Bottom white section */}
                      <div className="px-5 pb-5 pt-2 space-y-3">
                        <h3 className="text-lg font-bold text-foreground">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                        
                        {/* Barcode effect */}
                        <div className="pt-2 flex items-center gap-[2px]">
                          {[...Array(30)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-gray-300 h-7"
                              style={{ width: i % 3 === 0 ? "3px" : "2px" }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={scrollNext}
              className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-brand-200 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all text-brand-600"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
