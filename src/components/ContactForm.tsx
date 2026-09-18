import { type FormEvent, useState } from "react";
import { fillTemplate } from "../data/copy";

type ContactFormCopy = {
  email: string;
  eventName: string;
  idleNote: string;
  message: string;
  name: string;
  sentNote: string;
  subject: string;
  submit: string;
};

type ContactFormProps = {
  copy: ContactFormCopy;
  email: string;
};

export function ContactForm({ copy, email }: ContactFormProps) {
  const [isSent, setIsSent] = useState(false);
  const idleNote = fillTemplate(copy.idleNote, { email });
  const sentNote = fillTemplate(copy.sentNote, { email });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const fromEmail = String(formData.get("email") ?? "").trim();
    const eventName = String(formData.get("eventName") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(
      fillTemplate(copy.subject, { name }),
    );
    const body = encodeURIComponent(
      `${copy.name}: ${name}\n${copy.email}: ${fromEmail}\n${copy.eventName}: ${eventName}\n\n${message}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setIsSent(true);
  }

  function renderIdleNote() {
    return <p className="formNote">{idleNote}</p>;
  }

  function renderSentNote() {
    return <p className="formNote">{sentNote}</p>;
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <label>
        {copy.name}
        <input name="name" required type="text" />
      </label>
      <label>
        {copy.email}
        <input name="email" required type="email" />
      </label>
      <label>
        {copy.eventName}
        <input name="eventName" type="text" />
      </label>
      <label>
        {copy.message}
        <textarea name="message" required />
      </label>
      <button className="button buttonPrimary" type="submit">
        {copy.submit}
      </button>
      {isSent ? renderSentNote() : renderIdleNote()}
    </form>
  );
}
