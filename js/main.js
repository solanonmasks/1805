/* =========================================================
   1805 Photography — small bits of interactivity.
   Every section is optional: if a page doesn't have the
   element, that part simply does nothing.
   ========================================================= */

/* ---------- Testimonial carousel (Home) ----------
   To add or edit a quote, change this list. */
const QUOTES = [
  {
    text: 'She was so kind and professional and really paid attention to all the little details. The whole process felt easy and actually really fun. When we got the final photos back we were honestly blown away!',
    name: 'Komal & Kirat · Engagement'
  },
  {
    text: "She captured so many special moments for my brother's Maiyan. Her candid shots, attention to detail, and bubbly personality blended so naturally with our family. She's always the first person I'd call for photos!",
    name: 'Kiran Gill · Maiyan'
  },
  {
    text: "She has a way of making you feel comfortable in front of the camera and always manages to capture the most genuine moments that we'll treasure forever.",
    name: 'Sharon & Perry · Family'
  }
];

(function carousel() {
  const box = document.querySelector('[data-carousel]');
  if (!box) return;
  const text = box.querySelector('[data-quote-text]');
  const name = box.querySelector('[data-quote-name]');
  const count = box.querySelector('[data-quote-count]');
  let i = 0;

  function show() {
    text.textContent = QUOTES[i].text;
    name.textContent = QUOTES[i].name;
    count.textContent = (i + 1) + ' / ' + QUOTES.length;
  }
  box.querySelector('[data-prev]').addEventListener('click', function () {
    i = (i + QUOTES.length - 1) % QUOTES.length;
    show();
  });
  box.querySelector('[data-next]').addEventListener('click', function () {
    i = (i + 1) % QUOTES.length;
    show();
  });
  show();
})();

/* ---------- FAQ: opening one question closes the others ---------- */
(function faq() {
  const items = document.querySelectorAll('.faq');
  items.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      items.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });
})();

/* ---------- Stories filter tabs ---------- */
(function storiesFilter() {
  const tabs = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-cat]');
  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const wanted = tab.getAttribute('data-filter');
      tabs.forEach(function (t) { t.setAttribute('aria-pressed', String(t === tab)); });
      cards.forEach(function (card) {
        card.hidden = !(wanted === 'All' || card.getAttribute('data-cat') === wanted);
      });
    });
  });
})();

/* ---------- Contact form ----------
   1) Pre-selects "Type of shoot" from the link, e.g. contact.html?type=wedding
   2) Sends the form and shows the thank-you panel. */
(function contactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const TYPES = {
    'wedding': 'Wedding',
    'engagement': 'Engagement',
    'proposal': 'Proposal',
    'maternity': 'Maternity',
    'family': 'Family',
    'holiday-minis': 'Holiday Minis',
    'other': 'Other'
  };
  const type = new URLSearchParams(window.location.search).get('type');
  if (type && TYPES[type.toLowerCase()]) {
    form.querySelector('select[name="type"]').value = TYPES[type.toLowerCase()];
  }

  const thanks = document.querySelector('[data-thanks]');
  const error = document.querySelector('[data-form-error]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    error.hidden = true;
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;

    // Netlify Forms: posts the form to the site itself. If you use a different
    // service (Formspree etc.), change the form's "action" in contact.html.
    const action = form.getAttribute('action') || '/';
    fetch(action, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Form send failed: ' + res.status);
        form.hidden = true;
        thanks.hidden = false;
        thanks.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .catch(function () {
        error.hidden = false;
        button.disabled = false;
      });
  });
})();
