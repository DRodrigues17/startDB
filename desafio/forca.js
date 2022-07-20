class Forca {
  letrasChutadas = [];
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

    function incluirLetrasChutadas(val, arr){
      const contemLetra = arr.some(element => {
        return element.toLowerCase() === val.toLowerCase();
      });
      

      if(contemLetra){
          console.log("a letra em questão já foi digitada, segue abaixo todas as letras já digitadas");
          console.log(array);
      }
      letrasChutadas.push(val);
    }

    function validarLetrasPalavra(val){
      incluirLetrasChutadas(val, letrasChutadas);
      if (!palavraSecreta.includes(val)){
        this.vidas = -1;
      }
      
    }

    if(isNum(letra)){
      console.log("digite apenas letras");
      return;
    }
    validarQuantidadeDeDigitos(letra);    
    validarLetrasPalavra(letra);
    this.buscarEstado();
   }
  

  buscarEstado() { 
    if (this.vidas == 0){
      return "perdeu";
    }
    if (this.palavra.length == 6 && this.vidas > 0){
      return "ganhou";
    }
    return "aguardando chute";
  }

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
