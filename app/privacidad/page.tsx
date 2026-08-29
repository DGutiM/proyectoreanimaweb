/* eslint-disable @next/next/no-html-link-for-pages */

import type { Metadata } from 'next';
import { contactEmail } from '../site-config';

export const metadata: Metadata = {
  title: 'Privacidad del formulario de contacto',
  description: 'Información sobre el tratamiento de los datos enviados mediante el formulario de Proyecto Reanima+ Vida.',
  alternates: { canonical: '/privacidad' },
  robots: { index: false, follow: true },
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-header shell">
        <a href="/">← Volver a Proyecto Reanima+ Vida</a>
      </header>
      <article className="legal-content shell">
        <p className="eyebrow">Información de privacidad</p>
        <h1>Privacidad del formulario de contacto</h1>
        <p className="legal-updated">Última actualización: 29 de agosto de 2026</p>

        <section>
          <h2>Responsable y contacto</h2>
          <p>Proyecto Reanima+ Vida. Para cualquier consulta sobre privacidad o para ejercer derechos, escribe a <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
        </section>
        <section>
          <h2>Datos y finalidad</h2>
          <p>Tratamos el nombre, la empresa, el correo electrónico, el teléfono, el número orientativo de participantes y el mensaje para atender la consulta, contactar con la persona interesada y preparar una propuesta de formación.</p>
        </section>
        <section>
          <h2>Base del tratamiento</h2>
          <p>La base es la aplicación de medidas precontractuales solicitadas por la persona interesada y, en comunicaciones estrictamente profesionales, el interés legítimo en responder a la consulta. No utilizamos estos datos para enviar publicidad no solicitada.</p>
        </section>
        <section>
          <h2>Proveedores y conservación</h2>
          <p>El formulario utiliza FormSubmit para transmitir la solicitud al correo de Proyecto Reanima+ Vida. También interviene el proveedor de correo. FormSubmit indica que conserva los envíos durante 30 días. Nosotros conservaremos la comunicación mientras se atiende la solicitud y durante los plazos necesarios para cumplir obligaciones aplicables.</p>
        </section>
        <section>
          <h2>Derechos</h2>
          <p>Puedes solicitar acceso, rectificación, supresión, oposición, limitación o portabilidad escribiendo a <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos.</p>
        </section>
        <section>
          <h2>Información sensible y cookies</h2>
          <p>No incluyas datos de salud ni información confidencial en el formulario. Esta web no utiliza cookies de analítica ni publicidad. FormSubmit solo recibe los datos cuando pulsas «Enviar solicitud».</p>
        </section>
      </article>
    </main>
  );
}
