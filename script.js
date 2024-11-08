const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Função para abrir/fechar o menu no mobile
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
