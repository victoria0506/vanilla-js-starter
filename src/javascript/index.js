// Inserte el código aquí

import { obtenerTareas,postTareas } from "./api.js"


let bntAgregar = document.getElementById("agregar")
let input = document.getElementById("tarea")
let lista = document.getElementById("lista")
let contador = document.getElementById("cantidad")


bntAgregar.addEventListener("click", function (){

    if (input.value != "" ) {
    
    let div = document.createElement("div")
    lista.appendChild(div)
    div.className =  "container"
    console.log(div);
    let btnCheck = document.createElement("input")
    btnCheck.type = "checkbox"
    btnCheck.className = "check"
     div.appendChild(btnCheck)
    
    btnCheck.addEventListener("click", function() {
        contador.innerHTML++
    })
    
    let parrafo = document.createElement("p")
    parrafo.className = "parrafo"
    div.appendChild(parrafo).innerHTML = input.value
    let icon =document.createElement("span")
    icon.textContent = "🗑️"
    icon.className = "icon"
    div.appendChild(icon)
    postTareas(input.value)

    verMjs()

    }else{
        alert("Ingrese un texto")
    }
})



function enter() {
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
    
            if (input.value != "") {
    
                let div = document.createElement("div")
                lista.appendChild(div)
                div.className =  "container"
                console.log(div);
        
                let btnCheck = document.createElement("input")
                btnCheck.type = "checkbox"
                btnCheck.className = "check"
                div.appendChild(btnCheck)
        
                btnCheck.addEventListener("click", function() {
                    contador.innerHTML++
                })
                
                let parrafo = document.createElement("p")
                parrafo.className = "parrafo"
                div.appendChild(parrafo).innerHTML = input.value
        
                let icon =document.createElement("span")
                icon.textContent = "🗑️"
                icon.className = "icon"
                div.appendChild(icon)
                postTareas(input.value)

                verMjs()
            }else{
                alert("Ingrese un texto")
            }
        }
    })
}enter()

let mensaje = document.getElementById("mensaje")
function verMjs() {
    if (lista.children.length === 0) {
        mensaje.style.display = "block"
    }else{
        mensaje.style.display = "none"
    }
}

