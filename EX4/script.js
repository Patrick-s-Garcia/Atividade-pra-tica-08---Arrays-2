let vetor = [1,2,3,4,5,6,7,8,9,10]

let numero = Number(prompt("Digite um numero."))

let verificação = 0

for(i of vetor){
    if(numero == i){
        verificação = "Sim"
    }
}

if(verificação == "Sim"){
    console.log("Seu numero esta na lista.")
}
else{
    console.log("Seu numero não esta na lista.")
}
