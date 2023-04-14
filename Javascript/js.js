// Arreglo con los productos y sus precios
const productos = [
    { id: 1, nombre: "Producto 1", precio: 10.00 },
    { id: 2, nombre: "Producto 2", precio: 20.00 },
    { id: 3, nombre: "Producto 3", precio: 30.00 },
    { id: 4, nombre: "Producto 4", precio: 40.00 }
  ];
  
  // Función para obtener el objeto de un producto por su ID
  function obtenerProducto(id) {
    return productos.find(producto => producto.id === id);
  }
  
  // Función para calcular el subtotal de un producto
  function calcularSubtotal(id, cantidad) {
    const producto = obtenerProducto(id);
    return producto.precio * cantidad;
  }
  
  // Función para actualizar el carrito y mostrar los subtotales y el total
  function actualizarCarrito() {
    let total = 0;
    for (const producto of productos) {
      const cantidad = parseInt(document.getElementById(`producto${producto.id}`).querySelector("input").value);
      const subtotal = calcularSubtotal(producto.id, cantidad);
      document.getElementById(`subtotal${producto.id}`).textContent = subtotal.toFixed(2);
      total += subtotal;
    }
    document.getElementById("total").textContent = total.toFixed(2);
  }
  
  // Función para calcular el monto de las cuotas
  function calcularCuotas() {
    const total = parseFloat(document.getElementById("total").textContent);
    const cuotas = parseInt(document.getElementById("cuotas").value);
    const montoCuota = total / cuotas;
    alert(`Monto por cuota: ${montoCuota.toFixed(2)}`);
  }
  
 // Función para simular el pago
function pagar() {
    const total = parseFloat(document.getElementById("total").textContent);
    const cuotas = parseInt(document.getElementById("cuotas").value);
    const montoCuota = total / cuotas;
    const datosPago = {
      total: total,
      cuotas: cuotas,
      montoCuota: montoCuota
    };
    localStorage.setItem("datosPago", JSON.stringify(datosPago));
    alert("¡Pago realizado con éxito!");
    location.reload();
  }
  
  // Carga inicial del carrito
  actualizarCarrito();
  
  