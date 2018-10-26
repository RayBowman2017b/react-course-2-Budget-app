
/***************************************************************************

sec014_L142_firebase.js

K:\A01_Udemy\C023_Complete_React_Web_Dev\
Budget-app\src\sec014a_firebase\sec014_L142_firebase.js
 
import  './sec014a_firebase/sec014_L142_firebase.js';
import MP_database from '../sec014a_firebase/sec014_L142_firebase.js';
src\sec011a_L099_actions\sec011a_L099_ACTN_expenses.jsx
//  [S07251668|sec011a_L099_ACTN_expenses.jsx::sec014_L142_firebase import-1;^B]
//  [S07251665|sec012a_app.jsx::sec014_L142_firebase import-2;^B]

  export { firebase, MP_database as default };

//  SEC_014 --- 142. Getting Firebase 11:40

 ***************************************************************************/

//  SEC_014 --- 142. Getting Firebase 11:40
//  dump all named exports within firebase and dump them onto a variable named 'firebase'.
//import * as firebase from 'firebase';
//  https://www.udemy.com/react-2nd-edition/learn/v4/questions/5393724
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


import MP_moment from 'moment';


//  SEC_014 --- 142. Getting Firebase 11:40

  // Initialize Firebase
  //var config = {
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

//  SEC_014 --- 142. Getting Firebase 11:40
//  Get a reference to the root of the database,
//  then set the root to an object.
  // firebase.database().ref().set ( {
  //     name: 'wally96334'
  // } );

  const MP_database = firebase.database();

//  SEC_015 --- 152. Asynchronous Redux Actions 18:49
  export { firebase, MP_database as default };


//===============================================================
//===============================================================

  const GC_FB_database = MP_database;


//const run_first_part = false;
//const run_first_part = true;
const run_first_part = false;

