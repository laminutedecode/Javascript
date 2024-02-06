function triFusion(tableau) {
    // Fonction auxiliaire pour fusionner deux tableaux triés
    function fusionner(tableauGauche, tableauDroite) {
        let tableauFusionné = [];
        let indiceGauche = 0;
        let indiceDroite = 0;

        // Comparer les éléments des deux tableaux et les fusionner dans l'ordre
        while (indiceGauche < tableauGauche.length && indiceDroite < tableauDroite.length) {
            if (tableauGauche[indiceGauche] < tableauDroite[indiceDroite]) {
                tableauFusionné.push(tableauGauche[indiceGauche]);
                indiceGauche++;
            } else {
                tableauFusionné.push(tableauDroite[indiceDroite]);
                indiceDroite++;
            }
        }

        // Ajouter les éléments restants des deux tableaux
        return tableauFusionné.concat(tableauGauche.slice(indiceGauche), tableauDroite.slice(indiceDroite));
    }

    // Cas de base : un tableau de 0 ou 1 élément est déjà trié
    if (tableau.length <= 1) {
        return tableau;
    }

    // Diviser le tableau en deux moitiés
    const milieu = Math.floor(tableau.length / 2);
    const tableauGauche = tableau.slice(0, milieu);
    const tableauDroite = tableau.slice(milieu);

    // Appeler récursivement triFusion sur les deux moitiés
    const tableauTriéGauche = triFusion(tableauGauche);
    const tableauTriéDroite = triFusion(tableauDroite);

    // Fusionner les deux moitiés triées
    return fusionner(tableauTriéGauche, tableauTriéDroite);
}

// Exemple d'utilisation
const tableauNonTrié = [64, 25, 12, 22, 11];
const tableauTrié = triFusion(tableauNonTrié.slice());

// Afficher les résultats avec des commentaires
console.log("Tableau non trié : ", tableauNonTrié);
console.log("Tableau trié par tri fusion : ", tableauTrié);
