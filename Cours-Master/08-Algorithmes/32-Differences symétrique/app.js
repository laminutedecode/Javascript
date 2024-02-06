// Fonction pour trouver la différence symétrique de deux tableaux
function differenceSymetrique(tableau1, tableau2) {
    const difference1 = tableau1.filter(element => !tableau2.includes(element));
    const difference2 = tableau2.filter(element => !tableau1.includes(element));
    return [...difference1, ...difference2];
  }
  
  // Exemple d'utilisation
  const tableau1 = [1, 2, 3, 4, 5];
  const tableau2 = [3, 4, 5, 6, 7];
  const resultat = differenceSymetrique(tableau1, tableau2);
  console.log(resultat); // Output: [1, 2, 6, 7]
  