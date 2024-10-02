//3. Operadores de asignacion y bucles

//Ejercicio 1

let i = 10
while (i > 0) {
    console.log(i)
    i -= 1
}

//Ejercicio 2
let n1
do {
    n1 = prompt("Ingrese un numero mayor a 100 por favor")
} while (n1 <= 100);
console.log("El numero que ingresaste es mayor a 100: ", n1)