// let obj1={
//     name : "vikrant",
//     lastName : "kumar",
//     adress : {
//         city : "samastipur",
//         no : 94848
//     },
//     likes : ["movies","cricket"]
// };
// const final = JSON.stringify(obj1)
// final.name = "prashant"
// final.adress.city = "darbhanga"


// let arr = ["vivk","ddhh"];
//  arr.forEach((element)=>element+1);
// console.log(res);
// const items = ["item1", "item2", "item3"];
// const copyItems = [];
// items.forEach((item) => {
//     copyItems.push(item);
//   });
// let arr2 =["kumat","dhdjd"];
// let str = arr2.join(" ");
// console.log(str);

// const myObject = {
//     name: 'John',
//     age: 30,
//     occupation: 'programmer'
//   };
//   console.log(Object.keys(myObject));
//   console.log(Object.values(myObject));
//   console.log(Object.entries(myObject));
// console.log(myObject.hasOwnProperty("John"));
// console.log(myObject.hasOwnProperty("name"));

// function sqrt(x){
//     return Math.sqrt(x)
// }console.log(sqrt(36));

// let arr = [1,2,3,4,5,6,7,8,9];
//  let res =arr.splice(2,0,9);
//  console.log(res);
//  console.log(arr);/
// let i =1
// do{
//     console.log(i);
//     i++
// }while(i<10)
// let i= "jjj"
// console.log(i);


// var arr = 'vikrant kumar'
// var array = arr.split(" "); 
// console.log(array); 
// console.log(arr);


//  let i =1
// while(i<10){
//     console.log(i);
//     i++;
// }

// const sum = function (a,b) {
//    return a+b;
// }
// console.log(sum(1,2));

// let sum = function(num){
//     return num + 5;
// };
// console.log(sum(9));

// //callback function
// const isEven = (n) =>{
//     return n%2 ==0
// }
// let printMsg = (evenFunc,num)=>{
//     const isNumEven = evenFunc(num);
//     console.log(`the number ${num}, is an even number : ${isNumEven}`);
// }
// printMsg(isEven,4);

// let even =(n)=>{
//     return n%2 ==0;
// }
// console.log(even(4));

// let printMsg =(funccall,num)=>{
//  let res = funccall(num);
//  console.log(res);
// }
// printMsg(even,5)

// let arr =[1,2,4,4,4];
// let res = arr.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
// console.log(res);

// let add = function(num){
//    return  num + 5
// }
// console.log(add(5))

// let even = (n)=>{
//     return n%2 == 0
// }
// console.log(even(4));

// let store = (even)=>{
//   return even(5)
// }
// console.log(store(even));

//closure
// function closure(){
//     let name = "vikrant"
//     return function innerr(){
//         let lastname = "kumar"
//         let fullName = `${name} ${lastname}`
//         return fullName;
//     }
// }
// let res = closure();
// console.log(res());


// function createAdder(a) {
//     return function(b) {
//       return a + b;
//     }
//   }
//   const addTwo = createAdder(2);
//   console.log(addTwo(3)); // 5


// function outer(){
//     let firstName = "vikrant";
//     function inner(){
//         let lastName = "kumar";
//         let fullName =`${firstName} ${lastName}`
//         return fullName;
//     }
//     return inner;
// }
// let res=outer()
//   console.log(res());


// let even= (n)=>{
//     return n%2==0;
// }

// let arrw=(evenn,n)=>{
//     return res = evenn(n);
// }
// console.log(arrw(even,7));

// function outer(){
//     let first = "vikrant";
//     return function inner(){
//         let last = "kumar"
//         let fullName =`${first} ${last}`
//         return fullName
//     }

// }
// let res = outer();
// console.log(res());


//higher order functiom

// let arr = [[1,2,3],[4,5,6]];
// for(let i =0; i<arr.length; i++){
//     let res =arr[i].map(a=>a+1);
//     console.log(res);
// }

// let arr=[23, 45, 467, 789, 34, 989, 56];
// let res = arr.map((a,b)=>a*(b % 2 === 0 ? 2 : 10));
// console.log(res);

// const carBrands = ["honda", "toyota", "maruti", "tata"];
// const carModel = ["city", "innova", "alto", "nano"];
// let result ={}
// carBrands.forEach((key,value)=> result[key] = carModel[value]);
// console.log(result);

// let res = {};
// let key = "name";
// let value ="vikrant";
// res[key] = value;
// console.log(res);

// const arrays = [[1, 2, 3], [4,5], [6]];
// let res =arrays.reduce((a,b)=>a.concat(b));
// console.log(res);

// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
// let res = countries.map((a)=>a.toUpperCase());
// console.log(res);

///card

// const cardData = [
//     {
//         suit: "heart",
//         value: 7,
//     },
//     {
//         suit: "club",
//         value: 8,
//     },
//     {
//         suit: "club",
//         value: 2,
//     },
//     {
//         suit: "diamond",
//         value: 2,
//     },
//     {
//         suit: "diamond",
//         value: 5,
//     },
//     {
//         suit: "club",
//         value: 10,
//     },
// ];
//   let res1=cardData[0].suit;
//   console.log(res1);


