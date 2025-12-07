import { MapPin, Gift, Sparkles, Users, Star, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

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
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Left side - Title and benefits list */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 animate-fade-up">
            <div className="space-y-3 md:space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-brand-500/10 rounded-full text-brand-600 text-xs md:text-sm font-semibold hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 animate-pulse-soft" />
                Benefícios
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Por que usar
                <br />
                <span className="text-brand-500">o Ondir?</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                Descubra como o Ondir transforma sua experiência local em recompensas reais.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
              {benefits.map((benefit, index) => (
                <span
                  key={benefit.id}
                  className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  {benefit.title}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Single coupon carousel with arrows on sides */}
          <div className="flex items-center justify-center gap-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {/* Left arrow */}
            <button
              onClick={scrollPrev}
              className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border-2 border-brand-200 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all text-brand-600 hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Carousel */}
            <div className="w-[260px] sm:w-[300px] md:w-[360px] mx-2 md:mx-4 p-4 -m-4 overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="flex-shrink-0 w-full"
                  >
                    {/* Coupon Card */}
                    <div className="relative bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                      {/* Coupon top part */}
                      <div className={`${benefit.color} p-4 md:p-5 text-white relative`}>
                        {/* Decorative circles for coupon effect */}
                        <div className="absolute -left-2 md:-left-2.5 bottom-0 w-4 h-4 md:w-5 md:h-5 bg-background rounded-full"></div>
                        <div className="absolute -right-2 md:-right-2.5 bottom-0 w-4 h-4 md:w-5 md:h-5 bg-background rounded-full"></div>
                        
                        <div className="flex items-center justify-between mb-2 md:mb-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur rounded-lg md:rounded-xl flex items-center justify-center">
                            <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                          <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider opacity-80">
                            Ondir
                          </span>
                        </div>
                        <div className="text-lg md:text-xl font-bold">{benefit.discount}</div>
                      </div>

                      {/* Dashed line separator */}
                      <div className="relative px-6">
                        <div className="border-t-2 border-dashed border-gray-200"></div>
                      </div>

                      {/* Coupon bottom part */}
                      <div className="p-4 md:p-5 space-y-2 md:space-y-3">
                        <h3 className="text-base md:text-lg font-bold text-foreground">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                        
                        {/* Barcode effect */}
                        <div className="pt-2 md:pt-3 flex items-center gap-[1px] md:gap-[2px]">
                          {[...Array(20)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-gray-300 h-5 md:h-6"
                              style={{ width: Math.random() > 0.5 ? "2px" : "1.5px" }}
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
              className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border-2 border-brand-200 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all text-brand-600 hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Dots indicators */}
          <div className="lg:col-start-2 flex justify-center gap-2 mt-4">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-brand-500 w-6"
                    : "bg-brand-200 hover:bg-brand-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
