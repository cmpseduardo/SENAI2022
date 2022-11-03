var itemCard = document.querySelector(".card")
var i = 1
var contador = 10

function carregar(){
    for(i; i <= contador; i++){
        fetch("https://pokeapi.co/api/v2/pokemon/" + i)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            console.log(data.height)
    
            let novoItem = itemCard.cloneNode(true)
            novoItem.classList.remove("modelo")

            nome = novoItem.querySelector("#nome")
            altura = novoItem.querySelector("#altura")
            peso = novoItem.querySelector("#peso")
            habilidades = novoItem.querySelector("#habilidades")
           
            novoItem.style.backgroundColor = `var(--${data.types[0].type.name})`
            nome.innerHTML = data.name;   
            novoItem.querySelector('.pokeimg').src = data.sprites.versions['generation-v']['black-white'].animated.front_default

            altura.innerHTML += (data.height * 10) + 'cm'
            peso.innerHTML += (data.weight / 10) + 'kg'

            habilidades = data.abilities.forEach(a =>{
                let span = document.createElement('span')
                span.innerHTML = a.ability.name + ";"
                span.style.marginRight = '0.5rem'
                novoItem.querySelector('#habilidades').appendChild(span)
            })

            document.querySelector(".cards").appendChild(novoItem);
        })
    }
    
}

function verMais(){
    contador = contador + 20
    i = i + 10
    carregar()
}