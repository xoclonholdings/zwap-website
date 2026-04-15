import { useMemo } from "react";

export default function MailModal({
  isOpen,
  onClose,
  subject,
  setSubject,
  message,
  setMessage,
}) {
  const mailtoHref = useMemo(() => {
    const to = "app@zwap.online";
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(message);

    return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
  }, [subject, message]);

  if (!isOpen) return null;

  return (
    <div className="mail-modal-overlay" onClick={onClose}>
      <div
        className="mail-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Contact ZWAP"
      >
        <div className="mail-modal-head">
          <div className="mail-modal-title">Contact ZWAP!</div>

          <button
            className="mail-close"
            onClick={onClose}
            aria-label="Close email modal"
          >
            ×
          </button>
        </div>

        <div className="mail-field">
          <label className="mail-label">To</label>

          <input
            className="mail-input readonly"
            value="app@zwap.online"
            readOnly
          />
        </div>

        <div className="mail-field">
          <label className="mail-label">Subject</label>

          <input
            className="mail-input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What can we help with?"
          />
        </div>

        <div className="mail-field">
          <label className="mail-label">Message</label>

          <textarea
            className="mail-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
          />
        </div>

        <div className="mail-actions">
          <button className="mail-secondary" onClick={onClose}>
            Cancel
          </button>

          <a className="mail-primary" href={mailtoHref}>
            Open Mail App
          </a>
        </div>
      </div>
    </div>
  );
}