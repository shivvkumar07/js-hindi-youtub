const name = "hitesh"
const repoCount = 50;

// console.log(name+ repoCount+" Value");

console.log(`hello my name is ${name}  and i have a ${repoCount} on the git` );

const gameName = new String('Hiteshhc')

console.log(gameName[0]);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4);
console.log(newString);


const newString1 = "   hitesh   ";
console.log(newString1);
console.log(newString1.trim());


const url= "https://hitesh.com/hitesh%20chaudhary";
console.log(url.replace('%20', '-'));


console.log(url.includes('hitesh'));

console.log(url.includes('sundar'));