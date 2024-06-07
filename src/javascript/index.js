// Inserte el código aquí
import { postTareas,getTareas,putTareas,deleteTareas} from "./api.js"

let bntAgregar = document.getElementById("agregar")
let input = document.getElementById("tarea")
let lista = document.getElementById("lista")
let contador = document.getElementById("cantidad")
let inputModal = document.getElementById("tareaEdi")
let btncambiar = document.getElementById("cambiar")

obtenerPromesa()

async function obtenerPromesa() {
   
    let promesaObtenida= await getTareas()
    console.log(promesaObtenida)
    lista.innerHTML = ""
    contador.innerHTML = 0

    promesaObtenida.forEach(tareas => {

       let div = document.createElement("div")
       div.className =  "container"
   
       let btnCheck = document.createElement("input")
       btnCheck.type = "checkbox"
       btnCheck.className = "check"
       btnCheck.checked = tareas.checked

        btnCheck.addEventListener("click",function() {
           if(btnCheck.checked) {
            contador.innerHTML++
           }else{
            contador.innerHTML--
           }
           promesaObtenida()
           postTareas(btnCheck.checked)
        })
   
       let parrafo = document.createElement("p")
       parrafo.className = "parrafo"
   
       let icon =document.createElement("button")
       icon.textContent = "🗑️"
       icon.className = "icon"

        icon.onclick = function() {
           deleteTareas(tareas.id)
           obtenerPromesa()
        }
   
       let btnEditar = document.createElement("button")
       btnEditar.id = "editar"
       btnEditar.textContent = "Editar"

        btnEditar.onclick = function() {
           let respu = confirm("Desea editar tarea")
            if (respu) {
              let modal = document.getElementById("alert-dialog")
              modal.show()
              inputModal.value = tareas.tarea

            btncambiar.addEventListener("click", function() {
                putTareas(tareas.id, inputModal.value, tareas.tarea)
                window.location.reload()
            })
            }
        }

       lista.appendChild(div)
       div.appendChild(btnCheck)
       div.appendChild(parrafo).innerHTML = input.value
       div.appendChild(parrafo).innerHTML = tareas.tarea
       div.id= tareas.id
       div.appendChild(icon)
       div.appendChild(btnEditar)

    });
    verMjs()
}

function click() {
    bntAgregar.addEventListener("click", function() {
        if (input.value != "") {
            postTareas(input.value)
            obtenerPromesa()
            verMjs()
            input.value = ""
        }else{
            alert("Ingrese texto")
        }
    })
}click()

function Enter() {
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            if (input.value != "") {
                postTareas(input.value)
                obtenerPromesa()
                verMjs()
                input.value = ""
            } else {
                alert("Ingrese texto")
            }
        }
    })
}Enter()

function verMjs() {
    if (lista.children.length === 0) {
        let texto = document.createElement("p")
        texto.className = "texto"
        lista.appendChild(texto).innerHTML = "No hay tareas"
        texto.style.display = "block"
    }
}

