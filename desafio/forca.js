class Forca {

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

    function incluirLetrasChutadas(val, array){
      if (array.some(val)){
          console.log("a letra em questão já foi digitada, segue abaixo todas as letras já digitadas");
          console.log(array);
      }
    }

    if(isNum(letra) && letra != undefined){
      console.log("digite apenas letras");
      return;
    }
    validarQuantidadeDeDigitos(letra);    
    incluirLetrasChutadas(letra);
   }
  

  buscarEstado() { return ""; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: [], // Deve conter todas as letras chutadas
          vidas: 6, // Quantidade de vidas restantes
          palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
