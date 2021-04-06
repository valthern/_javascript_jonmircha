// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const aleatorio501_600 = () => console.info(Math.round(Math.random() * (600 - 501)) + 501)

aleatorio501_600()
aleatorio501_600()
aleatorio501_600()
aleatorio501_600()
aleatorio501_600()



// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const esCapicua = function (numero = undefined) {
    if(typeof numero !== "number" && typeof numero !== "bigint") return console.error("El parámetro \'numero\' debe ser de tipo numérico.")
    if(numero === undefined) return console.warn("El parámetro \'numero\' debe recibir un valor.")

    let cadenaArr = numero.toString().split('').reverse().join('')

    return console.info(numero.toString() == cadenaArr)
}

esCapicua(69896)
esCapicua(4775)
esCapicua(68799786)
esCapicua(98722340)
esCapicua(858.858)



// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
function factorial(numero = undefined) {
    if(typeof numero !== "number" && typeof numero !== "bigint") return console.error("El parámetro \'numero\' debe ser de tipo numérico.");
    if(numero === undefined) return console.warn("El parámetro \'numero\' debe recibir un valor.");
    if(numero < 0) return console.error("El número debe ser un número positivo.");

    if (numero == 0) {
        return 1;
    } else {
        return factorial(numero - 1) * numero;
    }
}

console.log(factorial(9))
