import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    name: "Marina Costa",
    role: "Usuária Satisfeita",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content:
      "O Ondir mudou completamente a forma como descubro novos restaurantes. As recomendações são sempre certeiras e os cupons me ajudam a economizar muito!",
    rating: 5,
  },
  {
    name: "Rafael Santos",
    role: "Usuário Ativo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "Adoro a função de cronograma! Planejo todas as saídas com meus amigos pelo app. Super prático e fácil de usar.",
    rating: 5,
  },
  {
    name: "Julia Mendes",
    role: "Usuária Frequente",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "As ofertas exclusivas são incríveis. Já economizei muito dinheiro com os cupons do Ondir! Recomendo a todos.",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    role: "Usuário Ativo",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content:
      "Descobri lugares incríveis que nunca tinha ouvido falar. O sistema de pontos é viciante, sempre quero ganhar mais!",
    rating: 5,
  },
  {
    name: "Ana Beatriz",
    role: "Usuária Satisfeita",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    content:
      "O melhor app para encontrar promoções e lugares novos na cidade. Interface linda e super intuitiva!",
    rating: 5,
  },
];

const marqueeItems = [
  "São Paulo",
  "Rio de Janeiro", 
  "Belo Horizonte",
  "Curitiba",
  "Porto Alegre",
  "Brasília",
  "Salvador",
  "Fortaleza",
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Diagonal Green Banner */}
      <div className="absolute top-0 left-0 right-0 z-0">
        {/* Bottom straight line with gradient */}
        <div className="absolute top-8 left-0 right-0 h-24 bg-gradient-to-r from-brand-800 via-brand-700 to-brand-900" />
        {/* Diagonal banner on top */}
        <div className="relative h-14 bg-brand-500 -rotate-2 scale-110 overflow-hidden translate-y-12">
          <div className="animate-marquee flex items-center h-full whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={index} className="inline-flex items-center gap-2 mx-6 text-white font-semibold">
                {item}
                <ArrowUpRight className="w-4 h-4" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container relative z-10 pt-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full text-brand-600 text-sm font-semibold mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que nossos <span className="text-brand-500">usuários dizem</span>
          </h2>
        </div>

        {/* Avatars Row */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 px-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-500 text-white flex items-center justify-center hover:bg-brand-600 transition-colors shadow-lg"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Avatars - Show all on desktop, only nearby on mobile */}
          <div className="flex items-center gap-2 md:gap-4">
            {testimonials.map((testimonial, index) => {
              // On mobile, only show 2 avatars around the active one
              const distance = Math.abs(index - activeIndex);
              const isVisible = distance <= 1 || (activeIndex === 0 && index === testimonials.length - 1) || (activeIndex === testimonials.length - 1 && index === 0);
              
              return (
                <button
                  key={testimonial.name}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex-shrink-0 transition-all duration-300 ${
                    index === activeIndex
                      ? "scale-110 z-10"
                      : "scale-100 opacity-70 hover:opacity-100"
                  } ${isVisible ? "flex" : "hidden md:flex"}`}
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-3 md:border-4 transition-all duration-300 ${
                      index === activeIndex
                        ? "border-brand-500 shadow-lg shadow-brand-500/30"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-500 text-white flex items-center justify-center hover:bg-brand-600 transition-colors shadow-lg"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Active Testimonial Content */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {testimonials[activeIndex].name}
          </h3>
          <p className="text-gray-500 text-sm mb-3">
            {testimonials[activeIndex].role}
          </p>

          {/* Rating */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-amber-400 fill-amber-400"
              />
            ))}
          </div>

          {/* Content */}
          <p className="text-gray-600 text-lg leading-relaxed">
            "{testimonials[activeIndex].content}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
