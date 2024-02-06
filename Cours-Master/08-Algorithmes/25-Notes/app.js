// Fonction pour calculer la moyenne des notes
function calculerMoyenne(notes) {
    // Vérifier si le tableau de notes est vide
    if (notes.length === 0) {
      return "Aucune note disponible, la moyenne ne peut pas être calculée.";
    }
  
    // Calculer la somme des notes
    const sommeNotes = notes.reduce((acc, note) => acc + note, 0);
  
    // Calculer la moyenne
    const moyenne = sommeNotes / notes.length;
  
    // Renvoyer la moyenne arrondie à deux décimales
    return moyenne.toFixed(2);
  }
  
  // Exemple d'utilisation de la fonction avec un tableau de notes
  const notesEleves = [15, 18, 12, 16, 20];
  const moyenneDesNotes = calculerMoyenne(notesEleves);
  
  console.log(`La moyenne des notes est : ${moyenneDesNotes}`);
  

//   La fonction calculerMoyenne prend un tableau notes en entrée.
// Elle vérifie d'abord si le tableau est vide. Si c'est le cas, elle renvoie un message indiquant qu'aucune note n'est disponible.
// Si le tableau n'est pas vide, la fonction utilise la méthode reduce pour calculer la somme des notes.
// Ensuite, elle divise la somme par la longueur du tableau pour obtenir la moyenne.
// Enfin, la fonction renvoie la moyenne arrondie à deux décimales à l'aide de la méthode toFixed.
// L'exemple d'utilisation montre comment appeler la fonction avec un tableau de notes et afficher le résultat.