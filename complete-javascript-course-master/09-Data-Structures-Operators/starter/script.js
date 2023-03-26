'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Enhanced Object Literals
  openingHours,
  // instead of openingHours : openingHours,

  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  //instead of
  // order: function (startIndex, mainIndex) {
  //   return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  // },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Destructing Arrays ////////////////////////////////////////////////////

/*
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a, b, c);

let [first, , second] = restaurant.categories;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

const [start, main] = restaurant.order(2, 0);
console.log(start, main);

//nested Destructuring
const nested = [2, 4, [5, 6]];
const [x, , y] = nested;
console.log(x, y);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r); // [8, 1, 1]
*/

//Destructuring Objects ///////////////////////////////////////////////////

/* const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//different names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values

const { notAvailabaleInObject: menu = [], starterMenu: starters = [] } =
  restaurant;

console.log(menu, starters); // [], [starterMenu]

//Mutating Variables
let a = 11;
let b = 99;

const obj = { a: 23, b: 8, c: 19 };

// {a, b} = obj; //token error
({ a, b } = obj); // correct //have to cover that in ()
console.log(a, b);

//nested Objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);

//passing object in function

restaurant.orderDelivery({
  time: '22:30',
  address: 'Kirti Nagar',
  mainIndex: 2,
  starterIndex: 2,
});
 */

// Spread operator /////////////////////////////////////////////
//unpack the array

/* const arr = [7, 8, 9];
const arr1 = [1, 2, arr[0], arr[1], arr[2]];
console.log(arr1);

const arr2 = [1, 2, ...arr]; //taking all the elements out of the array. If we do write only arr without spread operator then it will not the take the elements of arr sperately but take the whole arr as third element of arr3.

console.log(arr2);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const newArr = [...restaurant.mainMenu];
console.log(newArr);

//join 2 arrays
const joinArr = [...restaurant.mainMenu, ...newMenu];
console.log(joinArr);

//iterables : arrays, strings, maps and sets , NOT objects
const str = 'Jonas';
const letter = [...str];
console.log(letter);
console.log(...str);
// console.log(`${...str}`); //token err

// const ingredients = [
//   prompt('Ingredient1'),
//   prompt('Ingredient2'),
//   prompt('Ingredient3'),
// ];

const ingredients = ['pasta', 'water', 'tomato'];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Nidhi' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Burgerking';
console.log(restaurantCopy.name);
console.log(restaurant.name);
 */

//Rest Operator /////////////////////////////////////////////////////
//pack the array
/* 
//1.Destructuring

//Spread becoz on right side of =
const arr = [1, 2, ...[3, 4]];

//Rest becoz on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//2.Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3, 4, 5);

const x = [3, 4, 5];
add(...x);

restaurant.orderPizza('mashrooms', 'onion', 'sweetcorns');
restaurant.orderPizza('sweetcorns'); */

//Short Circuiting && and ||  ///////////////////////////////////////////////////

/* console.log('-----------Or----------');
//Use any data type and return any data type
console.log(3 || 'nidhi'); // 3
console.log('' || 'nidhi'); //'' is falsy value thats why 'nidhi
console.log(true || 0); // true
console.log(undefined || null); //undefined is a falsy value thats why null
console.log(0 || 1); // 1
console.log(undefined || 0 || '' || 'Heelo' || 23 || null); //Heelo

//Short Circuiting :  if the first operand is truthy herein the OR operator,then the other operand will not even be evaluated.So JavaScript will not even take a look at it.And so that's what we mean with short circuiting.

// restaurant.numGuest = 12;
restaurant.numGuest = 0; //falsy value but have the value
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

//so here it will show only 10, is the problem will explore in next lecture.

console.log('-----------And----------');

//print where the value is falsy if not falsy then print the last element
console.log(0 && 'nidhi'); //0
console.log('anup' && 'nidhi'); //nidhi
console.log('heelo' && 23 && null && 'nidhi');
 */

//The Nullish Coalescing Operator (??)////////////////////////////////////////////////////////
/* 
restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10;
console.log(guests);

const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect); */

