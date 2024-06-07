
const postTareas = async (tarea, checked = false) => { 
    try {
        const response = await fetch('http://localhost:3000/api/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
            tarea: tarea, checked
            })
        });
        const data = await response.json();
        } catch(error) {
        console.log(error)
    } 
}

const getTareas = async () => { 
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

const putTareas = async (Id, tareaEdi) => { 
    try {
        const response = await fetch('http://localhost:3000/api/task/'+ Id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
            tarea: tareaEdi,
            })
        });
        const data = await response.json();
        } catch(error) {
        console.log(error)
    } 
}

const deleteTareas = async (id) => { 
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

export {postTareas,getTareas,putTareas,deleteTareas}