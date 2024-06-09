// Inserte el código aquí
import { postTareas,getTareas,putTareas,deleteTareas} from "./api.js" // importamos los metodos de la api.js a index.js

let bntAgregar = document.getElementById("agregar") //variable del boton de agregar
let input = document.getElementById("tarea") //variable del input donde se agregar la tarea
let lista = document.getElementById("lista") //variable del contenedor donde se agregan las tareas
let contador = document.getElementById("cantidad") //variable del contador donde se muestra las tareas completadas
let inputModal = document.getElementById("tareaEdi") //variable dle input del modal donde se agrega la tarea que se valla a editar
let btncambiar = document.getElementById("cambiar") //variable del boton que realiza el evento de cambiar la tarea escrita 
let espacio = " "//variable del espacio para validar que no se ingrese y solo se ingrese el texto

obtenerPromesa()//funcion del metodo get

async function obtenerPromesa() {//
   
    let promesaObtenida= await getTareas()// variable para obtener la promesa
    lista.innerHTML = "" //esto nos ayuda a limpiar el contenedor despues de agregar la tarea
    contador.innerHTML = 0 //el numero que esta en el contenedor 

    promesaObtenida.forEach(tareas => { // forEach para recorrer el api 

       let div = document.createElement("div")// se crea un div por cada tarea creada
       div.className =  "container" // clase el contenedor
   
       let btnCheck = document.createElement("input") // crear elementos de inut
       btnCheck.type = "checkbox" // input de tipo check para decir que las tareas estan realizadas
       btnCheck.className = "check" // clase del input
       btnCheck.checked = tareas.checked // estado del input 

        btnCheck.addEventListener("click",function() { // evento del boton check 
           putTareas(tareas.id, tareas.tarea, btnCheck.checked) // medoto PUT para cambiar el estado del boton deñl check
           if (btnCheck.checked) { // si el checked es verdadero el contador aumenta
            contador.innerHTML++
           } else {
            contador.innerHTML-- // si el checked es falso el contador disminuye
           }
           obtenerPromesa()// funcion para obtener las promesas
        })
   
       let parrafo = document.createElement("p") // se crea un elemento p para el texto de las tareas
       parrafo.className = "parrafo" // clase de el elemento p
   
       let icon = document.createElement("button") // se crea un boton
       icon.textContent = "🗑️"// el boton dentro de el va a llevar el emoji del basurero
       icon.className = "icon" // clase del boton eliminar

        icon.onclick = function() { // funcion del boton
           deleteTareas(tareas.id) // metodo DELETE para eliminar las tareas de la lista y de la API
           obtenerPromesa() // llamamos a la funcion del metodo get 
        }
   
       let btnEditar = document.createElement("button") // se crea otro elemento boton para editar las tareas
       btnEditar.id = "editar" // se le da un id al boton
       btnEditar.textContent = "Editar" // dentro va a llevar la palabra editar

        btnEditar.onclick = function() { // funcion para el boton de editar
           let respu = confirm("Desea editar tarea") // alerta de tipo confirmacion 
            if (respu) { // validacion que si le respuesta a la alerta de confirmacion es verdadera se habra o YES se abra el modal
                let modal = document.getElementById("alert-dialog") // variable de la etiqueta dialog que es el modal 
                modal.show() // .show es la propiedad que hace que se habra el modal 
                inputModal.value = tareas.tarea // cuando se habra el modal dentro del input va a llevar lo escrito la tarea que decidimos editar
                btncambiar.addEventListener("click", async function() { // evento para el boton dentro del modal que hara que se edite la tarae correctamente
                    if (inputModal.value !== "" && inputModal.value != espacio) {  // validacion que si el usuario no ingresa texto o ingresa espacio no lo deje
                        await putTareas(tareas.id, inputModal.value, tareas.tarea); // metodo PUT  para editar la tarea correctamente
                        window.location.reload(); // refrescamos la pagina para ver los cambios
                    } else {
                        alert("Ingrese texto"); // se le envia una alerta 
                    }
                })
            }
        }

       lista.appendChild(div) // se agregan los div a el div principal llamada LISTA
       div.appendChild(btnCheck) // se agregan un el boton de check al div
       div.appendChild(parrafo).innerHTML = input.value // se imprime lo ingresado en el input
       div.appendChild(parrafo).innerHTML = tareas.tarea // se imprime lo que encontramos en tarea del metodo POST
       div.id= tareas.id // se le agrego el id de la tarea al div
       div.appendChild(icon) // se agrega el boton del icono al div
       div.appendChild(btnEditar) // se agrega el boton de editar al div

    });
    verMjs()// llamamos a la funcion del mensaje NO HAY TAREAS
}
 
bntAgregar.addEventListener("click", function() { // evento click del boton
    if (input.value != "" && input.value != espacio) { //  validamos que si el contenido del input es DIFERENTE a VACIO y a la variable espacio se hace lo absignado
        postTareas(input.value, false) // llamamos al metodo POST y le enviamos como aparemetros el input y el estado del boton check
        obtenerPromesa() // llamamos a la funcion del GET
        verMjs() // llamamos a la funcion del mensaje
        window.location.reload() // refrescamos la pagina
        input.value = "" // limpiamos el input 
    }else{
        alert("Ingrese texto") // si la validacion no se cumple enviamos la alerta 
    }
})
input.addEventListener("keypress", function(event) { // evento del ENTER usamos el evento keypress se utiliza cada que se presina un tecla
    if (event.key === "Enter") { // validamos que sea escrictamente igual al ENTER 
        if (input.value != ""  && input.value != espacio) {  // validamos que si el contenido del input es DIFERENTE a VACIO y a la variable espacio se hace lo absignado
            postTareas(input.value, false) // llamamos al metodo POST y le enviamos como aparemetros el input y el estado del boton check
            obtenerPromesa()// llamamos a la funcion del GET
            verMjs()// llamamos a la funcion del mensaje
            input.value = ""  // limpiamos el input
        }else{
            alert("Ingrese texto")// si la validacion no se cumple enviamos la alerta 
        }
    }
})
function verMjs() { // funcion del mesaje NO HAY TAREAS
    if (lista.children.length === 0) { // validamos que si el div principal es escrictamente a 0, y si lo es se imprime el mesaje
        let texto = document.createElement("p") // se crea un elemento p
        texto.className = "texto" // se les da una clase
        lista.appendChild(texto).innerHTML = "No hay tareas" // agregamos la etiqueta p con el mesaje "NO HAY TAREAS"
        texto.style.display = "block" // se la da un estilo block al mensaje 
    }
}