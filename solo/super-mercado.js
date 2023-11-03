var items = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{

    var nomeProduto = document.querySelector('input[nome=nome_produto]')
    var precoProduto = document.querySelector('input[nome=price]')
    var quantidadeProduto = document.querySelector('input[nome=quantidade]')
     
    var n1 = quantidadeProduto.valueAsNumber
    var n2 = precoProduto.valueAsNumber
    var n3 = n1*n2;
    check();

   function check(){
       if (n3 >= 1) {

      items.push({
      nome: nomeProduto.value,
      valor: n3
     // valor: precoProduto.value
      });
      
    } else {
           alert("algum campo estar em branco");
       }
   }

  /*
 
  <div class="lista-produtos-single">
      <h3>Saguadim</h3>
      <h3 class="price-produtos"> <span>R$20,00</span></h3>
  </div>
  
  */
 
  let listaProdutos = document.querySelector('.lista_produtos')
  let soma = 0;
  listaProdutos.innerHTML = "";
  items.map(function(val){
      soma+=parseFloat(val.valor);
      listaProdutos.innerHTML+=`
      <div class="lista-produtos-single">
      <h3>`+val.nome+`</h3>
      <h3 class="price-produtos"><span>R$`+val.valor+`</span></h3>
      </div>
      `
      
  })
  
  soma = soma.toFixed(2);
  quantidadeProduto.value ="";
  nomeProduto.value ="";
  precoProduto.value ="";

  let elementoSoma = document.querySelector('.soma-produtos')
  elementoSoma.innerHTML = 'R$'+soma;
})


document.getElementById('limpar').addEventListener('click',()=>{
    items = [];
    document.querySelector('.lista_produtos').innerHTML = "";
    document.querySelector('.soma-produtos').innerHTML = "R$0.00";

})

