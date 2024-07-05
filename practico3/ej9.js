console.log('hola buto')


// const formulario = document.getElementById('formulario')
const expresionRegular = {
    msj: /^[a-zA-ZÀ-ÿ\s]{1,60}$/
}

function txtTransformar() {

    let txtIngresado = document.getElementById('mensaje').value

    if (typeof txtIngresado === 'string' && expresionRegular.msj.test(txtIngresado)) {
        let txtMinuscula = txtIngresado.toLowerCase()
        let txtMayuscula = txtIngresado.toUpperCase()
        let submensaje = txtIngresado.substring(5, 10)

        let txtSaludo
        if (txtIngresado.includes('hola')) {
            txtSaludo = 'Hola qué tal'
        } else {
            txtSaludo = 'xd'
        }

        let txtSaludoNoEspacio
        if (txtIngresado.includes('hola')) {
            txtSaludoNoEspacio = txtIngresado.replace(/ /g, "").replace(/hola/g, "")
        } else {
            txtSaludoNoEspacio = 'asd'
        }

        let txtEnglish
        if (txtIngresado.includes('hola')) {
            txtEnglish = txtIngresado.toLowerCase().replace(/hola/g, "hello").replace(/nombre/g, "name").replace(/mi/g, "my").replace(/es/g, "is")
        } else {
            txtEnglish = 'Intraducible'
        }

        document.getElementById('txtMinuscula').innerHTML = txtMinuscula
        document.getElementById('txtMayuscula').innerHTML = txtMayuscula
        document.getElementById('subMsj').innerHTML = submensaje
        document.getElementById('txtSaludo').innerHTML = txtSaludo
        document.getElementById('txtSaludoNoEspacio').innerHTML = txtSaludoNoEspacio
        document.getElementById('txtToEnglish').innerHTML = txtEnglish

    } else {
        document.getElementById('alerta').innerHTML = 'Sólo se permiten letras'
    }
}

