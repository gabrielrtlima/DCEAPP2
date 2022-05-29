export const userDelete = async (id) => {
    fetch('http://127.0.0.1:8080/usuario/' + id, {
        method: 'DELETE',
    })
    .then(res => res.text()) 
    .then(res => console.log(res))
}

export const anuncioDelete = (id) => {
    fetch('http://127.0.0.1:8080/anuncio/' + id, {
        method: 'DELETE',
    })
    .then(res => res.text()) 
    .then(res => console.log(res))
};