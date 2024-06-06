// Inserte el código aquí

import { postTareas,getTareas,putTareas} from "./api.js"

let bntAgregar = document.getElementById("agregar")
let input = document.getElementById("tarea")
let lista = document.getElementById("lista")
let contador = document.getElementById("cantidad")

obtenerPromesa()

async function obtenerPromesa() {
   
    let promesaObtenida= await getTareas()
    console.log(promesaObtenida)

    let div = document.createElement("div")
    div.className =  "container"

    let btnCheck = document.createElement("input")
    btnCheck.type = "checkbox"
    btnCheck.className = "check"

    btnCheck.addEventListener("click",function() {
        contador.innerHTML++
    })

    let parrafo = document.createElement("p")
    parrafo.className = "parrafo"

    let icon =document.createElement("span")
    icon.textContent = "🗑️"
    icon.className = "icon"

    let btnEditar = document.createElement("button")
    btnEditar.id = "editar"
    btnEditar.textContent = "Editar"

    lista.appendChild(div)

    promesaObtenida.forEach(tareas => {
       div.appendChild(parrafo).innerHTML = input.value
       div.appendChild(parrafo).innerHTML = tareas.tarea
    });
    
    div.appendChild(btnCheck)
    div.appendChild(icon)
    div.appendChild(btnEditar)
}


function click() {
    bntAgregar.addEventListener("click", function() {
        if (input.value != "") {
            obtenerPromesa()
            postTareas(input.value)

            verMjs()
        }else{
            alert("Ingrese texto")
        }
    })
}click()

function Enter() {
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            if (input.value != "") {
                obtenerPromesa()
                postTareas(input.value)
                verMjs()
            } else {
                alert("Ingrese texto")
            }
        }
    })
}Enter()

/*
let btnEditar = document.createElement("button")
btnEditar.id = "editar"
function editarTarea() {
    let tareaId = 234
    let nuevaTarea = input.value
    putTareas(tareaId, nuevaTarea)

    btnEditar.addEventListener("click", editarTarea)
    console.log("holaa");
}editarTarea()
*/


let mensaje = document.getElementById("mensaje")
function verMjs() {
    if (lista.children.length === 0) {
        mensaje.style.display = "block"
    }else{
        mensaje.style.display = "none"
    }
}

