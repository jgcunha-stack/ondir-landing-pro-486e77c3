import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logoBlue from "@/assets/logo-blue.png";

const footerLinks = {
  product: {
    title: "Produto",
    links: [
      { label: "Recursos", href: "#features", isExternal: true },
      { label: "Como Funciona", href: "#how-it-works", isExternal: true },
      { label: "Preços", href: "#", isExternal: true },
      { label: "FAQ", href: "#", isExternal: true },
    ],
  },
  company: {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "#", isExternal: true },
      { label: "Carreiras", href: "#", isExternal: true },
      { label: "Blog", href: "#", isExternal: true },
      { label: "Imprensa", href: "#", isExternal: true },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Termos de Uso", href: "/termos-de-uso", isExternal: false },
      { label: "Privacidade", href: "/privacidade", isExternal: false },
    ],
  },
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground pt-10 md:pt-16 pb-6 md:pb-8 overflow-hidden">
      <div className="container px-4 md:px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2 animate-fade-up">
            <img src={logoBlue} alt="Ondir" className="h-8 md:h-10 mb-4 md:mb-6 brightness-0 invert hover:scale-105 transition-transform duration-300" />
            <p className="text-gray-400 mb-4 md:mb-6 max-w-sm text-sm md:text-base">
              Somos a visão clara para saber onde estar. Um olhar guiado para novas experiências.
            </p>
            <div className="space-y-2 md:space-y-3">
              <a
                href="mailto:contato@ondir.com.br"
                className="flex items-center gap-2 md:gap-3 text-gray-400 hover:text-primary-foreground transition-colors text-sm md:text-base"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                contato@ondir.com.br
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 md:gap-3 text-gray-400 hover:text-primary-foreground transition-colors text-sm md:text-base"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                (11) 99999-9999
              </a>
              <div className="flex items-center gap-2 md:gap-3 text-gray-400 text-sm md:text-base">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                São Paulo, Brasil
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={section.title} className="animate-fade-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
              <h4 className="font-semibold text-primary-foreground mb-3 md:mb-4 text-sm md:text-base">
                {section.title}
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary-foreground hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-primary-foreground hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ondir. Todos os direitos reservados.
          </p>
          <div className="flex gap-3 md:gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                aria-label={social.label}
                style={{ animationDelay: `${0.5 + index * 0.05}s` }}
              >
                <social.icon className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
