// Fonction pour vérifier si une heure est valide
function estHeureValide(heure, minute, seconde) {
    // Vérifier si l'heure est comprise entre 0 et 23
    if (heure < 0 || heure > 23) {
        return false;
    }

    // Vérifier si les minutes sont comprises entre 0 et 59
    if (minute < 0 || minute > 59) {
        return false;
    }

    // Vérifier si les secondes sont comprises entre 0 et 59
    if (seconde < 0 || seconde > 59) {
        return false;
    }

    // Si toutes les conditions sont satisfaites, l'heure est valide
    return true;
}

// Exemples d'utilisation
console.log(estHeureValide(14, 30, 45)); // Output: true
console.log(estHeureValide(25, 15, 10)); // Output: false (heure invalide)
console.log(estHeureValide(18, 75, 5));  // Output: false (minute invalide)
