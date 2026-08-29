'use client';

/* eslint-disable @next/next/no-img-element */

import { useRef } from 'react';

const sectionLinks = [
  ['Inicio', '#inicio'],
  ['Programa', '#programas'],
  ['Cómo formamos', '#metodologia'],
  ['Contenido', '#cronograma'],
  ['PRL y FUNDAE', '#fundae'],
  ['Guías ERC y AESP-RCP', '#recursos'],
  ['Asistente RCP', '#app'],
  ['Preguntas', '#preguntas'],
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export default function MobileMenu({
  contactHref,
}: {
  contactHref: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => dialogRef.current?.close();

  return (
    <>
      <button
        ref={triggerRef}
        className="mobile-menu-trigger"
        type="button"
        aria-label="Abrir el menú de la página"
        aria-controls="mobile-navigation"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
      >
        <MenuIcon />
        <span>Menú</span>
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        className="mobile-menu-dialog"
        aria-labelledby="mobile-menu-title"
        onClose={() => triggerRef.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="mobile-menu-panel">
          <div className="mobile-menu-heading">
            <a href="#inicio" onClick={closeMenu} aria-label="Ir al inicio">
              <span className="mobile-menu-logo">
                <img src="/logo-reanima.png" alt="" width="54" height="54" />
              </span>
              <span>
                Proyecto <strong id="mobile-menu-title">Reanima+ Vida</strong>
              </span>
            </a>
            <button type="button" aria-label="Cerrar el menú" onClick={closeMenu} autoFocus>
              <CloseIcon />
            </button>
          </div>

          <p className="mobile-menu-kicker">Explorar la página</p>
          <nav aria-label="Secciones de la página">
            {sectionLinks.map(([label, href], index) => (
              <a
                className={href === '#app' ? 'mobile-menu-app-link' : undefined}
                href={href}
                onClick={closeMenu}
                key={href}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{label}</strong>
              </a>
            ))}
          </nav>

          <a className="mobile-menu-contact" href={contactHref} onClick={closeMenu}>
            Solicitar una propuesta
          </a>
        </div>
      </dialog>
    </>
  );
}
