const container = document.getElementById('containerFechaActual')

function reloj() {
    const display = document.createElement('div')
    const titulo = document.createElement('h4')
    titulo.innerHTML = 'Hora actual'

    let hora = new Date()
    let horaF = `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`
    display.innerHTML = horaF
    container.appendChild(titulo)
    container.appendChild(display)
}

reloj()

const containerTiempoRest = document.getElementById('tiempoRestante')

function tiempoRestante() {
    const display = document.createElement('div')

    let fechaActual = new Date()
    let fechaRecuperatorio = new Date('2024-07-05')

    let tiempoRestante = fechaRecuperatorio - fechaActual // milisegundos

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24))
    const horas = Math.floor(tiempoRestante % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutos = Math.floor(tiempoRestante % (1000 * 60 * 60) / (1000 * 60))
    const segundos = Math.floor(tiempoRestante % (1000 * 60) / 1000)

    let diff = `Tiempo restante: ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`
    display.innerHTML = diff
    containerTiempoRest.appendChild(display)
    console.log(dias, horas, minutos, segundos)
}

tiempoRestante()

//(1000 * 60 * 60 * 24)