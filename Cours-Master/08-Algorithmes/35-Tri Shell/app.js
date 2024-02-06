function triShell(tableau) {
    const longueur = tableau.length;
    let intervalle = Math.floor(longueur / 2);

    // Appliquer le tri par insertion avec un intervalle variable
    while (intervalle > 0) {
        for (let i = intervalle; i < longueur; i++) {
            const elementAInserer = tableau[i];
            let j = i;

            // Décaler les éléments plus grands que l'élément à insérer vers la droite
            while (j >= intervalle && tableau[j - intervalle] > elementAInserer) {
                tableau[j] = tableau[j - intervalle];
                j -= intervalle;
            }

            // Insérer l'élément à sa place appropriée
            tableau[j] = elementAInserer;
        }

        // Réduire l'intervalle pour la prochaine itération
        intervalle = Math.floor(intervalle / 2);
    }

    return tableau;
}
