function verifierParite(tableau) {
    const resultat = [];
  
    for (let nombre of tableau) {
      const parite = (nombre % 2 === 0) ? 'pair' : 'impair';
      resultat.push({ nombre, parite });
    }
  
    return resultat;
  }
  
  // Test de la fonction
  const tableauTest = [2, 7, 4, 9, 6];
  console.log(verifierParite(tableauTest));
  // Résultat attendu : [ { nombre: 2, parite: 'pair' }, { nombre: 7, parite: 'impair' }, { nombre: 4, parite: 'pair' }, { nombre: 9, parite: 'impair' }, { nombre: 6, parite: 'pair' } ]
  