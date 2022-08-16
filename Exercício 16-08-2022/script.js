function logar(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(clienteLogin => {

        var valueInputEmail = document.querySelector("#input-email").value
        var valueInputSenha = document.querySelector("#input-senha").value
        if((valueInputEmail == clienteLogin.email) && (valueInputSenha == clienteLogin.username)){

            var data = {
                email: valueInputEmail,
                senha: valueInputSenha,
                
                userId: clienteLogin.id,
                nomeUsuario: clienteLogin.name,
            }
            
            var userData = JSON.stringify(data)

            localStorage.setItem('dadosUser', userData)

            window.location.href = "perfil.html"

        }else{
            console.log("TESTE")
        }
        


        })
    })
}


var itemUsuario = document.querySelector(".post")

function carregar(){
    let info = window.localStorage.getItem('dadosUser')
    let infoJSON = JSON.parse(info)
   
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(clientePosts  => {
            if(infoJSON.userId === clientePosts.userId){
            let novoItem = itemUsuario.cloneNode(true)


            novoItem.classList.remove("model")

            nameUserHeader = document.querySelector("#name-user-header")
            nameUserHeader.innerHTML = infoJSON.nomeUsuario

    
            nameUser = novoItem.querySelector("#name-user")
            titlePost = novoItem.querySelector("#title-post")
            bodyPost = novoItem.querySelector("#body-post")
    
            
            nameUser.innerHTML = infoJSON.nomeUsuario


            titlePost.innerHTML = clientePosts.title
            bodyPost.innerHTML = clientePosts.body
            
            document.querySelector("main").appendChild(novoItem);
         } else {
            console.log("NÃO PERTENCE AO USUÁRIO")
         }
        })
    })
}