const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav.addEventListener('click', event => {
  if (event.target.matches('a')) {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

document.querySelector('#copy-contract').addEventListener('click', async event => {
  const address = document.querySelector('#contract-address').textContent.trim();
  try {
    await navigator.clipboard.writeText(address);
    event.currentTarget.textContent = 'Copied';
    window.setTimeout(() => event.currentTarget.textContent = 'Copy address', 1800);
  } catch {
    event.currentTarget.textContent = 'Select address above';
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
