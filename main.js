let valorTotal = 0;
const carrinho = {};

function addItem(nome, preco) {
    if (!carrinho[nome]) carrinho[nome] = 0;
    carrinho[nome]++;
    valorTotal += preco;
    atualizarDisplay(nome);
}

function removerItem(nome, preco) {
    if (carrinho[nome] && carrinho[nome] > 0) {
        carrinho[nome]--;
        valorTotal -= preco;
        atualizarDisplay(nome);
    }
}

function atualizarDisplay(nome) {
    const elQtd = document.getElementById(`qtd-${nome}`);
    if (elQtd) elQtd.innerText = carrinho[nome];
    
    const elTotal = document.getElementById('total');
    elTotal.innerText = `Total: R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
}

function finalizarPedido() {
    if (valorTotal === 0) {
        alert("O carrinho está vazio!");
        return;
    }

    // Mostra o total antes de zerar
    alert("Pedido Finalizado! Total: R$ " + valorTotal.toFixed(2).replace('.', ','));

    // --- LÓGICA PARA LIMPAR TUDO ---
    
    // 1. Zera os números (0) de todos os itens na tela
    const spansQuantidade = document.querySelectorAll('.quantidade');
    spansQuantidade.forEach(span => {
        span.innerText = "0";
    });

    // 2. Limpa o objeto do carrinho na memória
    for (let item in carrinho) {
        carrinho[item] = 0;
    }

    // 3. Zera o valor total e atualiza o rodapé
    valorTotal = 0;
    document.getElementById('total').innerText = "Total: R$ 0,00";
}
