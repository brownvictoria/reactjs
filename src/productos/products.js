const products = [
    {id:1, nombre:"Xiaomi Note 7", precio:350, stock:4, descripcion: "negro"},
    {id:1, nombre:"Xiaomi Note 8", precio:350, stock:5, descripcion: "rosa"},
    {id:1, nombre:"Xiaomi Note 9", precio:350, stock:3, descripcion: "gris"},
    {id:1, nombre:"Xiaomi Note 10", precio:350, stock:6, descripcion: "azul"}

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    }) 
}

export default getProducts