/* Desafío Complementario 1: Crear un algoritmo utilizando un ciclo.
Uso de un while loop para validar usuario y pedir creación de contraseña. */ 

// PASO 1: PEDIR AL USUARIO NOMBRE
let usernamePrompt = prompt("Ingrese su nombre de usuario");

// PASO 2: REVISAR SI EL NOMBRE YA EXISTE EN LA "BASE DE DATOS"
const usernameStorage =  ["alepo","joseluis1403", "chilorio", "tfdiego96", "tenzorblue","imasadpanda","mskitty"];

while(usernameStorage.includes(usernamePrompt) === false) { 
    if((usernamePrompt != null) && (usernamePrompt !== "")) { 
        alert("El nombre de usuario no está registrado, por favor verifique la entrada");   
    }
    usernamePrompt = prompt("Ingrese su nombre de usuario");  
}

// PASO 3: CREAR CONTRASEÑA
let passwordPrompt = prompt("Ingrese la contraseña que utilizará en el sitio"); //Entiendo que requiere más seguridad, es para efectos del desafío
let confirmPassword = prompt("Confirme la contraseña.");


while(passwordPrompt !== confirmPassword) {
    alert("Error: Asegúrese de escribir la misma contraseña ambas veces.");
    passwordPrompt = prompt("Ingrese la contraseña que utilizará en el sitio");
    confirmPassword = prompt("Confirme la contraseña.");
};
alert(`Contraseña generada, gracias ${usernamePrompt}.`)
    

