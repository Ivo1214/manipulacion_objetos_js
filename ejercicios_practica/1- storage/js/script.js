"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá realizar los siguientes enunciados todos en este
    script de javascript. Cada enunciado agrega una funcionalidad
    extra al programa.
/*

/* 1 - Enunciado

- Debera capturar el evento "onclick" del boton "Ingresar"
y leer los datos ingresados en "usuario" y "email".
- Tome esos datos y almacenelo en memoria permanente del explorador.
- Deberá completar las etiquetas <p> de id "usuarioLogeado" y "emailLogeado"
con los datos almacenados en memoria, a fin de darle la bienvenida al usuario logeado.

*/


document.getElementById("btnIngresar").onclick = () => {
    let email= document.getElementById("email").value;
    let usuario = document.getElementById("usuario").value;

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("email", email);
    document.getElementById("usuarioLogeado").innerText = usuario;
    document.getElementById("emailLogeado").innerHTML = email;

    document.getElementById("login").classList.add("hidden");
    document.getElementById("logout").classList.remove("hidden");
}

/* 2 - Enunciado

- Al comenzar el script se debe verificar si en memoria se encuentran
almacenados los datos de "usuario" y "email".
- En caso de que hubiera datos almacenados se debe completar los elementos
"usuarioLogeado" y "emailLogeado".
- Se debe ocultar la sección "login" (puede usar la clase CSS hidden ya creada)
y deberá revelar la sección "logout" (quitar la clase hidden).

*/

if (localStorage.getItem("usuario") !== null && localStorage.getItem("email") !== null) {
    document.getElementById("usuarioLogeado").innerText = localStorage.getItem("usuario");
    document.getElementById("emailLogeado").innerHTML = localStorage.getItem("email");
    document.getElementById("login").classList.add("hidden");
    document.getElementById("logout").classList.remove("hidden");
}

/* 3 - Enunciado

- Debera capturar el evento "onclick" del boton "Salir". Cuando este
botón sea presionado deberá borrar de memoria las variables de este programa.
- Luego deberá refrescar la página (desde javascript, con window.location.reload()) y al
volverse a cargar debería aparecer nuevamente la sección de bienvenida
ya que no debería haber más datos en memoria cargados.

*/

document.getElementById("btnSalir").onclick = () => {
    localStorage.clear();
    window.location.reload();
}
