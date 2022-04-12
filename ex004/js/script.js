function calculos(form) {
    form.login.value = form.login.value.toUpperCase();

    //entrada de dados
    pagamento = form.pagamento.value;

    qnt1 = form.qnt1.value;
    qnt2 = form.qnt2.value;
    qnt3 = form.qnt3.value;
    qnt4 = form.qnt4.value;
    
    //processamento
    tot1 = qnt1 * 300;
    tot2 = qnt2 * 700;
    tot3 = qnt3 * 650;
    tot4 = qnt4 * 299;

    if(pagamento == "dinheiro") {
        perc = 0.15;
    }
    else{
        perc = 0;
    }
    total = tot1 + tot2 + tot3 + tot4;
    desconto = total * perc;
    apagar = total - desconto

    //saida
    form.tot1.value = "R$" + tot1.toFixed(2).replace(".",",");
    form.tot2.value = "R$" + tot2.toFixed(2).replace(".",",");
    form.tot3.value = "R$" + tot3.toFixed(2).replace(".",",");
    form.tot4.value = "R$" + tot4.toFixed(2).replace(".",",");

    document.getElementById('total').value = total.toFixed(2).replace(".",",")
    document.getElementById('desconto').value = desconto.toFixed(2).replace(".",",")
    document.getElementById('apagar').value = apagar.toFixed(2).replace(".",",")

}
function confirma(form){
    apagar = form.apagar.value;
    
    if (form.login.value == ""){
        alert("O campo nome é obrigatorio.")
        form.login.focus();
        return false
    }
    else if (form.senha1.value == ""){
        alert("O campo senha é obrigatorio.")
        form.senha1.focus();
        return false
    }
    else if (form.senha1.value != form.senha2.value){
        alert("O campo senha esta diferente da Confirmaçâo de senha")
        form.senha1.focus();
        return false
    }
    else if((qnt1 == 0) && (qnt2 == 0) && (qnt3 == 0) && (qnt4 == 0)) {
        alert("Você precisa solicitar pelo menos 1 produto");
        form.qnt1.focus();
        return false;
    }
    else{
        if(confirm("Confirmar o envio do orçamento no valor de R$" + apagar)){
            alert("Orçamento enviado com sucesso")
            return true
        }
        else{
            return false
        }
    }
}

function senha(){
    senha1 = document.orcamento.senha1.value;
    senha2 = document.orcamento.senha2.value;

    if(senha1 != senha2) {
        document.getElementById('msg').style.display = "block"
    }
    else{
        document.getElementById('msg').style.display = "none";
    }
}

function pessoa(obj) {
    if(obj == "pf") {
        document.getElementById('cpf').style.display = "block";
        document.getElementById('cnpj').style.display = "none";
    }
    else{
        document.getElementById('cpf').style.display = "none";
        document.getElementById('cnpj').style.display = "block";
    }
}
function mascara_cpf(obj) {
    if(obj.value.length == 3) {
        obj.value += "."
    }
    if(obj.value.length == 7) {
        obj.value += "."
    }
    if(obj.value.length == 11) {
        obj.value += "-"
    }
}
function mascara_cnpj(obj) {
    if(obj.value.length == 2) {
        obj.value += "."
    }
    if(obj.value.length == 6) {
        obj.value += "."
    }
    if(obj.value.length == 10) {
        obj.value += "/"
    }
    if(obj.value.length == 15) {
        obj.value += "-"
    }
}
function mascara_telefone(obj) {
    if(obj.value.length == 0) {
        obj.value += "("
    }
    if(obj.value.length == 3) {
        obj.value += ")"
    }
    if(obj.value.length == 8) {
        obj.value += "-"
    }
}
function salto(campo, digito) {
    if(campo == "cpf") {
        if(digito.length > 13) {
            document.orcamento.telefone.focus();
        }
    }
    if(campo == "cnpj") {
        if(digito.length > 17) {
            document.orcamento.telefone.focus();
        }
    }
}
function somente_numero(e) {
    tecla = (window.event)?event.keyCode:e.which;
    if((tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105) || (tecla == 8) || (tecla == 37) || (tecla == 39)) {
        return true;
    }
    else {
        return false;
    }
}