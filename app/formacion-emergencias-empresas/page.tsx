import type { Metadata } from 'next';
import CourseDetail from '../course-detail';
import { siteUrl } from '../site-config';

const title = 'Programa integral de respuesta inmediata ante emergencias';
const description = 'Programa de 6 horas: curso oficial ERC de SVB y DEA más un módulo empresarial independiente de Primeros Auxilios.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/formacion-emergencias-empresas' },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/formacion-emergencias-empresas`,
    title,
    description,
    images: [{ url: `${siteUrl}/formacion-practica.jpg`, width: 1800, height: 820, alt: 'Programa práctico de respuesta ante emergencias para empresas' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`${siteUrl}/formacion-practica.jpg`] },
};

export default function IntegratedTrainingPage() {
  return (
    <CourseDetail
      eyebrow="Programa recomendado para empresas"
      title="Respuesta Inmediata ante Emergencias"
      intro="Curso oficial ERC de SVB y DEA más un módulo independiente de Primeros Auxilios, con escenarios del centro de trabajo."
      image="/formacion-practica.jpg"
      imageAlt="Equipo practicando reanimación y uso de un DEA Trainer"
      stats={[
        { label: 'Duración total', value: '6 horas presenciales' },
        { label: 'Estructura', value: '4 h ERC + 2 h PA' },
        { label: 'Grupo', value: 'Hasta 8 por instructor' },
      ]}
      sectionTitle="Un itinerario para responder ante la parada cardiaca y otras emergencias"
      sectionIntro="Primero se desarrolla el programa oficial BLS del ERC; después, la respuesta ante otras emergencias relevantes en la empresa."
      modules={[
        { number: '01', title: 'Reconocimiento y 112', description: 'Valoración inicial, respiración anormal, activación de ayuda y petición del DEA.' },
        { number: '02', title: 'RCP de calidad', description: 'Compresiones, ventilaciones, relevos y coordinación de dos intervinientes.' },
        { number: '03', title: 'DEA y escenarios', description: 'Uso seguro del DEA Trainer, toma de decisiones y evaluación ERC.' },
        { number: '04', title: 'Vía aérea y hemorragia', description: 'Atragantamiento, hemorragia grave y prioridades de actuación.' },
        { number: '05', title: 'Exposición y cuadros agudos', description: 'Quemaduras, anafilaxia, hipoglucemia, convulsiones, ictus y dolor torácico.' },
        { number: '06', title: 'Escenario de empresa', description: 'Integración final, debriefing, satisfacción y documentación de la edición.' },
      ]}
      included={[
        'Curso oficial Basic Life Support del ERC',
        'Módulo independiente de Primeros Auxilios',
        'Maniquíes, DEA Trainer y material de simulación',
        'Evaluación, asistencia, satisfacción y documentación',
      ]}
      certification="Certificado oficial ERC BLS y documentación separada de Primeros Auxilios"
      note="La acreditación ERC se aplica exclusivamente al itinerario oficial de SVB y DEA."
    />
  );
}
