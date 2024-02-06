// Fonction pour calculer la médiane d'un tableau de nombres
function calculerMediane(tableau) {
    // Trier le tableau par ordre croissant
    tableau.sort((a, b) => a - b);

    // Trouver la longueur du tableau
    const longueur = tableau.length;

    // Calculer la position médiane
    const milieu = Math.floor(longueur / 2);

    // Vérifier si le tableau a un nombre pair ou impair d'éléments
    if (longueur % 2 === 0) {
        // Si le tableau a un nombre pair d'éléments, la médiane est la moyenne des deux valeurs du milieu
        return (tableau[milieu - 1] + tableau[milieu]) / 2;
    } else {
        // Si le tableau a un nombre impair d'éléments, la médiane est la valeur du milieu
        return tableau[milieu];
    }
}

// Exemples d'utilisation
const tableau1 = [4, 7, 1, 9, 2, 5];
const tableau2 = [10, 4, 6, 8, 2, 12, 14];

console.log(calculerMediane(tableau1)); // Output: 4.5
console.log(calculerMediane(tableau2)); // Output: 8
