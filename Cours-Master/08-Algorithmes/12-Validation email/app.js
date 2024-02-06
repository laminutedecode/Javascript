function validerAdresseEmail(email) {
  const expressionReguliere = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expressionReguliere.test(email);
}

// Test de la fonction
const emailTest = "exemple@email.com";
console.log(validerAdresseEmail(emailTest));
// Résultat attendu : true
