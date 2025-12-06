import { MapPin, Gift, Sparkles, Users, Star, Trophy, ArrowUpRight, Layers } from "lucide-react";

const leftFeatures = [
  {
    icon: MapPin,
    title: "Geolocalização",
    gradient: "from-brand-100 to-brand-200",
    iconColor: "text-brand-600",
  },
  {
    icon: Gift,
    title: "Cupons Gratuitos",
    gradient: "from-amber-100 to-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: Trophy,
    title: "Sistema de Pontos",
    gradient: "from-green-100 to-green-200",
    iconColor: "text-green-600",
  },
];

const rightFeatures = [
  {
    icon: Sparkles,
    title: "Recomendações",
    gradient: "from-purple-100 to-purple-200",
    iconColor: "text-purple-600",
  },
  {
    icon: Users,
    title: "Cronogramas",
    gradient: "from-pink-100 to-pink-200",
    iconColor: "text-pink-600",
  },
  {
    icon: Star,
    title: "Avaliações Reais",
    gradient: "from-brand-100 to-brand-200",
    iconColor: "text-brand-600",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="container relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500/10 backdrop-blur-sm rounded-full text-brand-700 text-sm font-semibold mb-6 border border-brand-200/50">
            <Sparkles className="w-4 h-4" />
            Recursos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Recursos <span className="text-gradient">Inteligentes</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Ondir transforma a descoberta de experiências locais de forma fácil, divertida e gratuita.
          </p>
        </div>

        {/* Features Hub Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Lines - Hidden on mobile */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" 
            viewBox="0 0 1000 400"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Left side lines */}
            <path 
              d="M 320 80 Q 400 80 450 200" 
              stroke="hsl(var(--brand-300))" 
              strokeWidth="2" 
              fill="none"
              className="opacity-60"
            />
            <path 
              d="M 320 200 L 450 200" 
              stroke="hsl(var(--brand-300))" 
              strokeWidth="2" 
              fill="none"
              className="opacity-60"
            />
            <path 
              d="M 320 320 Q 400 320 450 200" 
              stroke="hsl(var(--brand-300))" 
              strokeWidth="2" 
              fill="none"
              className="opacity-60"
            />
            
            {/* Right side lines */}
            <path 
              d="M 680 80 Q 600 80 550 200" 
              stroke="hsl(var(--brand-300))" 
              strokeWidth="2" 
              fill="none"
              className="opacity-60"
            />
            <path 
              d="M 680 200 L 550 200" 
              stroke="hsl(var(--brand-300))" 
              strokeWidth="2" 
              fill="none"
              className="opacity-60"
            />
            <path 
              d="M 680 320 Q 600 320 550 200" 
              stroke="hsl(var(--brand-300))" 
              strokeWidth="2" 
              fill="none"
              className="opacity-60"
            />
          </svg>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
            {/* Left Features Container */}
            <div className="w-full lg:w-[38%] bg-brand-50/80 backdrop-blur-sm rounded-3xl p-6 border border-brand-100/50">
              <div className="space-y-4">
                {leftFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-brand-100/50 hover:border-brand-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl border border-gray-100 flex items-center justify-center shadow-sm">
                      <ArrowUpRight className="w-4 h-4 text-gray-400 -rotate-45" />
                    </div>
                    <span className="flex-1 font-semibold text-foreground">
                      {feature.title}
                    </span>
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Central Icon */}
            <div className="relative z-10 flex-shrink-0 order-first lg:order-none mb-4 lg:mb-0">
              <div className="w-20 h-20 bg-brand-500 rounded-2xl flex items-center justify-center shadow-xl shadow-brand-500/30 hover:scale-110 transition-transform duration-300">
                <Layers className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Right Features Container */}
            <div className="w-full lg:w-[38%] bg-brand-50/80 backdrop-blur-sm rounded-3xl p-6 border border-brand-100/50">
              <div className="space-y-4">
                {rightFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-brand-100/50 hover:border-brand-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                    </div>
                    <span className="flex-1 font-semibold text-foreground">
                      {feature.title}
                    </span>
                    <div className="w-10 h-10 bg-white rounded-xl border border-gray-100 flex items-center justify-center shadow-sm group-hover:bg-brand-500 group-hover:border-brand-500 transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
