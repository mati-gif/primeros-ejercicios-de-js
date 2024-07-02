// document.write("bienvenidos a todos");

// document.write("<br>")
// let numero1 = prompt("cual es el numero");
// document.write(numero1);

// document.write("<br>")
// document.write("<br>")

// console.log("iniciando Javascript");

//--------NIVEL BAJO-------//

let miNombre = "Rose";
let miApellido = "Perez";
let miEdad = 20;

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);

let miMascota = "Rocky";
let edadMascota = 5 ;

console.log(miMascota);
console.log(edadMascota);


let nombreCompleto = miNombre + " " + miApellido;

console.log(nombreCompleto)

let nombreCompleto2 = `mi nombre completo es: ${miNombre} ${miApellido}`;
console.log(nombreCompleto2);


let presentationText = "mi nombre es:" + miNombre + " "  + miApellido + " " + " y tengo:" + miEdad;
console.log(presentationText);
let presentationText2 = `mi nombre completo es: ${miNombre} ${miApellido} y tengo ${miEdad} años, tengo una mascota que se llama ${miMascota} y tiene ${edadMascota}`;
console.log(presentationText2);

//--------NIVEL MEDIO-------//

//-----EJERCICIO A-----//

let sumEdad = miEdad + edadMascota;

console.log(sumEdad)

let resEdad = miEdad - edadMascota;
console.log(resEdad);

let multiEdad = miEdad * edadMascota;
console.log(multiEdad);

let divEdad = miEdad / edadMascota;
console.log(divEdad);


/*-----OBJETOS----*/


//-----EJERCICIO B-----//


let students = {
    materia: "biologia",
    edad : 22,
    año : "ultimo año",
    curso: "5to a",
    ingreso:2018,
};

console.table(students);
console.log(students.materia);
console.log(students.edad);
console.log(students.año);
console.log(students["curso"]);
console.log(students["ingreso"]);


//-----EJERCICIO C-----//


/*le estamos dando un nombre a la variable */
let mascota = {
    tipo: "perro",
    nombre: "rocky",
    edad: "4 años",
    raza: "golden retriever",
    comida:"pollito",
}

console.table(mascota);

console.log(mascota.raza);
console.log(mascota.edad);
console.log(mascota["comida"]);
console.log(mascota.tipo);
console.log(mascota["nombre"]);


// console.log(mascota["edad"]);



//-----EJERCICIO D-----//

/*------ARRAYS-----*/

let frutas = ["manzana","banana","pera","durazno","sandia"];

console.log(frutas);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[1]);
console.log(frutas[0]);
console.log(frutas[2]);

console.log(frutas[0],frutas[1], frutas[2], frutas[3], frutas[4]);




//--------NIVEL ALTO-------//




//-----EJERCICIO A-----//


/*----uso del PROMT()*/ 

// let edad = Number(prompt("ingrese su edad"));

// let iamAdult = edad >= 18;

// console.log("soy un adulto" + " " + edad);



//-----EJERCICIO B-----//

/*--- mas arreglos---*/

let numeros = [1,2,3,4,5];
console.log(numeros);
console.log(numeros[1]);
console.log(numeros[0]);
console.log(numeros[3]);
console.log(numeros[2]);
console.log(numeros[4]);

//-----EJERCICIO C-----//

let familia = [
    { nombre: "Juan", edad: 35 },
    { nombre: "María", edad: 32 },
    { nombre: "Pedro", edad: 10 },
    { nombre: "Ana", edad: 8 },
    { nombre: "Carlos", edad: 5 }

];

console.log(familia);


console.log(familia[0].nombre,familia[0].edad)
console.log(familia[1].nombre,familia[1].edad)
console.log(familia[2].nombre,familia[2].edad)
console.log(familia[3].nombre,familia[3].edad)
console.log(familia[4].nombre,familia[4].edad)



//-----EJERCICIO D -----//

/*---crear varibale llamada ramdom text---*/

let ramdomText = `${frutas[1]}  ${numeros[3]}  ${familia[4].nombre}`;

console.log(ramdomText);





