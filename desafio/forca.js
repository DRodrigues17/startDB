class Forca {
  letras = [];
  vidas = 6;
  palavraSecreta = 'abacaxi';
  arrayPalavraSecreta = this.palavraSecreta.split('');
  palavra = new Array(this.palavraSecreta.length).fill('_');

  chutar(letra) {

    function isNumerico(val){
      return !isNaN(val)
    }

    function validarQuantidadeDigitosDigitados(val){
        if (val.length > 1){
          console.log("digite apenas uma letra");
          return false;
        }
        if (val.length < 1){
          console.log("digite pelo menos uma letra");
          return false;
        }
        return true;
    }

    function compararLetrasArrayLetras(val, array){
      return !!(array.some((array) => array == val));
    }
  
    function adcionarLetrasArrayLetras(val, arr){
      if(compararLetrasArrayLetras(val, arr)){
          console.log("essa letra já foi informada");
          return false;
      }
      arr.push(val);
      return true;
    }

    function adcionararLetrasArrayPalavra(val, arr, arr2){
      if (!arr2.includes(val)){
        return false;
      }
      let i;
      for (i=0; i< arr.length; i++){
          if(arr2[i].includes(val)){
              arr[i] = val;
          }
      }
      return true;
    }


    if(isNumerico(letra)){
      console.log("digite apenas letras");
      return;
    }
    
    if (validarQuantidadeDigitosDigitados(letra)){
      if (adcionarLetrasArrayLetras(letra, this.letras)){
        if(!adcionararLetrasArrayPalavra(letra, this.palavra, this.arrayPalavraSecreta)){
          this.vidas -= 1;
        }
      }
    }
    this.buscarEstado();
   }

  buscarEstado() { 
      if (this.vidas == 0){
      return "perdeu";
      }
      if (this.palavra.join('') == this.palavraSecreta){
          return "ganhou";
      }
  }

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letras,
          vidas: this.vidas,
          palavra: this.palavra
      }
  }
}

module.exports = Forca;