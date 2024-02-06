function triRapide(tableau) {
  if (tableau.length <= 1) {
    return tableau;
  }

  const pivot = tableau[0];
  const inferieurs = [];
  const superieurs = [];

  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < pivot) {
      inferieurs.push(tableau[i]);
    } else {
      superieurs.push(tableau[i]);
    }
  }

  return [...triRapide(inferieurs), pivot, ...triRapide(superieurs)];
}

// Test de la fonction
const tableauTest = [64, 25, 12, 22, 11];
console.log(triRapide(tableauTest));
// Résultat attendu : [11, 12, 22, 25, 64]
