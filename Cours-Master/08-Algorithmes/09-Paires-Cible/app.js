function pairs(tab, cible){
    const nbVus = {};
    const paires = []

    for(let i = 0; i < tab.length; i++){
        const nbActuel = tab[i]
        const dif = cible- nbActuel
        if(nbVus[dif]){
            paires.push([dif, nbActuel])
        }
        nbVus[nbActuel] = true
    }
    return paires
}

const tab = [2,7,5,3,9,6]
const sommeCible = 9;
const paires = pairs(tab, sommeCible)

console.log(paires);