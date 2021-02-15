## L'opération XOR

L'opération XOR fait partie des opérateurs binaires qui traitent leurs opérandes comme des séquences de 32 bits (des zéros et des uns), plutôt que comme des nombres décimaux, hexadécimaux ou octaux.

L'opérateur XOR renvoie un 1 pour chaque position de bit pour laquelle le bit correspondant d'un seul des deux opérandes est un 1.

#### Table de vérité XOR

**Table ^ (XOR binaire)**:
| a | b | a XOR b |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    0    |

Exemple :
```js
let a = 5
let b = 3

console.log(a ^ b)
```
Le résultat donnée par xor est 6. Comme on peut le voir dans le tableau ci dessous,
xor ne prend en compte que les bit 1 qui ne sont pas commun avec l'autre variable.

              | Variable | Décimal |   Binaire (32 bits) |
              |----------|---------|---------------------|
              |  a       |    5    | 0000 0000 0000 0101 |
              |  b       |    3    | 0000 0000 0000 0011 |
Opération xor |          |    6    | 0000 0000 0000 0110 |
