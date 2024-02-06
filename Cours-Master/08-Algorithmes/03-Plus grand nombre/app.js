function trouverPlusGrand(tableau){
    if(tableau.length === 0){
        return undefined
    }

    let plusGrand  = tableau[0];

    for(let i = 1; i < tableau.length; i++){
        if(tableau[i] > plusGrand){
            plusGrand = tableau[i]
        }
    }
    return plusGrand
}

const tab = [5, 12, 8, 3, 20]

const resultat = trouverPlusGrand(tab)

console.log(resultat);