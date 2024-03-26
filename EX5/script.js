let nomes = []
let invertido = []


for(i=1 ; i <= 5 ; i++){
    
    let numero = prompt(`Digite o ${i}º nome.`)

    nomes.push(numero)
    
}

for(i of nomes){
    
    invertido.unshift(i)
}

console.log(nomes)
console.log(invertido)
