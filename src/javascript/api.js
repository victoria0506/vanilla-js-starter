
/*
async function obtenerTareas() {
    try{
        const api = await fetch('http://localhost:3000/api/task')
        const data = await api.json()
        return data
    }catch(error){ console.error(error)}
}


const asyncPostCall = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
            tarea: "Tarea",
            })
        });
          const data = await response.json();
        console.log(data);
        } catch(error) {
        console.log(error)
    } 
}

asyncPostCall()
*/