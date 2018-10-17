
//  sec014_L144_promises.js
//  node sec014_L144_promises.js

( function () {

const promise = new Promise ( (resolve,reject) => {
    //setTimeout(resolve('this is my resolved data.'), 3000);
    setTimeout(resolve({name:'JOE', age: 22}), 3000);
} );

console.log ('before');
promise.then ( (P_data) => console.log ('1', P_data));
promise.then ( (P_data) => console.log ('2', P_data));
console.log ('after');
}) ();

( function () {

const promise = new Promise ( (resolve,reject) => {
    //setTimeout(resolve('this is my resolved data.'), 3000);
    setTimeout( () =>
        {
            //resolve({name:'JOE', age: 22});
            reject({error:'something went wrong', code: 11});
        }, 3000);
} );

console.log ('before');
promise.then ( (P_data) => console.log ('1', P_data)).catch((P_data) => console.log('1', P_data));
promise.then ( (P_data) => console.log ('2', P_data)).catch((P_data) => console.log('2', P_data));
console.log ('after');
}) ();

