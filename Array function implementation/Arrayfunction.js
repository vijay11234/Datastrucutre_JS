/******************************* 
 //Array functions implementation
 
 *******************************/
//Country names
let countries = ["Afghanistan", "India", "Jamaica", "Monaco", "Oman"];
console.log(countries);

//Sorting countries by using sort method
let element = countries.sort();
console.log(element);

//Slice function
let elements = countries.slice(1, 2);
console.log(elements);

//Adding the countries by using arr.push method
let addelement = countries.push("Zambia");
console.log(addelement);

//Replacing the countrie by using unshift method
let countrie = countries.unshift("Jamaica");
console.log(countrie);

//Removeing the countrie by using shift method
let addFirst = countries.shift("Australia");
console.log(addFirst);

//Add/removes countries by using splice method
countries.splice(2, 1, "Liberia", "jamaica");
console.log(countries);

//Checking the index of countries
let index = countries.indexOf("Monaco");
console.log(index);

//foreach function
const arr = [12, 22, 54, 43, 68, 79, 92];
arr.forEach((item) => console.log(item));

console.log(arr.join(" "));

//Reduce array function
const numbers = [12, 13, 14, 15, 16, 17, 18];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
numbers.reduce((sum, numbers) => sum + numbers, 0);

//find function
const num = [12, 30, 41, 35, 10, 13, 14];
let answer;
for (let i = 0; i < num.length; i++) {
  if (num[i] > 10) {
    answer = num[i];
    break;
  }
}
console.log(answer);
const ans = num.find((number) => number > 10);
console.log(ans);

//filter array helper function 
const Specifications = [
    { name: "Vijay", Drinksbrand: "Tuborg", Age: "24" },
    { name: "Victory", Drinksbrand: "Bira 91", Age: "25" },
    { name: "Arun", Drinksbrand: "Kingfisher", Age: "26" },
  ];
  const Charactors = Specifications.filter(
    (Specification) => Specification.Drinksbrand === "Tuborg"
  );

console.log(Charactors);//map
const param = Specifications.map((Specification) => Specification.Carcolor);
console.log(param);

