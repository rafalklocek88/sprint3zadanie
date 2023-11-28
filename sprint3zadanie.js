// Pod każdym punktem dodaj swoje rozwiązanie, w tym celu stwórz plik sprint3zadanie.js
//Zadania ze Zmiennych
// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.
let number = 3;
// b) Utwórz zmienną typu string przechowującą twoje imię.
const nam = 'rafal'
// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst.
let bike
bike = yamaha;
// d) S;twórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).
const per = { name: 'rafal',age: 35}

// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.
let fast = false;
const slow = true;
// f) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.
 let z = 1 + 4;
// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.
const fullName = 'Rafal_Klocek'
// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.
let floatnumber = 5.1234567;
// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego (np. dodawanie).
let sum = 34 + 54;
// j) Stwórz zmienną przechowującą twoje miasto jako ciąg znaków.
let city = 'lublin'
​
// Zadania z Prostych i Złożonych Typów Danych
// a) Utwórz tablicę zawierającą trzy różne typy danych.
let x = [ 10, true, 'raf']
// b) Stwórz obiekt car z właściwościami make, model i year.
let car = {make:citroen , model: C5 , year: 2009}
// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.
 let v = [3,-3,3.14]
// d) Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent (boolean).
 let person = { name:rafal,age:35, isStudent: false}
// e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z wartością typu string.
let n ={}
n = {color:'blue'}
// f) Stwórz tablicę obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name (string) i age (number).
const animals = [
    (krolik = {
      name: "bunny",
      age: 2,
    }),
    (mysz = {
      name: "mouse",
      age: 4,
    }),
  ];

// g) Utwórz zmienną przechowującą tablicę z różnymi wartościami boolean.
let q =[true,false,false]
// h) Stwórz obiekt student z kluczami name (string), grades (tablica liczb) i isActive (boolean).
const student ={name:'raf',grades:[1,2,3,4,5,6,7],isActive:false}

// i) Zadeklaruj tablicę zawierającą różne typy danych, w tym co najmniej jeden obiekt.
let table = [
nam = 'Klaudia',
10,
{car:Audi,model:80,year:2002}
]
// j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.
let book = {
    title:'Robin',
    author:'Janosik',
    yearPublished:2012,
}
​
// Zadania z Warunków i Operatorów Trójargumentowych
// a) Napisz warunek if, który sprawdzi, czy zmienna typu number jest większa od 10.
let number = 15;
if ( number > 10)
console.log('liczba jest wieksza od 10');

// b) Stwórz warunek if, który sprawdzi, czy zmienna tekstowa jest równa "Hello".
let text = 'Hello'
if (text ==='Hello') 
{console.log('zmienna jest równa Hello');}
else
{console.log('zmienna nie jest równa Hello');}
// c) Użyj operatora ternarnego do przypisania do zmiennej wartości w zależności od innego warunku logicznego.
let  number = 12;
let result = (number > 6) ? 'większa niż 6' : 'mniejsza niż 6';
console.log(result);
// d) Napisz warunek, który sprawdzi, czy zmienna age jest większa lub równa 18.
let age = 15;
if (age >= 18){console.log('zmienna jest większa');}
// e) Stwórz warunek if-else, który sprawdzi, czy tablica jest pusta.
let as = [];
if (as.length == 0) {console.log('tablica jest pusta');}
else{console.log('tablica nie jest pusta');}

// f) Użyj operatora ternarnego do sprawdzenia, czy zmienna isMember jest prawdziwa, i na tej podstawie przypisz rabat.
let isMember = true;
let wynik = (isMember > 10) ? "większa niż 10.brak rabatu"
  : (isMember < 4) ? "mniejsza niż 4 dajemy Rabat 50%" : "pomiędzy 4 ,a 10 też brak %";
console.log(wynik); // wyświetli "większa niż 10"
// g) Napisz warunek if, który sprawdzi, czy długość ciągu znaków w zmiennej jest większa niż 5.
let  ozon = 'ziemienin'
if (ozon.length > 5) {console.log('ciąg znaków jest większy niż 5');}
else {console.log('ciąg znaków jest mniejszy niż 5');}
// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieparzysta.
let liczba = 4;
if(liczba % 2 == 0) {console.log('parzysta');}
else {console.log('nieparzysta');}
// i) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku.
let  text3 = 'kotek';
let text4 = 'pies';
let result = (text3 > text4) ? 'kotek ma więcej liter niż pies' : 'pies ma mniej liter od kotka ';
console.log(result);
// j)Napisz warunek if, który sprawdzi, czy obiekt ma określony klucz.
let object = {
  name: "Native_nstruments",
  size: 450,
};
if ("name" in object) {
  console.log("Object posiada klucz name");
}
else
{console.log('Object nie posiada określonego klucza');}
