console.log("prueba")

//declaracion de variables
//let nombre var: type var = contenido var

let nombre:string = 'samir'
nombre = nombre.toUpperCase();
console.log(nombre);

let numero: number = 5;
numero = numero + 5;
console.log(numero);

//union types
//una variable tiene mas de un estado
let tax: number|string = 10;
tax = 100;
tax = '$10'

//creacion de estados propios
let requestStatus: 'pending'|'succes'|'error' = 'pending'

//declaracion de variable any
let any_var: any = 4;
any_var = 'vuelta a string'

//array 
const nombres = ["samir","pamela","luis"];
//ejemplo de for
for(let nombre of nombres){
    if(nombre == "samir"){
        console.log("nombre encontrado");
    }
    else{
        console.log("nombre NO encontrado");
    }
}

