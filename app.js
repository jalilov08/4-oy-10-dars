/** Darsdagilar
 /* 1-blok
  let user = {
    name: "John",
    age: 34,
    family: {
        dad: "Alex",
        mom: "Anna"
    }
};

let user1 = {...user};
user1.family.mom  = "Linda";
user1.name = "Nozimjon";
console.log(user1);

//2-blok
let arr = [3, -1, 5, 7, 10, 4];

let a = arr.find((value, index, arr) => {
    return index % 2 == 1 
});

console.log(a);

///3-blok
let arr = [3, -1, 5, 7, 10, 4];
let sum = 0;

arr.forEach((value, index) => {
    if (index % 2 == 0 && value % 2 == 1) {
        sum += index,value;
    }
});
console.log(sum);

////4-blok
let arr = [1000000000, 10, 100, 1000, 10000];
let sorted = arr.sort(function (a, b) {
   return b - a
});
console.log(sorted);
 */

//VAZIFA

/** 3-misol
let arr = [-3, 4, -7, 10, 13];
let sum = 0;

arr.find((value) => {
  if (value <= 0) {
    sum += value;
  }
  return sum
});

console.log(sum);
 */

/** 4-misol
let arr = [3, 4, 9, 7, 10, 21];
let sum = 0;

arr.forEach((value) => {
  if (value % 2 == 1 && value % 3 == 0) {
    sum++;
  }
  return sum
});

console.log(sum);
 */

/** 5-misol
 let arr = [3, 4, 9, 7, 10,];

 let a = arr.find((value, index, arr) => {
     return value % 2 == 0 
    //bu yerga ozingizga kerak shart yozishingiz mumkin misol uchin: value % 3 == 0; value % 4 == 0; value % 5 == 0; shunga o'xshash
 });

 console.log(a);
 */

/** 6-misol
  
 let arr = [3, 4, 9, 7, 10,];

 let sorted = arr.sort(function (a, b) {
    return b - a
 });

 console.log(sorted);
*/ 