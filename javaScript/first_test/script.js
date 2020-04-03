function mensage(name){
    console.log('This is in console: '+name); // This show in console
    alert('Hey '+name+' dont type me!');
}

function mensage_got(name){
    console.log(name); // This show in console
    alert('Hey '+name+' dont leave me!');
}

function changeColor(var_color){
    var elemento = document.getElementById('sub-title');
    elemento.style.color = var_color
}

function checker_form(){
    var name = document.getElementById('id_name');
    if (name.value == ""){
        alert('Hey dude put your name!');
    }
    else{
        alert('Yeh, this form got it: '+name.value)
    }
}