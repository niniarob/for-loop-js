// Print the square of numbers from 1 to 5

for (let x = 1; x <= 5; x++) {
    let y = x * x;
    console.log(y);
}


// Print the sum of numbers from 1 to 10

let m = 0;
let l = 1;
let o = 10;

for (let i = 0; i <= 10; i++){
    m = m + i
}
 console.log(m)

// Print average from 1 to 10

let n = 1;
let m = 10;
let z = 0;

for(let i = n; i <= m; i++){
   z = z + i; 
}
   let c = z / m;
   console.log(c)


// Convert each character in a string to uppercase.

let x = "nino";
let y = "";

for (let i = 0; i <= x.length; i++){
    let z = x.charAt (i);
    let c = z.toUpperCase ();
    y += c;
}
console.log(y)
