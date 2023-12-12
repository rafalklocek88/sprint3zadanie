//Podstawy funkcji w JavaScript.

// Wyświetl wyniki w konsoli

//PODSTAWY FUNKCJI:

// 1. Napisz funkcję dodającą dwie liczby
const addTwoNumbers = (x,y) => x + y ;
let sumTwoNumbers = (6+6)
 console.log(sumTwoNumbers);
// 2. Napisz funkcję zwracającą długość tablicy
const cities = ["Poznań", "Kraków", "Berlin", "Londyn", "Nowy Jork", "Warszawa"];
let lenghtOfArray = ()=> cities.length;
let citiesLenght = lenghtOfArray ();
console.log(citiesLenght);
// 3. Napisz funkcję sprawdzającą, czy liczba jest parzysta
const inputNumber = (a) => {
    let look =
      a % 2 === 0
        ? console.log(`Liczba ${a} jest parzysta`)
        : console.log(`Liczba ${a} jest nieparzysta`);
    return look;
  };
  inputNumber(2244);
// 4. Napisz funkcję obliczającą pole kwadratu
const numberField = (a) => a * a;
console.log(numberField(6));
// 5. Napisz funkcję zwracającą odwrotność liczby
const showReverseNumber = function(b) 
{
  showNumberReverse = (b=1/b);
  return showNumberReverse};
  let numberRevers = showReverseNumber(6);
 console.log(numberRevers);
// 6. Napisz funkcję konwertującą stopnie Celsjusza na Fahrenheita
const celOnFahren = function(b) 
{
  CelsjushOnFahrenheit = ((b * 9/5) + 32 );
  return CelsjushOnFahrenheit};

  let Fahrenheit = celOnFahren(-50);
 console.log(Fahrenheit);
// 7. Napisz funkcję zwracającą pierwszy element tablicy
const cities1 = ["Poznań", "Kraków", "Berlin", "Londyn", "Nowy Jork", "Warszawa"];
let firstOfCitiesArray = ()=> 
{
return cities1[0]; }
let oneElement = firstOfCitiesArray();
console.log(oneElement);
// 8. Napisz funkcję łączącą dwa ciągi znaków, utwórz warunek który sprawdzi czy argumenty są typu string
const series = (item1, item2) => {
  const addItems = item1 + item2;
  const fail = "Fail";
  if (typeof item1 === "string" && typeof item2 === "string") {
    return addItems;
  } else {
    return fail;
  }
};
let txt = series("niezaleznosc ", "finansowa!");
console.log(txt);
// 9. Napisz funkcję zwracającą typ zmiennej
function type(a) 
{
    return typeof a;
  }
  console.log(type("tekst" + 23 ));
// 10. Napisz funkcję zwracającą absolutną wartość liczby

//PODSTAWY PĘTLI:

// 1. Napisz funkcję, która będzie miała pętlę for, która wyświetli liczby od 1 do 10
function num1_10(){
    for(let i=1; i <= 10; i++){
        console.log(`Aktualna cyfra pętli to ${i}`);
    }}
    num1_10()
// 2. Napisz funkcję, która będzie używać pętli while do wyświetlenia liczb parzystych mniejszych od 20
function num20() {
    let num = 2;
    while (num <20 ) {
        console.log(num);
        num +=2;
    }}
    
    num20();
// 3. Napisz funkcję, która użyje pętli do while do wyświetlenia liczb od 10 do 1
function num10(){
    let num = 10;
    while (num >0 ) {
        console.log(num);
        num -=1;
    }}
    num10();
// 4. Napisz funkcję, która użyje pętli while i break do przerwania pętli po osiągnięciu liczby 5
function countingDown (){
    for (let i = 0; i < 10; i++) {
      console.log(i);
        if (i === 5) {
        break;
      }
    }}
    countingDown ()
// 5. Napisz funkcję, która użyje pętli for in do iteracji po właściwościach obiektu
function vstIteration(){
const bestVst = {
    first: 'Native instruments',
    second: "Arturia",
    third: "Slate Digital"
}

for (let number in bestVst) {
	console.log(`The ${number} best VST is ${bestVst[number]}`)
}}
vstIteration()
// 6. Napisz funkcję, która użyje pętli for of do iteracji po elementach tablicy
function instruments(){
const bestInstruments = ['Moog', 'Korg', 'Yamaha', 'Casio']
for (let item of bestInstruments){
	console.log(item);
}}
instruments();
// 7. Napisz funkcję, która użyje pętli for do obliczania sumy elementów tablicy

// 8. Napisz funkcję, która użyje pętli while do odwrócenia ciągu znaków

// 9. Napisz funkcję, która użyje pętli for of do znalezienia największej liczby w tablicy

// 10. Napisz funkcję, która użyje pętli for in do wyświetlenia par klucz-wartość tablicy obiektów

//PODSTAWOWE METODY NA TABLICACH:

// 1. Napisz funkcję, która doda element na koniec tablicy używając metody push
function addInstruments(){
const bestInstruments = ['Moog', 'Korg', 'Yamaha', 'Casio'];
const newArrayLength = bestInstruments.push('MachineMK3');
console.log(bestInstruments);
console.log(newArrayLength)};
addInstruments();

// 2. Napisz funkcję, która usunie ostatni element tablicy używając metody pop
function lastInstruments1(){
const bestInstruments1 = ['Moog', 'Korg', 'Yamaha', 'Casio'];
const removedInstruments = bestInstruments1.pop();
console.log(bestInstruments1);
console.log(removedInstruments)};
lastInstruments1();
// 3. Napisz funkcję, która usunie pierwszy element tablicy używając metody shift
function firstInstruments2(){
const bestInstruments2 = ['Moog', 'Korg', 'Yamaha', 'Casio'];
const removedInstruments1 = bestInstruments2.shift();
console.log(bestInstruments2);
console.log(removedInstruments1)};
firstInstruments2();
// 4. Napisz funkcję, która doda element na początek tablicy używając metody unshift
function addFirstInstruments3(){
  const bestInstruments3 = ['Moog', 'Korg', 'Yamaha', 'Casio'];
  const addInstruments1 = bestInstruments3.unshift("SSL");
  console.log(bestInstruments3);
  console.log(addInstruments1)};
  addFirstInstruments3();
