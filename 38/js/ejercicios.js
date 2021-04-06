// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const convertirBase = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.warn("El parámetro \'numero\' debe recibir un valor numérico.")
    if(base === undefined) return console.warn("El parámetro \'base\' debe recibir 2 o 10.")
    if(typeof numero !== "number" && typeof numero !== "bigint") return console.error("El parámetro \'numero\' debe ser de tipo numérico.")
    if(typeof base !== "number") return console.error("El parámetro \'base\' debe ser de tipo numérico.")
    if(numero % 1 !== 0) return console.error("El parámetro \'numero\' debe ser un número entero")
    if(base !== 2 && base !== 10) return console.error("El parámetro \'base\' sólo puede aceptar valores de 2 o 10")

    
}

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
