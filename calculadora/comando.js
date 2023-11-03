function clic(){
    var n1 = document.getElementById("t0")
    var n11 = n1.valueAsNumber  //aqui convertemos para Numero
    var n2 = document.getElementById("t1")
    var n22 = n2.valueAsNumber

   if(n11 == 10 & n22 == 10){
    alert("voce entrou");
    entrou(n11);
   }else{
    alert("voce não entrou");
    entrou(n11);// nessa parte temos o chamado para a segunda função 
   }
   
   function entrou(n33){
       if(n33%2 == 0){
         alert("sabia que vc digitou um numero par");
       }else{
           alert("sabia que vc errou?");
       }
   }

}

