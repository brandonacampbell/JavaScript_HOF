// // Exercise 1
// function plus (number) {
//     return function (plusNumber) {
//         return number + plusNumber
//     };
// };


//  let plus15 = plus(15);

  //  console.log(plus15(10));

 //Array for Exercise 2, 3, 4, & 5. 

 let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];


  // Exercise 2

//   users.forEach(nameList); 

//   function nameList(users) {
//     console.log(users.name);
//   };

//   console.log(nameList);





// Exercise 3 

//  const namesAndScores = users.map((param) => ({
//     name: param.name, 
//     score: param.score
//  }));


//  console.log(namesAndScores);



// Exercise 4 

// const activeStatus = users.filter(elem => {
//     return elem.isActive === true;
// });

// console.log(activeStatus);



//Exercise 5 

// const byScore = users.sort((b, a) => {
// return a.score - b.score;
// })

// console.log(byScore);



// Excercise 6
// finding the sum of all users' scores. 

// const totalSumOfUsers = users.reduce((acc, cur) => {
//     return acc + cur.score
// }, 0); 

// console.log(totalSumOfUsers);

// //finding the total number of users to get the average.
// let numberOfUsers = users.length;
// console.log(numberOfUsers);


// //avg score given the scores and numbers of users.. 
// let avgScore = ( 
//     totalSumOfUsers / numberOfUsers
// );

// console.log(avgScore);