// function find(suit, value) {
//     for (let i = 0; i < cardData.length; i++) {
//         if (cardData[i].suit == suit && cardData[i].value == value) {
//             return "true"
//         }


//     }return "false"
// }
// console.log(find("club",10));


//2. write a function which returns the list of available suits in the above data
//  * ans => ["heart", "club", "diamond"]

// let arr =[];
// for(let i = 0; i<cardData.length;i++){
//     let suit = cardData[i].suit
//     if(!arr.includes(suit)){
//         arr.push(suit);
//     }
// }
// console.log(arr);

// 3. write a function which returns an object with the suits as its key and its total count as its value
//  * ans => {  heart:1,  club:3, diamond:2,}

// let res = {}
// for(let i =0; i<cardData.length; i++){
//     let suit =cardData[i].suit;
//     if(res[suit]){
//        res[suit]++;
//     }else{
//         res[suit]=1
//     }
// }
// console.log(res);

//4. write a function which returns an object with the suits as its key and its available values as value
//  *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]}

// let res = {};
// for (let i = 0; i < cardData.length; i++) {
//     let suit= cardData[i].suit;
//     let value = [cardData[i].value];
//     if (!res[suit].includes(value)){
//         res[suit].push(value)
//     }else{
//         res[suit] =[value]
//     }

// }
// console.log(res);

//fb

// const facebookProfiles = [
//     {
//       firstName: "Akash",
//       lastName: "Agarwal",
//       number: "111111111",
//       likes: ["music", "movies"],
//       hasDrivingLicense: false,
//       address: {
//         location: "rampur",
//         state: "up",
//       },
//       emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
//     },
//     {
//       firstName: "Pritesh",
//       lastName: "Kumar",
//       number: "222222222",
//       likes: ["code", "driving"],
//       hasDrivingLicense: false,
//       address: {
//         location: "gurgaon",
//         state: "haryana",
//       },
//       emails: ["fgdfg@gmail.com"],
//     },
//     {
//       firstName: "Sabiha",
//       lastName: "Khan",
//       number: "333333333",
//       hasDrivingLicense: false,
//       address: {
//         location: "lucknow",
//         state: "up",
//       },
//     },
//     {
//       firstName: "Suyash",
//       lastName: "Kashyap",
//       number: "444444444",
//       likes: ["travel", "driving"],
//       hasDrivingLicense: true,
//       address: {
//         location: "alwar",
//         state: "rajasthan",
//       },
//       emails: ["abc@yahoo.com"],
//     },
//     {
//       firstName: "Jay",
//       likes: ["food", "mobile"],
//       hasDrivingLicense: true,
//       address: {
//         location: "gurgaon",
//         state: "haryana",
//       },
//       emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
//     },
//   ];

//   function findd(name,property){
//     for(let i =0; i<facebookProfiles.length;i++){
//         let profile = facebookProfiles[i];
//         if(profile.firstName==name){
//             property= profile[property];
//             return property
//         }
//     }
//   }
// console.log(findd("Pritesh","number"));

// let obj= {};
//  let key = "vikrant"
//  let value ="kumar"
//  obj[key]=value;
//  console.log(obj);

// const person = {
//     name:"Akash",
//     mobile:999999999,
//     address:{
//         pincode:1234,
//         city:"gurgaon",
//         state:"haryana",
//         emails:['asd@outlook.com', 'abc@yahoo.com', 'rty@hotmail.com']
//     }
// }

// const newPerson = {...newPerson};
// Person.name="aakash"

// const newAddress = {...newPerson.address}
// newAddress.pincode=1234;

// const newEmail={...newPerson.newAddress.emails}
// newEmail[0]="asd@gmail.com"

//   newAddress.emails=newEmail;
//  newPerson.address=newAddress;

// console.log(newPerson);
// console.log(Person);


// const newPerson={...person};
// newPerson.name="Rahul";

// const newAddress={...person.address};
// newAddress.pincode=4567;

// const newEmail=[...newAddress.emails];
// newEmail[0] = 'asd@gmaillook.com';

// newAddress.emails=newEmail;
// newPerson.address=newAddress;

// console.log(newPerson);
// console.log(person);


// let person = {
//  name : "vikrant",
//  last : "kumar"
// };4
// let a = "name"
// console.log(person[a]);
// function higherOrderFunction(callback) {
// Do some processing
// const result = callback();
// Do some more processing
//     return result;
//   }

//   function myCallback() {
//     return 'Hello, world!';
//   }

//   const result = higherOrderFunction(myCallback);






//   function heigherOrde(callback){
//     const result = callback();
//     return result;
//   }

// function callback(){
//     let res ="hello world";
//     return res;
// }
// console.log(heigherOrde(callback));
// function higherOrderFunction(callback) {
//     // Do some processing
//     const result = callback();
//     // Do some more processing
//     return result;
//   }

