// Fonction pour trouver le PPCM de deux nombres
function ppcm(a, b) {
    // Utiliser la formule: PPCM(a, b) = (|a * b|) / PGCD(a, b)
    const pgcd = (x, y) => {
      while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
      }
      return x;
    };
  
    return Math.abs(a * b) / pgcd(a, b);
  }
  
  // Exemple d'utilisation
  const nombre1 = 4;
  const nombre2 = 6;
  const resultat = ppcm(nombre1, nombre2);
  console.log(resultat); // Output: 12
  