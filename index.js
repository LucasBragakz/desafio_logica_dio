let nomeHeroi ="kakaroto"
let xpHeroi =9000
let patente

if(xpHeroi<=1000){
    patente = "Ferro"
}
else if(xpHeroi>1000 && xpHeroi<=2000){
    patente = "Bronze"
}
else if(xpHeroi>2000 && xpHeroi<=5000){
    patente = "Prata"
}
else if(xpHeroi>5000 && xpHeroi<=7000){
    patente = "Ouro"
}
else if(xpHeroi>8000 && xpHeroi<=8000){
    patente = "Platina"
}
else if(xpHeroi>8000 && xpHeroi<=9000){
    patente = "Ascendente"
}
else if(xpHeroi>9000 && xpHeroi<=10000){
    patente = "Imortal"
}
else{
    patente = "Radiante"
}

console.log("O Herói de nome "+ nomeHeroi + " está no nível de "+ patente + " com "+ xpHeroi+" de XP")