// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 const invertirStr = function (cadena = "") {
    if(typeof cadena !== "string") return console.error("Se debe introducir una cadena de texto")
    if(cadena.length == 0) return console.warn("La cadena de texto no debe estar vacía")
    
    let cad = ""
    let arreglo = cadena.split('')
    for (let i = arreglo.length - 1; i >= 0; i--) {
        cad += arreglo[i]
    }

    return console.info(cad)
}

// invertirStr()
// invertirStr(true)
invertirStr("Se supone que esto va a voltear este enunciado.")



// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const contarPalabras = function(cadena, expReg){
    if(typeof cadena !== "string") return console.error("Se debe introducir una cadena de texto en el parámetro cadena")
    if(cadena.length == 0) return console.warn("cadena no debe ser una cadena de texto vacía")
    if(typeof expReg !== "string") return console.error("Se debe introducir una cadena de texto en el parámetro buscar")
    if(expReg.length == 0) return console.warn("buscar no debe ser una cadena de texto vacía")
    
    let expresion = new RegExp(expReg, "i")

    let sum = 0
    let encontrado = expresion.exec(cadena)
    while (encontrado) {
        cadena = cadena.replace(expresion, '')
        encontrado = expresion.exec(cadena)
        sum++
    }

    return console.info(sum)
}

contarPalabras("adbgda*b a*cbdbr bdc**a *afrda a*bfdda*b rgsqo* * *bgda *abg", "a\\*b")

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function validarPalindromo(cadena) {
    if(typeof cadena !== "string") return console.error("Se debe introducir una cadena de texto en el parámetro cadena")
    if(cadena.length == 0) return console.warn("cadena no debe ser una cadena de texto vacía")

    let j = cadena.length - 1
    for (let i = 0; i < cadena.length; i++) {
        const charIni = cadena[i];
        const charFin = cadena[j];
    }
}


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.