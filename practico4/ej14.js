console.log('hola butos sdsdf')

const containerTabla = document.getElementById('containerTabla')

// array colRegistros
const a = Array()
a[0] = ["Juan Pérez", "Av. Argentina 3000", "Neuquén Capital", "154888888"]
a[1] = ["Tito Sánchez", "Av. Del Trabajador 300", "Neuquén Capital", "154555555"]
a[2] = ["Cecilia Carrizo", "Sierra Grande 900", "Neuquén Capital", "4485895"]
a[3] = ["Pedro González", "Amaranto Usares 1254", "Neuquén Capital", "4420444"]
a[4] = ["Verónica Lozano", "Saturnino Torres 100", "Neuquén Capital", "5425842"]


function crearTabla() {

    const headersTable = ['Nombre', 'Dirección', 'Ciudad', 'Teléfono', 'Operación']
    let tableRegistros = document.createElement('table')

    for (let i = 0; i < a.length; i++) {
        let fila = tableRegistros.insertRow(i)
        fila.insertCell(0).innerHTML = a[i][0]
        fila.insertCell(1).innerHTML = a[i][1]
        fila.insertCell(2).innerHTML = a[i][2]
        fila.insertCell(3).innerHTML = a[i][3]
        let eliminarRegistro = fila.insertCell(4)
        eliminarRegistro.innerHTML = '<a href="#" onclick="borrarData(' + i + ')">borrar</a>'
    }

    let headerRegistros = tableRegistros.createTHead()
    let headerFila = headerRegistros.insertRow(0)

    for (let i = 0; i < headersTable.length; i++) {
        headerFila.insertCell(i).innerHTML = headersTable[i]
    }

    containerTabla.appendChild(tableRegistros)
    tableRegistros.style.border = '1px solid black'
}


function borrarData(index) {
    a.splice(index, 1)

    let tablaa = containerTabla.querySelector('table')
    if (tablaa) {
        tablaa.deleteRow(index + 1)
    }
}


function actualizarTabla() {
    // adeeeeentro
    const nombreR = document.getElementById('nombre').value
    const dirR = document.getElementById('direccion').value
    const ciudadR = document.getElementById('ciudad').value
    const telR = document.getElementById('telefono').value
    if (nombreR && dirR && ciudadR && telR) {
        a.push([nombreR, dirR, ciudadR, telR])
        agregarFila([nombreR, dirR, ciudadR, telR], a.length - 1)
    }
}

function agregarFila(data, index) {
    let tablaa = containerTabla.querySelector('table')
    if (tablaa) {
        let fila = tablaa.insertRow(-1) // inserrt alfinal
        data.forEach(i => {
            let contenido = fila.insertCell()
            contenido.innerHTML = i
        })

        let eliminarData = fila.insertCell()
        eliminarData.innerHTML = '<a href="#" onclick="borrarData(' + index + ')">borrar</a>'
    }
}

console.log(a)

crearTabla()


/*let operacion = document.createElement('a')
operacion.textContent = 'borrar'
let operacionFila = operacion.insertRow(0)

for (let i = 0; operacion.length; i++) {
    operacionFila.insertCell(i).innerHTML = tableRegistros[i]
}*/