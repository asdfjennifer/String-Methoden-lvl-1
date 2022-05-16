// lev 1_1 length
// Erstelle zwei Variablen nachName und vorName.
// Zeige die Länge der beiden Variablen in der Konsole an.
// Erstelle noch ein Variable “name”, die die Summe der beiden Variablen ist.
// Zeige die Länge der Variable “name” in der Konsole an.

let vorName = "Jennifer";
let nachName = "Genger";

let name = vorName + " " + nachName;
console.log(name.length);



// lev 1_2 indexOf
// Verwende den Befehl indexOf() um die Position eines Zeichens in einer Zeichenketten als Ergebnis in der Konsole zu erhalten.

let txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

// Suche die Position des Zeichens “h” in der Variablen txt.
// Suche die Position des Zeichens “Earth” in der Variablen txt.
// Suche die Position des Zeichens “Moon” in der Variablen txt.

console.log(txt.indexOf("h")); //27
console.log(txt.indexOf("Earth")); //38
console.log(txt.indexOf("Moon")); //-1



// lev 1_3 search 

// Verwende den Befehl search() um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten.

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt.search(";")); // -1
console.log(txt.search("green")); // -1
console.log(txt.search("blue")); // -1

// Suche die Position des Zeichens “;” in der Variablen txt.
// Suche die Position des Zeichens “green” in der Variablen txt.
// Suche die Position des Zeichens “blue” in der Variablen txt.




// lev 1_4 slice

// Verwende den Befehl slice() um das Ergebnis zu erhalten.

let A = 'Sam is going to coding school';
document.write('lev 1_4 slice'+"<br>"+"<br>");
document.write('A. Sam is going to coding school'+"<br>");
console.log(txt.length); //70

let B = A.slice(0, 4);
document.write("B. "+B+"<br>"); //right

let C = A.slice(4, 6);
document.write("C. "+C+"<br>"); //right

let D = A.slice(2);
let D2 = A.slice(16, 23);
document.write("D. "+D+D2+"<br>"); //WTF

let E = A.slice(4);
let E2 = A.slice(16, 23);
document.write("E. "+E+E2+"<br>"); //WTF

let F = A.slice(-7, 70);
document.write("F. "+F+"<br>"); //right

let G = A.slice(0, 6);
let G2 = A.slice(-7, 70);
document.write("G. "+G+G2+"<br>"+"<br>"); //right

// Verwende die Methode "slice" um diese Ausgabe auf dem Bildschirm anzuzeigen:
// B - Sam
// C - is
// D - am is going to school
// E - is going to school
// F - school
// G - Sam is school

// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis im Dokument auszugeben.




// lev 1_5 substring

// Verwende den Befehl substring() um die gewünschten Zeichenketten zu erhalten.

let text = 'Sam is back from coding school';
console.log(text.length); //30

document.write('lev 1_5 substring '+"<br>"+"<br>");

// Zeige mit Hilfe der Methode "substring" diese Ausgabe in einem HTML-Dokument an:

let textA = text.substring(0, 4);
document.write(textA+"<br>");

let textB = text.substring(4, 7);
document.write(textB+"<br>");

let textC = text.substring(30, 24);
document.write(textC+"<br>");

let textD = text.substring("");
document.write(textA+textB+textC+"<br>"+"<br>"); 

// A Sam
// B is 
// C school
// D Sam is school

// Speichere jedes Ergebnis in einer Variablen und verwende document.write(deine gespeicherte substring variable+"<br>"), um das Ergebnis anzuzeigen.








// lev 1_6 substr

// Verwende den Befehl substr() um die gewünschten Zeichenketten zu erhalten.

let teext = "Sam is working at coding school";
console.log(teext.length); //31
document.write('lev 1_6 substr '+"<br>"+"<br>");

// Zeige mit Hilfe der Methode "substr" diese Ausgabe in einem HTML-Dokument an:
// Sam
// is 
// at school
// Sam works at school

// Speichere jedes Ergebnis in einer Variablen und verwende innerHTML, um das Ergebnis anzuzeigen.







// lev 1_7 replace

// Verwende den Befehl replace() um die gewünschten Zeichenketten zu erhalten.

let text = "Sam is good at coding school";

// Zeige mit der Methode "replace" diese Ausgabe in einem HTML-Dokument an:

// Sam is bad at school
// Tom is good at school 
// Sam is good at tennis

