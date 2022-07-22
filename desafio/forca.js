class Forca {
  letras = [];
  vidas = 6;
  palavra = [];

  chutar(letra) {

    function isNum(val){
      return !isNaN(val)
    }

    function validarQuantidadeDeDigitos(val){
        if (val.length > 1){
          console.log("digite apenas uma letra")
        }
        if (val.length < 1){
          console.log("digite pelo menos uma letra")
        }
    }

    function compararLetras(val, array){
      if(array.some((array) => array == val)){
      return true;
      }
      return false;
    }
  
  
    function adcionarLetras(val, arr){
      if(compararLetras(val, arr)){
          console.log("essa letra já foi informada");
          return false;
      }
      arr.push(val);
      return true;
    }

    function adcionararLetrasPalavra(val, arr, palavraSecreta){
      if (!palavraSecreta.includes(val)){
        return ;
      }
      if(val == "a"){
        arr.push(val);
      }
      
      return true;
    }

    if(isNum(letra)){
      console.log("digite apenas letras");
      return;
    }
    validarQuantidadeDeDigitos(letra);
    if (adcionarLetras(letra, this.letras)){
    if(!adcionararLetrasPalavra(letra, this.palavra, 'abacaxi')){
      this.vidas -= 1;
    }
    }
    this.buscarEstado();
   }
  

  buscarEstado() { 
    if (this.vidas == 0){
      return "perdeu";
    }
    if (this.palavra.length == 7 && this.vidas > 0){
      return "ganhou";
    }
    return "aguardando chute";
  }

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letras,
          vidas: this.vidas,
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
