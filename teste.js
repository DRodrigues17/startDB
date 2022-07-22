const letrasChutadas = ["a"];

function compararLetras(val, array){
    if(array.some((array) => array == val)){
    return true;
    }
    return false;
}


function adcionarLetras(val, arr){
    if(compararLetras(val, arr)){
        return console.log("essa letra já foi informada");
    }
    arr.push(val);
    return console.log(arr);
}



adcionarLetras("a", letrasChutadas);
