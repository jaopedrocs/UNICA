const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Função para abrir a barra lateral
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('active');
});

// Função para fechar a barra lateral
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});

// Fechar a barra lateral ao clicar fora dela (overlay)
overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});

// Obtém os elementos do DOM
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

// Adiciona um listener de evento para o clique no ícone do menu
mobileMenuToggle.addEventListener('click', () => {
    // Alterna a classe 'active' no menu lateral
    sidebar.classList.toggle('active');
});


