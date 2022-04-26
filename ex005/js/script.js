function calc() {


   //entrada
    horario = document.form.horario.value;

    //processamento
    if(horario == "manha") {
        valor = 1500;
    
    }
    else if(horario == "tarde") {
        valor = 1800;
    }
    else{
        valor = 2300;
    }
   
     //saida
     document.getElementById("total").value = valor;

     document.getElementById("mesa").checked = false;
     document.getElementById("personagens").checked = false;
     document.getElementById("atracoes").checked = false;
     document.getElementById("maquiagem").checked = false;
     document.getElementById("brinde").checked = false;
}   
function opcionais(valor,marcado) {
    //entrada
    total = document.getElementById('total').value;

    //processamento

    if (marcado) {
        total = Number(total) + Number(valor)

    }
    else{
        total = Number(total) - Number(valor);
    }

    //saida
    document.getElementById('total').value = total;
}