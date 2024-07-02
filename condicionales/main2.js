//------EJERCICIOS DE CONDICIONALES (NIVEL BAJO)-----//

let numero1 = 4;
let numero2 = 5;

if (numero1 > numero2) {
    console.log(numero1);
} else {
    console.log(numero2);
}

//---ejercicio 2-----//

let num1 = 6;
let num2 = 7;

if (num1 > num2) {
    console.log(numero1);
} else if (num2 > num1) {
    console.log(numero2);
} else {
    console.log("Los numero son iguales");
}

//---ejercicio 3-----//

let number1 = 8;
let number2 = 9;

if (number1 == number2) {
    console.log("los numeros son iguales");
} else {
    console.log("los numeros son distintos");
}

//----ejercicio 4-----//

let fecha1 = "2018-9-2";
let fecha2 = "2023-7-5";

if (fecha1 > fecha2) {
    console.log(`La fecha ${fecha1} es mayor que la fecha ${fecha2}`);
} else if (fecha1 < fecha2) {
    console.log(`La fecha ${fecha2} es mayor que la fecha ${fecha1}`);
} else {
    console.log("Las fechas son iguales");
}

//----ejercicio 5-----//

let fecha3 = "2028-9-2";
let fecha4 = "2028-7-5";

if (fecha3 > fecha4) {
    console.log(`La fecha ${fecha3} es mayor que la fecha ${fecha4}`);
} else if (fecha3 < fecha4) {
    console.log(`La fecha ${fecha4} es mayor que la fecha ${fecha3}`);
} else {
    console.log("Las fechas son iguales");
}





//-----EJERCICIO 6-----//
let numeroA = 5;

let numeroB = 7;

let numeroC = 9;

if (numeroA > numeroB && numeroA > numeroC) {
    console.log(`El número ${numeroA} es el más grande`);
} else if (numeroB > numeroA && numeroB > numeroC) {
    console.log(`El número ${numeroB} es el más grande`);
} else {
    console.log(`El número ${numeroC} es el más grande`);
}

//otra forma:

let numeroD = 5;

let numeroE = 7;

let numeroF = 9;

if (numeroD < numeroE && numeroD < numeroF) {
    console.log(`El número ${numeroD} es el menor`);
} else if (numeroE < numeroD && numeroE < numeroF) {
    console.log(`El número ${numeroE} es el menor`);
} else {
    console.log(`El número ${numeroF} es el menor`);
}

//------EJERCICIOS DE CONDICIONALES (NIVEL MEDIO)-----//

//-----EJERCICIO 1-----//

// let color = prompt("ingrese un color(rojo,verde,azul)");

// switch(color){
//     case "rojo":
//         console.log("El color de la pasion");
//         break;
//     case "verde":
//         console.log("El color de la naturaleza");
//         break;
//     case "azul":
//         console.log("El color del mar");
//         break;
//     default:
//         console.log("no hay esos colores");

// }

//-----EJERCICIO 2-----//

// let valor1 = parseInt(prompt("ingrese el valor 1"));//

// let valor2 = parseInt(prompt("ingrese valor 2"));

// let operacion = prompt("ingrese suma o resta o multiplicacion o division");

// if(valor1 >= 1 && valor1 <= 100 && valor2 >= 1 && valor2 <= 100 ){
//     let resultado;// se crea la variable que luego va a tener un valor diferente diferente segun el contexto.

//     switch(operacion){
//         case "suma":
//         resultado = valor1 + valor2;
//         console.log(resultado);
//             break;
//         case "resta":
//             resultado = valor1 - valor2;
//             console.log(resultado);
//             break;

//         case "multiplicacion":
//              resultado = valor1 * valor2;
//             console.log(resultado);
//             break;

//         case "division":
//             resultado = valor1 / valor2;
//             console.log(resultado);
//             break;

//         default:
//             console.log("operacion no valida , por favor ingrese alguna de las opciones mencionadas")
//             break;

//     }

// } else{
//     console.log("algun numero no esta dentro del rango");
// }

//-----EJERCICIO 3-----//

const persona1 = {
    nombre: "Jose",
    edad: 10,
    altura: 1.80,
};

const persona2 = {
    nombre: "maria",
    edad: 15,
    altura: 1.60,
};

