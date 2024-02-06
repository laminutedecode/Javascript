// Fonction pour convertir un nombre en chiffres romains
function convertirEnChiffreRomain(nombre) {
    // Vérifier que le nombre est dans la plage autorisée
    if (nombre < 1 || nombre > 3999) {
        throw new Error("Le nombre doit être compris entre 1 et 3999.");
    }

    // Définir les symboles romains et leurs valeurs
    const symboles = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    const valeurs = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    // Initialiser le résultat en tant que chaîne vide
    let resultat = "";

    // Parcourir les symboles de manière décroissante
    for (let i = symboles.length - 1; i >= 0; i--) {
        // Répéter le nombre de fois que la valeur peut être soustraite de 'nombre'
        while (nombre >= valeurs[i]) {
            resultat += symboles[i];
            nombre -= valeurs[i];
        }
    }

    // Renvoyer le résultat
    return resultat;
}

// Appeler la fonction avec un exemple de nombre
const resultatConversion = convertirEnChiffreRomain(3549);

// Afficher le résultat dans la console
console.log(resultatConversion);

