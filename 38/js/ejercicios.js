// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const convertirBase = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.warn("El parámetro \'numero\' debe recibir un valor numérico.")
    if(base === undefined) return console.warn("El parámetro \'base\' debe recibir 2 o 10.")
    if(typeof numero !== "number" && typeof numero !== "bigint") return console.error("El parámetro \'numero\' debe ser de tipo numérico.")
    if(typeof base !== "number") return console.error("El parámetro \'base\' debe ser de tipo numérico.")
    if(numero % 1 !== 0) return console.error("El parámetro \'numero\' debe ser un número entero")
    if(base !== 2 && base !== 10) return console.error("El parámetro \'base\' sólo puede aceptar valores de 2 o 10")
    if(base === 2 && numero.toString().search(/[2-9]/) !== -1) return console.error("El parámetro \'numero\' o no es un número binario válido o comienza con ceros")

    let dividendo = numero,
    cociente = 0,
    residuo = 0,
    i = 0
    const divisor = 2
    let binarioArr = []
    
    if(base === 10) {
        while (dividendo >= divisor) {
            cociente = Math.trunc(dividendo / divisor)
            residuo = dividendo % divisor
            console.log(`${cociente} ${residuo}`)
            dividendo = cociente
            binarioArr[i++] = residuo
        }
        binarioArr[i] = dividendo

        return console.info(`${binarioArr.reverse().join("")} base ${divisor}`)
    } else {
        return console.info(`${parseInt(numero.toString(), 2)} base 10`)
    }
}

convertirBase(1000101110, 2)
convertirBase(110000100100101, 2)



// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
