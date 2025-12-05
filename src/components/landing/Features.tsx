import { MapPin, Calendar, Gift, Sparkles, Users, Shield } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Exploração por Geolocalização",
    description:
      "Encontre rapidamente lugares incríveis próximos a você através da localização em tempo real.",
    color: "bg-brand-100 text-primary",
  },
  {
    icon: Calendar,
    title: "Reservas Integradas",
    description:
      "Faça reservas diretamente pelo aplicativo e adquira ingressos antecipados para eventos exclusivos.",
    color: "bg-success-100 text-success-500",
  },
  {
    icon: Gift,
    title: "Ofertas Personalizadas",
    description:
      "Receba promoções exclusivas e benefícios especiais nos melhores estabelecimentos da cidade.",
    color: "bg-warning-100 text-warning-500",
  },
  {
    icon: Sparkles,
    title: "Recomendações Inteligentes",
    description:
      "Receba sugestões baseadas em suas preferências, histórico e localização atual.",
    color: "bg-brand-100 text-primary",
  },
  {
    icon: Users,
    title: "Cronogramas com Amigos",
    description:
      "Crie roteiros personalizados com amigos. Compartilhe experiências e planeje encontros facilmente.",
    color: "bg-error-100 text-error-500",
  },
  {
    icon: Shield,
    title: "Gamificação e Pontos",
    description:
      "Ganhe pontos por cada interação e troque por recompensas e descontos exclusivos.",
    color: "bg-success-100 text-success-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Recursos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tudo que você precisa para{" "}
            <span className="text-gradient">descobrir mais</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A Ondir transforma a descoberta de experiências locais de forma fácil e personalizada.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-card rounded-2xl border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