//   function myCallback() {
//     return 'Hello, world!';
//   }

// //   const result = higherOrderFunction(myCallback);
// function higherOrderFunction(callback) {
//     const result = callback();
//     return result;
//   }

//   function addNumbers(a, b) {
//     return a + b;
//   }

//   const sum = higherOrderFunction( addNumbers(2, 3));
//   console.log(sum);


// function myHigherOrderFunction(callback) {
//     const result = callback();
//     return result;
//   }

//   function myCallbackFunction() {
//     return 'Hello, world!';
//   }

//   const myResult = myHigherOrderFunction(myCallbackFunction);

//   console.log(myResult); // Output: 'Hello, world!'



//   function higherOrder(callback){
//     let res = callback()
//     return res
//   }
//   function myCallback(){
//     return "hello world"
//   }
//   console.log(higherOrder(myCallback));

// function even(num){
//     return num%2==0
// }
// console.log(even(7));

// function find(callback,num){
//     let result = callback()
//     return result
// }
// console.log(find(even),7);

// let even= (n)=>{
//     return n%2==0;
// }

// let arrw=(evenn,n)=>{
//     return res = evenn(n);
// }
// console.log(arrw(even,7));

// function higherOrder(callback){
//     let res = callback();
//     return res;
// }
// function myCallback(){
//     return "hello world"
// }
// let res =higherOrder(myCallback);
// console.log(res);

// function higherOrder(callback){
//     let res = callback();
//     return res
// }
// function callback(){
//     return "hello world"
// }
// console.log(higherOrder(callback));

// function closure(){
//     let name = "vikrant"
//     function inner(){
//         let last ="kumar"
//         let res =`${name} ${last}`
//         return res;
//     }return inner;
// }
// let final =closure();
// console.log(final());

// function outer(){
//     let firstName = "vikrant";
//     function inner(){
//         let lastName = "kumar";
//         let fullName =`${firstName} ${lastName}`
//         return fullName;
//     }
//     return inner;
// }
// let res=outer()
//   console.log(res());

// function higher(callback){
//     let res = callback();
//     return res
// }
// function myCallback(){
//     return "hello world"
// }
// console.log(higher(myCallback));

// function ensureQuestion(s) {
//     if(s===s+"?"){
//   return s;
//        }else{
//       s+"?";
//   }
//   }
//   console.log(ensureQuestion("abba"));
// console.log(("vikrant"+"?"))

// let str ="vikrant";
// console.log(str + "?");

// function idPalindrom(s){
// return s.toLowerCase() === s.toLowerCase().split("").reverse().join("")
// }
// console.log(idPalindrom("madamm"));

// let s = "Abba"
// let a =
// console.log(a);
// let str = "vikrant kumar";
// let newstr=""
// for(let i=0; i<str.length; i++){
//      newstr += str[i]+str[i];
// }
// console.log(newstr);

// var filterString = function (value) {
//        let str = value.split("");
//     let arr = [];
//     for(let i = 0; i < str.length; i++){
//       if(isNaN(str[i]) == false){arr.push(str[i]);}
//     }
//     return +arr.join('');
// }
// console.log(filterString("vikran32233"));

// console.log(isNaN("false"));
// function highAndLow(numbers) {
//     let arr = numbers.split(" ").map(Number);

//     let max = Math.max(...arr);
//     let min = Math.min(...arr);

//     return `${max} ${min}`;
//   }
// console.log(highAndLow("1 2 3 4 5"));

// let arr = [10,1,5]
// let arr1=arr.sort((a,b)=>b-a);
// console.log(arr);

// function diffBig2(arr) {
//     let arr1=arr.sort((a,b)=>b-a);
//    return arr1[0] - arr1[1]
//    }
// console.log(diffBig2([10,1,5]));

// function diffBig2(arr) {
//     let arr1 = arr.length;
//     console.log(arr1);
//     let arr2 = arr.length - 1;
//     console.log(arr2);
//     let arr3 = arr1 - arr2
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;

//             }
//         }
//     }
//     return arr
// }
// console.log(diffBig2([10, 1, 5]));


// let arr = ["a", "b", "c"];

// function find(a){
// for(let i =0; i <arr.length; i++){
//     arr[i] = (i+1)+ ":" + arr[i]
// }return arr
// }
// console.log(find(arr));

// console.log(12);



// let arr ="vik448rant";
// let arr1= []
// function find(arr){
//     for(var i =0; i<arr.length; i++){
//         if(isNaN(arr[i])===false){
//             arr1.push(arr[i])
//         }
//     } return +arr1.join("")
// }
// console.log(find(arr));

// console.log(typeof +"v");
function invert(array) {
  let arr = [];
  for(let i=0; i<array.length; i++){
  if(array[i]>0){
    arr.push(-array[i])
  }else{
    arr.push(-array[i])
  }
  }return arr;
}
console.log(invert([1,2,3,4,-8]));