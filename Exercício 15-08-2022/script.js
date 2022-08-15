var itemUsuario = document.querySelector(".informacoes")


function carregar(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(cliente => {

            let novoItem = itemUsuario.cloneNode(true)


            novoItem.classList.remove("modelo")

    
            userID = novoItem.querySelector("#user-id")
            title = novoItem.querySelector("#title")
            checkbox = novoItem.querySelector("#checkbox")
           
            userID.innerHTML = cliente.userId;
            title.innerHTML = cliente.title;
            

            if(cliente.completed === true){
                checkbox.checked = true;
            }
    
            document.querySelector("tbody").appendChild(novoItem);
        })
    })
}