function nbPremier(n){
    if(n <= 1 || !Number.isInteger(n)){
        return false
    }

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true
}

const nb = nbPremier(7)

console.log(nb);