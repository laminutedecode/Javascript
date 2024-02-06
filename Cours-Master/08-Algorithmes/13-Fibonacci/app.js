function genererFibonacci(n) {
  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    const nouveauNombre = sequence[i - 1] + sequence[i - 2];
    sequence.push(nouveauNombre);
  }

  return sequence;
}

// Test de la fonction
const nombresFibonacci = genererFibonacci(8);
console.log(nombresFibonacci);
// Résultat attendu : [0, 1, 1, 2, 3, 5, 8, 13]
