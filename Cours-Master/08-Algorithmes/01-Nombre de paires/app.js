function nbPairs(n){
    let somme = 0;

    for(let i = 1; i <= n ; i++){
        if(i % 2 === 0){
            somme += i;
        }
    }
    return somme
}

console.log(nbPairs(6));
console.log(nbPairs(7));
console.log(nbPairs(8));