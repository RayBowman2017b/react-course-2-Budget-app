
/*

  sec010b_Redux_101.jsx

  FROM: sec010a_Redux_101.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_010_Redux\proj_02\Budget-app\zzz_playground\sec010b_Redux_101.jsx


//  SEC_010 --- 91. Reducers 12:05

 */

import { createStore } from 'redux';

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

console.log ("redux 101");


const GC_messages = [];

const GC_util_obj =
{
    get_num_or_1 (P_obj)
    {
        return typeof P_obj === 'number' ? P_obj : 1;
    }
}


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


/*

//  SEC_010 --- 91. Reducers 12:05

  Reducers

  KEY ATTRIBUTES :
  1. reducers are pure functions
      output is only determined by input.

    THIS IS NOT a pure function :
  let a = 10;
  const add = (b) =>  {  return a + b;  }

    THIS IS NOT a pure function :
  let result;
  const add = (a, b) => {  result = a + b;  }

  2. NEVER change state or action.

 */

//const GC_store = createStore ( (P_state = { count: 0 }, P_action) =>
//  BELOW -> const GC_store = createStore (GC_count_reducer);

const GC_count_reducer = ( (P_state = { count: 0 }, P_action) =>
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

const GC_store = createStore (GC_count_reducer);

const GC_unsubscription_obj = GC_store.subscribe ( () =>
{
    const subscribe_s1 = GC_store.getState();
    console.log ("subscribe_s1", subscribe_s1);
    const L_out_obj = { O_message: "subscribe_s1",
                        O_state: JSON.stringify(subscribe_s1) };
    GC_messages.push (L_out_obj);
});


//  SEC_010 --- 90. Refactoring and Organizing 16:41
//  GC_store.createStore will run again with a call to dispatch :
GC_store.dispatch (GC_increment_count ());

//  SEC_010 --- 90. Refactoring and Organizing 16:41
//  a second call :
GC_store.dispatch (GC_increment_count ({ increment_by: 11 }));

//  GC_unsubscription_obj ();

//  SEC_010 --- 90. Refactoring and Organizing 16:41
GC_store.dispatch (GC_reset_count ());
//  SEC_010 --- 90. Refactoring and Organizing 16:41
GC_store.dispatch (GC_decrement_count ());
//  SEC_010 --- 90. Refactoring and Organizing 16:41
GC_store.dispatch (GC_decrement_count ({ decrement_by: 3 }));
//  SEC_010 --- 90. Refactoring and Organizing 16:41
GC_store.dispatch (GC_set_count ({ count: 101}));

//======================================================

const GC_appRoot_01 = document.getElementById('sec008_app_01');

let ndx = 0;

const GC_SFC_messages = () => (
    <span>
  {
    GC_messages.map ( (P_render_set) =>
    (
      <span key={ndx++}>
      <span>{P_render_set.O_message}</span>
      <span> ... 2 --->>> {P_render_set.O_state}</span>
      </span>
    )
                    )
  }
    </span>
  );


ReactDOM.render ( <GC_SFC_messages />,  GC_appRoot_01);
