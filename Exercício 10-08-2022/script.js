var produtos = [
    {
        "img":"https://imgnike-a.akamaihd.net/1300x1300/014074ID.jpg",
        "nome":"Camiseta Nike",
        "preço":"R$79,90"
    },
    {
        "img":"https://a2.vnda.com.br/1500x/grandestorcidas/2021/11/05/13_11_4_423_Camisa_Tiro_Preto_GS4716_21_model.jpg?v=1636131430",
        "nome":"Camiseta Adidas",
        "preço":"R$79,90"
    },

    {
        "img":"https://imgnike-a.akamaihd.net/1300x1300/014074ID.jpg",
        "nome":"Camiseta Nike",
        "preço":"R$79,90"
    },
    {
        "img":"https://a2.vnda.com.br/1500x/grandestorcidas/2021/11/05/13_11_4_423_Camisa_Tiro_Preto_GS4716_21_model.jpg?v=1636131430",
        "nome":"Camiseta Nike",
        "preço":"R$79,90"
    }
    
]

var modeloProduto = document.querySelector(".produtos")

function carregar(){
    produtos.forEach(item => {
        let novoItem = modeloProduto.cloneNode(true)

        novoItem.classList.remove("modelo")
    
	novoItem.querySelector("#imagem-produto").setAttribute('src', item.img)
	novoItem.querySelector("#nome-produto").innerHTML = item.nome
	novoItem.querySelector("#preco-produto").innerHTML = item.preço

    document.querySelector("main").appendChild(novoItem)

  
    })
}