let vetor = []

i=0

for(numero=2;i<4;numero++){
    let soma=0
    
    for( j=1 ; j < numero ; j++){

        if(numero%j == 0){
            soma += j      
        }
    }
    if(soma == numero){
        vetor.push(numero)
        i++
    }
    
}

console.log(vetor)