// 5. Napisz funkcję, która użyje metody push, aby dodać dwa elementy na koniec tablicy
function addTwoInstruments4(item1,item2){
  const bestInstruments = ['Moog', 'Korg', 'Yamaha', 'Casio'];
  const newArrayLength = bestInstruments.push(item1,item2);
  console.log(bestInstruments);
  console.log(newArrayLength)};
  addTwoInstruments4('MachineMK3',"IGS");
// 6. Napisz funkcję, która dwukrotnie użyje metody pop, aby usunąć dwa ostatnie elementy tablicy
function doublePopInstruments6(){
  const bestInstruments1 = ['Moog', 'Korg', 'Yamaha', 'Casio'];
  const removedInstruments = bestInstruments1.pop();
  const removedInstruments1 = bestInstruments1.pop();
  console.log(bestInstruments1);
  console.log(removedInstruments)};
  doublePopInstruments6();
// 7. Napisz funkcję, która dwukrotnie użyje metody shift, aby usunąć dwa pierwsze elementy tablicy
function doubleShiftInstruments7(){
  const bestInstruments1 = ['Moog', 'Korg', 'Yamaha', 'Casio'];
  const removedInstruments = bestInstruments1.shift();
  const removedInstruments1 = bestInstruments1.shift();
  console.log(bestInstruments1);
  console.log(removedInstruments)};
  doubleShiftInstruments7();
// 8. Napisz funkcję, która dwukrotnie użyje metody unshift, aby dodać dwa elementy na początek tablicy
function doubleUnShiftInstruments5(item1,item2){
  const bestInstruments5 = ['Moog', 'Korg', 'Yamaha', 'Casio'];
  const addInstruments1 = bestInstruments5.unshift(item1,item2);
  console.log(bestInstruments5);
  console.log(addInstruments1)};
  doubleUnShiftInstruments5("SSL","AKG");
// 9. Napisz funkcję, która użyje metody push do dodania elementu, a następnie metody pop do usunięcia elementu z tablicy
function addAndRemove() {
  bestInstruments5 = ['Moog', 'Korg', 'Yamaha', 'Casio'];
  bestInstruments5.push("Soft Tube");
  bestInstruments5.pop(); 
  console.log(bestInstruments5)};
addAndRemove();

// 10. Napisz funkcję, która użyje metody unshift do dodania elementu, a następnie metody shift do usunięcia elementu z tablicy
function addAndRemove1() {
  bestInstruments5 = ['Moog', 'Korg', 'Yamaha', 'Casio'];
  bestInstruments5.unshift("Soft Tube");
  bestInstruments5.shift(); 
  console.log(bestInstruments5)};
addAndRemove1();
// 11. Napisz funkcję, która przy użyciu metody map zwiększy każdy element tablicy o 1
function evenNumbers(){
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16];
  console.log(arr.map(item => ++item ))}
  evenNumbers()
// 12. Napisz funkcję, która przy użyciu metody filter zwróci tylko parzyste liczby z tablicy
function arr2(){
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(arr.filter(item => item %2 === 0))}
  arr2()
// 13. Napisz funkcję, która przy użyciu metody map podwoi każdy element tablicy
function doubleElement(){
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16];
  console.log(arr.map(item => 2*item ))}
  doubleElement()
// 14. Napisz funkcję, która przy użyciu metody filter zwróci elementy tablicy większe niż 10
function greaterThanTen(){
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16];
  console.log(arr.filter(item => item  > 10))}
  greaterThanTen()
// 15. Napisz funkcję, która przy użyciu metody split podzieli podany ciąg znaków na słowa
function textcut() {
  const txt = "Devstock jest najlepszy na świecie!";
  const tab = txt.split(" ");
  console.log(tab);}
  textcut()
// 16. Napisz funkcję, która przy użyciu metody map zamieni każdy element tablicy na jego długość
function lengthArr6(){
  const arr = ["Poznań", "Kraków", "Berlin", "Londyn", "Nowy Jork", "Warszawa"];
  console.log(arr.map(item => item.length ))}
  lengthArr6()
// 17. Napisz funkcję, która przy użyciu metody filter zwróci tylko nieparzyste liczby z tablicy
function oddnumbers(){
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(arr.filter(item => item %2 !== 0))}
  oddnumbers()
// 18. Napisz funkcję, która przy użyciu metody map zwróci kwadraty każdego elementu tablicy
function squaremat(){
  const liczby = [5, 4, 8, 12]
  const kwadraty = liczby.map(x => x * x);
  console.log(kwadraty)}
  squaremat()
// 19. Napisz funkcję, która przy użyciu metody filter zwróci tylko te słowa z ciągu znaków, które mają więcej niż 3 litery
function arr7(){
  const arr = ["Poznań", "Kraków", "Berlin", "Londyn", "Nowy Jork", "Warszawa","LA","NY"];
  console.log(arr.filter(item => item.length > 3 ))}
  arr7()
// 20. Napisz funkcję, która przy użyciu metody map zwróci każdy element tablicy zapisany wielkimi literami
function makeUpperCase(){
  const arr = ["Poznań", "Kraków", "Berlin", "Londyn", "Nowy Jork", "Warszawa","LA","NY"];
  console.log(arr.map(item => item.toUpperCase() ))}
  makeUpperCase()