// Fonction pour calculer le nombre de voyelles dans une chaîne de caractères
function nombreVoyelles(chaine) {
    // Convertir la chaîne en minuscules pour simplifier la comparaison
    const chaineMinuscules = chaine.toLowerCase();

    // Définir les voyelles
    const voyelles = "aeiou";

    // Initialiser le compteur de voyelles
    let compteurVoyelles = 0;

    // Parcourir chaque caractère de la chaîne
    for (let caractere of chaineMinuscules) {
        // Vérifier si le caractère est une voyelle
        if (voyelles.includes(caractere)) {
            compteurVoyelles++;
        }
    }

    // Renvoyer le nombre de voyelles trouvé
    return compteurVoyelles;
}

// Exemples d'utilisation
const chaine1 = "Bonjour";
const chaine2 = "JavaScript";

console.log(nombreVoyelles(chaine1)); // Output: 3
console.log(nombreVoyelles(chaine2)); // Output: 3
