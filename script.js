document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const scrim = document.querySelector('.nav-scrim');

  function closeMenu(){
    links && links.classList.remove('open');
    toggle && toggle.classList.remove('open');
    scrim && scrim.classList.remove('open');
    document.body.style.overflow = '';
  }
  function openMenu(){
    links && links.classList.add('open');
    toggle && toggle.classList.add('open');
    scrim && scrim.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });
  }
  if (scrim) {
    scrim.addEventListener('click', closeMenu);
  }

  // Contact form: no backend yet, so hand off to WhatsApp / mail gracefully.
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const message = form.message.value.trim();
      const body = encodeURIComponent(`Hi Subtle Flex, I'm ${name}.\n\n${message}`);
      window.location.href = `https://wa.me/2340000000000?text=${body}`;
    });
  }

  // Shop category filter pills
  const filterPills = document.querySelectorAll('.filter-pill');
  const shopCards = document.querySelectorAll('#shop-grid .p-card');
  if (filterPills.length && shopCards.length) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.dataset.filter;
        shopCards.forEach(card => {
          const match = filter === 'all' || card.dataset.category === filter;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }
});
