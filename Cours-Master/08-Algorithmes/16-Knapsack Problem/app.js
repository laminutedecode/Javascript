function sacADos(capaciteMax, poids, valeur, n) {
  if (n === 0 || capaciteMax === 0) {
    return 0;
  }

  if (poids[n - 1] > capaciteMax) {
    return sacADos(capaciteMax, poids, valeur, n - 1);
  } else {
    return Math.max(
      valeur[n - 1] + sacADos(capaciteMax - poids[n - 1], poids, valeur, n - 1),
      sacADos(capaciteMax, poids, valeur, n - 1)
    );
  }
}

// Test de la fonction
const capaciteMax = 50;
const poids = [10, 20, 30];
const valeur = [60, 100, 120];
const n = poids.length;
console.log(sacADos(capaciteMax, poids, valeur, n));
// Résultat attendu : 220