// Speichere jedes Ergebnis in einer Variablen und verwende innerHTML, um das Ergebnis anzuzeigen.



console.log(text.replace("good", "bad"));
console.log(text.replace("Sam", "Tom"));
console.log(text.replace("school", "tennis"));





// lev1_8 toLowerCase-toUpperCase

// Verwende den Befehl toLowerCase(), toUpperCase() um die gewünschten Zeichenketten zu erhalten.

// let text = "Sam is going to coding school";

// // Erzeuge mit den Methoden "toLowerCase-toUpperCase" diese Ausgabe in einem HTML-Dokument. Nutze alle Methoden die du bereits gelernt hast.

// let textUp = text.toUpperCase().replace('CODING', '');
// console.log(textUp);

// let textDown = text.toLowerCase().replace('coding', '');
// console.log(textDown);

// let text3 = text.slice(0,3).toUpperCase().concat(text.slice(3, 15).concat(text.slice(-7).toUpperCase())).trim();console.log(text3);

// let text4 = text.slice(0, 3).toLowerCase().concat(text.slice(3, 15).toUpperCase().concat(text.slice(-7)));
// console.log(text4);

// let text5 = 
// console.log(text5);

// SAM IS GOING TO SCHOOL
// sam is going at school 
// SAM is going to SCHOOL
// sam IS GOING TO school
// Sam Is Going To School

// Speichere jedes Ergebnis in einer Variable und verwende innerHTML, um das Ergebnis anzuzeigen.








// lev1_9 concat

// Verwende die Methode concat() um die gewünschten Zeichenketten zu erhalten.

// let text1 = "Sam is going to coding school";
// let text2 = "Tom";
// let text3 = "programming bike";
// let text4 = "and";

// Erzeuge mit "concat" diese Ausgabe in einem HTML-Dokument. Nutze alle Methoden die du bereits gelernt hast.

// Sam is going to school and to the movie theater
// Sam is going to movie theater
// Tom and Sam are going to school
// Tom and Sam are going to gym and to the movie theater
// Tom is going to school and to the movie theater

// Speichere jedes Ergebnis in einer Variablen und verwende innerHTML, um das Ergebnis anzuzeigen.

// Template Literals

// lev 1_1 
// let vorname = "Jennifer";
// let nachname = "Genger";
// let age = "25";
// let ort = "Recklinghausen";

// console.log(`Ich heiße ${vorname} ${nachname}, komme aus ${ort} und bin ${age} Jahre alt.`);


// Conditional-Statements lvl 1

// lev1_1: conditional-statements punkten

// Wir brauchen eine Abfrage, um zu überprüfen, ob der Benutzer volljährig ist. Deklariere die Funktion adult().
// Erstelle eine HTML-Datei mit einem Formular zur Eingabe des Alters und einem Button für die Überprüfung.

// Im Funktionskörper:
// Wenn das eingegebene Alter größer oder gleich 18 ist, gib true zurück.
// Ist das eingegebene Alter kleiner als 18, gib false zurück.
// Lass Dir das Ergebnis der Funktion im HTML in “volljährig” oder “minderjährig” ausgeben.

let age = 10; 

if (age >= 18) {
    console.log('true');
    document.write('minderjährig');
} else (age < 18) {
    console.log('false');
    document.write('volljährig');
}


// lev1_2: conditional-statements

// Erstelle ein HTML-Formular zur Eingabe der Wetter-Qualität in Zahlen von 0 bis 10.
// Deklariere die Funktion weather() und im Funktionskörper:

// Studiere Comparison and Logical Operators
// Nutze Conditional Statements (if...else)
// Bei einer Qualität zwischen 8 und 10 soll das Ergebnis 'super' sein.
// Bei einer Qualität zwischen 6 und 7 soll das Ergebnis 'gut' sein.
// Bei einer Qualität zwischen 3 und 5 soll das Ergebnis 'okay' sein.
// Bei einer Qualität zwischen 0 und 2 soll das Ergebnis 'schlecht'.
// Lass Dir das Ergebnis der Funktion im HTML ausgeben.

// Hinweise
// logical operators - && ( and )

let weather = 10; 

if (8 && 10) {
    console.log('true');
    document.write('super');
} else (6 && 7) {
    console.log('true');
    document.write('gut');
} else (3 && 5) {
    console.log('true');
    document.write('okay');
} else (0 && 2) {
    console.log('true');
    document.write('schlecht');
}