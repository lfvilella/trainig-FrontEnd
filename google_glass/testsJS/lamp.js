var quebrada = false;
function changeLamp(status){
    var elemento = document.getElementById('lampada')
    if (!quebrada){
        elemento.src = 'static/img/' + status + '.jpg';
        if (status == 'lampada-quebrada'){
            quebrada = true;
        }
    }
}