if (run_first_part)
{

  //  SEC_014 --- 143. Writing to the Database 14:59
    //firebase.GC_FB_database().ref().set ( {
    GC_FB_database.ref().set ( {
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
  //  GC_FB_database.ref().set ('This is my data.');


  //  This will overwrite the database with the object given:
  // GC_FB_database.ref().set ( {
  //       age: 37
  //   } );

  GC_FB_database.ref('age').set (37)
  //  SEC_014 --- 145. Promises with Firebase 10:54
    .then ( () => { console.log ('Data is saved in run 2') } )
    .catch ( (err) => { console.log (' *** Something went wrong in run 2', err) } );

  GC_FB_database.ref('location/city').set ('Cypress')
  //  SEC_014 --- 145. Promises with Firebase 10:54
    .then ( () => { console.log ('Data is saved in run 3') } )
    .catch ( (err) => { console.log (' *** Something went wrong in run 3', err) } );

    //  attributes
    //    height
    //    weight

  GC_FB_database.ref('attributes')
          .set ( {
            height: 72,
            weight: 240
               } )
  //  SEC_014 --- 145. Promises with Firebase 10:54
    .then ( () => { console.log ('Data is saved in run 4') } )
    .catch ( (err) => { console.log (' *** Something went wrong in run 4', err) } );
};


//const run_second_part = false;
//const run_second_part = true;
const run_second_part = false;

if (run_second_part)
{
  //  SEC_014 --- 146. Removing Data from Firebase 5:42
  GC_FB_database.ref('isSingle').remove()
  //  Alternatively, set can be used to remove data by passing "null" as the argument.
  //GC_FB_database.ref('isSingle').set(null)
    .then ( () => { console.log ('Data isSingle is removed in run 1b') } )
    .catch ( (err) => { console.log (' *** Something went wrong removing isSingle in run 1b', err) } );
}


//const run_third_part = false;
//const run_third_part = true;
const run_third_part = false;

if (run_third_part)
{
  //  SEC_014 --- 147. Updating Data 10:41

  GC_FB_database.ref()
    .update( { name: "Mike", age: 39, employment: 'software developer', isSingle: null } )
    .then ( () => { console.log ('Data is updated to Mike in run 1c') } )
    .catch ( (err) => { console.log (' *** Something went wrong with data update in run 1c', err) } );

  GC_FB_database.ref()
    .update( { employment: 'Manager', 'location/city': 'Boston' } )
    .then ( () => { console.log ('Data is updated to Mike in run 2c') } )
    .catch ( (err) => { console.log (' *** Something went wrong with data update in run 2c', err) } );

  GC_FB_database.ref()
    .update( { employment: {title: 'Manager', company: 'Google'}, stressLevel: 6 } )
    .then ( () => { console.log ('Data is updated to Mike in run 2d') } )
    .catch ( (err) => { console.log (' *** Something went wrong with data update in run 2d', err) } );

  setTimeout ( () => {}, 3000 );

  GC_FB_database.ref()
    .update( { 'employment/company': 'Amazon', stressLevel: 9, 'location/city': 'Seattle' } )
    .then ( () => { console.log ('Data is updated to Mike in run 2e') } )
    .catch ( (err) => { console.log (' *** Something went wrong with data update in run 2e', err) } );


  //  SEC_014 --- 148. Fetching Data From Firebase 17:54

  //  get reference to root, then take snapshot.
  GC_FB_database.ref()
    .once('value')
    .then ( (snapshot) => {
      const val = snapshot.val();
      console.log (" entire object ", val);
    } )
    .catch ( (err) => { console.log ("Error fetching object", err)})


  GC_FB_database.ref('location/city')
    .once('value')
    .then ( (snapshot) => {
      const val = snapshot.val();
      console.log (' location/city ', val);
    } )
    .catch ( (err) => { console.log ("Error fetching object", err)})
};

//const run_fourth_part = false;
//const run_fourth_part = true;
const run_fourth_part = false;

if (run_fourth_part)
{

  const onValueChange = GC_FB_database.ref().on('value', (snapshot) => {
    console.log ("  on >>>> ", snapshot.val());
  }, (err) => { console.log ('Error with data fetching', err) } );


  setTimeout ( () => {
    GC_FB_database.ref('age').set (40);
  }, 4000);


  // unsubscribe using the off method.
  setTimeout ( () => {
    GC_FB_database.ref().off (onValueChange);
  }, 8000);

  setTimeout ( () => {
    GC_FB_database.ref('age').set (41);
  }, 12000);

};
 

//const run_fifth_part = false;
//const run_fifth_part = true;
const run_fifth_part = false;

if (run_fifth_part)
{

  const GC_onValueChange = GC_FB_database.ref().on('value', (snapshot) =>
  {
      const L_name = snapshot.val().name;
      const L_city = snapshot.val().location.city;
      const L_title = snapshot.val().employment.title;
      const L_company = snapshot.val().employment.company;
      console.log (`${L_name} is a ${L_title} at ${L_company} living in ${L_city}`);
  }, (err) => { console.log('There was an error ', err) }  );


  setTimeout ( () => {
      GC_FB_database.ref('name').set('Edward');
  }, 4000);

  setTimeout ( () => {
      GC_FB_database.ref('employment/title').set('Database Administrator');
  }, 4000);

  setTimeout ( () => {
      GC_FB_database.ref('location/city').set('Chicago');
  }, 4000);

  setTimeout ( () => {
      GC_FB_database.ref('employment/company').set('Acme');
  }, 4000);

};


//  SEC_014 --- 149. Array Data in Firebase: Part I 15:12

//const run_sixth_part = false;
//const run_sixth_part = true;
const run_sixth_part = false;

if (run_sixth_part)
{

  GC_FB_database.ref().set(null);

  const GC_time_01 = MP_moment.utc().valueOf();
  const GC_time_02 = MP_moment.utc().add(3, 'days').valueOf();
  const GC_time_03 = MP_moment.utc().add(33, 'days').valueOf();

  const expense_01 = { description: 'Water Bill', amount: 3300, createdAt: GC_time_01, note:'' };
  const expense_02 = { description: 'Gas Bill', amount: 2200, createdAt: GC_time_02, note:'' };
  const expense_03 = { description: 'Rent', amount: 109500, createdAt: GC_time_03, note:'' };

  const GC_ID1 = GC_FB_database.ref('expenses').push(expense_01);
  const GC_ID2 = GC_FB_database.ref('expenses').push(expense_02);
  const GC_ID3 = GC_FB_database.ref('expenses').push(expense_03);

    // console.log ('  GC_ID1.key ', GC_ID1.key);
    // console.log ('  GC_ID2.key ', GC_ID2.key);
    // console.log ('  GC_ID3.key ', GC_ID3.key);

};


//  SEC_014 --- 150. Array Data in Firebase: Part II 14:56

// GC_FB_database.ref('expenses')
//       .once('value')
//       .then( (snapshot) =>
//         {
//           const L_expenses = [];

//           snapshot.forEach ( (childsnapshot) => {
//             L_expenses.push (
//             {
//               id: childsnapshot.key,
//               ...childsnapshot.val()
//             }
//               )
//             } );
//           console.log (" EXPENSES", L_expenses);
//         } );

//const run_seventh_part = false;
//const run_seventh_part = true;
const run_seventh_part = false;

if (run_seventh_part)
{

  const GC_keys = [];

  GC_FB_database.ref('expenses')
        .on('value', (snapshot) =>
          {
            const L_expenses = [];
            GC_keys.length = 0;
  
            snapshot.forEach ( (childsnapshot) => {
              GC_keys.push(childsnapshot.key);
              L_expenses.push (
              {
                id: childsnapshot.key,
                ...childsnapshot.val()
              }
                )
              } );
            console.log (" EXPENSES", L_expenses);
          }, (err) => { console.log ("*** something went wrong", err); } );


  //  const expense_01 = { description: 'Water Bill', amount: 3300, createdAt: GC_time_01 };
  //  const expense_02 = { description: 'Gas Bill', amount: 2200, createdAt: GC_time_02 };
  //  const expense_03 = { description: 'Rent', amount: 109500, createdAt: GC_time_03 };

  const GF_get_ref = (ndx, prop) => "expenses/" + GC_keys[ndx] + (prop? "/" + prop : '');

  GC_FB_database.ref("expenses").on("child_removed", (snapshot) =>
    { console.log ("child_removed", snapshot.key, snapshot.val()); } );

  GC_FB_database.ref('expenses').on('child_changed', (snapshot) =>
    { console.log('child_changed', snapshot.key, snapshot.val()); } );

  //  The 'child_added' event is fired on not just the newly added objects,
  //  but for existing ones as well.
  GC_FB_database.ref('expenses').on('child_added', (snapshot) =>
    { console.log('child_added', snapshot.key, snapshot.val()); } );

  GC_FB_database.ref(GF_get_ref(0, "note")).set("for the water bill");
  GC_FB_database.ref(GF_get_ref(1, "description")).set("Gasssss Bill");
  GC_FB_database.ref(GF_get_ref(2, "amount")).set(1212);

  GC_FB_database.ref(GF_get_ref(1)).remove();

  const GC_time_04 = MP_moment.utc().add(43, 'days').valueOf();
  const expense_04 = { description: 'Pizza', amount: 2099, createdAt: GC_time_04, note:'delivered' };
  const GC_ID4 = GC_FB_database.ref('expenses').push(expense_04);

};

//##########################################################################
//##########################################################################
