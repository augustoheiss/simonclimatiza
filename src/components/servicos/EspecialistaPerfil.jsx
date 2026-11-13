import React from 'react';
import { SIMON_PROFILE } from '../../data/instagramSimonArchive';

// Perfil do responsável técnico. Só usa fatos do acervo (bio, anos de campo, instrumentos).
export default function EspecialistaPerfil() {
  return (
    <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12 items-start">
      <img
        src={SIMON_PROFILE.avatarUrl}
        alt={`Foto de perfil de ${SIMON_PROFILE.name}`}
        width="160"
        height="160"
        loading="lazy"
        className="h-32 w-32 sm:h-40 sm:w-40 rounded-md object-cover border border-filete"
      />

      <div>
        <p className="font-serif-laudo text-2xl font-semibold text-tinta">{SIMON_PROFILE.summaryHeadline}</p>
        <p className="texto-corrido mt-3 text-aco-escuro leading-relaxed">{SIMON_PROFILE.summaryText}</p>

        <p className="mt-6 font-semibold text-tinta">Anos de experiência em campo</p>
        <p className="valor-medido text-3xl font-semibold text-refrigerante-escuro">{SIMON_PROFILE.yearsExperience}</p>

        {SIMON_PROFILE.instrumentsUsed?.length > 0 && (
          <>
            <p className="mt-6 font-semibold text-tinta">Instrumentos e softwares usados no campo</p>
            <ul className="mt-2 grid gap-x-8 gap-y-1 sm:grid-cols-2 text-aco-escuro">
              {SIMON_PROFILE.instrumentsUsed.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-refrigerante-escuro" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        <a
          href={SIMON_PROFILE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-semibold text-refrigerante-escuro hover:text-tinta underline underline-offset-4"
        >
          Ver o perfil {SIMON_PROFILE.handle} no Instagram
        </a>
      </div>
    </div>
  );
}
