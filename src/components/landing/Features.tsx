const tags = [
  { label: "Cupons Exclusivos", highlighted: false },
  { label: "Pontos Acumulados", highlighted: false },
  { label: "Experiências Locais", highlighted: true },
  { label: "Parceiros Premium", highlighted: false },
];

const stats = [
  {
    title: "Nossos resultados",
    description: "Conectamos usuários a estabelecimentos locais com ofertas exclusivas. Nossa plataforma transforma interações em recompensas reais.",
    metrics: [
      { value: "50+", label: "estabelecimentos parceiros" },
      { value: "+80%", label: "taxa de satisfação" },
      { value: "2mil+", label: "cupons resgatados" },
    ],
  },
  {
    title: "Economia em 2025",
    description: "Usuários economizam com cupons e ofertas exclusivas disponíveis apenas no Ondir.",
    highlight: "R$25mil+",
    highlightLabel: "em economia para usuários",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-brand-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Title and tags */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              dados que
              <br />
              comprovam
              <br />
              <span className="text-brand-400">nosso impacto</span>
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    tag.highlighted
                      ? "bg-brand-500 text-white"
                      : "bg-transparent border border-white/30 text-white/80 hover:border-brand-400 hover:text-brand-400"
                  }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Stats cards */}
          <div className="space-y-6">
            {/* First card - Key results */}
            <div className="bg-white rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-brand-900">{stats[0].title}</h3>
              <p className="text-brand-700 leading-relaxed">
                {stats[0].description}
              </p>
              <div className="grid grid-cols-3 gap-4">
                {stats[0].metrics?.map((metric, index) => (
                  <div key={index} className="space-y-1">
                    <span className="text-3xl lg:text-4xl font-bold text-brand-500">
                      {metric.value}
                    </span>
                    <p className="text-sm text-brand-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Second card - Highlight stat */}
            <div className="bg-white rounded-2xl p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="space-y-2 flex-1">
                <h3 className="text-2xl font-bold text-brand-900">{stats[1].title}</h3>
                <p className="text-brand-700 text-sm leading-relaxed">
                  {stats[1].description}
                </p>
              </div>
              <div className="text-right">
                <span className="text-4xl lg:text-5xl font-bold text-brand-500">
                  {stats[1].highlight}
                </span>
                <p className="text-sm text-brand-600 mt-1">{stats[1].highlightLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
