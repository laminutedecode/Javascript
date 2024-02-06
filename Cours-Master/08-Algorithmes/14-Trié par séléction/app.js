function triParSelection(tableau) {
  const longueur = tableau.length;

  for (let i = 0; i < longueur - 1; i++) {
    let indiceMinimum = i;

    // Trouver l'indice du plus petit élément non trié
    for (let j = i + 1; j < longueur; j++) {
      if (tableau[j] < tableau[indiceMinimum]) {
        indiceMinimum = j;
      }
    }

    // Échanger l'élément actuel avec le plus petit trouvé
    const temp = tableau[i];
    tableau[i] = tableau[indiceMinimum];
    tableau[indiceMinimum] = temp;
  }

  return tableau;
}

// Test de la fonction
const tableauNonTrie = [64, 25, 12, 22, 11];
console.log(triParSelection(tableauNonTrie));
// Résultat attendu : [11, 12, 22, 25, 64]
