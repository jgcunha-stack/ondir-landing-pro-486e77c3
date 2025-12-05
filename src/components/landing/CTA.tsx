import { Button } from "@/components/ui/button";
import { Apple, PlayCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para descobrir novas experiências?
          </h2>
          <p className="text-xl text-brand-100 mb-10">
            Baixe o Ondir agora e comece a explorar os melhores lugares da sua cidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="gap-3">
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <span className="block text-xs opacity-80">Baixar na</span>
                <span className="block text-base font-semibold">App Store</span>
              </div>
            </Button>
            <Button variant="heroOutline" size="xl" className="gap-3">
              <PlayCircle className="w-6 h-6" />
              <div className="text-left">
                <span className="block text-xs opacity-80">Disponível no</span>
                <span className="block text-base font-semibold">Google Play</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
