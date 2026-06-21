// Simple contact form handler.
// NOTE: This only shows a confirmation message in the browser.
// To actually RECEIVE the messages by email, connect this form
// to a free service like Formspree (formspree.io) — easy setup,
// no backend code needed. Instructions are in the README.

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    note.textContent = 'Thanks! Your message is ready to send — connect Formspree (see README) to receive it by email.';
    form.reset();
  });
});
