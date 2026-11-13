import { useSearchParams, Link } from 'react-router-dom';

/**
 * Validar: página de conferência de certificado.
 *
 * ATENÇÃO: esta página NÃO consulta nenhum registro. Ela só mostra os dados que vieram no link
 * (cert, nome, curso, data). Quem monta o link na mão vê o mesmo resultado. Por isso o texto abaixo
 * não afirma "autêntico" nem "válido": diz que são os dados do link e orienta a confirmar com a Simon.
 * Para uma validação de verdade é preciso um registro dos certificados emitidos (decisão do dono).
 */
export default function Validar() {
  const [searchParams] = useSearchParams();

  const cert = searchParams.get('cert');
  const nome = searchParams.get('nome');
  const curso = searchParams.get('curso');
  const data = searchParams.get('data');

  const temDados = cert && nome && curso;

  return (
    <div className="tema-laudo secao-laudo secao-laudo--papel" style={{ borderTop: 0, minHeight: '60vh' }}>
      <div className="miolo max-w-2xl">
        {temDados ? (
          <section aria-labelledby="validar-titulo">
            <h1 id="validar-titulo" className="text-3xl sm:text-4xl text-tinta">
              Dados do certificado
            </h1>
            <p className="mt-3 text-aco-escuro leading-relaxed">
              Estes são os dados que constam no link do certificado. Para confirmar que ele foi emitido pela Simon
              Climatização, fale com a equipe pelo contato abaixo.
            </p>

            <dl className="mt-8 divide-y divide-filete border-y border-filete bg-laudo px-5">
              <div className="py-4">
                <dt className="text-sm text-aco-escuro">Emitido para</dt>
                <dd className="mt-0.5 text-lg font-semibold text-tinta">{nome}</dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-aco-escuro">Treinamento</dt>
                <dd className="mt-0.5 text-lg font-semibold text-tinta">{curso}</dd>
              </div>
              {data && (
                <div className="py-4">
                  <dt className="text-sm text-aco-escuro">Data de conclusão</dt>
                  <dd className="mt-0.5 text-lg font-semibold text-tinta">{data}</dd>
                </div>
              )}
              <div className="py-4">
                <dt className="text-sm text-aco-escuro">Número do certificado</dt>
                <dd className="valor-medido mt-0.5 text-lg font-semibold text-tinta">{cert}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center rounded-md bg-refrigerante-escuro hover:bg-tinta text-white font-semibold px-5 py-3 transition-colors"
              >
                Confirmar com a Simon
              </Link>
              <Link
                to="/"
                className="inline-flex items-center rounded-md border border-aco-escuro/50 text-tinta hover:bg-laudo font-semibold px-5 py-3 transition-colors"
              >
                Ir para o site
              </Link>
            </div>
          </section>
        ) : (
          <section aria-labelledby="validar-titulo">
            <h1 id="validar-titulo" className="text-3xl sm:text-4xl text-tinta">
              Conferir um certificado
            </h1>
            <p className="mt-3 text-aco-escuro leading-relaxed" role="status">
              O link está incompleto ou foi copiado com erro. Para conferir um certificado, escaneie o QR Code impresso
              no próprio documento ou abra o link completo.
            </p>
            <p className="mt-3 text-aco-escuro leading-relaxed">
              Se você tem um certificado emitido pela Simon Climatização e a conferência não funciona, fale com a equipe.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center rounded-md bg-refrigerante-escuro hover:bg-tinta text-white font-semibold px-5 py-3 transition-colors"
              >
                Falar com a Simon
              </Link>
              <Link
                to="/"
                className="inline-flex items-center rounded-md border border-aco-escuro/50 text-tinta hover:bg-laudo font-semibold px-5 py-3 transition-colors"
              >
                Ir para o site
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