//Logical Assignment Operators /////////////////////////////////////////////////////
/* 
const res1 = {
  name: 'burgerking',
  numGuests: 0,
};
const res2 = {
  name: 'Pizzerea',
  Owner: 'nidhi',
};

// res1.numGuests = res1.numGuests || 10;
// res2.numGuests = res2.numGuests || 10;

res1.numGuests ??= 10;
res2.numGuests ||= 10;

// res2.Owner = res2.Owner && '<ANONYMOUS>';
// res1.Owner = res1.Owner && '<ANONYMOUS>';

res1.Owner &&= '<ANONYMOUS>';
res2.Owner &&= '<ANONYMOUS>';

console.log(res1);
console.log(res2); */

//Looping Arrays: The for-of Loop //////////////////////////////////////////////////////////
/* 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(item);
}
// //return
// (2) [0, 'Focaccia']0: 01: "Focaccia"length: 2[[Prototype]]: Array(0)
// (2) [1, 'Bruschetta']
// (2) [2, 'Garlic Bread']
// (2) [3, 'Caprese Salad']
// (2) [4, 'Pizza']
// (2) [5, 'Pasta']
// (2) [6, 'Risotto']

for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}
//return
// 1 : Focaccia
// 2 : Bruschetta
// 3 : Garlic Bread
// 4 : Caprese Salad
// 5 : Pizza
// 6 : Pasta
// 7 : Risotto

for (const [i, ele] of menu.entries()) {
  console.log(`${i + 1} : ${ele}`);
}

//return
// 1 : Focaccia
// 2 : Bruschetta
// 3 : Garlic Bread
// 4 : Caprese Salad
// 5 : Pizza
// 6 : Pasta
// 7 : Risotto
 */

// Enhanced Object Literals//////////////////////////////////////////////
//line no. 32 to 37

// console.log(restaurant);

//Optional Chaining (?.)//////////////////////////////////////////////////
/* 
console.log(restaurant.openingHours.mon); //undefined
// console.log(restaurant.openingHours.mon.open); //error
console.log(restaurant.openingHours.mon?.open); //undefined
console.log(restaurant.openingHours?.mon?.open); //undefined
console.log(restaurant.openingHours?.fri?.open); //11

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  console.log(
    `On ${day} , we open ${restaurant.openingHours[day]?.open || 'closed'}`
  );
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not Exists');
console.log(restaurant.orderCake?.(0, 1) ?? 'Method does not Exists');

//Arrays
// const users = [{ name: 'nidhi' }];
const users = [];
console.log(users[0]?.name ?? 'users not available'); */

//Looping Objects: Object Keys, Values, and Entries/////////////////////////////////////////////
/* 
//property names
const properties = Object.keys(openingHours);
console.log(properties);

let open = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  open += `${day}, `;
}

console.log(open);

//Property values
const values = Object.values(openingHours);
console.log(values);

//entries object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
 */

//Sets///////////////////////////////////////////////////////
/* 
//sets never have duplicates

const orderSet = new Set(['Pasta', 'macroni', 'Pasta', 'maggie']);
console.log(orderSet);
console.log(new Set('Nidhi')); //{'N', 'i', 'd', 'h'}
console.log(orderSet.size);
console.log(orderSet.has('Pasta'));
console.log(orderSet.has('Bread'));
console.log(orderSet.add('garlic bread'));
console.log(orderSet.add('garlic bread'));
// console.log(orderSet.delete('garlic bread')); //true
// orderSet.delete('maggie');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

const staff = ['waiter', 'chef', 'manager', 'waiter', 'chef'];
const staffUnique = [...new Set(staff)]; //set converted to array.
console.log(staffUnique); */

//Maps : Fundamentals////////////////////////////////////////////////////////////////

//difference between objects and maps
//maps can have any types of key.
/* 
const rest = new Map();
rest.set('name', 'nidhi');
rest.set(1, '1');
console.log(rest);
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are close');
console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 23;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(1);
console.log(rest);
console.log(rest.size);

const arr = [7, 8, 9];
rest.set([7, 8, 9], 'test'); //this will also set exactly like below line but get will not work in this case.
rest.set(arr, 'test');
console.log(rest.get(arr));
console.log(rest); */

//Maps Iteration ////////////////////////////////////////////////////////////////
/* const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
 */

//Strings Part-1///////////////////////////////////////////////////////////////////////
/* const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
 */

//Strings Part-2///////////////////////////////////////////////////////////////////////
/* const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); //g-global(like replace all)

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection'); */

//Strings Part-3///////////////////////////////////////////////////////////////////////
// Split and join
/* console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12); */
