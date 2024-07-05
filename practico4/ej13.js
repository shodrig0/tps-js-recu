const listaHijos = document.getElementById('listaMenu').childNodes

function recorrer() {

    let length = listaHijos.length, i = -1

    if (++i < length) do {
        let hijo = listaHijos[i]

        // para ignorar todos los nodos vacios
        if (hijo.nodeType === Node.TEXT_NODE) {
            if (hijo.nodeValue.trim() === '') continue
        }

        if (hijo.nodeType === Node.ELEMENT_NODE) {
            // alert(hijo.textContent.trim())
            hijo.style.backgroundColor = 'gray'
        }
        console.log('node: ', hijo)

    } while (++i < length)

}

/*function recorrer() {
    let listaHijos2 = document.querySelector('ul')
    let childrenNode = Array.from(listaHijos2.childNodes) // children es nombre reservado

    childrenNode.forEach(function (item) {
        console.log(item)
    });
}*/