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
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
          <div className="flex items-center gap-4">
            {/* Left arrow */}
            <button
              onClick={scrollPrev}
              className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-brand-200 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all text-brand-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Carousel */}
            <div className="overflow-hidden flex-1" ref={emblaRef}>
              <div className="flex">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="flex-shrink-0 w-full px-2"
                  >
                    {/* Coupon Card */}
                    <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-[320px] mx-auto">
                      {/* Coupon top part */}
                      <div className={`${benefit.color} p-5 text-white relative`}>
                        {/* Decorative circles for coupon effect */}
                        <div className="absolute -left-2.5 bottom-0 w-5 h-5 bg-background rounded-full"></div>
                        <div className="absolute -right-2.5 bottom-0 w-5 h-5 bg-background rounded-full"></div>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                            <benefit.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                            Ondir
                          </span>
                        </div>
                        <div className="text-xl font-bold">{benefit.discount}</div>
                      </div>

                      {/* Dashed line separator */}
                      <div className="relative px-6">
                        <div className="border-t-2 border-dashed border-gray-200"></div>
                      </div>

                      {/* Coupon bottom part */}
                      <div className="p-5 space-y-3">
                        <h3 className="text-lg font-bold text-foreground">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                        
                        {/* Barcode effect */}
                        <div className="pt-3 flex items-center gap-[2px]">
                          {[...Array(25)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-gray-300 h-6"
                              style={{ width: Math.random() > 0.5 ? "3px" : "2px" }}
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
              className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-brand-200 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all text-brand-600"
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
