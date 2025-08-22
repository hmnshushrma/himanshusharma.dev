import "./commonStyles/toolbar.scss";
import useTheme from "../../hooks/useTheme";
import { resume } from "../../data/resume"; // ← uses your basics.phone

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
    <path fill="currentColor" d="M20 3.9A10 10 0 0 0 3.2 17.4L2 22l4.7-1.2A10 10 0 1 0 20 3.9m-8 16.3c-1.7 0-3.3-.5-4.7-1.5l-.3-.2-2.8.7.7-2.7-.2-.3A8.06 8.06 0 1 1 12 20.2m4.6-6.1c-.2-.1-1.3-.6-1.5-.7c-.2-.1-.3-.1-.5.1c-.1.2-.6.7-.7.9c-.1.1-.3.2-.5.1c-.2-.1-.9-.3-1.7-1c-.6-.5-1-1.2-1.1-1.4c-.1-.2 0-.4.1-.5l.3-.4c.1-.2.2-.3.2-.5c0-.1 0-.3-.1-.4c-.1-.1-.5-1.3-.7-1.7c-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.4.1-.6.3c-.2.2-.8.8-.8 1.9c0 1.1.8 2.1.9 2.2c.1.2 1.7 2.7 4.1 3.7c.6.3 1.1.4 1.4.5c.6.2 1.1.2 1.5.1c.5-.1 1.3-.5 1.5-1.1c.2-.6.2-1.1.2-1.2c0-.1-.1-.1-.3-.2Z"/>
  </svg>
);

// Normalize to digits only (WhatsApp requires intl format, no '+' or dashes)
function normalizeWhatsAppNumber(raw?: string | null) {
  if (!raw) return null;
  let digits = raw.replace(/\D/g, ""); // keep only numbers
  if (digits.startsWith("00")) digits = digits.slice(2); // handle 00CC…
  // remove leading zeroes if someone stored a local number like 098…
  digits = digits.replace(/^0+/, "");
  return digits.length ? digits : null;
}

export default function Toolbar() {
  const { theme, toggle } = useTheme();

  const phone = normalizeWhatsAppNumber(resume?.basics?.phone ?? null);
  const msg = encodeURIComponent("Hi Himanshu! I saw your resume and would like to chat.");
  const waHref = phone ? `https://wa.me/${phone}?text=${msg}` : null;

  return (
    <header className="resume__toolbar no-print" aria-label="Toolbar">
      <div className="container resume__toolbar-inner">
        <span className="toolbar__label">Quick actions</span>
        <div className="toolbar__actions">
          {waHref && (
            <a
              className="btn btn--wa"
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          )}
          <button
            type="button"
            className="btn btn--ghost"
            onClick={toggle}
            aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? "Light Theme" : "Dark Theme"}
          </button>
          <button type="button" className="btn btn--solid" onClick={() => window.print()}>
            Print / Save PDF
          </button>
        </div>
      </div>
    </header>
  );
}
