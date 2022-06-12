var botaoEnviar = document.querySelector(".enviar");
botaoEnviar.addEventListener("click", function(){

	event.preventDefault();

	var form = document.querySelector("#form-alerta");
	var nome = form.nome.value;
	var email = form.email.value;
	var telefone = form.telefone.value;
	var local = form.local.value;
	var mensagem = form.mensagem.value;
	var nivel = form.alerta.value;

	if(nome.length>0 && telefone.length>0 && local.length>0 && mensagem.length>0) {

	var alertaTr = document.createElement("tr");
	var nomeTd = document.createElement("td");
	var localTd = document.createElement("td");
	var mensagemTd = document.createElement("td");
	var nivelTd = document.createElement("td");

	nomeTd.textContent = nome;
	localTd.textContent = local;
	mensagemTd.textContent = mensagem;
	nivelTd.textContent = nivel;

	alertaTr.appendChild(nomeTd);
	alertaTr.appendChild(localTd);
	alertaTr.appendChild(mensagemTd);
	alertaTr.appendChild(nivelTd);

	var enviados = document.querySelector("#alertas-enviados")
	enviados.appendChild(alertaTr);

	alert("Alerta enviado com sucesso");

	form.reset();
	
	} else {
		alert("Campo obrigatório não preenchido.")
	}

});

//function mostraMensagem() {
	//event.preventDefault();
	//alert("Alerta enviado com sucesso");
	//console.log("texto de alerta");
//}	 	