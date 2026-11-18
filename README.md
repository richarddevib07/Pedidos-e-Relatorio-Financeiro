# Pedidos-e-Relatorio-Financeiro
Como funciona o Sistema de Processamento de Pedidos e Relatório Financeiro
O código foi desenvolvido em JavaScript com o objetivo de organizar os pedidos de uma loja virtual e gerar um relatório financeiro automaticamente.

Primeiro, o sistema recebe uma lista de pedidos contendo informações como ID, nome do cliente, status do pagamento, produtos comprados, preços e quantidades.

Depois, ele realiza algumas etapas:
1. Filtragem dos pedidos
Utiliza o método filter() para selecionar somente os pedidos que possuem o status "pago". Pedidos pendentes ou cancelados não entram no cálculo do faturamento.
2. Organização dos dados
Utiliza o método map() para percorrer os pedidos aprovados e organizar as informações que serão apresentadas no relatório, como:
- ID do pedido;
- Nome do cliente;
- Valor total da compra.
3. Cálculo dos pedidos
Utiliza o método reduce() para somar o preço dos produtos multiplicado pela quantidade comprada.

Por exemplo:
- 1 teclado de R$ 150 = R$ 150.
- 2 mouses de R$ 80 = R$ 160.
- Total do pedido = R$ 310.
4. Cálculo do faturamento geral
Depois de calcular cada pedido individualmente, o sistema utiliza novamente o reduce() para somar todos os valores e descobrir quanto a loja recebeu.
5. Exibição do resultado
Por último, utiliza console.log() para mostrar o relatório no terminal, incluindo os pedidos pagos e o faturamento total.
