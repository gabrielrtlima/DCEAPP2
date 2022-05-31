export const userDelete = async (id) => {
    fetch('https://dce-back.herokuapp.com/api/usuario/' + id, {
        method: 'DELETE',
    })
    .then(res => res.text()) 
    .then(res => console.log(res))
}

export const anuncioDelete = (id) => {
    fetch('https://dce-back.herokuapp.com/api/anuncio/' + id, {
        method: 'DELETE',
    })
    .then(res => res.text()) 
    .then(res => console.log(res))
};