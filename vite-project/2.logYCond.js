//2. Operadores logicos y condicionales

//Ejercicio 1
function mayor() {
    let num1 = 10
    let num2 = 15
    let num3 = 37
    let mayor = 0
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2
    } else {
        mayor = num3
    }
    return mayor
}
console.log("El mayor de los 3 numeros es: ", mayor())

//Ejercicio 2
let paridad
let numero = prompt("Ingrese un numero y te dire si es par o impar")
numero % 2 == 0 ? paridad = "par" : paridad = "impar"
console.log("El numero ", numero, ", es ", paridad)
