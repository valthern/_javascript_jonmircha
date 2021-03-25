// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const esPrimo = (numero) => {
    if(numero === undefined) return console.warn("El parámetro \'numero\' debe recibir un valor.")
    if(typeof numero !== "number" && typeof numero !== "bigint") return console.error("El parámetro \'numero\' debe ser de tipo numérico.")
    if(numero < 2) return console.error("El parámetro \'numero\' debe ser un número positivo mayor o igual a dos.")
    if(numero % 1 !== 0) return console.error("El parámetro \'numero\' debe ser un número entero")

    for(let i = numero - 1; i >= 2; i--){
        if (numero % i == 0) {
            return false
        }
    }

    return true
}

console.log(esPrimo(25))

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const esParOImpar = (numero) => {
    if(numero === undefined) return console.warn("El parámetro \'numero\' debe recibir un valor.")
    if(typeof numero !== "number" && typeof numero !== "bigint") return console.error("El parámetro \'numero\' debe ser de tipo numérico.")
    if(numero % 1 !== 0) return console.error("El parámetro \'numero\' debe ser un número entero")

    console.info((numero % 2 == 0) ? 'Par' : 'Impar')
}

esParOImpar(8)


// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
