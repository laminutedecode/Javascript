// Fonction pour appliquer une fonction de rappel à chaque élément d'un tableau
function appliquerFonctionRappel(tableau, fonctionRappel) {
    return tableau.map(element => fonctionRappel(element));
  }
  
  // Exemple d'utilisation
  const tableauExemple = [1, 2, 3, 4, 5];
  const fonctionRappel = x => x * 2;
  const resultat = appliquerFonctionRappel(tableauExemple, fonctionRappel);
  console.log(resultat); // Output: [2, 4, 6, 8, 10]
  
  // La méthode map est une méthode intégrée en JavaScript pour les tableaux. Elle est utilisée pour créer un nouveau tableau en appliquant une fonction de rappel à chaque élément du tableau d'origine. La méthode map ne modifie pas le tableau d'origine, mais crée plutôt un nouveau tableau avec les résultats de l'application de la fonction de rappel à chaque élément.

//   Dans le code que vous avez fourni, la fonction appliquerFonctionRappel prend deux paramètres : tableau (le tableau d'origine) et fonctionRappel (la fonction à appliquer à chaque élément du tableau). La méthode map est utilisée à l'intérieur de cette fonction pour créer un nouveau tableau en appliquant la fonction de rappel à chaque élément du tableau d'origine.

// Le tableau d'origine est [1, 2, 3, 4, 5], et la fonction de rappel (fonctionRappel) est définie comme x => x * 2, ce qui signifie qu'elle multiplie chaque élément par 2. Ainsi, la nouvelle tableau résultant, stocké dans la variable resultat, contiendra les éléments [2, 4, 6, 8, 10].