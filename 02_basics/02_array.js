const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];


// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// const allHero =marvel_heros.concat(dc_heros);
// console.log(allHero);


const all_new_heros =[...marvel_heros, ...dc_heros];

console.log(all_new_heros);

const anotherArray = [1,2,3,[4,5,6], 7,[6,7,[4,5]]];

const real_another_array=  anotherArray.flat(Infinity);
console.log(real_another_array);