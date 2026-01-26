let totalGeral = 0;
const carrinho = {};

function addItem(nome, preco) {
    if (!carrinho[nome]) {
        carrinho[nome] = 0;
    }
    carrinho[nome]++;
    totalGeral += preco;
    atualizarInterface(nome);
}

function removerItem(nome, preco) {
    if (carrinho[nome] && carrinho[nome] > 0) {
        carrinho[nome]--;
        totalGeral -= preco;
        atualizarInterface(nome);
    }
}

function atualizarInterface(nome) {
    // Atualiza o número no span entre os botões
    const spanQtd = document.getElementById(`qtd-${nome}`);
    if (spanQtd) {
        spanQtd.innerText = carrinho[nome];
    }
    
    // Atualiza o total no rodapé
    const totalElemento = document.getElementById('total');
    totalElemento.innerText = `Total: R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
}

document.getElementById('enviar').onclick = function() {
    if (totalGeral === 0) {
        alert("Adicione pelo menos um item!");
    } else {
        alert("Pedido processado! Total: R$ " + totalGeral.toFixed(2).replace('.', ','));
    }
};
