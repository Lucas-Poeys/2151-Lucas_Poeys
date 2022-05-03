let voltval = 0
function pess(obj) {
    if(obj == "pf") {
        document.getElementById('cpf').style.display = "block";
        document.getElementById('cnpj').style.display = "none";
    }
    else{
        document.getElementById('cpf').style.display = "none";
        document.getElementById('cnpj').style.display = "block";
    }
}
function somtot(precos) {
    let valtot = 0
    if (precos == 1) {
        valtot = 50
    }
    else if (precos == 2) {
        valtot = 100
    }
    else {
        valtot = 150
    }
    document.getElementById("total").value = valtot
}
function trocaTipo() {
    //entrada
    tipo = document.getElementById("tipogc").value;
    //processamento
    if (tipo == "1") {
        titulo = "Xbox";
        newFundo = "img/xbox.jpg";
        newFoto = "img/xbox.png";
    }
    else if (tipo == "2") {
        titulo = "PlayStation";
        newFundo = "img/playstation.jpg";
        newFoto = "img/playstation.png";
    }
    else if (tipo == "3") {
        titulo = "Nintendo"
        newFundo = "img/nintendo.jpg"
        newFoto = "img/nintendo.png"
    }
    else if (tipo == "4") {
        titulo = "Steam"
        newFundo = "img/steam.jpg"
        newFoto = "img/steam.png"
    }
    else if (tipo == "5") {
        titulo = "Google Play"
        newFundo = "img/googleplay.jpg"
        newFoto = "img/googleplay.png"
    }
    else {
        titulo = "Escolha seu Gift Card"
        newFundo = "    "
        newFoto = ""
    }
    //saida
    document.getElementById("titulo").value = titulo
    document.body.style.backgroundImage = "url(" + newFundo + ")";
    document.getElementById("foto").src = newFoto;
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
function somente_numero(e) {
    tecla = (window.event)?event.keyCode:e.which;
    if((tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105) || (tecla == 8) || (tecla == 37) || (tecla == 39)) {
        return true;
    }
    else {
        return false;
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
function mascara_num_cartao(obj) {
    if(obj.value.length == 4) {
        obj.value += " "
    }
    if(obj.value.length == 9) {
        obj.value += " "
    }
    if(obj.value.length == 14) {
        obj.value += " "
    }
}
function mascara_venc_cartao(obj) {
    if(obj.value.length == 2) {
        obj.value += "/"
    }
}
function desc(formapaga) {
    let valor = Number(document.getElementById("total").value)
    valor += voltval
    if (formapaga == 1) {
        valor += 5
        voltval = -5
        document.getElementById('dados-cartao').style.display = "block"
        document.getElementById('dados-boleto').style.display = "none"
        document.getElementById('dados-pix').style.display = "none"
    }
    else if (formapaga == 2) {
        valor -= 5
        voltval = 5
        document.getElementById('dados-cartao').style.display = "none"
        document.getElementById('dados-boleto').style.display = "block"
        document.getElementById('dados-pix').style.display = "none"
    }
    else if (formapaga == 3) {
        valor = valor
        voltval = 0
        document.getElementById('dados-cartao').style.display = "none"
        document.getElementById('dados-boleto').style.display = "none"
        document.getElementById('dados-pix').style.display = "block"
    }
    else {
        valor = valor
        voltval = 0
        document.getElementById('dados-cartao').style.display = "none"
        document.getElementById('dados-boleto').style.display = "none"
        document.getElementById('dados-pix').style.display = "none"
    }
    document.getElementById("total").value = valor
}
function abrir_boleto() {
    open("doc/boleto-bancario.pdf")
}
function cop() {
    document.getElementById('cop-pix').select();
    document.execCommand('copy');
}