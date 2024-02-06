function inverserMotsDansPhrase(phrase) {
    const mots = phrase.split(' ');
    const phraseInverse = mots.reverse().join(' ');
    return phraseInverse;
  }
  
  // Test de la fonction
  const phraseTest = "Bonjour le monde";
  console.log(inverserMotsDansPhrase(phraseTest));
  // Résultat attendu : "monde le Bonjour"
  