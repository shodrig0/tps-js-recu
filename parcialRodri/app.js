const ultimaBola = document.getElementById('ultimaBolilla')
const btnJugar = document.getElementById('jugarbtn')
const tiraContainer = document.querySelector('.tira-container')
const ganandoAnuncio = document.getElementById('vaGanando')

// arrays de nums
const numerosLaura = document.querySelectorAll('#tira-laura .cuadrado')
const numerosJorgelina = document.querySelectorAll('#tira-jorgelina .cuadrado')
const numerosAle = document.querySelectorAll('#tira-alejandra .cuadrado')

let contLaura = 0
let contJorg = 0
let contAle = 0

let hayGanadora = false

/**
 * Genera número random y lo agrega en el html
 */
function tirarBolilla() {
    let resultado = (Math.floor(Math.random() * 100))
    ultimaBola.innerHTML = resultado < 10 ? '0' + resultado : resultado // para que a los números de un dígito se les coloque el 0 antes
    jugar(resultado)
}

/**
 * Jugabilidad
 * Printea los números obtenidos como también el conteo
 * Determina quien gana
 * @param {number} num 
 */
function jugar(num) {

    let msj = ''

    let msjQuienGano = ''

    let numEncontrado = false // bandera para asegurarnos que el número ya se printeo

    numerosLaura.forEach(numL => {
        if (parseInt(numL.textContent) === num && numL.style.backgroundColor !== 'red') {
            numL.style.backgroundColor = 'red'
            contLaura++
            numEncontrado = true
        }
    })

    numerosJorgelina.forEach(numJ => {
        if (parseInt(numJ.textContent) === num && numJ.style.backgroundColor !== 'red') {
            numJ.style.backgroundColor = 'red'
            contJorg++
            numEncontrado = true
        }
    })

    numerosAle.forEach(numA => {
        if (parseInt(numA.textContent) === num && numA.style.backgroundColor !== 'red') {
            numA.style.backgroundColor = 'red'
            contAle++
            numEncontrado = true
        }
    })

    if (contLaura === numerosLaura.length) {
        msjQuienGano = 'Ganó Laura!!'
        hayGanadora = true
    }

    if (contJorg === numerosJorgelina.length) {
        msjQuienGano = 'Ganó Jorgelina!'
        hayGanadora = true
    }

    if (contAle === numerosAle.length) {
        msjQuienGano = 'Ganó Alejandra!!'
        hayGanadora = true
    }

    if (contLaura > contJorg && contLaura > contAle) {
        msj = 'Laura va ganando'
    } else if (contJorg > contLaura && contJorg > contAle) {
        msj = 'Jorgelina va ganando'
    } else if (contAle > contLaura && contAle > contJorg) {
        msj = 'Alejandra va ganando'
    } else if (contLaura === contJorg && contLaura === contAle || contJorg === contLaura && contJorg === contAle || contAle === contLaura && contAle === contJorg) {
        msj = 'Empate'
    } else if (!numEncontrado) {
        return
    } else {
        msj = 'Empate'
    }
    ganandoAnuncio.innerHTML = msj

    if (hayGanadora) {
        // ganandoAnuncio.innerHTML = ''
        ganandoAnuncio.innerHTML = msjQuienGano
        btnJugar.disabled = true
        btnJugar.style.backgroundColor = 'gray'
    }

}