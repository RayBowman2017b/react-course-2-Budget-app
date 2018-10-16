
//  sec010a_Redux_101.jsx

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_010_Redux\proj_02\Budget-app\zzz_playground\sec010a_Redux_101.jsx

//  SEC_010 --- 85. Setting up Redux 7:53


import { createStore } from 'redux';

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

console.log ("redux 101");

/*
//  createStore is passed the default state object.
const GC_store = createStore ( (P_state = { count: 0 }, P_action) =>
{
    console.log ("createStore running ...");

    if (P_action.type === 'INCREMENT')
        return {
            count: P_state.count + 1
               };

    return P_state;
}  );
 */


const GC_messages = [];

const GC_util_obj =
{
    get_num_or_1 (P_obj)
    {
        return typeof P_obj === 'number' ? P_obj : 1;
    }
}

/*
      case 'INCREMENT':
        const L_increment_by
                = typeof P_action.increment_by === 'number' ?
                         P_action.increment_by : 1;
        return {
            count: P_state.count + L_increment_by
               };
 */

//  SEC_010 --- 90. Refactoring and Organizing 16:41
//  Action Generators --- functions that retunr action objects

const add = ({a = 0, b = 0}, c = 0) =>
{
  return a + b + c;
}

console.log (add({a: 11, b: 22}));
console.log (add({a: 77, b: 22}, 12));
console.log (add({a: 77}));


//  SEC_010 --- 90. Refactoring and Organizing 16:41

const xxxGC_increment_count = (P_payload = {}) => (
{
  type: 'INCREMENT',
  increment_by: GC_util_obj.get_num_or_1 (P_payload.increment_by)
}
);
const GC_increment_count = ( {increment_by = 1} = {}) => (
{
  type: 'INCREMENT',
  //  increment_by: GC_util_obj.get_num_or_1 (increment_by)
  increment_by
}
);
const GC_decrement_count = ( {decrement_by = 1} = {}) => (
{
  type: 'DECREMENT',
  decrement_by
}
);
const GC_set_count = ( {count = 0} = {}) => (
{
  type: "SET",
  count
}
);
const GC_reset_count = () => (
{
  type: "RESET"
}
);


//  Reducers

//  const CountReducer


const GC_store = createStore ( (P_state = { count: 0 }, P_action) =>
{
    console.log ("createStore running ...");

    switch (P_action.type)
    {
      case 'INCREMENT':
        return {
            //  count: P_state.count
            //           + GC_util_obj.get_num_or_1 (P_action.increment_by)
              count: P_state.count + P_action.increment_by
               };
       case 'DECREMENT':
        return {
            //  count: P_state.count
            //           - GC_util_obj.get_num_or_1 (P_action.decrement_by)
              count: P_state.count - P_action.decrement_by
               };
       case 'SET':
        return {
            count: P_action.count
               };
       case 'RESET':
        return {
            count: 0
               };
        default:
            return P_state;
    };
}
                );


const GC_unsubscription_obj = GC_store.subscribe ( () =>
{
    const subscribe_s1 = GC_store.getState();
    console.log ("subscribe_s1", subscribe_s1);
    const L_out_obj = { O_message: "subscribe_s1",
                        O_state: JSON.stringify(subscribe_s1) };
    GC_messages.push (L_out_obj);
});



const s1 = GC_store.getState();
//  console.log ("s1", s1);

//  SEC_010 --- 86. Dispatching Actions 13:00


//  Action 
const GC_action_01 =
{
    type: 'INCREMENT',
    increment_by: 11
}

//  SEC_010 --- 90. Refactoring and Organizing 16:41
//  GC_store.createStore will run again with a call to dispatch :
//  GC_store.dispatch (GC_action_01);
GC_store.dispatch (GC_increment_count ());

//  SEC_010 --- 90. Refactoring and Organizing 16:41
//  a second call :
//  GC_store.dispatch (GC_action_01);
//  a second call :
GC_store.dispatch (GC_increment_count ({ increment_by: 11 }));


//  GC_unsubscription_obj ();


//  const s2 = GC_store.getState();
//  console.log ("s2", s2);


//  const s3 = GC_store.getState();
//  console.log ("s3", s3);

//  Action 
const GC_reset_action_02 =
{
    type: 'RESET'
}

//  GC_store.dispatch (GC_reset_action_02);
//  SEC_010 --- 90. Refactoring and Organizing 16:41
GC_store.dispatch (GC_reset_count ());

//  const s4 = GC_store.getState();
//  console.log ("s4", s4);



const GC_decrement_action_04 =
{
    type: 'DECREMENT'
}

//GC_store.dispatch (GC_decrement_action_04);
//  SEC_010 --- 90. Refactoring and Organizing 16:41
GC_store.dispatch (GC_decrement_count ());

//  Action 
const GC_decrement_action_03 =
{
    type: 'DECREMENT',
    decrement_by: 3
}

//  GC_store.dispatch (GC_decrement_action_03);
//  SEC_010 --- 90. Refactoring and Organizing 16:41
GC_store.dispatch (GC_decrement_count ({ decrement_by: 3 }));


const GC_set_action_04 =
{
    type: 'SET',
    count: 101
}

//  GC_store.dispatch (GC_set_action_04);
//  SEC_010 --- 90. Refactoring and Organizing 16:41
GC_store.dispatch (GC_set_count ({ count: 101}));

//  const s5 = GC_store.getState();
//  console.log ("s5", s5);


const GC_appRoot_01 = document.getElementById('sec008_app_01');

let ndx = 0;

const GC_SFC_messages = () => (
    <span>
  {
    GC_messages.map ( (P_render_set) =>
    (
      <span key={ndx++}>
      <span>{P_render_set.O_message}</span>
      <span> --->>> {P_render_set.O_state}</span>
      </span>
    )
                    )
  }
    </span>
  );


ReactDOM.render ( <GC_SFC_messages />,  GC_appRoot_01);
