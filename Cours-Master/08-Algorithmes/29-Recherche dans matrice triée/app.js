function rechercheDansMatrice(matrice, cible) {
    // Obtenir le nombre de lignes et de colonnes dans la matrice
    const lignes = matrice.length;
    const colonnes = matrice[0].length;

    // Initialiser les indices pour commencer de coin supérieur droit
    let ligneActuelle = 0;
    let colonneActuelle = colonnes - 1;

    // Parcourir la matrice
    while (ligneActuelle < lignes && colonneActuelle >= 0) {
        // Obtenir l'élément actuel
        const elementActuel = matrice[ligneActuelle][colonneActuelle];

        // Si l'élément est égal à la cible, l'élément a été trouvé
        if (elementActuel === cible) {
            return true;
        }

        // Si l'élément est plus grand que la cible, déplacer vers la gauche
        if (elementActuel > cible) {
            colonneActuelle--;
        } else {
            // Sinon, l'élément est plus petit que la cible, déplacer vers le bas
            ligneActuelle++;
        }
    }

    // Si l'élément n'est pas trouvé dans la matrice
    return false;
}

// Exemple d'utilisation
const matriceTriee = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17]
];

const cible1 = 5;
const cible2 = 20;

// Afficher les résultats avec des commentaires
console.log(`La matrice contient-elle ${cible1} ? : ${rechercheDansMatrice(matriceTriee, cible1)}`);
console.log(`La matrice contient-elle ${cible2} ? : ${rechercheDansMatrice(matriceTriee, cible2)}`);
