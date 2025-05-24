const buttons = document.querySelectorAll('.tabs button');
const content = document.getElementById('tab-content');

buttons.forEach((btn) => {
  btn.addEventListener('click', async () => {
    // Remove active class from all buttons
    buttons.forEach((b) => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');

    const section = btn.getAttribute('data-section');
    const response = await fetch(`sections/${section}.html`);
    const html = await response.text();
    content.innerHTML = html;
  });
});