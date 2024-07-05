document.addEventListener('submit', function (e) {
    e.preventDefault()
    const container = document.getElementById('chat')
    const display = document.createElement('div')

    const nombre = document.getElementById('nombre').value
    const mensaje = document.getElementById('mensaje').value

    const fechaActual = new Date()
    const fechaFinal = `${fechaActual.getDay()}/${fechaActual.getMonth()}/${fechaActual.getFullYear()} - ${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`

    const chatRegistro = document.getElementById('mensajesChat')
    const mensajeEnviado = document.createElement('div')
    mensajeEnviado.innerHTML = `${fechaFinal} por ${nombre} <br> ${mensaje}`
    chatRegistro.appendChild(mensajeEnviado)
    display.appendChild(chatRegistro)
    container.appendChild(display)

    document.getElementById('mensaje').value = ''
    document.getElementById('mensaje').focus()

})

console.log('asd')
