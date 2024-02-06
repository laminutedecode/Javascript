function triBulles(tableau) {
    // Définir la longueur du tableau
    const longueur = tableau.length;

    // Parcourir le tableau
    for (let i = 0; i < longueur - 1; i++) {
        // Si aucun échange n'est effectué dans une itération, le tableau est déjà trié
        let aFaitDesEchanges = false;

        // Parcourir le tableau de la fin vers le début
        for (let j = 0; j < longueur - 1 - i; j++) {
            // Comparer les éléments adjacents
            if (tableau[j] > tableau[j + 1]) {
                // Échanger les éléments
                let temp = tableau[j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1] = temp;

                // Indiquer qu'un échange a été effectué
                aFaitDesEchanges = true;
            }
        }

        // Si aucun échange n'a été effectué, le tableau est déjà trié, sortir de la boucle
        if (!aFaitDesEchanges) {
            break;
        }
    }

    // Retourner le tableau trié
    return tableau;
}

// Exemple d'utilisation
const tableauNonTrié = [64, 34, 25, 12, 22, 11, 90];
const tableauTrié = triBulles(tableauNonTrié.slice());

// Afficher les résultats avec des commentaires
console.log("Tableau non trié : ", tableauNonTrié);
console.log("Tableau trié par tri à bulles : ", tableauTrié);
