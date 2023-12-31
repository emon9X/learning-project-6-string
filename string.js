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

