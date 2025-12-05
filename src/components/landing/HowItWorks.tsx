import { Download, Search, CalendarCheck, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Baixe o App",
    description: "Disponível gratuitamente na App Store e Google Play.",
  },
  {
    icon: Search,
    step: "02",
    title: "Explore",
    description: "Descubra lugares incríveis baseados na sua localização e preferências.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Reserve",
    description: "Faça reservas instantâneas e garanta seu lugar nos melhores estabelecimentos.",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Aproveite",
    description: "Viva experiências únicas e ganhe pontos para trocar por recompensas.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comece em <span className="text-gradient">4 passos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            É simples, rápido e gratuito. Em poucos minutos você estará descobrindo os melhores lugares da sua cidade.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-background rounded-2xl shadow-card flex items-center justify-center border border-border relative z-10">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold z-20">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
