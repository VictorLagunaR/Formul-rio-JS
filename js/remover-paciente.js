var pacientes = document.querySelectorAll(".paciente")
var tabela = document.querySelector("table")

tabela.addEventListener("dblclick" ,function(event){
    //event.target é o alvo do elemento, porém, ele não estará eliminando o tr, mas sim o td, pois foi ele o alvo
    //Logo, com parentNode é feito com que o pai desse elemento receba a ação, e o pai de td é tr
    event.target.parentNode.classList.add("fadeOut")
    
    setTimeout(function() {
        event.target.parentNode.remove()
    },500);

})
