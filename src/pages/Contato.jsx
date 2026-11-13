import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CONTATO } from '../data/contato';

// ─── Opções de serviço ─────────────────────────────────────────────────────────
// Os valores precisam coincidir com `rotuloContato` em src/data/servicos.js (pré-seleção vinda de /servicos).
const SERVICOS_OPCOES = [
  { value: '', label: 'Selecione um serviço' },
  { value: 'Sistemas VRF / VRV', label: 'Sistemas VRF / VRV' },
  { value: 'Chillers Industriais', label: 'Chillers Industriais' },
  { value: 'Câmaras Frias & Refrigeração', label: 'Câmaras Frias & Refrigeração' },
  { value: 'Sistemas Split e Inverter', label: 'Sistemas Split e Inverter' },
  { value: 'Manutenção HVAC & PMOC', label: 'Manutenção HVAC & PMOC' },
  { value: 'Reparo de Emergência', label: 'Reparo de Emergência' },
  { value: 'Outros', label: 'Outros' },
];

// ─── Vitrine — fotos de contexto ──────────────────────────────────────────────
const VITRINE = [
  {
    src: '/images/camerafria-contatos.webp',
    alt: 'Técnico de jaleco e touca conferindo produtos dentro de uma câmara fria',
    legenda: 'Câmaras frias e refrigeração',
  },
  {
    src: '/images/industria-contatos-02.webp',
    alt: 'Equipe em uma planta industrial com tubulações e painéis de controle',
    legenda: 'Infraestrutura industrial',
  },
];

export default function Contato() {
  const location = useLocation();

  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const [servico, setServico] = useState('');

  useEffect(() => {
    const escolhido = location.state && location.state.servicoSelecionado;
    // Só aceita valores que existem na lista, para um estado inválido não deixar o campo vazio.
    if (escolhido && SERVICOS_OPCOES.some((o) => o.value === escolhido)) {
      setServico(escolhido);
    }
  }, [location.state]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleWhatsAppSubmit(e) {
    e.preventDefault();

    const texto = `Olá Simon! Meu nome é ${form.nome || '(não informado)'}.

📧 E-mail: ${form.email || '(não informado)'}
📱 Telefone: ${form.telefone || '(não informado)'}
🔧 Serviço de interesse: ${servico || '(não informado)'}

💬 Mensagem:
${form.mensagem || '(sem mensagem adicional)'}

Aguardo o retorno. Obrigado!`;

    const encoded = encodeURIComponent(texto);
    window.open(`https://wa.me/${CONTATO.whatsappNumero}?text=${encoded}`, '_blank');
  }

  const campo =
    'mt-1 w-full rounded-md border border-aco/60 bg-laudo px-3 py-2.5 text-tinta placeholder:text-aco-escuro/70 focus:outline-none focus:border-refrigerante-escuro focus:ring-2 focus:ring-refrigerante-escuro/30';

  return (
    <div className="tema-laudo">
      <section className="secao-laudo secao-laudo--papel" aria-labelledby="contato-titulo" style={{ borderTop: 0 }}>
        <div className="miolo">
          <h1 id="contato-titulo" className="text-4xl sm:text-5xl text-tinta max-w-[40rem]">
            Fale com a equipe de engenharia
          </h1>
          <p className="texto-corrido mt-4 text-lg text-aco-escuro">
            Sistema novo, manutenção preventiva ou emergência: conte o que precisa e a equipe técnica responde pelo WhatsApp.
          </p>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {VITRINE.map((v) => (
              <li key={v.src}>
                <figure>
                  <img
                    src={v.src}
                    alt={v.alt}
                    width="800"
                    height="480"
                    loading="lazy"
                    className="aspect-[5/3] w-full rounded-md border border-filete object-cover"
                  />
                  <figcaption className="mt-2 text-sm text-aco-escuro">{v.legenda}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="secao-laudo secao-laudo--branca" aria-label="Formas de contato e formulário">
        <div className="miolo grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl text-tinta">Como falar com a Simon</h2>

            <ul className="mt-5 space-y-2 text-tinta">
              <li>Diagnóstico técnico especializado, com ART.</li>
              <li>Orçamento detalhado e transparente.</li>
            </ul>

            <dl className="mt-8 divide-y divide-filete border-y border-filete">
              <div className="py-4">
                <dt className="text-sm text-aco-escuro">WhatsApp e telefone</dt>
                <dd className="mt-0.5">
                  <a
                    href={`https://wa.me/${CONTATO.whatsappNumero}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="valor-medido text-lg font-semibold text-refrigerante-escuro hover:text-tinta"
                  >
                    {CONTATO.whatsappExibicao}
                  </a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-aco-escuro">E-mail</dt>
                <dd className="mt-0.5">
                  <a
                    href={`mailto:${CONTATO.email}`}
                    className="text-lg font-semibold text-refrigerante-escuro hover:text-tinta"
                  >
                    {CONTATO.email}
                  </a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-aco-escuro">Horário de atendimento</dt>
                <dd className="mt-0.5 text-tinta">
                  <p>Corporativo: segunda a sexta, das 8h às 18h</p>
                  <p>Emergência 24h: sábados, domingos e feriados</p>
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-aco-escuro">Área de atuação</dt>
                <dd className="mt-0.5 text-tinta">{CONTATO.areaAtuacao}</dd>
              </div>
            </dl>

            <p className="mt-8 border-l-4 border-refrigerante-escuro pl-4 text-tinta leading-relaxed texto-corrido">
              <strong>Manutenção preventiva reduz o risco de paradas.</strong> Protocolos de redundância e acompanhamento
              periódico ajudam a evitar falhas graves e protegem o estoque e a operação.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl text-tinta">Envie sua solicitação</h2>
            <p className="mt-2 text-aco-escuro">
              Quanto mais detalhes você informar, mais precisa será a primeira conversa.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="contato-nome" className="font-semibold text-tinta">
                  Nome completo
                </label>
                <input
                  id="contato-nome"
                  type="text"
                  name="nome"
                  autoComplete="name"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Ex.: João da Silva"
                  className={campo}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contato-email" className="font-semibold text-tinta">
                    E-mail profissional
                  </label>
                  <input
                    id="contato-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="voce@empresa.com.br"
                    className={campo}
                  />
                </div>
                <div>
                  <label htmlFor="contato-telefone" className="font-semibold text-tinta">
                    Telefone ou WhatsApp
                  </label>
                  <input
                    id="contato-telefone"
                    type="tel"
                    name="telefone"
                    autoComplete="tel"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="(11) 9 0000-0000"
                    className={campo}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contato-servico" className="font-semibold text-tinta">
                  Serviço de interesse
                </label>
                <select
                  id="contato-servico"
                  name="servico"
                  value={servico}
                  onChange={(e) => setServico(e.target.value)}
                  className={`${campo} cursor-pointer`}
                >
                  {SERVICOS_OPCOES.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contato-mensagem" className="font-semibold text-tinta">
                  Detalhes do projeto
                </label>
                <textarea
                  id="contato-mensagem"
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Descreva o equipamento, o problema ou o projeto."
                  className={`${campo} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-refrigerante-escuro hover:bg-tinta text-white font-semibold px-6 py-3.5 transition-colors"
              >
                Enviar pelo WhatsApp
              </button>

              <p className="text-sm text-aco-escuro">
                Ao enviar, o WhatsApp abre com os dados que você preencheu. O site não guarda essas informações.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
