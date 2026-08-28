/* eslint-disable @next/next/no-img-element */

import MobileMenu from './mobile-menu';

const email = 'proyectoreanimavida@gmail.com';
const contactHref =
  'mailto:proyectoreanimavida@gmail.com?subject=Formaci%C3%B3n%20en%20emergencias%20para%20mi%20empresa&body=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20los%20programas%20de%20formaci%C3%B3n.';
const appHref = 'https://dgutim.github.io/proyectoreanimavida/';
const aespHref = 'https://aesp-rcp.es/';
const aespGuidesHref = 'https://aesp-rcp.es/index.php/guias2025/guias-erc-2025-en-castellano/';
const blsGuidelineHref =
  'https://aesp-rcp.es/Documentos_web_AESP/Guias_ERC_2025/ERC_Guidelines_BLS_2025%20ESP.pdf';
const firstAidGuidelineHref =
  'https://aesp-rcp.es/Documentos_web_AESP/Guias_ERC_2025/ERC%20Guidelines%202025%20First%20Aid%20ESP.pdf';

const blsSchedule = [
  ['00:00–00:20', 'Reconocer y activar', 'Seguridad, respuesta, respiración anormal, 112 y petición del DEA.'],
  ['00:20–01:10', 'RCP de calidad', 'Compresiones, ventilaciones 30:2, rotaciones y retroalimentación.'],
  ['01:10–01:40', 'DEA Trainer', 'Electrodos, mensajes, seguridad y mínima interrupción de la RCP.'],
  ['01:40–02:40', 'Práctica integrada', 'Coordinación de dos intervinientes, relevos y reparto de funciones.'],
  ['02:40–03:35', 'Escenarios', 'Casos simulados, toma de decisiones, repetición y debriefing.'],
  ['03:35–04:00', 'Evaluación', 'Comprobación final de destrezas y cierre del curso.'],
];

const firstAidSchedule = [
  ['00:00–00:20', 'Valoración inicial', 'Autoprotección, 112, inconsciencia, síncope y posición lateral.'],
  ['00:20–00:40', 'Atragantamiento', 'Reconocimiento y práctica ante obstrucción de la vía aérea.'],
  ['00:40–01:00', 'Hemorragia grave', 'Presión directa, signos de alarma y escalada de ayuda.'],
  ['01:00–01:20', 'Quemaduras y exposición', 'Enfriamiento e irrigación ante exposición química u ocular.'],
  ['01:20–01:40', 'Convulsiones y anafilaxia', 'Protección, gravedad, hipoglucemia y activación precoz.'],
  ['01:40–02:00', 'Ictus y dolor torácico', 'Reconocimiento, llamada inmediata y escenario integrado.'],
];

