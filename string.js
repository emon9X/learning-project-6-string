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