
/*

sec010b_xpr1_Redux_101.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_010_Redux\proj_02\Budget-app\zzz_playground\sec010b_xpr1_Redux_101.jsx

  FROM: sec010b_Redux_101.jsx
  FROM: sec010a_Redux_101.jsx


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
//  Action Generators --- functions that return action objects

const add = ({a = 0, b = 0}, c = 0) =>
{
  return a + b + c;
}

console.log (add({a: 11, b: 22}));
console.log (add({a: 77, b: 22}, 12));
console.log (add({a: 77}));


//  SEC_010 --- 90. Refactoring and Organizing 16:41


const GC_action_generators =
{
    AG_increment_count ( {increment_by = 1} = {} )
    {
        return (
            {
              type: 'INCREMENT',
              increment_by
            }
               );
    },
    AG_decrement_count ( {decrement_by = 1} = {} )
    {
        return (
            {
              type: 'DECREMENT',
              decrement_by
            }
               );
    },
    AG_set_count ( {count = 0} = {} )
    {
        return (
            {
              type: "SET",
              count
            }
               );
    },
    AG_reset_count ()
    {
        return (
            {
              type: "RESET"
            }
               );
    }
};



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

//const GC_count_reducer = ( (P_state = { count: 0 }, P_action) =>

    // xxxvm_increment (P_state, P_action)
    // {
    //     return ({
    //           count: P_state.count + P_action.increment_by,
    //           opr_context : P_state.opr_context
    //            });
    // },


//class cls_context

    // constructor ()
    // {
    //     this.vm_increment = this.vm_increment.bind (this);
    //     this.asd = "asd";
    // }


const GC_context =
{
    m_init_context ()
    {
        this.V_ARY_fn_actions = [];
        this.V_ARY_action_types = ['INCREMENT', 'DECREMENT', 'SET', 'RESET'];
        this.V_ARY_fn_actions['INCREMENT'] = this.vm_increment;
        this.V_ARY_fn_actions['DECREMENT'] = this.vm_decrement;
        this.V_ARY_fn_actions['SET'] = this.vm_set;
        this.V_ARY_fn_actions['RESET'] = this.vm_reset;
    },

    vm_increment (P_state, P_action)
    {
        P_state.count = P_state.count + P_action.increment_by;
        return P_state;
    },
    vm_decrement (P_state, P_action)
    {
        P_state.count = P_state.count - P_action.decrement_by;
        return P_state;
    },
    vm_set (P_state, P_action)
    {
        P_state.count = P_action.count;
        return P_state;
    },
    vm_reset (P_state, P_action)
    {
        P_state.count = 0;
        return P_state;
    },


    //  GC_context.count_reducer
    count_reducer (P_state = { count: 0, opr_context: GC_context }, P_action)
    {
    // console.log ("  cls 12 GC_context.count_reducer  createStore running ...");
    // console.log (" P_state ", P_state);
    // console.log (" P_action ", P_action);

        P_state.opr_context.V_action_type = P_action.type;

        if ( P_state.opr_context.V_ARY_action_types.includes (P_action.type) )
          return (
            P_state.opr_context.V_ARY_fn_actions[P_action.type]
                                  (P_state, P_action)
                 );

        return P_state;
    }
}


//const GC_store = createStore (GC_count_reducer);
    //  GC_context.count_reducer
//const GC_context = new cls_context ();

GC_context.m_init_context ();

const GC_store = createStore (GC_context.count_reducer);

const GC_unsubscription_obj = GC_store.subscribe ( () =>
{
    const L_crnt_state = GC_store.getState();
    console.log ("L_crnt_state", L_crnt_state);

    const L_out_obj =
    {
        count: L_crnt_state.count,
        action: L_crnt_state.opr_context.V_action_type,
    };

    GC_messages.push (L_out_obj);
});


//  SEC_010 --- 90. Refactoring and Organizing 16:41
//  GC_store.createStore will run again with a call to dispatch :
//GC_store.dispatch (GC_increment_count ());
GC_store.dispatch (GC_action_generators.AG_increment_count ());

//  SEC_010 --- 90. Refactoring and Organizing 16:41
//  a second call :
GC_store.dispatch
           (GC_action_generators.AG_increment_count ({ increment_by: 11 }));

//  GC_unsubscription_obj ();

//  SEC_010 --- 90. Refactoring and Organizing 16:41
GC_store.dispatch (GC_action_generators.AG_reset_count ());
//  SEC_010 --- 90. Refactoring and Organizing 16:41
GC_store.dispatch (GC_action_generators.AG_decrement_count ());
//  SEC_010 --- 90. Refactoring and Organizing 16:41
GC_store.dispatch (GC_action_generators.AG_decrement_count ({ decrement_by: 3 }));
//  SEC_010 --- 90. Refactoring and Organizing 16:41
GC_store.dispatch (GC_action_generators.AG_set_count ({ count: 101}));

//======================================================

const GC_appRoot_01 = document.getElementById('sec010_app_01');

let ndx = 0;

//      <div>... state --->>> {P_render_set.O_state}</div>

const GC_SFC_messages = () => (
    <span>
  {
    GC_messages.map ( (P_render_set) =>
    (
      <span key={ndx++}>
      <span>{JSON.stringify (P_render_set)}</span>
      </span>
    )
                    )
  }
    </span>
  );


ReactDOM.render ( <GC_SFC_messages />,  GC_appRoot_01);
