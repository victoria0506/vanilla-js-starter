
/*
async function obtenerTareas() {
    try{
        const api = await fetch('http://localhost:3000/api/task')
        const data = await api.json()
        return data
    }catch(error){
         console.error(error)
    }
}
*/
const postTareas = async (tarea) => { 
    try {
        const response = await fetch('http://localhost:3000/api/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
            tarea: tarea,
            })
        });
        const data = await response.json();
        //console.log(data);
        } catch(error) {
        console.log(error)
    } 
}

const getTareas = async () => { 
    try {
        const response = await fetch('http://localhost:3000/api/task', {
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




export {postTareas,getTareas}