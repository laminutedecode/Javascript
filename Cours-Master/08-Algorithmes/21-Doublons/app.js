// Fonction pour supprimer les doublons d'un tableau
function supprimerDoublons(tableau) {
    // Utiliser un ensemble (Set) pour stocker les valeurs uniques
    const ensembleUnique = new Set(tableau);

    // Convertir l'ensemble en tableau
    const tableauSansDoublons = Array.from(ensembleUnique);

    // Renvoyer le tableau sans doublons
    return tableauSansDoublons;
}

// Exemples d'utilisation
const tableau1 = [1, 2, 3, 4, 3, 2, 5];
const tableau2 = ["apple", "orange", "banana", "apple", "grape"];

console.log(supprimerDoublons(tableau1)); // Output: [1, 2, 3, 4, 5]
console.log(supprimerDoublons(tableau2)); // Output: ["apple", "orange", "banana", "grape"]
