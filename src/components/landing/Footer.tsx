import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoBlue from "@/assets/logo-blue.png";

const footerLinks = {
  product: {
    title: "Produto",
    links: [
      { label: "Recursos", href: "#features" },
      { label: "Como Funciona", href: "#how-it-works" },
      { label: "Preços", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  company: {
    title: "Empresa",
    links: [
      { label: "Sobre Nós", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Imprensa", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Termos de Uso", href: "#" },
      { label: "Privacidade", href: "#" },
      { label: "Cookies", href: "#" },
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
    <footer id="contact" className="bg-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logoBlue} alt="Ondir" className="h-10 mb-6 brightness-0 invert" />
            <p className="text-gray-400 mb-6 max-w-sm">
              Somos a visão clara para saber onde estar. Um olhar guiado para novas experiências.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contato@ondir.com.br"
                className="flex items-center gap-3 text-gray-400 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                contato@ondir.com.br
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 text-gray-400 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                (11) 99999-9999
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                São Paulo, Brasil
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-primary-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ondir. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
