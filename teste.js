const letrasChutadas = ["a"];

function compararLetras(letra, array){
    if(array.some((array) => array == letra)){
    return true;
    }
    return false;
}


function adcionarLetras(val, arr){
    if(compararLetras(val, letrasChutadas)){
        return console.log("essa letra já foi informada");
    }
    arr.push(val);
    return console.log(arr);
}



adcionarLetras("b", letrasChutadas);
