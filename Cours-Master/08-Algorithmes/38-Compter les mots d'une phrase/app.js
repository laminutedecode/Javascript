// Fonction pour compter les mots dans une phrase
function compterMots(phrase) {
    // Utiliser la méthode split pour diviser la phrase en tableau de mots
    const mots = phrase.split(' ');
    return mots.length;
  }
  
  // Exemple d'utilisation
  const phraseExemple = "Bonjour, comment ça va ?";
  const resultat = compterMots(phraseExemple);
  console.log(resultat); // Output: 4
  