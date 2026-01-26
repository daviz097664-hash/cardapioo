let valorTotal = 0;
const carrinhoItems = {};

function addItem(nome, preco) {
    if (!carrinhoItems[nome]) carrinhoItems[nome] = 0;
    carrinhoItems[nome]++;
    valorTotal += preco;
    atualizarDisplay(nome);
}

function removerItem(nome, preco) {
    if (carrinhoItems[nome] && carrinhoItems[nome] > 0) {
        carrinhoItems[nome]--;
        valorTotal -= preco;
        atualizarDisplay(nome);
    }
}

function atualizarDisplay(nome) {
    const elQtd = document.getElementById(`qtd-${nome}`);
    if (elQtd) elQtd.innerText = carrinhoItems[nome];
    
    const elTotal = document.getElementById('total');
    elTotal.innerText = `Total: R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
}
