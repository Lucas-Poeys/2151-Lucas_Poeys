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
function trocaTema() {
    //entrada
    tema = document.getElementById("tema").value;
    //processamento
    if (tema == "1") {
        titulo = "Super Mario Brós";
        newFundo = "img/mario.jpg";
        newFoto = "img/mario.png";
    }
    else if (tema == "2") {
        titulo = "Princesa Sofia";
        newFundo = "img/sofia.jpg";
        newFoto = "img/sofia.png";
    }
    else if (tema == "3") {
        titulo = "Pj Masks"
        newFundo = "img/pjmasks.jpg"
        newFoto = "img/pjmasks.png"
    }
    else if (tema == "4") {
        titulo = "Vasco"
        newFundo = "img/vasco.jpg"
        newFoto = "img/nene.png"
    }
    else {
        titulo = "Tema da Festa"
        newFundo = "    "
        newFoto = ""
    }
    //saida
    document.getElementById("titulo").value = titulo
    document.body.style.backgroundImage = "url(" + newFundo + ")";
    document.getElementById("foto").src = newFoto;
}