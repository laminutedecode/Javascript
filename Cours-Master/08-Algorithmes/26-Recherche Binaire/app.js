function rechercheBinaire(tableau, elementRecherche) {
    let debut = 0;
    let fin = tableau.length - 1;

    while (debut <= fin) {
        // Trouver l'élément au milieu du tableau
        let milieu = Math.floor((debut + fin) / 2);

        // Vérifier si l'élément au milieu est égal à l'élément recherché
        if (tableau[milieu] === elementRecherche) {
            return milieu; // L'élément a été trouvé, renvoyer son index
        } else if (tableau[milieu] < elementRecherche) {
            // Si l'élément au milieu est plus petit, ignorer la moitié gauche du tableau
            debut = milieu + 1;
        } else {
            // Sinon, l'élément au milieu est plus grand, ignorer la moitié droite du tableau
            fin = milieu - 1;
        }
    }

    return -1; // Si l'élément n'est pas présent dans le tableau
}

// Exemple d'utilisation
const tableauTrié = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const elementRecherche1 = 5;
const elementRecherche2 = 11;

console.log(rechercheBinaire(tableauTrié, elementRecherche1)); // Devrait afficher 4
console.log(rechercheBinaire(tableauTrié, elementRecherche2)); // Devrait afficher -1
