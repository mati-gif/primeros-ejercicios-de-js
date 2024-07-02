//------EJERCICIOS DE FUNCIONES (NIVEL BAJO)-----//

//----EJERCICIO A-----//

function agregar() {
  console.log(100 * 20);
}

//-------EJRCICIO B----//

function agregar() {
  console.log(100 * 20);
}

agregar();

//-------EJRCICIO C----//

function agregar(num1, num2) {
  console.log(num1 * num2);
}

agregar(100, 20);

//-------EJRCICIO D,E----//

function agregar(num1, num2) {
  let resultado4 = num1 * num2;
  return resultado4;
}

let resultadoFinal = agregar(100, 20);

console.log(resultadoFinal);

//otra forma:
// //---EJERCICIO A,B,C,D,E-----//
// function agregar(valor1,valor2){
//     let numero1 = valor1;
//     let numero2 = valor2;

//     return numero1 * numero2;
// }

// let resultado2 = agregar(100,20)
// console.log(resultado2);

//---EJERCICIO F-----//

let funcionAnonima = function (valor1, valor2) {
  let numeroA = valor1;
  let numeroB = valor2;
  return numeroA * numeroB;
};

let resultado3 = funcionAnonima(100, 30);
console.log(resultado3);

//otra forma:
console.log(funcionAnonima(100, 40));

//------EJERCICIOS DE FUNCIONES (NIVEL MEDIO)-----//

//---EJERCICIO A-----//

function saludar(nombre) {
  console.log(`hola ${nombre}`);
}
saludar("matias");
saludar("juan");
saludar("pedro");

//---EJERCICIO B-----//

const multiplicar = function (numero1, numero2) {
  return numero1 * numero2;
};

let resultado = multiplicar(4, 4);
let resultadoB = multiplicar(6, 5);
console.log(resultado);
console.log(resultadoB);

//--otra forma

console.log(multiplicar(3, 3));

//---EJERCICIO C-----//

function area(base, altura) {
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}

console.log(area(8, 8));
//otra forma.
let respuesta = area(9, 9);
console.log(respuesta);

//---EJERCICIO D-----//

function perimetro(lado1, lado2, lado3) {
  let perimetroTriangulo = lado1 + lado2 + lado3;
  return perimetroTriangulo;
}

console.log(perimetro(2, 6, 10));
// otra forma:
let resultadoPerimetro = perimetro(11, 22, 1);
console.log(resultadoPerimetro);

//---EJERCICIO E-----//

function compra(precio, cantidad) {
  let precioTotal = precio * cantidad;

  if (cantidad >= 10 && cantidad < 20) {
    precioTotal = cantidad * 0.9;
  } else if (cantidad >= 20) {
    precioTotal = cantidad * 0.8;
  }

  return precioTotal;
}

console.log(compra(10, 5));
console.log(compra(10, 10));
console.log(compra(10, 20));

//otra forma:
let resultadoDeLaCompra = compra(5, 21);
console.log(resultadoDeLaCompra);

//-otra forma:(no se si esta bien)
// function compra2(precio, cantidad) {

//     if (cantidad >= 10 && cantidad < 20) {

//         return cantidad * 0.9;

//     } else if (cantidad >= 20) {

//         return cantidad * 0.8 ;
//     }

//     return precio * cantidad;

// }
// let compraPrueba = compra2(10,5);
// console.log(compraPrueba);

// console.log(compra2(10,5))
// console.log(compra2(10,10))
// console.log(compra2(10,20))

//---EJERCICIO F-----//

function soyAdulto(edad) {
  let mayorOMenor;
  if (edad >= 18) {
    mayorOMenor = "soy adulto";
  } else {
    mayorOMenor = "no lo soy";
  }
  return mayorOMenor;
}

console.log(soyAdulto(17));
console.log(soyAdulto(18));
console.log(soyAdulto(10));
console.log(soyAdulto(17));
console.log(soyAdulto(30));

//------EJERCICIOS DE FUNCIONES (NIVEL ALTO)-----//

//---EJERCICIO A-----//

function ingresoAnual(ingreso) {
  let impuesto;

  if (ingreso <= 10000) {
    impuesto = ingreso * 0.1;
  } else if (ingreso > 10000 && ingreso <= 20000) {
    impuesto = ingreso * 0.15;
  } else {
    impuesto = ingreso * 0.2;
  }

  return impuesto;
}

console.log(ingresoAnual(5000));
console.log(ingresoAnual(15000));
console.log(ingresoAnual(25000));

//---EJERCICIO B-----//

function verificarDia(dia) {
  let mensaje;

  //chequear pero creo que esta mal//

  // switch(dia){
  //     case 1:
  //     case 2:
  //     case 3:
  //     case 4:
  //     case 5:
  //         mensaje = "es un dia habil";
  //     case 6:
  //     case 7:
  //         mensaje = "es fin de semana";
  // }
  if (dia >= 1 && dia <= 5) {
    mensaje = "es un dia habil";
  } else if (dia >= 6 && dia <= 7) {
    mensaje = "es un fin de semana";
  } else {
    mensaje = " no es un dia valido";
  }
  return mensaje;
}

