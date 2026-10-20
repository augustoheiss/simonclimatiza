import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ShieldCheck,
  FileText,
  Mail,
  Phone,
  MessageCircle,
  Scale,
  Eye,
  UserCheck,
  Database,
  Cookie,
  Lock,
  GraduationCap,
  AlertTriangle,
} from 'lucide-react';

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// ─── Constants ──────────────────────────────────────────────────────────────────
const NOME_PROFISSIONAL = 'Simon Climatização';
const EMAIL = 'simonclimatiza@gmail.com';
const WHATSAPP_DISPLAY = '+55 11 94216-3150';
const WHATSAPP_NUMBER = '5511942163150';
const DESCRICAO_SERVICO =
  'engenharia térmica, climatização corporativa e industrial, manutenção preditiva (PMOC) e compliance sanitário';
const DATA_ATUALIZACAO = '20 de outubro de 2026';

// ─── Section Component ─────────────────────────────────────────────────────────
function LegalSection({ icon: Icon, number, title, children }) {
  return (
    <motion.div
      variants={staggerItem}
      className="relative bg-white/70 backdrop-blur-xl border border-sky-100 rounded-2xl p-7 md:p-8 shadow-lg shadow-sky-900/5 hover:shadow-xl hover:shadow-sky-900/8 transition-all duration-300 group"
    >
      {/* Decorative number */}
      <div
        className="absolute top-5 right-6 text-6xl font-black text-sky-100/60 select-none pointer-events-none"
        aria-hidden="true"
      >
        {number}
      </div>

      <div className="relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0">
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-slate-900">
            {title}
          </h2>
        </div>

        {/* Section content */}
        <div className="text-slate-600 text-sm leading-relaxed space-y-4 pl-0 md:pl-13">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function Termos() {
  return (
    <div className="w-full bg-white text-slate-900">

      {/* ── Decorative background ── */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_50%,transparent_100%)] opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-300/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[120px]" />
      </div>

      {/* ════════════════════════════════════════════════════════════════════════
          HEADER — Page title and back button
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">

          {/* Back button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <Link
              to="/"
              id="termos-back-btn"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-600 font-medium text-sm transition-colors duration-200 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" aria-hidden="true" />
              Voltar para o Início
            </Link>
          </motion.div>

          {/* Title block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-6">
              <Scale className="w-3.5 h-3.5" aria-hidden="true" />
              Conformidade LGPD
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4 text-slate-900">
              Termos de Uso e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Política de Privacidade
              </span>
            </h1>

            <p className="text-slate-500 text-base max-w-2xl mx-auto mb-3">
              Transparência e respeito à sua privacidade são pilares fundamentais da{' '}
              <strong className="text-slate-700">{NOME_PROFISSIONAL}</strong>.
            </p>

            {/* Last updated badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs font-medium">
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              Última atualização: {DATA_ATUALIZACAO}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          INTRO — Welcome paragraph
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 md:px-12 pb-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-white p-8 md:p-10 shadow-xl shadow-sky-100/60"
          >
            <div
              className="absolute -top-20 -right-20 w-72 h-72 bg-sky-300/15 rounded-full blur-[100px] pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 flex items-start gap-4">
              <div className="w-12 h-12 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-sky-500" aria-hidden="true" />
              </div>
              <div>
                <p className="text-slate-700 text-base leading-relaxed">
                  Bem-vindo(a) ao site de <strong className="text-slate-900">{NOME_PROFISSIONAL}</strong>.
                  Ao acessar e utilizar esta página, você concorda com os Termos de Uso e a Política de
                  Privacidade descritos abaixo. Caso não concorde com algum dos termos, pedimos que não
                  utilize os serviços aqui oferecidos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          LEGAL CONTENT — Terms of Use + Privacy Policy
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 md:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="space-y-6"
          >

            {/* ── PART 1: TERMOS DE USO ── */}
            <motion.div variants={staggerItem}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-10 bg-gradient-to-b from-sky-400 to-blue-600 rounded-full" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                  Parte 1 — Termos de Uso
                </span>
              </div>
            </motion.div>

            {/* 1.1 Descrição dos Serviços */}
            <LegalSection icon={FileText} number="1.1" title="Descrição dos Serviços">
              <p>
                Este site tem como objetivo apresentar e facilitar o contato para os serviços de{' '}
                <strong className="text-slate-800">{DESCRICAO_SERVICO}</strong>, oferecidos por{' '}
                <strong className="text-slate-800">{NOME_PROFISSIONAL}</strong>.
              </p>
            </LegalSection>

            {/* 1.2 Contato e Agendamentos */}
            <LegalSection icon={MessageCircle} number="1.2" title="Contato e Agendamentos">
              <p>
                Os contatos, orçamentos e agendamentos realizados através dos botões de redirecionamento
                deste site (como WhatsApp e E-mail) são de inteira responsabilidade do usuário e do
                profissional prestador do serviço. O site funciona apenas como um canal de vitrine e
                facilitação de comunicação.
              </p>
            </LegalSection>

            {/* 1.3 Isenção de Responsabilidade Técnica, Repositório Público e Indenização */}
            <LegalSection icon={ShieldCheck} number="1.3" title="Isenção de Responsabilidade Técnica e Repositório Público">
              <p>
                A infraestrutura web, design e código-fonte front-end deste site foram desenvolvidos de forma
                terceirizada sob o padrão <strong className="text-slate-800">&ldquo;no estado em que se encontra&rdquo; (AS-IS)</strong>.
                O desenvolvedor responsável pela criação tecnológica não possui vínculos societários, não atua no
                atendimento aos clientes e não responde, solidária ou subsidiariamente (LGPD, Art. 42), pela prestação
                física dos serviços de engenharia térmica, emissão de laudos/ART, promessas comerciais ou pela gestão
                dos dados trocados diretamente com o profissional após o redirecionamento.
              </p>
              <p>
                Para fins de transparência arquitetural, auditoria e entrega contínua (CI/CD), o código-fonte estático
                da camada de apresentação pode estar hospedado em repositório público (GitHub), não existindo qualquer
                banco de dados oculto de clientes sob posse ou custódia do desenvolvedor. O Usuário e o Controlador
                concordam em manter o desenvolvedor de software indene (<strong className="text-slate-800">Hold Harmless</strong>)
                contra quaisquer demandas comerciais, trabalhistas, fiscais ou operacionais decorrentes das atividades
                da <strong className="text-slate-800">{NOME_PROFISSIONAL}</strong>.
              </p>
            </LegalSection>

            {/* 1.4 Termos da Academia HVAC, Treinamentos e Isenção Prática */}
            <LegalSection icon={GraduationCap} number="1.4" title="Academia HVAC & Treinamentos Técnicos Online">
              <p>
                Os cursos, vídeo-aulas, manuais e materiais didáticos disponibilizados na seção <strong className="text-slate-800">Academia Simon Climatiza</strong> possuem caráter <strong className="text-slate-800">estritamente educacional, pedagógico e informativo</strong>:
              </p>
              <ul className="space-y-2 mt-3 list-disc list-inside">
                <li>
                  <strong className="text-slate-800">Evolução Tecnológica e Desatualização de Manuais:</strong> A engenharia de climatização (sistemas VRF/TVR, compressores inverter, gases refrigerantes e normas ABNT/ASHRAE) evolui constantemente. Os materiais didáticos refletem o estado da técnica na data de sua produção. O técnico ou aluno tem o dever indelegável de sempre consultar o manual técnico oficial atualizado do fabricante do equipamento antes de qualquer diagnóstico ou intervenção física.
                </li>
                <li>
                  <strong className="text-slate-800">Isenção Total por Acidentes e Danos em Campo:</strong> A Simon Climatiza, seus instrutores e o desenvolvedor da plataforma web ficam expressamente isentos de qualquer responsabilidade civil, criminal ou indenizatória por acidentes de trabalho, choques elétricos, queimaduras químicas, vazamento de fluidos refrigerantes, queima de placas eletrônicas ou danos patrimoniais decorrentes da execução prática das técnicas demonstradas nos vídeos.
                </li>
                <li>
                  <strong className="text-slate-800">Segurança do Trabalho & Normas Regulamentadoras (NRs):</strong> O aluno é o único responsável pelo cumprimento das normas de segurança obrigatórias (como NR-10 para eletricidade e NR-35 para trabalho em altura), pelo uso correto de Equipamentos de Proteção Individual (EPIs) e por possuir habilitação técnica legal (CFT/CREA).
                </li>
                <li>
                  <strong className="text-slate-800">Natureza dos Certificados e Veracidade Cadastral:</strong> Os certificados emitidos pela Academia (gerados localmente no navegador do aluno) atestam a participação e aproveitamento do curso online livre, não equivalendo a registro de engenharia ou Anotação de Responsabilidade Técnica (ART). O aluno é o único responsável pela veracidade do nome inserido na emissão e pelo compartilhamento voluntário do QR Code/link de validação.
                </li>
              </ul>
            </LegalSection>

            {/* 1.5 Reserva de Propriedade Intelectual em Repositório Público */}
            <LegalSection icon={Scale} number="1.5" title="Propriedade Intelectual e Reserva de Marca em Repositório Público">
              <p>
                Embora a estrutura técnica do código-fonte possa estar visível em plataforma pública de versionamento
                (GitHub), <strong className="text-slate-800">não é concedida qualquer licença de código aberto (open-source) ou autorização de uso</strong> sobre
                a marca <strong className="text-slate-800">{NOME_PROFISSIONAL}</strong>, logotipos, apostilas técnicas,
                roteiros da Academia HVAC, assinaturas institucionais, fotografias ou identidade visual. A clonagem,
                rateio pirata de aulas ou reprodução comercial não autorizada constitui violação de direitos autorais
                (Lei nº 9.610/1998) e concorrência desleal (Lei nº 9.279/1996).
              </p>
            </LegalSection>

            {/* ── Divider ── */}
            <motion.div variants={staggerItem} className="py-4">
              <div className="h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" aria-hidden="true" />
            </motion.div>

            {/* ── PART 2: POLÍTICA DE PRIVACIDADE ── */}
            <motion.div variants={staggerItem}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-10 bg-gradient-to-b from-sky-400 to-blue-600 rounded-full" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                  Parte 2 — Política de Privacidade (LGPD)
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 pl-0 md:pl-5">
                Em conformidade com a <strong className="text-slate-800">Lei Geral de Proteção de Dados
                (Lei nº 13.709/2018)</strong> e o <strong className="text-slate-800">Marco Civil da Internet
                (Lei nº 12.965/2014)</strong>, detalhamos como tratamos as suas informações:
              </p>
            </motion.div>

            {/* 2.1 Coleta de Dados e Processamento Client-Side */}
            <LegalSection icon={Database} number="2.1" title="Coleta Mínima e Processamento Local (Client-Side)">
              <p>
                Adotamos o princípio da minimização de dados (LGPD, Art. 6º, III). As calculadoras de engenharia,
                o progresso de aulas da Academia e a geração de certificados em PDF funcionam{' '}
                <strong className="text-slate-800">exclusivamente na memória local do seu próprio navegador (Client-Side)</strong>.
                Quando você clica em nossos botões de contato (WhatsApp ou E-mail), os dados fornecidos voluntariamente
                por você (como seu nome, número de telefone e conteúdo da mensagem) são recebidos diretamente por{' '}
                <strong className="text-slate-800">{NOME_PROFISSIONAL}</strong>.
              </p>
              <p>
                Este site não possui bancos de dados ocultos em nuvem que capturam suas informações pessoais sem o seu
                consentimento.
              </p>
            </LegalSection>

            {/* 2.2 Uso dos Dados e Bases Legais */}
            <LegalSection icon={Eye} number="2.2" title="Finalidades e Bases Legais do Tratamento (LGPD, Art. 7º)">
              <p>
                O tratamento dos dados fornecidos voluntariamente fundamenta-se na execução de procedimentos
                preliminares e contrato (Art. 7º, V), cumprimento de obrigação legal/regulatória (Art. 7º, II) e
                legítimo interesse (Art. 7º, IX), sendo utilizados única e exclusivamente para:
              </p>
              <ul className="space-y-2 mt-3">
                {[
                  'Retornar o seu contato técnico e responder a dúvidas de engenharia;',
                  'Enviar orçamentos, propostas de PMOC e agendar vistorias técnicas;',
                  'Prestar o serviço de climatização ou treinamento contratado;',
                  'Enviar atualizações estritamente relacionadas ao serviço solicitado.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </LegalSection>

            {/* 2.3 Compartilhamento de Informações */}
            <LegalSection icon={Lock} number="2.3" title="Compartilhamento de Informações">
              <p>
                Nós não vendemos, alugamos ou compartilhamos seus dados pessoais com corretores de dados
                (<em>data brokers</em>) ou terceiros para fins de marketing ou qualquer outra finalidade que não seja
                o cumprimento do serviço solicitado, exceto se exigido por lei ou determinação judicial.
              </p>
            </LegalSection>

            {/* 2.4 Armazenamento Técnico Local e Cookies */}
            <LegalSection icon={Cookie} number="2.4" title="Armazenamento Técnico Local (LocalStorage) e Cookies">
              <p>
                Este site opera sob arquitetura limpa (<em>Zero-Tracking Publicitário</em>) e utiliza apenas recursos
                de armazenamento local do próprio navegador (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">localStorage</code>)
                estritamente necessários para salvar o seu progresso nas aulas, notas de bancada e autenticação da
                estação de estudos da Academia HVAC. Nenhuma informação pessoal identificável é vendida ou extraída por
                rastreadores publicitários invasivos.
              </p>
            </LegalSection>

            {/* 2.5 Seus Direitos */}
            <LegalSection icon={UserCheck} number="2.5" title="Direitos do Titular dos Dados (LGPD, Arts. 18 e 19)">
              <p>
                Você tem o direito de solicitar gratuitamente, a qualquer momento (com prazo legal de resposta de até
                15 dias conforme Art. 19, II da LGPD):
              </p>
              <ul className="space-y-2 mt-3">
                {[
                  'A confirmação da existência de tratamento e acesso aos seus dados;',
                  'A correção de dados incompletos, inexatos ou desatualizados;',
                  'A anonimização, bloqueio ou exclusão dos seus dados dos nossos contatos comerciais;',
                  'A limpeza imediata do progresso local limpando os dados do navegador no seu dispositivo.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </LegalSection>

            {/* 2.6 Proteção dos Dados Públicos do Controlador (Art. 7º, §§ 3º e 4º LGPD) */}
            <LegalSection icon={AlertTriangle} number="2.6" title="Proteção dos Dados Públicos do Controlador e Vedação a Scraping/Spam (Art. 7º, §§ 3º e 4º)">
              <p>
                Os dados empresariais, técnicos e de identificação da <strong className="text-slate-800">{NOME_PROFISSIONAL}</strong>{' '}
                exibidos publicamente neste website e em seu repositório de código-fonte (incluindo nome comercial,
                telefones/WhatsApp, endereço de e-mail, imagens e materiais técnicos) foram tornados públicos{' '}
                <strong className="text-slate-800">única e exclusivamente para a finalidade de permitir o contato comercial de clientes e alunos interessados nos serviços descritos nesta página</strong>,
                nos termos do Art. 7º, §§ 3º e 4º da LGPD.
              </p>
              <p>
                Fica <strong className="text-slate-800">terminantemente proibida</strong> a coleta automatizada
                (<em>web scraping</em>, <em>crawling</em> ou mineração de repositório), inclusão não solicitada em
                listas de disparo em massa (spam, telemarketing robótico ou prospecção fria B2B), comercialização por{' '}
                <em>data brokers</em>, treinamento não autorizado de modelos de IA ou clonagem de identidade, sob pena
                de responsabilização civil, administrativa perante a ANPD e penal.
              </p>
              <p>
                <strong className="text-slate-800">Alerta Antifraude de Canal Oficial:</strong> Para sua segurança, a{' '}
                {NOME_PROFISSIONAL} atende exclusivamente pelos canais listados na seção 2.7 abaixo e nunca solicita
                senhas, códigos de verificação SMS/WhatsApp ou pagamentos para contas de terceiros desconhecidos.
              </p>
            </LegalSection>

            {/* 2.7 Contato do Controlador de Dados */}
            <LegalSection icon={Mail} number="2.7" title="Contato do Controlador de Dados (DPO) e Foro">
              <p>
                Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato
                diretamente com o responsável pelo tratamento dos dados:
              </p>

              <div className="mt-5 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 text-sky-500" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Responsável
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      {NOME_PROFISSIONAL}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-sky-500" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      E-mail
                    </span>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-green-600" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>
            </LegalSection>

          </motion.div>

          {/* ── Bottom CTA — Voltar para o Início ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link
              to="/"
              id="termos-bottom-back-btn"
              className="inline-flex items-center gap-2 border border-sky-300 hover:border-sky-500 text-sky-600 hover:text-sky-700 font-bold px-8 py-4 rounded-xl transition-all duration-200 text-sm bg-sky-50/50 hover:bg-sky-50 shadow-sm hover:shadow-md"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Voltar para o Início
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
