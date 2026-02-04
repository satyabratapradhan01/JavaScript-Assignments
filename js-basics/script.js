// Question:1
// let obj = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
// function sum(x){
//     let sum = 0;
//     for(let i=0; i<x.length; i++){
//         sum += x[i];
//     }
//     return sum;
// }
// const output = {};
// for(let key in obj){
//     // output[key] = sum(obj[key])
//      output[key] = obj[key].reduce((sum, val) => sum + val, 0);
// }
// console.log(output);

// Question:2
// const val = { a: 10, b: 50, c: 20 }
// let char = "";
// let max = 0;
// for(let key in val){
//     if(max<val[key]){
//         max = val[key];
//         char = key;
//     }
// }
// console.log(char);

// Question:3
// const val = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
// let n = 0;
// let arr = [];
// for(let key in val){
//     for(let i=0; i<val[key].length; i++){
//         arr.push(val[key][i]);
//     }
// }
// console.log(arr);

Question:4
// let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let object = arr.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// }, {});
// for(let fruits of arr){
//     object[fruits] = (object[fruits] || 0) + 1;
    
// }
// console.log(object);

// Question:5
// let obj = { a: "x", b: "y", c: "z" };
// let object = {}
// for(let key in obj){
//     let temp = key;
//     key = obj[key];
//     object[key] = temp;
// }
//  console.log(object);

// Question:6

// let arr = [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" },
// ];
// let object = {};
// for (let i = 0; i < arr.length; i++) {
//   let name = arr[i].name;
//   let city = arr[i].city;

//   if(!object[city]){
//     object[city] = []
//   }

//   object[city].push(name);
// }

// console.log(object);

// let arr = [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" },
// ];

// let val = [];
// let object = {};
// for (let i = 0; i < arr.length; i++) {
//   let keys = Object.keys(arr[i]);
//   let objKey = keys[1];
//   let objValue = arr[i][objKey];
//   let nameKey = keys[0];
//   let nameValue = arr[i][nameKey];
// if(!object[objValue]){
//     object[objValue] = []
// }
// object[objValue].push(nameValue);
// }
// console.log(object);

Question:7
// let obj = { a: 20, b: 60, c: 40, d: 90 };
// let object = {};
// for(let key in obj){
//     // console.log(obj[key]);
//     if(obj[key]>50){
//         object[key] = obj[key];
//     }
// }
// console.log(object)

Question:8
// let obj = { A: [80, 90], B: [70, 75, 85] }
// let object = {};
// for(let key in obj){
//     object[key] = avg(obj[key]);
// }
// function avg(x){
//     let sum = 0;
//     for(let i=0; i<x.length; i++){
//         sum += x[i];
//     }
//     return sum/x.length;
// }
// let char = "";
// let max = 0;
// for(let key in object){
//     if(object[key]>max){
//         max = object[key];
//         char = key;
//     }
// }
// console.log(char);

Question:9

// let obj = { x: [1,2,3], y: [2,3,4], z: [4,5] }

// let unique = new Set();
// for(let key in obj){
//     for(let val of obj[key]){
//         unique.add(val);
//     }
// }

// console.log([...unique])

// let arrIs = [];
// for(let key in obj){
//     arr(obj[key], arrIs);
// }
// function arr(x, arrIs){
//     for(let i=0; i<x.length; i++){
//         if(!arrIs.includes(x[i])){
//             arrIs.push(x[i]);
//         }
//     }
// }
// // console.log(arrIs);


Question:10
// let obj = { name: "Rahul", age: 23, city: "Noida" };
// let arr = ["name","city"];

// let object = arr.reduce((acc, key)=>{
//     for(let key in obj){
//         acc[key] = obj[key];
//     }
//     return acc;
// }, {});

// for(let key in obj){
//     for(let val of arr){
//         if(val == key){
//             object[key] = obj[key];
//         }
//     }
// }

// console.log(object);

Question:11

// let obj = { a: 3, b: 1, c: 2 };
// let arr = Object.entries(obj).sort((a, b) => a[1] - b[1]);
// for(let key in obj){
// let arr2 = [];
// arr2.push(key);
// arr2.push(obj[key]);
// arr.push(arr2);
// }
// console.log(arr);

Question:11
// let obj = { a: 1, b: 2, c: 3 };
// let count = Object.keys(obj);
// for(let key in obj){
//     count++;
// }
// console.log(count);

