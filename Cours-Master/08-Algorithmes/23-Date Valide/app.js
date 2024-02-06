// Fonction pour vérifier si une date est valide
function estDateValide(jour, mois, annee) {
    // Vérifier si l'année est positive
    if (annee <= 0) {
        return false;
    }

    // Vérifier si le mois est compris entre 1 et 12
    if (mois < 1 || mois > 12) {
        return false;
    }

    // Vérifier si le jour est valide pour le mois
    const joursDansMois = new Date(annee, mois, 0).getDate();
    if (jour < 1 || jour > joursDansMois) {
        return false;
    }

    // Si toutes les conditions sont satisfaites, la date est valide
    return true;
}

// Exemples d'utilisation
console.log(estDateValide(31, 12, 2022)); // Output: true
console.log(estDateValide(29, 2, 2023)); // Output: false (année non bissextile)
console.log(estDateValide(45, 8, 2021)); // Output: false (mois invalide)
