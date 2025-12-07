import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoBlue from "@/assets/logo-blue.png";

const TermosDeUso = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container py-4 px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-brand-600 hover:text-brand-700 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </Link>
          <Link to="/">
            <img src={logoBlue} alt="Ondir" className="h-8" />
          </Link>
          <div className="w-20" />
        </div>
      </header>

      {/* Content */}
      <main className="container py-12 px-4 max-w-4xl mx-auto">
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Termos de Serviço - Ondir
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Estes Termos de Serviço regulam o uso do aplicativo Ondir, fornecido pela Ondir Tecnologia da Informação LTDA. Ao utilizar nossos serviços, você concorda com os termos descritos neste documento.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-600 leading-relaxed">
              Ao acessar ou utilizar o aplicativo Ondir, você concorda com os presentes Termos de Serviço. Caso não concorde com os termos, não utilize o aplicativo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Descrição do Serviço</h2>
            <p className="text-gray-600 leading-relaxed">
              O aplicativo Ondir fornece uma plataforma para os usuários explorarem locais, eventos e serviços próximos à sua localização, além de oferecer funcionalidades exclusivas para assinantes do plano Pro, como descontos e reservas antecipadas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Elegibilidade</h2>
            <p className="text-gray-600 leading-relaxed">
              O uso do aplicativo está disponível apenas para pessoas com 18 anos ou mais. Menores de idade podem utilizar o serviço apenas com supervisão de um responsável legal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Conta do Usuário</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">4.1 Cadastro:</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Para acessar determinados recursos, você deve criar uma conta fornecendo informações precisas e completas.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">4.2 Responsabilidade pela Conta:</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Você é responsável por manter a confidencialidade das informações da sua conta e por todas as atividades realizadas em seu nome.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">4.3 Rescisão da Conta:</h3>
            <p className="text-gray-600 leading-relaxed">
              O Ondir reserva-se o direito de suspender ou encerrar contas que violem os Termos de Serviço.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Uso Permitido</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Você concorda em utilizar o aplicativo de maneira legal e para os propósitos pretendidos. É proibido:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Usar o aplicativo para fins fraudulentos ou ilícitos.</li>
              <li>Distribuir conteúdo que viole direitos de terceiros.</li>
              <li>Fazer engenharia reversa ou explorar vulnerabilidades do sistema.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Propriedade Intelectual</h2>
            <p className="text-gray-600 leading-relaxed">
              Todo o conteúdo, design, software e marcas registradas do Ondir são de propriedade exclusiva da Ondir Tecnologia da Informação LTDA. É proibido copiar, modificar ou utilizar qualquer material do aplicativo sem autorização prévia.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Planos e Assinaturas</h2>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2">7.1 Plano Gratuito:</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              O plano gratuito oferece acesso a locais e eventos em alta, sem direito a descontos ou funcionalidades premium.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">7.2 Plano Pro:</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              O plano Pro inclui benefícios como descontos em estabelecimentos, acesso ao marketplace e reservas exclusivas.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">7.3 Cancelamento:</h3>
            <p className="text-gray-600 leading-relaxed">
              Os usuários podem cancelar suas assinaturas a qualquer momento diretamente pelo aplicativo. Após o cancelamento, os benefícios do plano Pro permanecerão disponíveis até o final do ciclo de cobrança.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Limitação de Responsabilidade</h2>
            <p className="text-gray-600 leading-relaxed mb-4">O Ondir não se responsabiliza por:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Danos decorrentes de interrupções ou falhas no serviço.</li>
              <li>Conteúdo fornecido por terceiros (como informações de estabelecimentos ou eventos).</li>
              <li>Perdas ou danos causados pelo uso indevido do aplicativo.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Privacidade</h2>
            <p className="text-gray-600 leading-relaxed">
              Ao utilizar o Ondir, você concorda com o tratamento dos seus dados pessoais conforme descrito na nossa{" "}
              <Link to="/privacidade" className="text-brand-600 hover:underline">Política de Privacidade</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Modificações nos Termos</h2>
            <p className="text-gray-600 leading-relaxed">
              Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. Avisaremos sobre alterações significativas através do aplicativo ou por e-mail. O uso contínuo do aplicativo após a publicação das alterações significa que você aceita os novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">11. Rescisão</h2>
            <p className="text-gray-600 leading-relaxed">
              O Ondir pode, a seu exclusivo critério, suspender ou encerrar seu acesso ao aplicativo a qualquer momento, especialmente em caso de violação destes Termos de Serviço.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">12. Resolução de Disputas</h2>
            <p className="text-gray-600 leading-relaxed">
              Em caso de conflitos decorrentes do uso do aplicativo, você concorda em tentar resolver o problema de forma amigável antes de buscar outros meios legais. Caso não seja possível, as disputas serão resolvidas nos tribunais da comarca de Belo Horizonte, Minas Gerais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">13. Contato</h2>
            <p className="text-gray-600 leading-relaxed">
              Para dúvidas ou solicitações relacionadas a estes Termos de Serviço, entre em contato conosco:
            </p>
            <p className="text-gray-600 mt-2">
              <strong>E-mail:</strong> <a href="mailto:suporte@ondir.com" className="text-brand-600 hover:underline">suporte@ondir.com</a>
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default TermosDeUso;