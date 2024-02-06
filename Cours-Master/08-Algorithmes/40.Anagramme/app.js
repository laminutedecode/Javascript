// Fonction pour vérifier si deux chaînes sont des anagrammes
function estAnagramme(chaine1, chaine2) {
    const trierChaine = (chaine) => chaine.split('').sort().join('');
    return trierChaine(chaine1) === trierChaine(chaine2);
  }
  
  // Exemple d'utilisation
  const chaine1 = "listen";
  const chaine2 = "silent";
  const resultat = estAnagramme(chaine1, chaine2);
  console.log(resultat); // Output: true
  