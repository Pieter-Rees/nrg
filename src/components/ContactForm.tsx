import { type FormEvent, useState } from "react";

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const fromEmail = String(formData.get("email") ?? "").trim();
    const eventName = String(formData.get("eventName") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`NRG aanvraag van ${name}`);
    const body = encodeURIComponent(
      `Naam: ${name}\nE-mail: ${fromEmail}\nEvenement: ${eventName}\n\n${message}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setIsSent(true);
  }

  function renderIdleNote() {
    return (
      <p className="formNote">
        Opent je e-mailprogramma met een bericht klaar voor {email}.
      </p>
    );
  }

  function renderSentNote() {
    return (
      <p className="formNote">
        Als je e-mailprogramma niet opent, mail ons op {email}.
      </p>
    );
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <label>
        Naam
        <input name="name" required type="text" />
      </label>
      <label>
        E-mail
        <input name="email" required type="email" />
      </label>
      <label>
        Evenement
        <input name="eventName" type="text" />
      </label>
      <label>
        Bericht
        <textarea name="message" required />
      </label>
      <button className="button buttonPrimary" type="submit">
        Verstuur aanvraag
      </button>
      {isSent ? renderSentNote() : renderIdleNote()}
    </form>
  );
}
