// Inserte el código aquí
import { postTareas,getTareas,putTareas} from "./api.js"

let bntAgregar = document.getElementById("agregar")
let input = document.getElementById("tarea")
let lista = document.getElementById("lista")
let contador = document.getElementById("cantidad")

let inputModal = document.getElementById("tareaEdi")
let btncambiar = document.getElementById("cambiar")
console.log(btncambiar);

obtenerPromesa()

async function obtenerPromesa() {
   
    let promesaObtenida= await getTareas()
    console.log(promesaObtenida)
    lista.innerHTML = ""

    promesaObtenida.forEach(tareas => {

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
   
       let icon =document.createElement("button")
       icon.textContent = "🗑️"
       icon.className = "icon"

       icon.onclick = function() {
       
       }
   
       let btnEditar = document.createElement("button")
       btnEditar.id = "editar"
       btnEditar.textContent = "Editar"

       btnEditar.onclick = function() {
        let respu = confirm("Desea editar tarea")
        if (respu) {
            let modal = document.getElementById("alert-dialog")
            modal.show()
        }
      };
       
      btncambiar.addEventListener("click", function() {
      })

       lista.appendChild(div)
       div.appendChild(btnCheck)
       div.appendChild(parrafo).innerHTML = input.value
       div.appendChild(parrafo).innerHTML = tareas.tarea
       div.id= tareas.id
       div.appendChild(icon)
       div.appendChild(btnEditar)
    });
}

function click() {
    bntAgregar.addEventListener("click", function() {
        if (input.value != "") {
            //confirm("Desea agregar tarea")
            postTareas(input.value)
            obtenerPromesa()
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
                //confirm("Desea agregar tarea")
                postTareas(input.value)
                obtenerPromesa()
                verMjs()
            } else {
                alert("Ingrese texto")
            }
        }
    })
}Enter()

let mensaje = document.getElementById("mensaje")
function verMjs() {
    if (lista.children.length === 0) {
        mensaje.style.display = "block"
    }else{
        mensaje.style.display = "none"
    }
}