console.log(verificarDia(7));
console.log(verificarDia(8));
console.log(verificarDia(3));
let diaVerificado = verificarDia(6);
console.log(diaVerificado);

//otra forma:

function chequearDia(dia) {
  let mensaje2;
  switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      mensaje2 = "es un dia habil";
      break;
    case 6:
    case 7:
      mensaje2 = "es un fin de semana";
      break;
    default:
      if (dia < 1 || dia > 7) {
        mensaje2 = "no es un dia valido";
      }
  }
  return mensaje2;
}

console.log(chequearDia(7));
console.log(chequearDia(11));
console.log(chequearDia(2));
let diaChequeado = chequearDia(15);
console.log(diaChequeado);

//---EJERCICIO C-----//

// function informacionPersonal(){
//     let ingresaNombre = prompt("ingresa tu nombre");
//     if(ingresaNombre){
//         console.log(ingresaNombre);
//         let ingresaApellido = prompt("ingresa tu apellido");
//         if(ingresaApellido){
//             console.log(ingresaApellido);
//             let ingreseSuEdad = parseInt(prompt("ingresa tu edad"));
//             if(ingreseSuEdad ){
//                 console.log(ingreseSuEdad);

//                 const datosIngresados = {
//                         nombre: ingresaNombre,
//                         apellido: ingresaApellido,
//                         edad: ingreseSuEdad,
//                         }
//                         return datosIngresados;
//             } else{
//                 console.error("la edad no puede estar vacio")
//             }

//         } else{
//             console.error("el apellido no puede estar vacio")
//         }
//     } else{
//         console.error("el nombre no puede estar vacio");
//     }
// }

// console.log(informacionPersonal());



//------chequear pero creo que no va-----//
// function informacionPersonal() {
//   let ingresaNombre = prompt("ingresa tu nombre");
//   if (ingresaNombre === "") {
//     console.error("el nombre no puede estar vacio");
//   } else {
//     let ingresaApellido = prompt("ingresa tu apellido");
//     if (ingresaApellido === "") {
//       console.error("el apellido no puede estar vacio");
//     } else {
//       let ingreseSuEdad = prompt("ingresa su edad");
//       if (ingreseSuEdad === "") {
//         console.error("la edad no puede estar vacia");
//       } else {
//         const datosIngresados = {
//           nombre: ingresaNombre,
//           apellido: ingresaApellido,
//           edad: ingreseSuEdad,
//         };
//         return datosIngresados;
//       }
//     }
//   }
// }

// console.log(informacionPersonal());

//------chequear pero creo que no va-----//

// function informacionPersonal(nombre,apellido,edad){
//     let ingreseNombre = prompt("ingrese su nombre");
//     let ingreseApellido = prompt("ingrese su apellido");
//     let ingreseEdad = parseInt(prompt("ingrese su edad"));

//     if(!ingreseNombre){
//         alert(" el nombre no puede estar vacio");
//     }

//     if( !ingreseApellido){
//         alert(" el apellido no puede estar vacio");

//     }

//     if(!ingreseEdad ){
//         alert(" la edad no puede estar vacia");
//     }

//     const infoDeLaPersona = {
//         nombre: `${nombre}`,
//         apellido: `${apellido}`,
//         edad: `${edad}`,
//     }
//     return infoDeLaPersona;

// }
// // let respuestaa = infoDeLaPersona("matias")
// // infoDeLaPersona("matias");
// // infoDeLaPersona("perez");
// // infoDeLaPersona(10);

// console.log(informacionPersonal());
// console.log(informacionPersonal());
// console.log(informacionPersonal());

//---EJERCICIO D-----//



//otra forma:

// function saludo(frase){
//     return `hola mi nombre es ${frase}`
// }

// function mostrarSaludo(){
//     let saludoDeBuenosDias = prompt("ingrese su nombre");
//     if(saludoDeBuenosDias ){
//                 alert(saludo(saludoDeBuenosDias));
//         }
// }

// mostrarSaludo();

//otra forma:

function saludo(frase){
    return `hola mi nombre es ${frase}`;
}

function calcularAge(añonacimiento,añoactual){
    let año1 = añonacimiento;
    let año2 = añoactual;
    return año2 - año1;
}

function presentarse(){
    let saludar = prompt("ingrese su nombre");
    let edadPersona = parseInt(prompt("ingrese su año actual"));
    let edadPersona2 = parseInt(prompt("ingrese su año de nacimiento"));
    if(saludar){
        let saludoFinal = saludo(saludar);
        alert(saludoFinal);
    }

    if (edadPersona !== edadPersona2){
        let calcularAgeFinal = calcularAge(edadPersona2,edadPersona);
        alert(calcularAgeFinal);

    }
    

}

presentarse();