if (persona1.altura > persona2.altura) {
    console.log(`${persona1.nombre} es mas alta que ${persona2.nombre}`);
} else if (persona2.altura > persona1.altura) {
    console.log(`${persona2.nombre} es mas alta que ${persona1.nombre}`);
} else {
    console.log(`${persona1.nombre} y ${persona2.nombre} soy iguales`);
}

if (persona1.edad > persona2.edad) {
    console.log(`${persona1.nombre} es mas vieja que ${persona2.nombre}`);
} else if (persona2.edad > persona1.edad) {
    console.log(`${persona2.nombre} es mas vieja que ${persona1.nombre}`);
} else {
    console.log(`${persona1.nombre} y ${persona2.nombre} soy iguales`);
}

//-----EJERCICIO 4-----//
// let nombre = prompt("ingresa tu nombre");
// let edad = prompt("ingresa tu edad");
// let altura = prompt("ingresa tu altura");
// let vision = prompt("ingresa tu vision");

// if(edad >= 18 ){
//     console.log("estas calificado para conducir")

// } else if (altura > 1.10){
//     console.log("estas calificado para conducir")

// } else if (vision > 8 && vision < 10){
//     console.log("estas calificado para conducir")
// } else {
//     console.log("no estas calificado")
// }

//-----EJERCICIO 5-----//

// let edad = prompt("ingresa tu edad");

// if(edad >= 0 && edad <= 12){
//     alert("eres un infante");
// } else if (edad >= 13 && edad <= 18){
//     alert("eres un adolecente");

// } else if (edad >= 19 && edad <= 45){
//     alert("eres un joven mayor");

// } else if (edad >= 45 && edad <= 100){
//     alert("eres una persona mayor");

// } else if (edad >= 100  ){
//     alert("es realmente viejo")
// }

//-----EJERCICIO 6-----//

let numero = parseInt(prompt("ingrese numeros entre 1 y 3"));
let numberA = 1;
let numberB = 2;
let numberC = 3;
let resultado;


//chequear pero creo que no va//
// if(numero >= 1 && numero <= 1 ){
//     alert(`el numero ingresado es &{numero}`)
// } else if (numero >= 2 && numero <= 2){
//     alert(`el doble del numero ingresado es &{numero}*[2]`)

// } else if (numero >= 3 && numero <= 3){
//     alert(`el triple del numero ingresado es &{numero*3}`)

// } else{
//     alert("Ese valor no está permitido")
// }

//otra forma:
if (numero == 1) {
    resultado = numberA * 1;
    alert(`El número ingresado es ${resultado}`);
} else if (numero == 2) {
    resultado = numberB * 2;
    alert(`El doble del número ingresado es ${resultado}`);
} else {
    resultado = numberC ** 3;
    alert(`el triple del numero ingresado es  + ${resultado}`);
}
//otra forma:
switch (numero) {
    case 1:
        resultado = numberA * 1;
        alert(`El número ingresado es ${resultado}`);
        break;
    case 2:
        resultado = numberB * 2;
        alert(`El doble del número ingresado es ${resultado}`);
        break;
    case 3:
        resultado = numberC ** 3;
        alert(`Tres veces el número ingresado es ${resultado} `);
        break;
    default:
        alert("ese valor no esta permitido");
        break;
}




//------EJERCICIOS DE CONDICIONALES (NIVEL ALTO)-----//

//-----EJERCICIO 1-----//

let nombreCliente = prompt("Ingrese su nombre:");
let paseCliente = prompt("Ingrese su pase (vip o normal):").toLowerCase();
let entradaCliente = prompt("¿Tiene entrada? (sí o no):").toLowerCase();

if (nombreCliente === "Jose" || paseCliente === "vip" || entradaCliente == "si") {
    alert("bienvenido");
    if (entradaCliente === "si") {
        let respuestaEntrada = prompt("quiere usarlo ? ingrese si o no ");
        if (respuestaEntrada == "si") {
            alert("bienvenido");
        } else {
            alert("adios");
        }
    }
    
    


} 
if(nombreCliente !== "jose" || paseCliente !== "vip" || entradaCliente !== "si") {
    let distintoNombreOEntrada = prompt("quieres comprar ?si o no ");

    if(distintoNombreOEntrada == "no"){
        alert("adios")
    }
    else{
        let dineroDisponible = prompt("dame dinero");
        if(dineroDisponible >= 1000){
            alert("venta exitosa y bienvenido")
        }
        else{
            alert("rechazo de ventas")
        }
    }
}



