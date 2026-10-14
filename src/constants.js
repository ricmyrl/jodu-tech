export const YELLOW = "#facc15";
export const MUTED = "#aab8c9";
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "");
if (!WHATSAPP_NUMBER) {
  throw new Error("VITE_WHATSAPP_NUMBER must be set in the frontend environment.");
}
export const createWhatsAppLink = (message = "Hello JODU-TECH LTD, I'd like a solar consultation.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
export const LINK = createWhatsAppLink();
export const NAV_LINKS = [["Home", "home"], ["About", "about"], ["Services", "services"], ["Solar Products", "packages"], ["Projects", "projects"], ["Contact", "contact"]];
