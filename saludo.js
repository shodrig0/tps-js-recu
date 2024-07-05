/**
 * pa saludo
 */
function saludar() {
    const saludo = document.getElementById('saludo')
    let insertSaludo = document.createElement('h1')
    insertSaludo.innerHTML = 'Prácticos de Javascript'
    saludo.appendChild(insertSaludo)

    saludo.style.backgroundColor = 'rgb(22, 25, 27)'
    insertSaludo.style.color = 'rgb(25, 165, 70)'
    insertSaludo.style.fontFamily = 'Arial'
    insertSaludo.style.textAlign = 'center'
}

saludar()