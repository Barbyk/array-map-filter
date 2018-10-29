/* Array.prototype.filter - Exercice 2

Ecrire une fonction getMultiplesOf qui reçoit deux arguments:
1. un tableau de nombres.
2. un nombre.
En utilisant filter, elle doit renvoyer un tableau ne contenant que les
nombres du 1er argument qui sont multiples du nombre passé en 2ème.

Exemple d'entrée:
  1er argument:  [-12, -10, -7, -1, 5, 8, 11, 15, 20, 27]
  2ème argument: 5

  Sortie attendue:
  [-10, 5, 15, 20]

 */

const getMultiplesOf=(tab, numb)=>{
  return tab.filter(multiple =>{
    return (multiple % numb == 0)
  })
}

const test = ([-12, -10, -7, -1, 5, 8, 11, 15, 20, 27])

console.log(getMultiplesOf(test,5));


// Ne pas modifier l'export
module.exports = getMultiplesOf;
