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