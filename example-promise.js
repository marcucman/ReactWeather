// function getTempCallback (location, callback) {
//   callback(undefined, 78); // it went well
//   callback('City not found'); // it failed
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });

// // PROMISE FUNCTION
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79); // SUCCESS CASE
//       reject('City not found'); // ERROR CASE
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   // SUCCESS CASE
//   console.log('promise success', temp);
// }, function (err) {
//   // ERROR CASE
//   console.log('promise error', err);
// });

// CHALLENGE AREA
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      var c = a + b;
      resolve(c); // SUCCESS
    } else {
      reject('Arguments must be numbers'); // ERROR
    }
  });
}

addPromise(4, 'F').then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
});

addPromise(4, 3).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
});
