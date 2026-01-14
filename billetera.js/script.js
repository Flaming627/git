// Inicialización de datos
if (!localStorage.getItem('saldo')) {
    localStorage.setItem('saldo', '5000');
    localStorage.setItem('movimientos', JSON.stringify([]));
    localStorage.setItem('contactos', JSON.stringify([]));
}

// Funciones Globales
function obtenerSaldo() {
    return parseFloat(localStorage.getItem('saldo'));
}

function actualizarSaldo(nuevoMonto) {
    localStorage.setItem('saldo', nuevoMonto.toFixed(2));
}

function registrarMovimiento(tipo, monto, detalle = "") {
    let movimientos = JSON.parse(localStorage.getItem('movimientos'));
    movimientos.unshift({ // unshift para que el más reciente salga primero
        tipo,
        monto: tipo === "Envío" ? -monto : monto,
        detalle,
        fecha: new Date().toLocaleString()
    });
    localStorage.setItem('movimientos', JSON.stringify(movimientos));
}

// Lógica de Login
function validarLogin() {
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('password').value;
    if (user === "admin" && pass === "1234") {
        window.location.href = "menu.html";
    } else {
        alert("Credenciales incorrectas (Usa admin / 1234)");
    }
}