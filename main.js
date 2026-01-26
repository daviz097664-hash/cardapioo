let totalGeral = 0;
const carrinho = {};

function addItem(nome, preco) {
    // Se o item não existe no carrinho, começa com 0
    if (!carrinho[nome]) {
        carrinho[nome] = 0;
    }
    
    // Aumenta quantidade e soma ao total
    carrinho[nome]++;
    totalGeral += preco;
    
    atualizarTela(nome);
}

function removerItem(nome, preco) {
    // Só remove se a quantidade for maior que 0
    if (carrinho[nome] && carrinho[nome] > 0) {
        carrinho[nome]--;
        totalGeral -= preco;
        
        atualizarTela(nome);
    }
}

function atualizarTela(nome) {
    // Atualiza o número (span) do item específico
    const campoQtd = document.getElementById(`qtd-${nome}`);
    if (campoQtd) {
        campoQtd.innerText = carrinho[nome];
    }
    
    // Atualiza o texto do total geral
    const campoTotal = document.getElementById('total');
    campoTotal.innerText = `Total: R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
}

// Evento do botão enviar
document.getElementById('enviar').addEventListener('click', () => {
    if (totalGeral === 0) {
        alert("Ops! Seu carrinho está vazio.");
    } else {
        alert(`Pedido confirmado! Valor total: R$ ${totalGeral.toFixed(2).replace('.', ',')}`);
    }
});
