function cal(){
    let r1 = document.getElementById("tx1") // numero que o usurario digitou 
    r2 = r1.valueAsNumber //  foi transformado em número
    let r8 = []   // criado uma array
    while(r2 < 1000){             //inicio do loop
     r8.push(r2)         //o número digitado pelo usuario é armazenado no array
    // window.alert(r8)    //o array é mostrado na tela
    
     r2+=1000;        // adicionamos +1 no número digitado pelo usuario
    }    // fim do loop
    window.alert(`o resultado é ${r8}`)
}