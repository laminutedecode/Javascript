function trouverPic(tableau) {
    const longueur = tableau.length;

    // Cas particulier : tableau vide
    if (longueur === 0) {
        return -1;
    }

    let debut = 0;
    let fin = longueur - 1;

    while (debut <= fin) {
        let milieu = Math.floor((debut + fin) / 2);

        // Vérifier si l'élément au milieu est un pic
        if ((milieu === 0 || tableau[milieu] >= tableau[milieu - 1]) && (milieu === longueur - 1 || tableau[milieu] >= tableau[milieu + 1])) {
            return milieu; // L'élément au milieu est un pic
        } else if (milieu > 0 && tableau[milieu - 1] > tableau[milieu]) {
            fin = milieu - 1; // Le pic est à gauche
        } else {
            debut = milieu + 1; // Le pic est à droite
        }
    }

    return -1; // Aucun pic trouvé
}

// Exemple d'utilisation
const tableau1 = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];
const tableau2 = [1, 2, 3, 4, 5];
const tableau3 = [5, 4, 3, 2, 1];

// Afficher les résultats avec des commentaires
console.log(`Le pic dans le tableau 1 est à l'indice : ${trouverPic(tableau1)}`);
console.log(`Le pic dans le tableau 2 est à l'indice : ${trouverPic(tableau2)}`);
console.log(`Le pic dans le tableau 3 est à l'indice : ${trouverPic(tableau3)}`);
