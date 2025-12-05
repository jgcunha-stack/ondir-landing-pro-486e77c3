import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marina Costa",
    role: "Usuária desde 2024",
    avatar: "MC",
    content:
      "O Ondir mudou completamente a forma como descubro novos restaurantes. As recomendações são sempre certeiras!",
    rating: 5,
    color: "from-brand-400 to-brand-600",
  },
  {
    name: "Rafael Santos",
    role: "Usuário Premium",
    avatar: "RS",
    content:
      "Adoro a função de cronograma! Planejo todas as saídas com meus amigos pelo app. Super prático.",
    rating: 5,
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Julia Mendes",
    role: "Usuária desde 2023",
    avatar: "JM",
    content:
      "As ofertas exclusivas são incríveis. Já economizei muito dinheiro com os cupons do Ondir!",
    rating: 5,
    color: "from-amber-400 to-amber-600",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-brand-50/50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 rounded-full text-brand-600 text-sm font-semibold mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que nossos <span className="text-brand-500">usuários dizem</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Milhares de pessoas já descobriram experiências incríveis com o Ondir.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-200 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className={`absolute -top-4 right-6 w-10 h-10 bg-gradient-to-br ${testimonial.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center shadow-md`}>
                  <span className="text-sm font-bold text-white">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
