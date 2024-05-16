<script>
function calcularTroco() {
    // Obter os valores do input
    var precoProduto = parseFloat(document.getElementById('precoProduto').value);
    var valorPago = parseFloat(document.getElementById('valorPago').value);

    // Verificar se o valor pago é suficiente
    if (valorPago < precoProduto) {
        alert('O valor pago é menor que o preço do produto!');
        return;
    }

    // Calcular o troco
    var troco = valorPago - precoProduto;

    // Exibir o troco
    document.getElementById('troco').innerText = 'Troco: R$ ' + troco.toFixed(2);
}
</script>
</body>
</html>