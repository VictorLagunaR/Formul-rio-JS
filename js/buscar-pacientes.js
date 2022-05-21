var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click" , function(event){
    
    var xhr = new XMLHttpRequest();
    var erroAjax = document.querySelector("#erro-ajax")

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load" , function(){

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel")
            var resposta = (xhr.responseText)
            var pacientes = JSON.parse(resposta)
    
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente)
            })
        }else{
            console.log(xhr.status)
            console.log(xhr.responseText)

            erroAjax.classList.remove("invisivel")
            erroAjax.textContent = "Erro ao buscar os pacientes."
        }

    })
    
    xhr.send();
})