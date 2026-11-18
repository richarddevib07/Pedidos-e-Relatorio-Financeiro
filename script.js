const pedidos = [
  { id: 1, cliente: "Ana", status: "pago", itens: [{ nome: "Teclado", preco: 150, qtd: 1 }, { nome: "Mouse", preco: 80, qtd: 2 }] },
  { id: 2, cliente: "Carlos", status: "pendente", itens: [{ nome: "Monitor", preco: 900, qtd: 1 }] },
  { id: 3, cliente: "Ana", status: "pago", itens: [{ nome: "Mousepad", preco: 40, qtd: 3 }] },
  { id: 4, cliente: "Beatriz", status: "cancelado", itens: [{ nome: "Headset", preco: 250, qtd: 1 }] },
  { id: 5, cliente: "Carlos", status: "pago", itens: [{ nome: "Cabo HDMI", preco: 35, qtd: 2 }, { nome: "Suporte", preco: 60, qtd: 1 }] }
];

function gerarRelatorio(listaPedidos) {
    const pagos = listaPedidos.filter(pedido => pedido.status == "pago");
    const relatorio = pagos.map(pedido => {
        const valor = pedido.itens.reduce((total, item) => {
            return total + item.preco * item.qtd;
 }, 0);
 return {
            id: pedido.id,
            cliente: pedido.cliente,
            valorTotal: valor
};
});
    const faturamento = relatorio.reduce((total, pedido) => {
        return total + pedido.valorTotal
}, 0);

    return {
        pedidos: relatorio,
        faturamentoGeral: faturamento
};
}

const resultado = gerarRelatorio(pedidos)

console.log(resultado)
console.log("Total recebido: R$", resultado.faturamentoGeral);
