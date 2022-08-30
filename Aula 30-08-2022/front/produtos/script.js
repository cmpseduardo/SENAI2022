const produtos = document.querySelector(".produtos")
const produto = document.querySelector(".produto")
const modal = document.querySelector(".modal")

fetch("http://localhost:3000/produtos")
.then(resp => {return resp.json()})
.then(produtos => {
    produtos.forEach(produto => {
        duplicarProduto(produto)
    })
})

function cadastrar(){
    showModal()
    let cod = document.querySelector("#cod").value
    let nome = document.querySelector("#modal-nome").value
    let qntd = document.querySelector("#qntd").value
    let preco = document.querySelector("#modal-preco").value

    let data = JSON.stringify({
        "cod": cod,
        "nome": nome,
        "qntd": qntd,
        "preco": preco
    });


    fetch("http://localhost:3000/produtos", {   
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },

        "body": data
    })

    .then(resp=> {return resp.json()})
    .then(data => {
        duplicarProduto(data)
        showModal()
    })
}

function showModal(){
    modal.classList.toggle("model")
}

function duplicarProduto(info){
    let novoProduto = produto.cloneNode(true)

    novoProduto.classList.remove("model")

    novoProduto.querySelector("#nome").innerHTML = info.nome
    novoProduto.querySelector("#preco").innerHTML = info.preco

    produtos.appendChild(novoProduto)
}