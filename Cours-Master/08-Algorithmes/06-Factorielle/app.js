function calcul(n){
    if( n < 0 || !Number.isInteger(n)){
        return "Entrée invalide"
    }

    if(n === 0){
        return 1;
    }

    let resultat = 1;

    for(let i = 1; i <= n; i++){
        resultat *= i
    }
    return resultat
}

const fac = calcul(5)

console.log(fac);