function convertirCelsiusEnFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

// Test de la fonction
const temperatureCelsius = 25;
console.log(convertirCelsiusEnFahrenheit(temperatureCelsius));
// Résultat attendu : 77
