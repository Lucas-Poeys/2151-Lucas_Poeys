function calcularPedido() {
    //entrada
    let sanduiche = document.getElementById('sanduiche').value 
    let bebida = document.getElementById('bebida').value
    let batata = document.getElementById('batata').value
    let qsan = Number(document.getElementById("quantSanduiche").value)
    let qbeb = Number(document.getElementById("quantBebida").value)
    let qbat = Number(document.getElementById("quantBatata").value)
    let valorsan = 0
    let valorbeb = 0
    let valorbat = 0
    let total = 0

    //processamento

    //*sanduiche
    if (sanduiche == "1") {
        valorsan = 14.90
    }
    else if (sanduiche == "2") {
        valorsan = 13.90
    }
    else {
        valorsan = 12.90
    }
    //*bebida
    if (bebida == "1") {
        valorbeb = 5.90
    }
    else if (bebida == "2") {
        valorbeb = 6.90
    }
    else {
        valorbeb = 7.90
    }
    //*batata
    if (batata == "1") {
        valorbat = 5.90
    }
    else if (batata == "2") {
        valorbat = 6.90
    }
    else {
        valorbat = 7.90
    }
    //*total
    total = (valorsan * qsan) + (valorbeb * qbeb) + (valorbat * qbat)
    //saída
    document.getElementById("total").value = (total).toFixed(2)
}
function finalizar() {
    //entrada
    let total = document.getElementById("total").value
    //processamento
    if (total == 0.00) {
        titmsg = "Você ainda não selecionou nenhum item"
        msg = "Selecione pelo menos um item para concluir o pedido"
    }
    else {
        titmsg = "Pedido cadastrado com sucesso! \n"
        msg = "Seu pedido é R$ "
        msg += total
    }
    //saída
    document.getElementById('titmsg').value = titmsg
    document.getElementById('msg').value = msg
    $('#fim').modal('show')
}