Question:12
// let obj = { name: "alice", city: "delhi" }
// let objec = Object.fromEntries(
//     Object.entries(obj).map(([key, value]) =>
//        [ key,
//         value.charAt(0).toUpperCase() + value.slice(1)]
//     )
// )
// for(let key in obj){
//     object[key] = obj[key].charAt(0).toUpperCase() + obj[key].slice(1);
// }
// console.log(objec);

// Question:15
// let obj ={ name: "Alice", age: 25 };
// let char = new URLSearchParams(obj).toString();
// let char = Object.entries(obj).map(([key, value]) => `${key}=${value}`).join("&");
// for(let key in obj){
//     char += `${key}=${obj[key]}&`
// }
// console.log(char);

Question:16
// let arr = [1,2,3,4,5,6]
// let object = arr.reduce((obj, val)=>{
//     val%2 === 0 ? obj.even++ : obj.odd++;
//     return obj;
// }, {even: 0, odd: 0});
// for(let val of arr){
//     if(val%2==0){
//         object["even"] = (object["even"] || 0) + 1;
//     }else{
//         object["odd"] = (object["odd"] || 0) + 1;
//     }
// }
// console.log(object);

Question:17
// let obj1 = { a: 1, b: 2, c: 3 };
// let obj2 = { b: 4, c: 5, d: 6 };
// let result = Object.entries(obj1).reduce((arr, key) => {
//     for(let val in obj2){
//         if(key[0] == val){
//             arr.push(val);
//         }
//     }    
//     return arr;
// }, [])
// let arr = []
// for(let val1 in obj1){
//     for(let val2 in obj2){
//         if(val1 == val2){
//             arr.push(val2);
//         }
//     }
// }
// let result = Object.keys(obj1).filter(key => key in obj2);
// console.log(result);


Question:18
// let arr = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
// let result = arr.reduce((obj, key) => {
//     obj[key.id] = key;
//     return obj;
// }, {})
// console.log(result);

Question:19
// let obj = { a: 1, b: 1, c: 3 }
// let bln = true;
// for(let key in obj){
//     if((typeof obj[key]) == Number){
//         bln = true;
//     }else{
//         bln = false;
//         break;
//     }
// }
// let boolian = Object.values(obj).every(val => typeof val === "number")
// console.log(boolian)


// 20 intermediate (Objects + Arrays)

Question:1
// let arr = [
//   { user: "A", amount: 100 },
//   { user: "B", amount: 200 },
//   { user: "A", amount: 50 }
// ];
// let result = arr.reduce((obj, key) => {
//     obj[key.user] = (obj[key.user] || 0) + key.amount;
//     return obj;
// }, {})
// console.log(result);

Question:2
// let arr = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ];
// let result = arr.reduce((obj, key) =>{
//   obj[key.id] = key.name;
//   return obj;
// }, {});
// console.log(result);

Question:3
// let obj = { a: 0, b: null, c: "hello", d: undefined, e: 5 };
// let object = {};
// for(let key in obj){
//   if(Boolean(obj[key]) == true){
//     object[key] = obj[key];
//   }
// }
// console.log(object)

// let result = Object.entries(obj).reduce((obj, val) =>{
//   if(Boolean(val[1]) == true){
//     obj[val[0]] = val[1];
//   }
//   return obj;
// }, {})

// let result = Object.fromEntries(
//   Object.entries(obj).filter((([_ , value]) => Boolean(value)))
// )
// console.log(result);

Question:4
// let roles={ admin:["read","write"], user:["read"], staff: ["write"]}
// let checkRole="admin"
// let action="write"

// let value = false;
// for(let obj in roles){
//   if(obj == checkRole){
//     for(let val of roles[obj]){
//       if(val == action){
//         value = true;
//       }
//     }
//   }
// }
// console.log(value);

// let result = Object.entries(roles).reduce((bol, key)=>{
//   if(key[0] == checkRole){
//     for(let val of key[1]){
//       if(val == action){
//         bol = true;
//         break;
//       }
//     }
//   }
//   return bol;
// }, false)

// let result = roles[checkRole]?.includes(action) || false;
// console.log(result);

Question:5
// let arr = [
//   { id: 1, category: "electronics", price: 100 },
//   { id: 2, category: "clothes", price: 50 },
//   { id: 3, category: "electronics", price: 200 }
// ]
// let result = arr.reduce((obj, key) => {
//   obj[key.category] = (obj[key.category] || 0) + key.price;
//   return obj;
// }, {})
// console.log(result);







