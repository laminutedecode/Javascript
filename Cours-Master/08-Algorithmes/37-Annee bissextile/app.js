// Fonction pour vérifier si une année est bissextile
function estBissextile(annee) {
  // Retourne true si l'année est divisible par 4 et non divisible par 100,
  // ou si l'année est divisible par 400.
  return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}

// Exemple d'utilisation
const anneeExemple = 2024;
const resultat = estBissextile(anneeExemple);
// Affiche le résultat de la fonction estBissextile pour l'année d'exemple.
console.log(resultat); // Output: true
