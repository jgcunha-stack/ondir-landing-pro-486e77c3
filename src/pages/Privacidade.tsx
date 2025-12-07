import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logoBlue from "@/assets/logo-blue.png";

const Privacidade = () => {
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
            Política de Privacidade - Ondir
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            A Ondir Tecnologia da Informação LTDA, inscrita no CNPJ 58.085.407/0001-49, respeita a sua privacidade e está comprometida com a proteção de seus dados pessoais. Esta Política de Privacidade foi elaborada em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) e descreve como tratamos suas informações.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Controlador dos Dados</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A Ondir Tecnologia da Informação LTDA, localizada na Rua Planura, 136, Santa Inês, Belo Horizonte, MG, CEP 31080-100, é a controladora dos dados pessoais tratados no aplicativo Ondir.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Caso tenha dúvidas sobre esta Política, entre em contato pelo e-mail <a href="mailto:pedronovais@ondirbr.com" className="text-brand-600 hover:underline">pedronovais@ondirbr.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Informações que Coletamos</h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1 Dados Pessoais Fornecidos pelo Usuário:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Nome completo.</li>
              <li>E-mail.</li>
              <li>Número de telefone.</li>
              <li>Endereço ou localização (quando autorizada pelo usuário).</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">2.2 Dados Coletados Automaticamente:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Dados de dispositivo (modelo, sistema operacional, navegador).</li>
              <li>Histórico de interações no aplicativo (como locais visualizados e reservas feitas).</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">2.3 Cookies e Tecnologias Similares:</h3>
            <p className="text-gray-600 leading-relaxed mb-2">Utilizamos cookies para:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Gerenciar sessões do usuário.</li>
              <li>Lembrar preferências.</li>
              <li>Melhorar sua experiência.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Você pode gerenciar o uso de cookies nas configurações do seu dispositivo ou navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Finalidades do Tratamento de Dados</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Prestação de Serviços:</strong> Oferecer funcionalidades do aplicativo, como sugestões personalizadas de locais.</li>
              <li><strong>Cumprimento de Obrigações Legais:</strong> Cumprir requisitos legais e regulatórios aplicáveis.</li>
              <li><strong>Comunicação:</strong> Enviar notificações sobre eventos, promoções ou atualizações.</li>
              <li><strong>Segurança e Prevenção de Fraudes:</strong> Monitorar acessos e prevenir atividades não autorizadas.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Base Legal para o Tratamento</h2>
            <p className="text-gray-600 leading-relaxed mb-4">O tratamento dos seus dados é realizado com base nas seguintes hipóteses legais:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Consentimento:</strong> Quando você autoriza o uso de dados para finalidades específicas (ex.: localização).</li>
              <li><strong>Execução de Contrato:</strong> Para fornecer os serviços do aplicativo.</li>
              <li><strong>Cumprimento de Obrigação Legal:</strong> Para atender a exigências da legislação.</li>
              <li><strong>Legítimo Interesse:</strong> Para melhorar nossos serviços e oferecer uma experiência personalizada.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Compartilhamento de Dados</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Seus dados podem ser compartilhados com:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Fornecedores e Parceiros:</strong> Prestadores de serviços essenciais (como hospedagem e envio de notificações).</li>
              <li><strong>Autoridades Governamentais:</strong> Quando exigido por lei ou ordem judicial.</li>
              <li><strong>Outros Usuários:</strong> Em situações específicas, como reservas ou promoções que envolvam terceiros.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Garantimos que terceiros que acessarem seus dados sigam os requisitos da LGPD.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Direitos do Titular dos Dados</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Você, como titular dos dados, tem os seguintes direitos garantidos pela LGPD:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Confirmação e Acesso:</strong> Confirmar se tratamos seus dados e acessá-los.</li>
              <li><strong>Correção:</strong> Solicitar a atualização ou correção de dados desatualizados ou incorretos.</li>
              <li><strong>Exclusão:</strong> Solicitar a exclusão de dados pessoais, exceto quando seu armazenamento for exigido por lei.</li>
              <li><strong>Portabilidade:</strong> Solicitar a transferência dos seus dados para outro fornecedor de serviço.</li>
              <li><strong>Revogação do Consentimento:</strong> Retirar seu consentimento, quando aplicável.</li>
              <li><strong>Oposição:</strong> Opor-se ao tratamento de dados com base em legítimo interesse.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Para exercer esses direitos, entre em contato pelo e-mail: <a href="mailto:pedronovais@ondirbr.com" className="text-brand-600 hover:underline">pedronovais@ondirbr.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Segurança dos Dados</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acessos não autorizados, perda, destruição ou vazamento, como:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>Criptografia de dados sensíveis.</li>
              <li>Controle de acesso restrito.</li>
              <li>Monitoramento de sistemas e auditorias regulares.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Apesar dessas medidas, nenhuma transmissão de dados pela internet é completamente segura.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Armazenamento e Retenção</h2>
            <p className="text-gray-600 leading-relaxed">
              Seus dados serão armazenados pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei. Após o período de retenção, seus dados serão excluídos ou anonimizados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Alterações nesta Política</h2>
            <p className="text-gray-600 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações relevantes por e-mail ou através do aplicativo. Recomendamos revisar esta página regularmente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Encarregado de Proteção de Dados (DPO)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nosso Encarregado de Proteção de Dados (DPO) está disponível para esclarecer dúvidas e atender às solicitações relacionadas ao tratamento de dados pessoais:
            </p>
            <ul className="text-gray-600 space-y-1">
              <li><strong>Nome:</strong> Pedro Henrique Dias Novais Teixeira</li>
              <li><strong>E-mail:</strong> <a href="mailto:pedronovais@ondirbr.com" className="text-brand-600 hover:underline">pedronovais@ondirbr.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">11. Contato</h2>
            <p className="text-gray-600 leading-relaxed">
              Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <p className="text-gray-600 mt-2">
              <strong>E-mail:</strong> <a href="mailto:pedronovais@ondirbr.com" className="text-brand-600 hover:underline">pedronovais@ondirbr.com</a>
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Privacidade;