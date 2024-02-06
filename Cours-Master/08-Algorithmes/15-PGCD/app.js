function calculerPGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}

// Test de la fonction
const nombre1 = 48;
const nombre2 = 18;
console.log(calculerPGCD(nombre1, nombre2));
// Résultat attendu : 6
