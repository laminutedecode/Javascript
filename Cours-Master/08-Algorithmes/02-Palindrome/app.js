function palindrome(chaine){
    const chaineMinuscules = chaine.toLowerCase();

    const chaineInverse = chaineMinuscules.split('').reverse().join('')

    return chaineMinuscules === chaineInverse
}

console.log(palindrome('radar'));
console.log(palindrome('hello'));
console.log(palindrome('Jonathan'));