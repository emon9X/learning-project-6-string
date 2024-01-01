// unexpected behaviour of string object 

{
    let x = "John";
    let y = new String("John");
    console.log(x == y); /*true */
    console.log(x === y); /*false */
    console.log(y)
}

{
    let x = new String("John");
    let y = new String("John");
    console.log(x == y); /*false */
    console.log(x === y); /*false */
}
// ----------------------------------------------------------------

//string methods 
/*
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split() 
*/
/*
    INDEX
A = 0    -26
B = 1    -25
C = 2    -24
D = 3    -23
E = 4    -22
F = 5    -21
G = 6    -20
H = 7    -19
I = 8    -18
J = 9    -17
K = 10   -16
L = 11   -15
M = 12   -14
N = 13   -13
O = 14   -12
P = 15   -11
Q = 16   -10
R = 17   -9
S = 18   -8
T = 19   -7
U = 20   -6
V = 21   -5
W = 22   -4
X = 23   -3
Y = 24   -2
Z = 25   -1

*/

//length
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = text.length;
    console.log(length);
}

/*All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced. */

//extracting parts

//slice always works from left to right
//slice arguments are uni-directional
//slice: slice(start index, end index)
// from start index to before of end index (not to end index)
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let part = text.slice(1, 25);
    console.log(part);
}
//slice: slice(start index)
//from start index to last 
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let part = text.slice(13);
    console.log(part);
}

//slice: slice(-start index, -end index)
// from start index to before of end index (not to end index)
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let part = text.slice(-25, -1);
    console.log(part);
}

//slice: slice(-start index)
//from start index to last 
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let part = text.slice(-25);
    console.log(part);
}

//substring arguments are multi-directional. smaller argument is considered as start index.
// substring:substring(index, index)
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let part = text.substring(9, 0); /*as substring arguments are multi-directional, here 0 is considered as start index though it is passed as second argument. */
    console.log(part);
}
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let part = text.substring(0, 9);
    console.log(part);
}

//substring(start index)
//from start index to last 
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let part = text.substring(1);
    console.log(part);
}
//unlike slice arguments less than 0 is considered as 0
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let part = text.substring(-115, 9);
    console.log(part);
}


//substr(start index, length)
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let part = text.substr(-25, 10);
    console.log(part);
}
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let part = text.substr(2, 10);
    console.log(part);
}

//slice, substring and substr all extract string from left to right

//replace string content
//replace method
//The replace() method does not change the string it is called on.
//The replace() method returns a new string.
//The replace() method replaces only the first match
// the replace() method is case sensitive.

//replace(the string to be replaced, replacement)
{
    let text = "Please visit Microsoft!";
    let newText = text.replace("Microsoft", "W3Schools");
    console.log(newText);
    console.log(text); /*doesn't change the main string */
}
//replace method is case sensitive
{
    let text = "Please visit Microsoft!";
    let newText = text.replace("MicrosoFT", "W3Schools"); /*it will give text variable unchanged */
    console.log(newText);
}
//To replace case insensitive, use a regular expression with an /i flag (i for insensitive)
//regular expression can't be used inside quotes
{
    let text = "Please visit Microsoft!";
    let newText = text.replace(/microsoft/i, "W3Schools");
    console.log(newText);
}
//By default, the replace() method replaces only the first match
{
    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace(/microsoft/i, "W3Schools");
    console.log(newText);
}
//To replace all matches, use a regular expression with a /g flag (g for global match)

{
    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace(/Microsoft/g, "W3Schools");
    console.log(newText);
}
{
    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace(/microsoft/g, "W3Schools"); /*this will not work because here first argument is not case insensitive */
    console.log(newText);
}
//to replace all matches and ommiting case sensivity at the same time use i and g (/gi)
{
    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace(/microsoft/gi, "W3Schools");
    console.log(newText);
}

//replaceAll(to be replaced, replacement)
//replaceAll is case sensitive
//replaceAll gives new string. Keeps the main string unchanged
{
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    let newText = text.replaceAll("cats", "dogs"); /*replaces only cats not Cats. case sensitive */
    console.log(newText);
    console.log(text); /*main string remained unchanged */
}
// to make case insensitive 
{
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    // let newText = text.replaceAll(/cats/i, "dogs"); /*only regular expression for case insensivity can't be used. It will give TypeError */
    let newText = text.replaceAll(/cats/gi, "dogs");
    console.log(newText);
}

// toUpperCase method 
// toLowerCase method
// gives new string. Keeps the main string unchanged
{
    let text1 = "Hello World!";
    let text2 = text1.toUpperCase();
    let text3 = text1.toLowerCase();
    console.log(text2);
    console.log(text3);
    console.log(text1);

}

//concat method
{
    let text = "".concat('text', " ", 'get');
    console.log(text);
}

// trim method 
//The trim() method removes whitespace from both sides of a string

{
    let text1 = "      Hello World!      ";
    let text2 = text1.trim();
    console.log(text2);
}

// trimStart and trimEnd methods

{
    let text1 = "       hi my name is emon     ";
    let text2 = text1.trimStart();
    console.log(text2);
    let text3 = text1.trimEnd();
    console.log(text3);
}

//string padding
//To pad a number, convert the number to a string first
// padStart(padding length, padding string), padEnd(padding length, padding string)
{
    let text = "5";
    let text2 = text.padStart(5, "x");
    let text3 = text.padEnd(5, "x");
    console.log(text2, text3);
}

//Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(index)
// charCodeAt(index) /*The method returns a UTF-16 code (an integer between 0 and 65535). */
// Property access [index] /*doesn't change string like array. String is immutable */

{
    let text = "HELLO WORLD";
    let text1 = text.charAt(0);
    let text2 = text.charCodeAt(0);
    let text3 = text[0];
    console.log(text1, text2, text3)
}

{
    let text = "";
    let text1 = text.charAt(0); /*gives empty string */
    let text2 = text[0]; /* give undefined */
    let text3 = text.charAt(3); /*gives empty string */
    let text4 = text[3]; /* give undefined */
    console.log('text1 ' + text1, 'text2 ' + text2, 'text3 ' + text3, 'text4 ' + text4);
}

//convert string to array
//split method
//split(separator)
{
    let text = "my name, is emon. I dont't | smoke. I can , play many, games. but| I can't play, with girls | heart."
    let array1 = text.split(",")
    console.log(array1);
    let array2 = text.split(".")
    console.log(array2);
    let array3 = text.split("|")
    console.log(array3);
    let array4 = text.split(" ")
    console.log(array4);
    let array5 = text.split("")
    console.log(array5);
}
// ------------------------------------------------------------------------------------------
// String Search Methods

// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

//indexOf(string)
// The indexOf() method returns the index (position) the first occurrence of a string in a string

{
    let text = "Please locate where 'locate' occurs!";
    let index = text.indexOf("locate"); /*returns first occurance of locate */
    console.log(index);
}

//lastIndexOf(string)
// unlike indexOf, lastIndexOf returns last position of the specified string
{
    let text = "Please locate where 'locate' occurs!";
    let index = text.lastIndexOf("locate");
    console.log(index);
}
//when the specified text is not found, indexOf and lastIndexOf gives -1
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let indexOf = text.indexOf('tom');
    console.log(indexOf);
    let lastIndexOf = text.lastIndexOf('tom');
    console.log(lastIndexOf);
}

// indexOf(string, start index) , lastIndexOf(string, start index)
// -------->searching direction,    <------searching direction
// to right, to left

{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let indexOf = text.indexOf('Y', 15); /*starts from 15(P) and search to the right and finds Y at 24 */
    let indexOf2 = text.indexOf('A', 15); /*starts from 15(P) and search to the right and doesn't find A so returns -1*/
    console.log(indexOf);
    console.log(indexOf2);

    let lastIndexof = text.lastIndexOf('Y', 15); /*starts from 15(P) and search to the left and doesn't find Y so returns -1*/
    console.log(lastIndexof);
    let lastIndexOf2 = text.lastIndexOf('A', 15); /*starts from 15(P) and search to the left and finds A so returns 0*/
    console.log(lastIndexOf2);
}

//search method
//search(string)
//returns the index (position) the first occurrence of a string in a string
{
    let text = "Please locate where 'locate' occurs!";
    let search = text.search("locate");
    let search2 = text.search(/locate/);
    let search3 = text.search(/locatt/); /*doesn't find the string so returns -1 */
    console.log(search);
    console.log(search2);
    console.log(search3);
}

//match method
//match(string)
//If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.
//it is a case sensitive method

{
    let text = "The rain in SPAIN stays mainly in the plain";
    let text2 = text.match("ain");
    let text3 = text.match(/ain/);
    console.log(text2);
    console.log(text3);
}

// Perform a global search
{
    let text = "The rain in SPAIN stays mainly in the plain";
    let text3 = text.match(/ain/g);
    console.log(text3);
}

//make match method case insensitive

{
    let text = "The rain in SPAIN stays mainly in the plain";
    let text3 = text.match(/ain/gi);
    console.log(text3);
}

//matchAll method
//matchAll(string)
// case sensitive method
// it gives RegExpStringIterator, which is an object
{
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    let match = text.matchAll("Cats"); /*here match is an object. which properties are array */
    console.log(match);
    for (let m of match) {
        console.log(m); /**here m is an array */
        console.log(m[0]); /*m[0] gives the first element of m arrary. */
    }
}

// make matchAll() method case insensitive

{
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    let match = text.matchAll(/cats/gi); /*here match is an object. which properties are array */
    console.log(match);
    for (let m of match) {
        console.log(m); /**here m is an array */
        console.log(m[0]); /*m[0] gives the first element of m array. */
    }
}

//includes method
//includes(string)
//includes(string, start index)
//it returns boolean result
//it is case sensitive
{
    let text = "Hello world, welcome to the universe.";
    let text2 = text.includes("world");
    let text3 = text.includes("World");
    let text4 = text.includes("world", 1)
    let text5 = text.includes("world", 8)
    console.log(text2);
    console.log(text3);
    console.log(text4);
    console.log(text5);
}

//startsWith and endsWith method
//return boolean value
//case sensitive
//startsWith(string, start index)
{
    let text = "Hello world, welcome to the universe.";
    let text2 = text.startsWith("Hello");
    console.log(text2);
    let text3 = text.startsWith("world");
    console.log(text3);
    let text4 = text.startsWith("world", 6)
    console.log(text4);
}

//endsWith(string, last index)
{
    let text = "Hello world, welcome to the universe.";
    let text2 = text.endsWith("universe.");
    console.log(text2);
    let text3 = text.endsWith("world");
    console.log(text3);
    let text4 = text.endsWith("world", 11) /*d is located at index 10 */
    console.log(text4);
}