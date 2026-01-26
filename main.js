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

    // 1. Alerta de sucesso
    alert("Pedido Finalizado!\nTotal: R$ " + valorTotal.toFixed(2).replace('.', ','));

    // 2. Limpa visualmente os números (voltam a ser 0)
    const spans = document.querySelectorAll('.quantidade');
    spans.forEach(s => s.innerText = "0");

    // 3. Limpa a memória
    for (let key in carrinho) {
        carrinho[key] = 0;
    }
    valorTotal = 0;

    // 4. Atualiza o rodapé
    document.getElementById('total').innerText = "Total: R$ 0,00";
}
