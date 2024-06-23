
function calc() {
    var productSelect = document.getElementById("product");
    var productName = productSelect.options[productSelect.selectedIndex].text; 
    var productPrice = parseFloat(productSelect.value); 
    var quantityInput = document.getElementById("number");
    var quantity = parseInt(quantityInput.value); 

    
    if (productPrice > 0 && quantity > 0) {
        var subtotal = productPrice * quantity;
        var shippingCost = calculateShippingCost(subtotal);
        var totalAmount = subtotal + shippingCost;
        var message = "Detalles del pedido:\n\n";
        message += "Nombre del producto: " + productName + "\n";
        message += "Precio unitario: " + productPrice + "円\n";
        message += "Cantidad: " + quantity + "\n";
        message += "Subtotal: " + subtotal + "円\n";
        message += "Tarifa de envío: " + shippingCost + "円\n";
        message += "Total del pedido: " + totalAmount + "円";
        alert(message);
    } else {
        alert("Por favor selecciona un producto y una cantidad válida.");
    }
}
function calculateShippingCost(subtotal) {
    if (subtotal < 2000) {
        return 500; 
    } else if (subtotal >= 2000 && subtotal < 3000) {
        return 250; 
    } else {
        return 0; 
    }
}







