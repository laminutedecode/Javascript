function fusionnerTableauxTriés(tableau1, tableau2) {
    let fusion = [];
    let index1 = 0;
    let index2 = 0;
  
    while (index1 < tableau1.length && index2 < tableau2.length) {
      if (tableau1[index1] < tableau2[index2]) {
        fusion.push(tableau1[index1]);
        index1++;
      } else {
        fusion.push(tableau2[index2]);
        index2++;
      }
    }
  
    // Ajouter les éléments restants des deux tableaux
    fusion = fusion.concat(tableau1.slice(index1), tableau2.slice(index2));
  
    return fusion;
  }
  
  // Test de la fonction
  const tableau1 = [1, 3, 5, 7];
  const tableau2 = [2, 4, 6, 8];
  console.log(fusionnerTableauxTriés(tableau1, tableau2));
  // Résultat attendu : [1, 2, 3, 4, 5, 6, 7, 8]
  