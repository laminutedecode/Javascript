function compter(tableau){
    const occurences = {}

    for(let i = 0; i < tableau.length; i++){
        const element = tableau[i]

        if(!occurences[element]){
            occurences[element] = 1;
        }else {
            occurences[element]++
        }
    }
    return occurences
}

const tab = ['pomme', 'orange', 'banane', 'pomme', 'orange', 'pomme']

const resultat = compter(tab)

console.log(resultat);