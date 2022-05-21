var campoFiltar = document.querySelector("#filtrar-tabela")

campoFiltar.addEventListener("input" , function(){
    console.log(this.value) //this se refere ao que está sendo selecionado, no caso é campoFiltrar
    var pacientes = document.querySelectorAll(".paciente")
    if (this.value.length > 0) {
        for ( var i = 0 ; i <pacientes.length ; i++){
            var paciente = pacientes[i];
            var nometd = paciente.querySelector(".info-nome")
            var nome = nometd.textContent

            //new RegExp permite pesquisar por letras que contem em um palavra
            //o atributo "i" permite que você pesquise tanto por maiúsculas quanto por minúsculas
            var expressao = new RegExp(this.value, "i")
            if (!expressao.test(nome)) { //exclamação para verificar se é false a variável
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }
        }
    } 
    else{
        for (var i = 0 ; i < pacientes.length ; i++){
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel")
        }
    }
})