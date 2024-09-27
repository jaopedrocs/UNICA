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


function abrirPopUp(itemId) {
    const info = {
        1: {
            veiculo: "Lorem Ipsum",
            kmAtual: "999999",
            planoManutencao: "Plano A",
            modeloContratacao: "Contrato Fixo",
            dataAbertura: "09/09/2009",
            dataRecebimento: "15/09/2009",
            centroCusto: "Centro XYZ",
            tipoSolicitacao: "Solicitação X",
            fornecedor: "Fornecedor ABC",
            responsavel: "Responsável 1",
            justificativa: "Justificativa Lorem Ipsum"
        },
        2: {
            veiculo: "Dolor Sit",
            kmAtual: "123456",
            planoManutencao: "Plano B",
            modeloContratacao: "Contrato Variável",
            dataAbertura: "10/10/2010",
            dataRecebimento: "20/10/2010",
            centroCusto: "Centro ABC",
            tipoSolicitacao: "Solicitação Y",
            fornecedor: "Fornecedor DEF",
            responsavel: "Responsável 2",
            justificativa: "Justificativa Dolor Sit"
        }
    };

    const selectedInfo = info[itemId];

    // Preenche as informações no pop-up
    document.getElementById("veiculo").innerText = selectedInfo.veiculo;
    document.getElementById("kmAtual").innerText = selectedInfo.kmAtual;
    document.getElementById("planoManutencao").innerText = selectedInfo.planoManutencao;
    document.getElementById("modeloContratacao").innerText = selectedInfo.modeloContratacao;
    document.getElementById("dataAbertura").innerText = selectedInfo.dataAbertura;
    document.getElementById("dataRecebimento").innerText = selectedInfo.dataRecebimento;
    document.getElementById("centroCusto").innerText = selectedInfo.centroCusto;
    document.getElementById("tipoSolicitacao").innerText = selectedInfo.tipoSolicitacao;
    document.getElementById("fornecedor").innerText = selectedInfo.fornecedor;
    document.getElementById("responsavel").innerText = selectedInfo.responsavel;
    document.getElementById("justificativa").innerText = selectedInfo.justificativa;

    // Mostrar o pop-up e o overlay
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-overlay").style.display = "block";
}

// Fechar o pop-up
function fecharPopUp() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-overlay").style.display = "none";
}


