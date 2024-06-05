console.log('Peticiones')

// callback
const obtener = () => {
    console.log('obtener')
}
obtener()

const buttonObtener = document.getElementById('button-obtener')
// agregar evento al boton
// buttonObtener.addEventListener("click", obtener)

buttonObtener.addEventListener("click", async () => {
    console.log('obtener')
    const pokemonData = await obterPokemon()

    const pokemonArticle = document.getElementById('pokemon')
    // crea un elemento html
    const h3 = document.createElement('h3')
    // le asigna un texto al elemento
    h3.innerText = pokemonData.name
    // agregar un elemento como hijo
    pokemonArticle.appendChild(h3)

    // crear elemento img
    const img = document.createElement('img')
    img.src = pokemonData.sprites.front_default
    pokemonArticle.appendChild(img)

})

const obterPokemon = async () => {
    let nombrePokemon = "pikachu"
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    // const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

    const data = await respuesta.json()
    console.log(data)
    return data
}

