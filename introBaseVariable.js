//Création d'une variable a et affectation de valeur
let a = 365;
//Affichage de la variable a
console.log(a);

//Création d'une variable constante
const b = 100;

/* INCREMENTATION */
//Creation de b et init
let b = 0;
//b contient 1
b += 1;
//b contient 2
b++;
//Affichage de b
console.log(b);

/* PORTEE DES VARIABLES */

let numero1 = 0;
{
    numero1 = 1
    const numero2 = 2;
}
console.log(numero1);
console.log(numero2);
//le premier log va afficher 1 tandis que le second affichera une erreur

/* NOTION D'EXPRESSION */

const c = 3;
let d = c;
d = d + 1;
console.log(d); 
//La console va afficher 4

let e = 3 + 2 + 4;
//e contient la somme des chiffres donc 11
e = (3 + 2) * 4;
//e contient 20

const pays = "France";
console.log("Je vis en : " + pays);