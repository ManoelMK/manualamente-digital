let r1 = document.getElementById('tx1')
let n1 = document.getElementById('ta')
let va =[]
function clic(){
    
    let n2 = r1.valueAsNumber
    add(n2.value)
    va.push(n2)
}

function add(a1){
   if (a1 == Number) {
        return a1
   }
}

function mostre(){
    n1.innerHTML = va
}
function tira(){
    va.length --;
    n1.innerHTML = va
}







