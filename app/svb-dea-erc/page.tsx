import type { Metadata } from 'next';
import CourseDetail from '../course-detail';
import { siteUrl } from '../site-config';

const title = 'Curso oficial ERC de Soporte Vital Básico y DEA';
const description = 'Formación presencial de 4 horas en SVB, RCP de calidad y uso seguro del DEA, con evaluación y certificado oficial ERC BLS.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/svb-dea-erc' },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/svb-dea-erc`,
    title,
    description,
    images: [{ url: `${siteUrl}/hero-svb.jpg`, width: 1800, height: 850, alt: 'Práctica de Soporte Vital Básico con maniquí de entrenamiento' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`${siteUrl}/hero-svb.jpg`] },
};

export default function SvbDeaPage() {
  return (
    <CourseDetail
      eyebrow="Basic Life Support Provider · ERC"
      title="Soporte Vital Básico y uso del desfibrilador externo automático"
      intro="Un curso oficial del European Resuscitation Council para reconocer una parada cardiaca, activar la ayuda, realizar una RCP de calidad y utilizar un DEA con seguridad."
      image="/hero-svb.jpg"
      imageAlt="Maniquí preparado para una práctica de Soporte Vital Básico"
      stats={[
        { label: 'Duración', value: '4 horas presenciales' },
        { label: 'Grupo', value: 'Hasta 8 por instructor' },
        { label: 'Acreditación', value: 'Certificado ERC BLS' },
      ]}
      sectionTitle="De reconocer la emergencia a coordinar una respuesta completa"
      sectionIntro="La edición avanza desde las habilidades esenciales hasta escenarios integrados, con práctica deliberada, retroalimentación y evaluación final."
      modules={[
        { number: '01', title: 'Reconocer y activar', description: 'Seguridad, respuesta, respiración anormal, alerta al 112 y petición del DEA.' },
        { number: '02', title: 'RCP de calidad', description: 'Compresiones, ventilaciones 30:2, relevos y reducción de interrupciones.' },
        { number: '03', title: 'Uso seguro del DEA', description: 'Colocación de electrodos, mensajes del equipo y desfibrilación segura.' },
        { number: '04', title: 'Trabajo en pareja', description: 'Reparto de funciones, coordinación y comunicación durante la asistencia.' },
        { number: '05', title: 'Escenarios', description: 'Casos simulados, toma de decisiones, repetición y debriefing.' },
        { number: '06', title: 'Evaluación', description: 'Comprobación de destrezas, documentación y cierre de la edición.' },
      ]}
      included={[
        'Preparación previa y organización de la edición',
        'Instructor ERC, maniquíes y DEA Trainer',
        'Práctica guiada y escenarios realistas',
        'Evaluación, registro de asistencia y satisfacción',
      ]}
      certification="Certificado oficial Basic Life Support del ERC"
      note="La acreditación ERC corresponde al itinerario oficial BLS de esta formación."
    />
  );
}
