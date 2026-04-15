import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import fundoCertificado from '../assets/fundo-certificado.png';
import logoPng from '../assets/logo.png';
import assinaturaMarcia from '../assets/assinatura-marcia.png';
import assinaturaSimon from '../assets/assinatura-simon.png';

/**
 * CertificateTemplate — Renders a full A4-landscape certificate.
 *
 * Passed to html2canvas for pixel-perfect PDF capture.
 * Must use inline styles for reliable cross-browser rendering
 * via html2canvas (Tailwind classes are fine for layout but
 * critical visual properties are inline for capture fidelity).
 *
 * @param {string}  nomeAluno          - Full name of the student
 * @param {string}  nomeCurso          - Course title
 * @param {string}  cargaHoraria       - e.g. "40h"
 * @param {string}  dataRealizacao     - e.g. "15/04/2026"
 * @param {string}  numeroCertificado  - e.g. "SC-01234"
 */
const CertificateTemplate = React.forwardRef(function CertificateTemplate(
  { nomeAluno, nomeCurso, cargaHoraria, dataRealizacao, numeroCertificado },
  ref
) {
  // Build the stateless validation URL
  const validationUrl = `https://simonclimatiza.com.br/validar?cert=${encodeURIComponent(
    numeroCertificado
  )}&nome=${encodeURIComponent(nomeAluno)}&curso=${encodeURIComponent(
    nomeCurso
  )}&data=${encodeURIComponent(dataRealizacao)}`;

  return (
    <div
      ref={ref}
      id="certificate-root"
      style={{
        width: '1123px',
        height: '794px',
        backgroundImage: `url(${fundoCertificado})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        overflow: 'hidden',
      }}
    >
      {/* ── Logo ── */}
      <div
        style={{
          position: 'absolute',
          top: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}
      >
        <img
          src={logoPng}
          alt="Logo Simon Climatização"
          style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
          crossOrigin="anonymous"
        />
      </div>

      {/* ── Title ── */}
      <div
        style={{
          position: 'absolute',
          top: '148px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '36px',
            fontWeight: 700,
            color: '#1a3a5c',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Certificado de Conclusão
        </h1>
      </div>

      {/* ── "Certificamos que" ── */}
      <div
        style={{
          position: 'absolute',
          top: '220px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <p
          style={{
            fontSize: '15px',
            color: '#475569',
            margin: 0,
            letterSpacing: '1px',
          }}
        >
          Certificamos que
        </p>
      </div>

      {/* ── Student Name (handwriting font) ── */}
      {/* ⚡ BLINDAGEM 6: Expanded bounding box for Great Vibes cursive.
          html2canvas clips ascenders/descenders if the CSS box is too tight.
          - generous padding (24px vertical, 16px horizontal)
          - overflow: visible (never clip glyph extremities)
          - lineHeight: 1.5 (internal breathing room)
          - top shifted up from 250→226px to compensate for added padding */}
      <div
        style={{
          position: 'absolute',
          top: '226px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          width: '90%',
          overflow: 'visible',
        }}
      >
        <p
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: '52px',
            color: '#0c4a6e',
            margin: 0,
            padding: '24px 16px',
            lineHeight: 1.5,
            overflow: 'visible',
            whiteSpace: 'nowrap',
          }}
        >
          {nomeAluno || 'Nome do Aluno'}
        </p>
      </div>

      {/* ── "concluiu com êxito..." ── */}
      <div
        style={{
          position: 'absolute',
          top: '330px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          width: '80%',
        }}
      >
        <p
          style={{
            fontSize: '14px',
            color: '#475569',
            margin: '0 0 8px 0',
            letterSpacing: '0.5px',
          }}
        >
          concluiu com êxito o treinamento
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '22px',
            fontWeight: 700,
            color: '#0369a1',
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {nomeCurso || 'Nome do Curso'}
        </p>
      </div>

      {/* ── Description text ── */}
      <div
        style={{
          position: 'absolute',
          top: '410px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          width: '70%',
        }}
      >
        <p
          style={{
            fontSize: '13px',
            color: '#64748b',
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          Demonstrando conhecimento teórico e prático em climatização e
          refrigeração, atendendo aos padrões técnicos exigidos pela Simon
          Climatização e Refrigeração.
        </p>
      </div>

      {/* ── Date & Hours ── */}
      <div
        style={{
          position: 'absolute',
          top: '480px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          display: 'flex',
          gap: '60px',
          justifyContent: 'center',
        }}
      >
        <p style={{ fontSize: '13px', color: '#334155', margin: 0 }}>
          <strong>Realizado em:</strong>{' '}
          <span style={{ color: '#0c4a6e' }}>
            {dataRealizacao || '—'}
          </span>
        </p>
        <p style={{ fontSize: '13px', color: '#334155', margin: 0 }}>
          <strong>Carga Horária:</strong>{' '}
          <span style={{ color: '#0c4a6e' }}>
            {cargaHoraria || '—'}
          </span>
        </p>
      </div>

      {/* ── Signatures ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '130px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '120px',
          justifyContent: 'center',
          width: '80%',
        }}
      >
        {/* Signature 1 — Marcia */}
        <div style={{ textAlign: 'center', flex: '1', position: 'relative' }}>
          <img
            src={assinaturaMarcia}
            alt="Assinatura Marcia Souza"
            crossOrigin="anonymous"
            style={{
              width: '160px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto -10px auto',
              position: 'relative',
              zIndex: 2,
            }}
          />
          <div
            style={{
              width: '200px',
              borderBottom: '1.5px solid #94a3b8',
              margin: '0 auto 8px auto',
              position: 'relative',
              zIndex: 1,
            }}
          />
          <p
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#1e293b',
              margin: '0 0 2px 0',
            }}
          >
            Marcia Souza
          </p>
          <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>
            Diretora
          </p>
        </div>

        {/* Signature 2 — Simon */}
        <div style={{ textAlign: 'center', flex: '1', position: 'relative' }}>
          <img
            src={assinaturaSimon}
            alt="Assinatura Simon Souza"
            crossOrigin="anonymous"
            style={{
              width: '160px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto -10px auto',
              position: 'relative',
              zIndex: 2,
            }}
          />
          <div
            style={{
              width: '200px',
              borderBottom: '1.5px solid #94a3b8',
              margin: '0 auto 8px auto',
              position: 'relative',
              zIndex: 1,
            }}
          />
          <p
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#1e293b',
              margin: '0 0 2px 0',
            }}
          >
            Simon Souza
          </p>
          <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>
            Instrutor Técnico
          </p>
        </div>
      </div>

      {/* ── Footer: Certificate number + QR Code ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '60px',
          right: '60px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: cert info */}
        <div>
          <p
            style={{
              fontSize: '10px',
              color: '#94a3b8',
              margin: '0 0 3px 0',
              fontWeight: 600,
            }}
          >
            Nº {numeroCertificado || 'SC-00000'}
          </p>
          <p
            style={{
              fontSize: '9px',
              color: '#94a3b8',
              margin: 0,
              maxWidth: '320px',
              lineHeight: 1.4,
            }}
          >
            Validação: simonclimatiza.com.br/validar
          </p>
        </div>

        {/* Right: QR Code */}
        <div
          style={{
            background: '#ffffff',
            padding: '6px',
            borderRadius: '6px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
          }}
        >
          <QRCodeSVG
            value={validationUrl}
            size={72}
            level="M"
            bgColor="#ffffff"
            fgColor="#0c4a6e"
            includeMargin={false}
          />
        </div>
      </div>
    </div>
  );
});

export default CertificateTemplate;
