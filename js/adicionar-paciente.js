var botaoAdicionar = document.querySelector("#adicionar-paciente");  
botaoAdicionar.addEventListener("click" , function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoForm(form); // linha 29

    

    var erros = validaPaciente(paciente) //linha 62
    
    if (erros.length > 0) {
        exibeMensagemDeErro(erros); //linha 84
        return;
    }
    else{
        var ul= document.querySelector("#mensagens-erro");
        ul.style.display ="none"
    }

    adicionaPacienteNaTabela(paciente)

    form.reset()
})


function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente); //linha 43
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}

//Extraindo informações o paciente do form
function obtemPacienteDoForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value , form.altura.value) + "%"
    }

    return paciente;
}

// Criar a tr e a td do paciente
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome,"info-nome");
    var pesoTd = montaTd(paciente.peso,"info-peso");
    var alturaTd = montaTd(paciente.altura,"#info-alura");
    var gorduraTd = montaTd(paciente.gordura,"#info-gordura");
    var imcTd = montaTd(paciente.imc,"info-imc")

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function validaPaciente(paciente) {
    var erros = []
   
    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");
    if (!validaAltura(paciente.altura)) erros.push("Altura é inválido");

    if (paciente.nome.length == 0) erros.push("O campo do nome deve ser preenchido");
    if (paciente.peso.length == 0) erros.push("O campo de peso deve ser preenchido");
    if (paciente.altura.length == 0) erros.push("O campo de altura deve ser preenchido");
    if (paciente.gordura.length == 0) erros.push("O campo de gordura deve ser preenchido");

    return erros;
}

function montaTd(dado,classe){
    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe)

    return td
}

function exibeMensagemDeErro(erros , LimparUl) {
    var ul= document.querySelector("#mensagens-erro");
    ul.innerHTML = ""
    ul.style.display ="block"
    erros.forEach(function (erro) {
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)  
    });
}

