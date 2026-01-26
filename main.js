let totalGeral = 0;
const carrinho = {};

function addItem(nome, preco) {
    console.log("Adicionando:", nome); // Ajuda a testar se o botão funciona
    if (!carrinho[nome]) {
        carrinho[nome] = 0;
    }
    carrinho[nome]++;
    totalGeral += preco;
    atualizarTela(nome);
}

function removerItem(nome, preco) {
    if (carrinho[nome] && carrinho[nome] > 0) {
        carrinho[nome]--;
        totalGeral -= preco;
        atualizarTela(nome);
    }
}

function atualizarTela(nome) {
    const campoQtd = document.getElementById(`qtd-${nome}`);
    if (campoQtd) {
        campoQtd.innerText = carrinho[nome]; // Aqui é onde o número muda!
    } else {
        console.error("Não encontrei o ID: qtd-" + nome);
    }
    
    const campoTotal = document.getElementById('total');
    campoTotal.innerText = `Total: R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
}
