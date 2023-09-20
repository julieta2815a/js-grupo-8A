// VARIABLE: Es un espacio de almacenamiento que nos permiten guardar informacion

/*
    DATOS:
    Tenemos diferentes tipos de datos:

    Numericos: Interger, Float =>35, 1.68
    Alfanumericos; String => Contraseñas, Email, Expresiones, domicilios.
    Boleanos: True/False => evaluaciones de expresiones. como verdadero o falso


    Como se si un dato es EXCLUSIVAMENTE Interger p String?
    Si al dato lo vamos a utilizar para hacer operaciones matematicas, entonces es Numerico
    Sino , sera un dato del tipo String.


    ?VARIABLES:
    nombre: Julieta
    mascota: Limon
    Ciudad: Tucuman
 */

//* PARA DECLARAR UNA VARIABLES utilizaremos ciertas reglas


//LET / COST => Nos permite crear una variable para almacenar datos
// SINTAXIS CONRRESPONDIENTE: primero creamos la variable y Luego le asignamos el dato a contener

let nombre="Julieta"
let mascota="Limon"
let Ciudad="Tucuman"

// con LET, podremos cambiar el contenido que tiene almacenado, mientras que CONST , mantendra el mismon contenido siempre

/*Creacion de Variables : Recomendaciones IMPORTANTES
//NO declaren variables intentado poner solo numeros o iniciarlo con numeros o simbolos
*/
let nombrepersona="Julieta"

// Usar snack_case o camelCase segun lo conveniente

// snack_case , sirve para separar cada palabra de nuestra variable con un guion bajo  EJ:
let direccion_empleo="Av siempre viva 345"

// camelCase , es iniciar cada palabra con MAYUSCULA EXCEPTO LA PRIMERA
let diaDelMes="30"


// METODOS PARA VISUALIZAR NUESTRO CODIGO:

// A TRAVES DE un "console.log()", podremos visualizar resultados desde la consola de desarrollador en una pag
console.log("frase desde mi documento javascripts")
console.log("3+3");
console.log(2+2);
console.log(6*8);


// Si queremos que el usuario vea el RESULTADO de lo OCURRIDO, utilizaremos el "ALERT"
alert("mensaje para el usuario")

// Como pedir un dato desde la venta ALERT; 
// Para esto; utilizamos el promt: es una ventana de alerta pero con la posibilidad de ingresar datos

let nombre_alumno = prompt("ingrese su nombre: ")
alert("hola", nombre_alumno)

//Concatenar: unir dos strings para que se TRANSFORMEN EN UNO SOLO
alert("Bienvenido " + nombre_alumno)