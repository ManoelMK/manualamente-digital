function carregar(){
const r1 = document.getElementById('msg')
const r2 = document.getElementById('img')
const date = new Date()
const hora = date.getHours()
r1.innerHTML = (`agora são ${hora}horas.`)

if(hora >= 0 && hora <12){
     r2.src = 'foto11.jpg'
     document.body.style.background = '#e7d418'
}
else if(hora >=12 && hora < 18){
     r2.src = 'foto22.jpg' 
     document.body.style.background = '#0096ff'
}           
else{
     r2.src = 'foto33.jpg'
     document.body.style.background = '#111'
}
}