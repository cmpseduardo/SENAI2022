var itemCard = document.querySelector(".card")

function carregar(){
    for(i = 1; i <= 16; i++){
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
            altura.innerHTML = (data.height * 10) + 'cm'
            peso.innerHTML = (data.weight / 10) + 'kg'
            habilidades = data.abilities.forEach(a =>{
                let span = document.createElement('span')
                span.innerHTML = a.ability.name
                novoItem.querySelector('#habilidades').appendChild(span)
            })

            document.querySelector("body").appendChild(novoItem);
        })
    }
    
}