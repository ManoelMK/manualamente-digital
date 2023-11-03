function clic(){
    let n1 = document.getElementById("n1")
    let n2 = document.getElementById("n2")
    let tx = document.getElementById("n4")
    let n3 = n1.valueAsNumber
    let n4 = n2.valueAsNumber
    let n5 = n3+n4
   tx.innerText = n5;
}