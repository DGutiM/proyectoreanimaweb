'use client';

import { type FormEvent, useState } from 'react';

const destinationEmail = 'proyectoreanimavida@gmail.com';

function field(formData: FormData, name: string) {
  return String(formData.get(name) ?? '').trim();
}

export default function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  const prepareEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = field(formData, 'name');
    const company = field(formData, 'company');
    const senderEmail = field(formData, 'email');
    const phone = field(formData, 'phone');
    const participants = field(formData, 'participants');
    const message = field(formData, 'message');

    const subject = `Solicitud de propuesta · ${company}`;
    const body = [
      'Hola, me gustaría recibir una propuesta de formación para mi empresa.',
      '',
      `Nombre y apellidos: ${name}`,
      `Empresa: ${company}`,
      `Correo: ${senderEmail}`,
      `Teléfono: ${phone}`,
      `Número aproximado de participantes: ${participants || 'Por concretar'}`,
      '',
      'Información adicional:',
      message || 'Sin información adicional.',
    ].join('\n');

    setPrepared(true);
    window.location.href = `mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={prepareEmail}>
      <div className="form-grid">
        <label>
          <span>Nombre y apellidos</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Empresa</span>
          <input name="company" autoComplete="organization" required />
        </label>
        <label>
          <span>Correo electrónico</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Teléfono</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label className="form-field-wide">
          <span>Número aproximado de participantes</span>
          <input name="participants" inputMode="numeric" placeholder="Por ejemplo, 24" />
        </label>
        <label className="form-field-wide">
          <span>¿Qué necesitáis?</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Centro de trabajo, fechas orientativas, turnos o cualquier necesidad especial."
          />
        </label>
      </div>

      <div className="form-submit-row">
        <button className="button" type="submit">Preparar solicitud</button>
        <p>
          Se abrirá tu aplicación de correo con los datos y el destinatario ya
          rellenados. Revísalos y pulsa «Enviar».
        </p>
      </div>

      {prepared && (
        <p className="form-fallback" role="status">
          Si no se ha abierto el correo, escríbenos directamente a{' '}
          <a href={`mailto:${destinationEmail}`}>{destinationEmail}</a>.
        </p>
      )}
    </form>
  );
}
