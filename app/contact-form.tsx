'use client';

import { type FormEvent, useState } from 'react';

const destinationEmail = 'proyectoreanimavida@gmail.com';
const formEndpoint = `https://formsubmit.co/ajax/${destinationEmail}`;

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

function field(formData: FormData, name: string) {
  return String(formData.get(name) ?? '').trim();
}

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const sendRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = field(formData, 'name');
    const company = field(formData, 'company');
    const senderEmail = field(formData, 'email');
    const phone = field(formData, 'phone');
    const participants = field(formData, 'participants');
    const message = field(formData, 'message');

    if (field(formData, '_honey')) return;

    setStatus('sending');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          company,
          email: senderEmail,
          phone,
          participants: participants || 'Por concretar',
          message: message || 'Sin información adicional.',
          _replyto: senderEmail,
          _subject: `Nueva solicitud web · ${company}`,
          _template: 'table',
          _url: window.location.href,
        }),
      });

      const result = (await response.json()) as { success?: boolean | string };
      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error('No se pudo enviar la solicitud');
      }

      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="contact-form" onSubmit={sendRequest}>
      <label className="form-honey" aria-hidden="true">
        No rellenar este campo
        <input name="_honey" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-grid">
        <label>
          <span>Nombre y apellidos</span>
          <input name="name" autoComplete="name" maxLength={120} required />
        </label>
        <label>
          <span>Empresa</span>
          <input name="company" autoComplete="organization" maxLength={120} required />
        </label>
        <label>
          <span>Correo electrónico</span>
          <input name="email" type="email" autoComplete="email" maxLength={160} required />
        </label>
        <label>
          <span>Teléfono</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={30} required />
        </label>
        <label className="form-field-wide">
          <span>Número aproximado de participantes</span>
          <input name="participants" inputMode="numeric" maxLength={5} placeholder="Por ejemplo, 24" />
        </label>
        <label className="form-field-wide">
          <span>¿Qué necesitáis?</span>
          <textarea
            name="message"
            rows={4}
            maxLength={1500}
            placeholder="Centro de trabajo, fechas orientativas, turnos o cualquier necesidad especial."
          />
        </label>
      </div>

      <div className="form-submit-row">
        <button className="button" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : 'Enviar solicitud'}
        </button>
        <p>
          La solicitud llegará directamente a nuestro correo. Te responderemos para
          concretar el programa, los grupos y las fechas.
        </p>
      </div>

      <p className="form-privacy">
        Responsable: Proyecto Reanima+ Vida. Usaremos los datos para atender la
        consulta y preparar la propuesta solicitada. El envío se realiza mediante
        FormSubmit y el proveedor de correo. No incluyas datos de salud ni información
        confidencial. Consulta la <a href="/privacidad">información de privacidad</a>.
      </p>

      <div className="form-status" role="status" aria-live="polite">
        {status === 'sent' && (
          <p className="form-success">Solicitud enviada. Nos pondremos en contacto contigo.</p>
        )}
        {status === 'error' && (
          <p className="form-fallback">
            No se ha podido enviar. Inténtalo de nuevo o escríbenos a{' '}
            <a href={`mailto:${destinationEmail}`}>{destinationEmail}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