const benefits = [
  ['01', 'Reconocer antes', 'Identificar con rapidez una parada y otras emergencias tiempo-dependientes.'],
  ['02', 'Actuar con seguridad', 'Iniciar la atención y seguir una secuencia clara hasta la llegada de ayuda.'],
  ['03', 'Utilizar un DEA', 'Perder el miedo al desfibrilador externo automático y usarlo con seguridad.'],
  ['04', 'Coordinar al equipo', 'Activar el 112, repartir funciones y reducir las interrupciones de la RCP.'],
  ['05', 'Resolver escenarios', 'Practicar situaciones realistas de oficina, planta, almacén o laboratorio.'],
  ['06', 'Generar evidencias', 'Recibir evaluación, registro de asistencia, documentación final y cuestionario de satisfacción.'],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 3.5 3.5L16 5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`brand-mark ${className}`}>
      <img src="/logo-reanima.png" alt="" width="58" height="58" />
    </span>
  );
}

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Proyecto Reanima+ Vida',
    email,
    description:
      'Formación práctica de Soporte Vital Básico, uso del DEA y Primeros Auxilios para empresas.',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Proyecto Reanima más Vida">
          <Logo />
          <span>
            Proyecto <strong>Reanima+ Vida</strong>
          </span>
        </a>
        <nav className="desktop-navigation" aria-label="Navegación principal">
          <a href="#programas">Programas</a>
          <a href="#metodologia">Metodología</a>
          <a href="#cronograma">Cronograma</a>
          <a href="#recursos">Recursos</a>
        </nav>
        <a className="button button-small" href={contactHref}>
          Solicitar una propuesta
        </a>
      </header>

      <MobileMenu contactHref={contactHref} />

      <section className="hero" id="inicio">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-content shell">
          <div className="hero-copy">
            <div className="hero-accreditation">
              <span className="hero-accreditation-tag" aria-hidden="true">ERC</span>
              <span>
                <strong>Incluye curso BLS acreditado por el ERC</strong>
                <small>La acreditación corresponde al bloque de 4 h de SVB y DEA</small>
              </span>
            </div>
            <p className="eyebrow">Formación práctica para empresas</p>
            <h1>
              Respuesta inmediata ante emergencias.
              <span> Preparación que se nota.</span>
            </h1>
            <p className="hero-lead">
              Nuestro programa integral combina el curso oficial de Soporte Vital
              Básico (BLS) y uso del desfibrilador externo automático (DEA), con
              acreditación del Consejo Europeo de Resucitación (ERC), y un módulo
              empresarial independiente de Primeros Auxilios. Seis horas de práctica,
              escenarios realistas y decisiones que el equipo podrá aplicar.
            </p>
            <div className="hero-actions">
              <a className="button" href="#programas">
                Conocer el programa integral <ArrowIcon />
              </a>
              <a className="text-link" href="#cronograma">
                Ver qué se aprende
              </a>
            </div>
            <ul className="proof-list" aria-label="Características principales">
              <li><CheckIcon /> Grupos reducidos</li>
              <li><CheckIcon /> Maniquíes y DEA Trainer</li>
              <li><CheckIcon /> Escenarios de empresa</li>
            </ul>
          </div>
          <div className="hero-visual">
            <img
              src="/hero-svb.jpg"
              alt="Maniquí de entrenamiento para prácticas de reanimación cardiopulmonar"
              width="1800"
              height="850"
              loading="eager"
              fetchPriority="high"
            />
            <div className="hero-card hero-card-top">
              <span className="pulse-dot" />
              <div><strong>Aprendizaje práctico</strong><small>Demostrar · practicar · evaluar</small></div>
            </div>
            <div className="hero-card hero-card-bottom">
              <strong>6 h</strong>
              <span>Programa integral: SVB/DEA ERC + Primeros Auxilios</span>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-facts" aria-label="Datos esenciales">
        <div className="shell fact-grid">
          <div><strong>6 h</strong><span>SVB ERC + Primeros Auxilios</span></div>
          <div><strong>4 h</strong><span>SVB y DEA · ERC</span></div>
          <div><strong>≤ 8</strong><span>participantes por instructor</span></div>
          <div><strong>In company</strong><span>en vuestro centro de trabajo</span></div>
        </div>
      </section>

      <section className="programs shell" id="programas">
        <div className="section-intro">
          <p className="eyebrow">Una propuesta integral y una opción esencial</p>
          <h2>Mucho más que aprender a hacer una RCP</h2>
          <p>
            Recomendamos preparar al equipo para la parada cardiaca y también para
            las emergencias que aparecen con más frecuencia en el trabajo. Cuando
            el alcance de la empresa sea más concreto, puede contratarse únicamente
            el curso oficial de SVB y DEA.
          </p>
        </div>
        <div className="program-grid">
          <article className="program-card erc-card featured-card" id="programa-integral">
            <div className="program-brand-row">
              <span className="card-label">Programa recomendado</span>
              <img className="erc-logo" src="/logo-erc.png" alt="European Resuscitation Council" width="316" height="155" />
            </div>
            <h3>Respuesta Inmediata ante Emergencias</h3>
            <p className="duration"><strong>6 horas</strong><span>4 h SVB/DEA ERC + 2 h Primeros Auxilios</span></p>
            <p>
              El itinerario oficial de SVB y DEA, más un módulo empresarial de
              Primeros Auxilios y escenarios adaptados al entorno de trabajo.
            </p>
            <ul className="mini-list">
              <li><CheckIcon /> RCP de calidad, DEA Trainer y coordinación del equipo</li>
              <li><CheckIcon /> Atragantamiento, hemorragia grave, quemaduras y anafilaxia</li>
              <li><CheckIcon /> Convulsiones, ictus, dolor torácico y escenarios prácticos</li>
              <li><CheckIcon /> Certificado oficial ERC BLS y documentación separada del módulo empresarial</li>
            </ul>
            <a className="card-link" href="#cronograma">Ver el cronograma completo <ArrowIcon /></a>
          </article>

          <article className="program-card essential-card">
            <div className="program-brand-row">
              <span className="card-label">Curso esencial</span>
              <img className="erc-logo" src="/logo-erc.png" alt="European Resuscitation Council" width="316" height="155" />
            </div>
            <h3>Basic Life Support Provider · SVB y DEA</h3>
            <p className="duration"><strong>4 horas</strong><span>Práctica presencial</span></p>
            <p>
              Soporte Vital Básico y uso del desfibrilador externo automático,
              acreditado por el Consejo Europeo de Resucitación (ERC).
            </p>
            <ul className="mini-list">
              <li><CheckIcon /> Reconocimiento, alerta al 112 y cadena de supervivencia</li>
              <li><CheckIcon /> RCP de calidad y trabajo en pareja</li>
              <li><CheckIcon /> DEA Trainer, escenarios, evaluación y certificado ERC BLS</li>
            </ul>
            <a className="card-link" href="#cronograma">Ver el itinerario de SVB <ArrowIcon /></a>
          </article>
        </div>
        <p className="cert-note">
          La acreditación oficial ERC corresponde exclusivamente al curso Basic Life
          Support (BLS) de 4 horas presenciales. El módulo empresarial de Primeros
          Auxilios añade 2 horas y se documenta por separado, sin acreditación ERC.
        </p>
      </section>

      <section className="experience" id="metodologia">
        <div className="experience-grid shell">
          <div className="experience-media">
            <img
              src="/formacion-practica.jpg"
              alt="Participantes practicando reanimación y uso de un desfibrilador de entrenamiento"
              width="1800"
              height="820"
              loading="eager"
            />
            <div className="media-badge"><strong>Práctica real</strong><span>sin improvisar el día de la emergencia</span></div>
          </div>
          <div className="experience-copy">
            <p className="eyebrow">Una metodología para recordar y actuar</p>
            <h2>Menos diapositivas. Más manos, decisiones y escenarios.</h2>
            <p>
              Cada destreza se explica de forma breve, se demuestra y se practica
              con retroalimentación. El grupo integra después la secuencia completa
              en situaciones de oficina, planta, almacén o laboratorio.
            </p>
            <ol className="method-steps">
              <li><span>01</span><div><strong>Demostración</strong><small>El instructor muestra la secuencia y los puntos críticos.</small></div></li>
              <li><span>02</span><div><strong>Práctica guiada</strong><small>Todos participan con maniquíes y DEA Trainer.</small></div></li>
              <li><span>03</span><div><strong>Escenario y debriefing</strong><small>El equipo decide, actúa, analiza y repite.</small></div></li>
              <li><span>04</span><div><strong>Evaluación y cierre</strong><small>Destrezas, asistencia, satisfacción y documentación final.</small></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="outcomes shell" id="resultados">
        <div className="center-intro">
          <p className="eyebrow">Qué cambia después del curso</p>
          <h2>Un equipo más preparado para los minutos que importan</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map(([number, title, description]) => (
            <article className="benefit-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="schedule-section" id="cronograma">
        <div className="shell">
          <div className="schedule-heading">
            <div>
              <p className="eyebrow">Contenido visible desde el principio</p>
              <h2>Un cronograma claro, práctico y medible</h2>
            </div>
            <p>
              La propuesta final se ajusta a la realidad del centro, pero el núcleo
              práctico mantiene una secuencia progresiva y una evaluación final.
            </p>
          </div>
          <div className="schedule-grid">
            <article className="schedule-card schedule-bls">
              <header>
                <div><span>Itinerario oficial</span><h3>SVB y DEA · ERC</h3></div>
                <strong>4 h</strong>
              </header>
              <ol>
                {blsSchedule.map(([time, title, description]) => (
                  <li key={time}><time>{time}</time><div><strong>{title}</strong><span>{description}</span></div></li>
                ))}
              </ol>
            </article>
            <article className="schedule-card schedule-pa">
              <header>
                <div><span>Módulo empresarial</span><h3>Primeros Auxilios</h3></div>
                <strong>2 h</strong>
              </header>
              <ol>
                {firstAidSchedule.map(([time, title, description]) => (
                  <li key={time}><time>{time}</time><div><strong>{title}</strong><span>{description}</span></div></li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </section>

      <section className="prevention" id="fundae">
        <div className="shell prevention-grid">
          <article className="prevention-card prl-card">
            <span className="card-kicker">Prevención y emergencias</span>
            <h2>Una formación útil dentro del sistema preventivo de la empresa</h2>
            <p>
              El programa puede integrarse en la preparación ante emergencias del
              centro y complementar su plan de emergencias, la organización de
              Primeros Auxilios y la capacitación de las personas designadas.
            </p>
            <p className="small-print">
              No sustituye la evaluación de riesgos, los protocolos propios ni la
              formación específica que requiera cada puesto.
            </p>
          </article>
          <article className="prevention-card fundae-card">
            <span className="card-kicker">Formación programada por las empresas</span>
            <h2>Potencialmente bonificable mediante FUNDAE</h2>
            <p>
              La acción puede gestionarse dentro de la formación programada por la
              empresa cuando exista crédito disponible y se cumplan los requisitos
              administrativos, de comunicación, impartición y justificación aplicables.
            </p>
            <p className="small-print">
              La bonificación no es automática ni garantizada: corresponde a la
              empresa o a su entidad organizadora comprobar y tramitar cada edición.
            </p>
          </article>
        </div>
      </section>

      <section className="resources-section" id="recursos">
        <div className="shell resources-grid">
          <article className="aesp-panel">
            <div className="aesp-logo-wrap">
              <img
                src="/logo-aesp-rcp.png"
                alt="AESP-RCP"
                width="620"
                height="548"
                loading="lazy"
              />
            </div>
            <div>
              <p className="eyebrow">Conexión con el ecosistema nacional de RCP</p>
              <h2>En contacto con AESP‑RCP</h2>
              <p>
                Mantenemos contacto profesional directo con la Asociación Española
                para la Promoción de la RCP (AESP‑RCP), el Consejo Nacional que
                representa al European Resuscitation Council en España.
              </p>
              <a className="resource-text-link" href={aespHref} target="_blank" rel="noreferrer">
                Conocer AESP‑RCP <ArrowIcon />
              </a>
              <p className="relationship-note">
                Esta mención describe un contacto profesional y no implica convenio,
                patrocinio ni aval institucional.
              </p>
            </div>
          </article>

          <article className="guides-panel">
            <span className="card-kicker">Recursos abiertos</span>
            <h2>Guías ERC 2025 en castellano</h2>
            <p>
              Consulta las recomendaciones oficiales traducidas y publicadas por
              AESP‑RCP. Los documentos se abren en su fuente original y son de acceso
              gratuito.
            </p>
            <div className="guide-links">
              <a href={blsGuidelineHref} target="_blank" rel="noreferrer">
                <span><small>Guía oficial 2025</small><strong>Soporte Vital Básico</strong></span>
                <ArrowIcon />
              </a>
              <a href={firstAidGuidelineHref} target="_blank" rel="noreferrer">
                <span><small>Guía oficial 2025</small><strong>Primeros Auxilios</strong></span>
                <ArrowIcon />
              </a>
            </div>
            <a className="all-guides-link" href={aespGuidesHref} target="_blank" rel="noreferrer">
              Ver todas las Guías ERC 2025 en castellano
            </a>
          </article>

          <article className="continuity-panel">
            <div className="continuity-copy">
              <p className="eyebrow">Después del curso</p>
              <h2>Material para mantener la respuesta visible en el centro</h2>
              <p>
                Podemos complementar cada edición con recursos de consulta adaptados
                al entorno y revisados antes de su entrega.
              </p>
            </div>
            <div className="continuity-items">
              <div>
                <span>01</span>
                <strong>Manual digital de repaso</strong>
                <small>Secuencia SVB/DEA, atragantamiento y recordatorios esenciales.</small>
              </div>
              <div>
                <span>02</span>
                <strong>Cartel para el espacio cardioprotegido</strong>
                <small>Algoritmo visual para colocar junto al desfibrilador del centro.</small>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="app-section" id="app">
        <div className="shell app-panel">
          <div className="app-copy">
            <p className="eyebrow">La formación continúa</p>
            <h2>Una herramienta digital para repasar la secuencia de actuación</h2>
            <p>
              Nuestra aplicación de reanimación permite familiarizarse con los pasos
              esenciales y mantener el algoritmo presente después del curso.
            </p>
            <a className="button button-light" href={appHref} target="_blank" rel="noreferrer">
              Abrir la app de reanimación <ArrowIcon />
            </a>
            <p className="safety-note">
              Herramienta educativa complementaria. Ante una emergencia real, llama al
              112 y sigue las indicaciones del centro coordinador y del DEA.
            </p>
          </div>
          <div className="phone" aria-label="Vista ilustrativa de la aplicación">
            <div className="phone-speaker" />
            <div className="phone-screen">
              <Logo className="phone-logo" />
              <span className="phone-label">Guía de actuación</span>
              <h3>Comprueba la respuesta y la respiración</h3>
              <div className="phone-pulse" aria-hidden="true"><span /><span /><span /><span /><span /></div>
              <div className="phone-button">Continuar</div>
              <small>En una emergencia: 112</small>
            </div>
          </div>
        </div>
      </section>

      <section className="faq shell" id="preguntas">
        <div className="faq-heading">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2>Lo esencial antes de organizar una edición</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>¿Cuántas personas participan en cada grupo?</summary>
            <p>Trabajamos con un máximo de 8 participantes por instructor para asegurar tiempo real de práctica y retroalimentación.</p>
          </details>
          <details>
            <summary>¿Se puede impartir en nuestras instalaciones?</summary>
            <p>Sí. Adaptamos la logística a la sede, el turno y el espacio disponible, siempre que permita practicar de forma segura.</p>
          </details>
          <details>
            <summary>¿Qué acreditación recibe el participante?</summary>
            <p>El curso BLS de 4 horas presenciales incluye certificado oficial ERC. El módulo empresarial de Primeros Auxilios añade 2 horas, se documenta por separado y no forma parte de la acreditación ERC.</p>
          </details>
          <details>
            <summary>¿La formación se puede bonificar con FUNDAE?</summary>
            <p>Puede ser potencialmente bonificable si la empresa dispone de crédito y cumple los requisitos aplicables. La tramitación corresponde a la empresa o a su entidad organizadora.</p>
          </details>
        </div>
      </section>

      <section className="final-cta" id="contacto">
        <div className="shell final-cta-inner">
          <Logo className="cta-logo" />
          <div>
            <p className="eyebrow">Hablemos de vuestro equipo</p>
            <h2>Diseñamos la formación alrededor de la empresa, no al revés.</h2>
          </div>
          <a className="button" href={contactHref}><MailIcon /> Solicitar una propuesta</a>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <a className="brand footer-brand" href="#inicio">
            <Logo />
            <span>Proyecto <strong>Reanima+ Vida</strong></span>
          </a>
          <p>Formación práctica en respuesta ante emergencias para empresas.</p>
          <a className="footer-mail" href={`mailto:${email}`}>{email}</a>
        </div>
      </footer>

    </main>
  );
}
