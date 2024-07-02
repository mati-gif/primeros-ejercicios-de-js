//------EJERCICIOS DE BUCLES (NIVEL BAJO)-----//


//----EJERCICIO A-----//
// let ingreseNumero = parseInt(prompt("ingrese un numero entre 1 y 100"));


// if(ingreseNumero >= 1 && ingreseNumero <= 100){
//     for (let i = ingreseNumero; i >= 0; i--) {
//         console.log(i);


//     }
// } else{
//     console.log("el numero ingresado no es valido")
// }







//----EJERCICIO B-----//

// let numero = parseInt(prompt("ingrese un numero entre 1 y 10"))

// if(numero >= 1 && numero <= 10){

//     let resultado;

//     for (let i = 1; i <= 10; i++) {
//         resultado = i * numero;
//         console.log(`${numero} X ${i} = ${resultado} `);

//     }

// } else{
//     console.log("el numero ingresa no es valido");
// }


//----EJERCICIO C-----//
// let suma = 0;

// let numeroAIngresar = parseInt(prompt("ingrese un numero(ingresa 0 para finalizar)"));



// while (numeroAIngresar != 0 ) {
//     suma += numeroAIngresar ;
//     numeroAIngresar = parseInt(prompt("Ingrese un número (ingresa 0 para finalizar)"));
// }


//     console.log(" la suma es " + suma);

//----EJERCICIO D-----//

// let suma = 0;
// let numeroAIngresar = parseInt(prompt("ingrese un numero(ingresa 0 para finalizar)"));

// do {
//     suma += numeroAIngresar ;
//     numeroAIngresar = parseInt(prompt("Ingrese un número (ingresa 0 para finalizar)"));
// } while (numeroAIngresar != 0);

// console.log(" la suma es " + suma);

//----EJERCICIO E-----//

// let estudiante = {
//     nombre: "jose",
//     apellido: "perez",
//     origen:"chile",
//     estudios: true,
//     edad:24,

// }
// for(clave in estudiante){
//     console.log(clave);
// }

// ----EJERCICIO F-----//
// let estudiante = {
//         nombre: "jose",
//         apellido: "perez",
//         origen:"chile",
//         estudios: true,
//         edad:24,
// }

// for (propiedad in estudiante){
//     console.log(estudiante[propiedad]);
// }


//------EJERCICIOS DE BUCLES (NIVEL MEDIO)-----//


//----EJERCICIO A-----//

// let numeroSecreto = 34;

// let numeroAdivinado = false;

// let numeroIntentos = 0 ;

// while(numeroAdivinado == false){
//     let ingresarNumero = parseInt(prompt("ingrese un nuemero y trate de adivinar el numero secreto"));
//     numeroIntentos++;

//     if(ingresarNumero > numeroSecreto){
//         console.log("el numero ingresado es mayor al numero secreto pruebe con otro ")
//     } else if( ingresarNumero < numeroSecreto){
//         console.log("el numero ingresado es menor al numero secreto pruebe con otro")
//     } else {
//         numeroAdivinado = true;
//         console.log(`felicidades el numero secreto es ${ingresarNumero} e hiciste ${numeroIntentos} intentos`)
//     } 
// };

//otra forma de hacerlo:

// let guessNumber ; 
// while(guessNumber != 34){
//     guessNumber = parseInt(prompt("ingrese un nuemero y trate de adivinar el numero secreto"));
//         numeroIntentos++;

//         if(guessNumber > numeroSecreto){
//                     console.log("el numero ingresado es mayor al numero secreto pruebe con otro ")
//                 } else if( guessNumber < numeroSecreto){
//                     console.log("el numero ingresado es menor al numero secreto pruebe con otro")
//                 } else{console.log(`felicidades el numero secreto es ${guessNumber} e hiciste ${numeroIntentos} intentos`)

//                 }
// }






//----EJERCICIO B-----//

// let numeroA = parseInt(prompt("ingrese un numero para encontrar su divisor"));
// let divisores = [];


// for(i = 1 ; i <= numeroA; i++  ){
//     if(numeroA %  i === 0 ){
//         divisores.push(i);
//     }
// }

// console.log(divisores);


//----EJERCICIO C-----//


// let campana = Number(prompt("ingrese un numero del 1 al 10"));

// let campanaResultado = "" ;

// function bell(){
//     console.log("Ding Dong ");
//     return "Ding Dong"
// }


// for(i = 1; i <= campana;i++){

//     campanaResultado += bell();
    
    

// }

// console.log(campanaResultado );


//----EJERCICIO D-----//

let dateLimit = "1997-8-3";
const fechas = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"];




for(i = 0 ; i <= fechas.length; i++){
    
    if(fechas[i] >= dateLimit){
        console.log(fechas[i]);
    } 
    

};








//----EJERCICIO E-----//

// const colores = ["Rojo","verde","azul","violeta","marron","negro","blanco"];

// for(muchosColores of colores){
//     console.log(muchosColores);
// }


//----EJERCICIO F-----//

const colores = ["Rojo","verde","azul","violeta","marron","negro","blanco"];


function color(){

    for(muchosColores of colores){

        console.log(muchosColores);

}


}

color();
color();

//----EJERCICIO G-----//

const number = [3,5,7,9,11];



for (doble of number){
     let variable = doble * 2;

    console.log(` el numero es ${doble} y su doble es ${variable}`   )



}


//----EJERCICIO H-----//

const familia  = [
    {
        nombre: "Juan",
        apellido: "Perez",
        edad: 35, 
        relacion: "Padre", 

    },
    {
        nombre: "María", 
        apellido: "Perez",
        edad: 32, 
        relacion: "Madre", 
    },
    {
        nombre: "Pedro", 
        apellido: "Perez",
        edad: 10, 
        relacion: "Hijo", 
    },
    {
        nombre: "Ana", 
        apellido: "Perez",
        edad: 7, 
        relacion: "Hija", 
    },
    
];

function presentacionFamilia(familia){
    let presentacion;
    for(presentacion of familia){
        console.log(`hola mi nombre es ${presentacion.nombre} y tengo ${presentacion.edad} años`);
    }
}
presentacionFamilia(familia);



//------EJERCICIOS DE BUCLES (NIVEL ALTO)-----//


//----EJERCICIO A-----//

// let IngresaUnNumero = parseInt(prompt("ingresa un numero"));
// let suma1 = 0 ;
// let suma2 = 0 ;

// while(IngresaUnNumero != 0){
//     if(IngresaUnNumero %2 == 0 ){

//         suma1 += IngresaUnNumero;
        
    
//     } else{
//         suma2 += IngresaUnNumero;
//     }
//     IngresaUnNumero = parseInt(prompt("ingrese un numero"));


// }


// console.log(`la suma de numeros pares es ${suma1} y la suma de numeros impares es ${suma2}` );



//----EJERCICIO B-----//

const numeros = [1,2,3,4,20,6,7,80,9,10];
let numeroMayor = 0;



for (let i = 0; i < numeros.length; i++) {
    
    if(numeros[i] > numeroMayor){
        numeroMayor = numeros[i];
    }

}
console.log(numeroMayor);
