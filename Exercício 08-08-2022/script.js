//Apenas analistas e desenvolvedores podem possuir Admin os demais são apenas leitores;
//Apenas cargos de nível 3 ou superior podem ser Admin;
//Cargos inferiores a 3 podem ser removidos da lista de acesso;

var usuariosJSON = [
	{
		"funcionario":"Sancho Cedraz",
		"cargo":{
			"nome":"Analista",
			"nivel":2
		},
		"autorizado":true
	},		
	{
		"funcionario":"Ionara Pederneiras",
		"cargo":{
			"nome":"Técnico",
			"nivel":2
		},
		"autorizado":true
	},
	{
		"funcionario":"Filipe Castanho",
		"cargo":{
			"nome":"Desenvolvedor",
			"nivel":1
		},
		"autorizado":false
	},
	{
		"funcionario":"Lívia Bicalho",
		"cargo":{
			"nome":"Analista",
			"nivel":3
		},
		"autorizado":true
	},
	{
		"funcionario":"Mauro Varanda",
		"cargo":{
			"nome":"Desenvolvedor",
			"nivel":3
		},
		"autorizado":false
	},	
	{
		"funcionario":"Sandro Rosário",
		"cargo":{
			"nome":"Técnico",
			"nivel":3
		},
		"autorizado":true
	}
]

var modeloUsuario = document.querySelector(".linhas")

function carregar(){
    usuariosJSON.forEach(item => {
        let novoItem = modeloUsuario.cloneNode(true)

    novoItem.classList.remove("modelo")
    
    
	novoItem.querySelector("#nome-lista").innerHTML = item.funcionario
	novoItem.querySelector("#cargo-lista").innerHTML = item.cargo.nome
	novoItem.querySelector("#nivel-lista").innerHTML = item.cargo.nivel


	if(item.cargo.nivel < 3 ){
		novoItem.querySelector("#apagar").innerHTML = '<button onClick = "removerItem(this)"><img src = "imgs/lixeira.png" height = "15px"></button>'
	}

	if((item.cargo.nome === "Analista" || item.cargo.nome === "Desenvolvedor") && item.cargo.nivel === 3){
		novoItem.querySelector("#adminOrReader").innerHTML = '<font color = orange>ADMIN</font>'

	} else {
		novoItem.querySelector("#adminOrReader").innerHTML = '<font color = blue>LEITOR</font>'
	}

	if(item.autorizado == true){
		novoItem.querySelector("#autorizacao-lista").innerHTML = '<font color = green><strong>' + 'AUTORIZADO' + '</strong></font>'
	} else {
		novoItem.querySelector("#autorizacao-lista").innerHTML = '<font color = red><strong>' + 'NÃO AUTORIZADO' + '</strong></font>'
	}

        document.querySelector("tbody").appendChild(novoItem)

    })

}

function removerItem(e){
    e.parentNode.parentNode.remove()
}
