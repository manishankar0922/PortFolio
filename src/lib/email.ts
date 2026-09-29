import { toast } from "sonner";

export function handleSendEmail(
  e?: React.MouseEvent,
  email: string = "mohanmanishankar01@gmail.com"
) {
  if (e) {
    e.preventDefault();
  }

  // 1. Copy email address to clipboard
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(email).catch(() => {});
  }

  toast.success("Email copied to clipboard!", {
    description: email,
    duration: 3500,
  });

  // 2. Track if native email client opened (window blurs)
  let appOpened = false;
  const onBlur = () => {
    appOpened = true;
    window.removeEventListener("blur", onBlur);
  };
  window.addEventListener("blur", onBlur);

  // 3. Try native mailto:
  window.location.href = `mailto:${email}`;

  // 4. Fallback to Gmail Web Compose after 750ms if window remained focused
  setTimeout(() => {
    window.removeEventListener("blur", onBlur);
    if (!appOpened && typeof document !== "undefined" && document.hasFocus()) {
      const gmailUrl = `https://mail.google.com/mail/u/0/?fs=1&to=${encodeURIComponent(
        email
      )}&tf=cm`;
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    }
  }, 750);
}
