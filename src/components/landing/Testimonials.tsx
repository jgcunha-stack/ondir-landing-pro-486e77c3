import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina Costa",
    role: "Usuária desde 2024",
    avatar: "MC",
    content:
      "O Ondir mudou completamente a forma como descubro novos restaurantes. As recomendações são sempre certeiras!",
    rating: 5,
  },
  {
    name: "Rafael Santos",
    role: "Usuário Premium",
    avatar: "RS",
    content:
      "Adoro a função de cronograma! Planejo todas as saídas com meus amigos pelo app. Super prático.",
    rating: 5,
  },
  {
    name: "Julia Mendes",
    role: "Usuária desde 2023",
    avatar: "JM",
    content:
      "As ofertas exclusivas são incríveis. Já economizei muito dinheiro com os cupons do Ondir!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos <span className="text-gradient">usuários dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Milhares de pessoas já descobriram experiências incríveis com o Ondir.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-card rounded-2xl border border-border hover:shadow-card transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-warning-500 fill-warning-500"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
