import type { Metadata } from 'next';
import CourseDetail from '../course-detail';
import { siteUrl } from '../site-config';

const title = 'Primeros Auxilios para emergencias en la empresa';
const description = 'Módulo práctico de 2 horas para responder ante atragantamiento, hemorragia, quemaduras, convulsiones, anafilaxia, ictus y dolor torácico.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/primeros-auxilios-empresas' },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/primeros-auxilios-empresas`,
    title,
    description,
    images: [{ url: `${siteUrl}/formacion-practica.jpg`, width: 1800, height: 820, alt: 'Formación práctica ante emergencias en la empresa' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`${siteUrl}/formacion-practica.jpg`] },
};

export default function FirstAidPage() {
  return (
    <CourseDetail
      eyebrow="Módulo empresarial de Primeros Auxilios"
      title="Primeros Auxilios para las emergencias que pueden ocurrir en el trabajo"
      intro="Dos horas centradas en reconocer, priorizar y actuar ante situaciones frecuentes y tiempo-dependientes, con prácticas y escenarios adaptados a oficina, planta, almacén o laboratorio."
      image="/formacion-practica.jpg"
      imageAlt="Participantes practicando una respuesta ante una emergencia simulada"
      stats={[
        { label: 'Duración', value: '2 horas presenciales' },
        { label: 'Formato', value: 'Módulo empresarial' },
        { label: 'Metodología', value: 'Práctica y escenarios' },
      ]}
      sectionTitle="Una secuencia clara para las emergencias más relevantes del entorno laboral"
      sectionIntro="El contenido puede ajustarse a los riesgos y recursos del centro, manteniendo una estructura común de autoprotección, valoración inicial, activación del 112 y actuación segura."
      modules={[
        { number: '01', title: 'Valoración inicial', description: 'Autoprotección, consciencia, respiración, síncope y posición lateral de seguridad.' },
        { number: '02', title: 'Atragantamiento', description: 'Reconocimiento y actuación práctica ante obstrucción de la vía aérea.' },
        { number: '03', title: 'Hemorragia grave', description: 'Presión directa, signos de alarma y escalada precoz de ayuda.' },
        { number: '04', title: 'Quemaduras y exposición', description: 'Enfriamiento e irrigación ante exposición térmica, química u ocular.' },
        { number: '05', title: 'Convulsiones y anafilaxia', description: 'Protección, reconocimiento de gravedad, hipoglucemia y activación del 112.' },
        { number: '06', title: 'Ictus y dolor torácico', description: 'Reconocimiento rápido, llamada inmediata y escenario integrado.' },
      ]}
      included={[
        'Selección de escenarios del entorno de trabajo',
        'Material de simulación y práctica guiada',
        'Toma de decisiones y debriefing',
        'Registro de asistencia y cuestionario de satisfacción',
      ]}
      certification="Documentación propia del módulo empresarial"
      note="Este módulo es independiente y no forma parte de la acreditación ERC BLS."
      accent="red"
    />
  );
}
