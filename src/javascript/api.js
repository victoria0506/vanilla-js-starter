
const postTareas = async (tarea, checked) => { // funcion del metodo POST
    try {
        const response = await fetch('http://localhost:3000/api/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
            tarea: tarea, 
            checked : checked
            })
        });
        const data = await response.json();
        } catch(error) {
        console.log(error)
    } 
}

const getTareas = async () => { // funcion del metodo GET
    try {
        const response = await fetch('http://localhost:3000/api/task/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        });
        const data = await response.json();
        return(data)
        } catch(error) {
        console.log(error)
    } 
}

const putTareas = async (id, tarea,checked) => { // funcion del metodo PUT
    try {
        const response = await fetch('http://localhost:3000/api/task/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
            tarea: tarea,
            checked : checked
            })
        });
        const data = await response.json();
        } catch(error) {
        console.log(error)
    } 
}

const deleteTareas = async (id) => { // funcion del metodo DELETE
    try {
        const response = await fetch('http://localhost:3000/api/task/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        });
        const data = await response.json();
        } catch(error) {
        console.log(error)
    } 
}

export {postTareas,getTareas,putTareas,deleteTareas} // exportamos las funciones al archivo index.js