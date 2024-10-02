//1. Introduccion a JavaScript

//Ejercicio 2
function sumadora() {
    let a = 10
    let b = 5
    let c = a + b
    return c
}
console.log("La suma de a y b es: ", sumadora())

//Ejercicio 3
let nombre = prompt("Cual es tu nombre?")
console.log("Hola, ", nombre)

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

//4. Funciones de JavaScript

//Ejercicio 1
function esPar(num) {
    return num % 2 == 0 ? true : false
}
let numParidad = 2
console.log("El numero, ", numParidad, "es par? ", esPar(numParidad))

//Ejercicio 2
function convertirCelsiusAFahrenheit(c) {
    return c * 1.8 + 32
}
let celsius = 30
console.log(`${celsius}°C son equivalentes a  ${convertirCelsiusAFahrenheit(celsius)}°F`)

//5. Objetos en JavaScript

//Ejercicio 1
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid",
    cambiarCiudad: function (ciudad2) {
        this.ciudad = ciudad2
    }
}
persona.cambiarCiudad("Barcelona")
console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`)

//Ejercicio 2
let libro = {
    titulo: "El Quijote",
    autor: "Pepe",
    anio: 11,
    antiguedad: function () {
        return this.anio > 10 ? true : false
    }
}
console.log(`El libro "${libro.titulo}" es antiguo:${libro.antiguedad()}`)

//6. Arrays

//Ejercicio 1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerosx2 = numeros.map(e => e * 2)
console.log(`Numeros originales: ${numeros}`)
console.log(`Numeros multiplicados por 2: ${numerosx2}`)


//Ejercicio 2
let pares = []
let k
for (k = 1; k <= 20; k++) {
    if (k % 2 == 0) {
        pares.push(k)
    }
}
console.log(`Primeros 10 numeros pares: ${pares}`)

//7. Introduccion al DOM

//Ejercicio 1
let botonAzul = document.getElementById("boton_azul")
let parrafos = document.getElementById("parrafos")
botonAzul.addEventListener("click", () => { parrafos.classList.add("parrafos") })

//Ejercicio 2.
let texto = document.getElementById("texto")
let botonAlert = document.getElementById("boton_alert")
botonAlert.addEventListener("click", () => { alert(`Has ingresado: ${texto.value}`) })


//8. Eventos en DOM

//Ejercicio 1

let lista = document.querySelectorAll("#list li")
lista.forEach((e) => { e.addEventListener("click", () => { console.log(e.textContent) }) })

//Ejercicio 2
let deshabilitar = document.getElementById("deshabilitar")
let habilitar = document.getElementById("habilitar")
let dato = document.getElementById("dato")
deshabilitar.addEventListener("click", () => { dato.disabled = true })
habilitar.addEventListener("click", () => { dato.disabled = false })

//9. Local Storage

//Traigo los elementos del DOM
let guardarButon = document.getElementById("guardar-buton")
let eliminarButon = document.getElementById("eliminar-buton")
let email = document.getElementById("email")
let mensaje = document.getElementById("mensaje")
//Para validar los corrreos ingresados
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Boton de guardar
guardarButon.addEventListener("click", (e) => {
    e.preventDefault(); //para que no recargue la pagina al presionar
    if (email.value != "" && regex.test(email.value)) {
        mensaje.classList.add("mensaje", "exito")  //se agrega un estilo de mensaje exitoso
        mensaje.innerHTML = `<p>Correo guardado: ${email.value}</p>` //se muestra en el DOM
        localStorage.setItem("mail", email.value)  //guardamos el mail en el storage
    } else {
        mensaje.classList.remove("error", "exito", "mensaje") //limpia los estilos previamente puestos
        mensaje.classList.add("mensaje", "error") //se agrega un estilo de mensaje erroneo
        mensaje.innerHTML = `<p>Ingrese un mail valido, por favor.</p>`  //se muestra en el DOM
    }
})

//Boton de eliminar
eliminarButon.addEventListener("click", (e) => {
    e.preventDefault();
    let correo = localStorage.getItem("mail") //recupero el mail del storage
    if (correo != null) {
        localStorage.removeItem("mail") //lo elimino del storage
        mensaje.classList.add("mensaje", "exito")
        mensaje.innerHTML = `<p>Correo eliminado con exito</p>`
    }
})

