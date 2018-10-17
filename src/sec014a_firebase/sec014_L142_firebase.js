
/***************************************************************************

sec014_L142_firebase.js

K:\A01_Udemy\C023_Complete_React_Web_Dev\
Budget-app\src\sec014a_firebase\sec014_L142_firebase.js
 
import  './sec014a_firebase/sec014_L142_firebase.js';

//  SEC_014 --- 142. Getting Firebase 11:40

 ***************************************************************************/

//  SEC_014 --- 142. Getting Firebase 11:40
//  dump all named exports within firebase and dump them onto a variable named 'firebase'.
import * as firebase from 'firebase';

  // Initialize Firebase
  //var config = {
  const config = {
    apiKey: "AIzaSyDso8xPTbJv5GoQQSrUyP7S5dxEJO9lrys",
    authDomain: "react-2018-10-budget.firebaseapp.com",
    databaseURL: "https://react-2018-10-budget.firebaseio.com",
    projectId: "react-2018-10-budget",
    storageBucket: "react-2018-10-budget.appspot.com",
    messagingSenderId: "1008691885881"
  };

  firebase.initializeApp(config);

//  SEC_014 --- 142. Getting Firebase 11:40
//  Get a reference to the root of the database,
//  then set the root to an object.
  // firebase.database().ref().set ( {
  //     name: 'wally96334'
  // } );

  const database = firebase.database();

//const run_first_part = false;
//const run_first_part = true;
const run_first_part = true;

if (run_first_part)
{

//  SEC_014 --- 143. Writing to the Database 14:59
  //firebase.database().ref().set ( {
  database.ref().set ( {
      name: 'wally96334',
      age: 33,
      isSingle: false,
      location:
      {
        city: 'Tomball',
        country: 'USA'
      }
//  SEC_014 --- 145. Promises with Firebase 10:54
  } ).then ( () => {
    console.log ('Data is saved in run 1')
  } ).catch ( (err) => {
    console.log (' *** Something went wrong in run 1', err)
  } );


//  NOTE : set does not have to take an object, but can take any value.
//  The object created above will be overwritten with the given string.
//  database.ref().set ('This is my data.');


//  This will overwrite the database with the object given:
// database.ref().set ( {
//       age: 37
//   } );

database.ref('age').set (37)
//  SEC_014 --- 145. Promises with Firebase 10:54
  .then ( () => { console.log ('Data is saved in run 2') } )
  .catch ( (err) => { console.log (' *** Something went wrong in run 2', err) } );

database.ref('location/city').set ('Cypress')
//  SEC_014 --- 145. Promises with Firebase 10:54
  .then ( () => { console.log ('Data is saved in run 3') } )
  .catch ( (err) => { console.log (' *** Something went wrong in run 3', err) } );

//  attributes
//    height
//    weight

database.ref('attributes')
        .set ( {
          height: 72,
          weight: 240
             } )
//  SEC_014 --- 145. Promises with Firebase 10:54
  .then ( () => { console.log ('Data is saved in run 4') } )
  .catch ( (err) => { console.log (' *** Something went wrong in run 4', err) } );

}


//const run_second_part = false;
//const run_second_part = true;
const run_second_part = false;

if (run_second_part)
{

//  SEC_014 --- 146. Removing Data from Firebase 5:42
database.ref('isSingle').remove()
//  Alternatively, set can be used to remove data by passing "null" as the argument.
//database.ref('isSingle').set(null)
  .then ( () => { console.log ('Data isSingle is removed in run 1b') } )
  .catch ( (err) => { console.log (' *** Something went wrong removing isSingle in run 1b', err) } );
}


//  SEC_014 --- 147. Updating Data 10:41

database.ref()
  .update( { name: "Mike", age: 39, employment: 'software developer', isSingle: null } )
  .then ( () => { console.log ('Data is updated to Mike in run 1c') } )
  .catch ( (err) => { console.log (' *** Something went wrong with data update in run 1c', err) } );

database.ref()
  .update( { employment: 'Manager', 'location/city': 'Boston' } )
  .then ( () => { console.log ('Data is updated to Mike in run 2c') } )
  .catch ( (err) => { console.log (' *** Something went wrong with data update in run 2c', err) } );

database.ref()
  .update( { employment: {title: 'Manager', company: 'Google'}, stressLevel: 6 } )
  .then ( () => { console.log ('Data is updated to Mike in run 2d') } )
  .catch ( (err) => { console.log (' *** Something went wrong with data update in run 2d', err) } );

setTimeout ( () => {}, 3000 );

database.ref()
  .update( { 'employment/company': 'Amazon', stressLevel: 9, 'location/city': 'Seattle' } )
  .then ( () => { console.log ('Data is updated to Mike in run 2e') } )
  .catch ( (err) => { console.log (' *** Something went wrong with data update in run 2e', err) } );


//##########################################################################
//##########################################################################
