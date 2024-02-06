function dijkstra(graphe, depart, arrivee) {
  const infini = Infinity;
  const distances = {};
  const predecesseurs = {};
  const noeudsNonVisites = new Set(Object.keys(graphe));

  for (let noeud in graphe) {
    distances[noeud] = infini;
    predecesseurs[noeud] = null;
  }

  distances[depart] = 0;

  while (noeudsNonVisites.size > 0) {
    let noeudActuel = null;

    for (let noeudNonVisite of noeudsNonVisites) {
      if (noeudActuel === null || distances[noeudNonVisite] < distances[noeudActuel]) {
        noeudActuel = noeudNonVisite;
      }
    }

    for (let voisin in graphe[noeudActuel]) {
      const nouveauCalcul = distances[noeudActuel] + graphe[noeudActuel][voisin];

      if (nouveauCalcul < distances[voisin]) {
        distances[voisin] = nouveauCalcul;
        predecesseurs[voisin] = noeudActuel;
      }
    }

    noeudsNonVisites.delete(noeudActuel);
  }

  const chemin = [];
  let noeudActuel = arrivee;

  while (noeudActuel !== null) {
    chemin.unshift(noeudActuel);
    noeudActuel = predecesseurs[noeudActuel];
  }

  return chemin;
}

// Test de la fonction
const grapheTest = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(dijkstra(grapheTest, 'A', 'D'));
// Résultat attendu : ['A', 'B', 'C', 'D'] avec un poids total de 4
