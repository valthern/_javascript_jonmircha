// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function contarChar(param) {
    switch (typeof param) {
        case "string":
            return param.length
        case "number":
        case "boolean":
        case "bigint":
            return param.toString().length
        case "object":
            let suma = 0
            Object.values(param).forEach(elem => {
                if (typeof elem !== "function") {
                    suma += elem.toString().length
                }
            })
            return suma
        default:
            return 0
    }
}

let yo = {
    nombre: "Omar",
    apellido: "Martínez",
    programar(){
        console.log("Programando...")
    }
}

console.log(contarChar(yo))



// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function recortarStr(param, noChars) {
    if (typeof param === "string") {
         return param.substring(0, noChars);
    }
    return 0;
}

console.log(recortarStr("Queridos reyes vagos", 10))



// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function cadenaAArreglo(cadena, caracter) {
    if (typeof cadena === "string") {
        return cadena.split(' ')
    }
}

console.log(cadenaAArreglo("Estos ejemplos son una pavada", ' '))



// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function repiteStr(cadena, cantidad) {
    let cad = ''
    if (typeof cadena === "string") {
        for (let i = 0; i < cantidad; i++) {
            cad += `${cadena} `
        }
    }
    return cad.trim()
}

console.log(repiteStr("Esto es un ejemplo extraño", 3))
