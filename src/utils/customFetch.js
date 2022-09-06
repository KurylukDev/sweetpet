let is_ok = true

const customFetch = (time, task) => {
    return new Promise ((resolve, reject) =>{
        if(is_ok){
            resolve(task)
        }else{
            reject('Error en promise')
        }
    }, time)
}

export default customFetch