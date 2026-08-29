/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import { contactEmail } from './site-config';

type CourseStat = {
  label: string;
  value: string;
};

type CourseModule = {
  number: string;
  title: string;
  description: string;
};

type CourseDetailProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  stats: CourseStat[];
  sectionTitle: string;
  sectionIntro: string;
  modules: CourseModule[];
  included: string[];
  certification: string;
  note?: string;
  accent?: 'aqua' | 'red';
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 3.5 3.5L16 5" />
    </svg>
  );
}

export default function CourseDetail({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  stats,
  sectionTitle,
  sectionIntro,
  modules,
  included,
  certification,
  note,
  accent = 'aqua',
}: CourseDetailProps) {
  return (
    <main className={`course-page course-page-${accent}`}>
      <header className="course-site-header">
        <a className="course-brand" href="/" aria-label="Ir al inicio de Proyecto Reanima más Vida">
          <span><img src="/logo-reanima.png" alt="" width="52" height="52" /></span>
          <span>Proyecto <strong>Reanima+ Vida</strong></span>
        </a>
        <nav aria-label="Navegación del curso">
          <a href="/">Inicio</a>
          <a href="/#programas">Programas</a>
          <a href="/#recursos">Guías ERC</a>
        </nav>
        <a className="button button-small" href="/#contacto">Solicitar una propuesta</a>
      </header>

      <section className="course-hero">
        <div className="shell course-hero-grid">
          <div className="course-hero-copy">
            <a className="course-back" href="/">← Formación para empresas</a>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="course-lead">{intro}</p>
            <dl className="course-stats">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="course-hero-media">
            <img src={image} alt={imageAlt} width="1800" height="850" />
            <span>Práctica guiada · escenarios · evaluación</span>
          </div>
        </div>
      </section>

      <section className="course-content shell">
        <div className="course-main-copy">
          <p className="eyebrow">Contenido del curso</p>
          <h2>{sectionTitle}</h2>
          <p className="course-section-intro">{sectionIntro}</p>
          <ol className="course-module-grid">
            {modules.map((module) => (
              <li key={module.number}>
                <span>{module.number}</span>
                <div>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="course-summary" aria-label="Resumen de la formación">
          <span className="course-summary-kicker">Incluido en cada edición</span>
          <ul>
            {included.map((item) => (
              <li key={item}><CheckIcon /> {item}</li>
            ))}
          </ul>
          <div className="course-certification">
            <span>Documentación y acreditación</span>
            <strong>{certification}</strong>
          </div>
          {note && <p className="course-note">{note}</p>}
          <a className="button" href="/#contacto">Pedir información</a>
        </aside>
      </section>

      <section className="course-closing">
        <div className="shell course-closing-inner">
          <div>
            <p className="eyebrow">Organización flexible</p>
            <h2>La formación se adapta al centro, los turnos y el equipo.</h2>
          </div>
          <div>
            <p>Cuéntanos el número de participantes y las necesidades del centro. Prepararemos una propuesta sin publicar tarifas cerradas.</p>
            <a className="contact-email" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </div>
        </div>
      </section>

      <footer className="course-footer">
        <div className="shell">
          <span>© 2026 Proyecto Reanima+ Vida</span>
          <a href="/privacidad">Privacidad</a>
        </div>
      </footer>
    </main>
  );
}
