import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Megaphone, BarChart3, CheckCircle2 } from "lucide-react";

const benefits = [
  "Aumente sua visibilidade para milhares de usuários",
  "Receba reservas diretamente pelo aplicativo",
  "Promova ofertas exclusivas para atrair clientes",
  "Acompanhe métricas e insights do seu negócio",
  "Fidelize clientes com programa de pontos",
];

const stats = [
  { icon: Users, value: "10k+", label: "Usuários Ativos" },
  { icon: TrendingUp, value: "35%", label: "Aumento de Vendas" },
  { icon: Megaphone, value: "500+", label: "Parceiros" },
  { icon: BarChart3, value: "2M+", label: "Interações/Mês" },
];

const Business = () => {
  return (
    <section id="business" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
              Para Empresas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Leve seu negócio para{" "}
              <span className="text-gradient">outro nível</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Uma plataforma eficaz para divulgar seu negócio diretamente para clientes que realmente têm interesse, aumentando suas vendas e fidelizando novos consumidores.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-500 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button size="lg">
              Seja um Parceiro
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-6 md:p-8 rounded-2xl ${
                  index === 0
                    ? "bg-gradient-hero text-primary-foreground"
                    : "bg-card border border-border"
                } ${index === 0 ? "" : "shadow-card"}`}
              >
                <stat.icon
                  className={`w-8 h-8 mb-4 ${
                    index === 0 ? "text-brand-200" : "text-primary"
                  }`}
                />
                <p
                  className={`text-3xl md:text-4xl font-bold mb-1 ${
                    index === 0 ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {stat.value}
                </p>
                <p
                  className={`text-sm ${
                    index === 0 ? "text-brand-200" : "text-muted-foreground"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
