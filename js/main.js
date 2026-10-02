(() => {
  "use strict";

  const header = document.getElementById("site-header");
  const form = document.getElementById("candidatura-form");
  const success = document.getElementById("form-success");

  // Header shadow su scroll
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Validazione leggera + conferma inline (demo — endpoint non ancora configurato)
  if (!form) return;

  const setError = (field, message) => {
    const errorEl = document.getElementById(`${field.id}-error`);
    if (message) {
      field.setAttribute("aria-invalid", "true");
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.hidden = false;
      }
    } else {
      field.removeAttribute("aria-invalid");
      if (errorEl) {
        errorEl.textContent = "";
        errorEl.hidden = true;
      }
    }
  };

  const validateField = (field) => {
    const value = field.value.trim();
    let message = "";

    if (field.hasAttribute("required") && !value) {
      message = "Questo campo è obbligatorio.";
    } else if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      message = "Inserisci un indirizzo email valido.";
    } else if (field.type === "url" && value) {
      try {
        const url = new URL(value);
        if (!/^https?:$/.test(url.protocol)) message = "Inserisci un link valido (https://…).";
      } catch {
        message = "Inserisci un link valido (https://…).";
      }
    }

    setError(field, message);
    return !message;
  };

  const fields = form.querySelectorAll("input[required], select[required]");
  fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") validateField(field);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Honeypot: se compilato da un bot, silenzio
    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value) return;

    let valid = true;
    fields.forEach((field) => {
      if (!validateField(field)) valid = false;
    });
    if (!valid) {
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Demo: niente invio reale finché l'endpoint non è configurato.
    // Quando Web3Forms è pronto: rimuovere preventDefault qui e lasciare che il form faccia submit.
    form.hidden = true;
    if (success) {
      success.hidden = false;
      success.focus?.();
    }
  });
})();
