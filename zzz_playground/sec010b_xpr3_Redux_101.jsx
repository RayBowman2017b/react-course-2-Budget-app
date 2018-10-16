

/*
  sec010b_xpr3_Redux_101.jsx
  FROM: sec010b_xpr2_Redux_101.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_010_Redux\proj_02\Budget-app\zzz_playground\sec010b_xpr2_Redux_101.jsx

  FROM: sec010b_xpr1_Redux_101.jsx

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


    console.log ("sec010b_xpr3_Redux_101.jsx");


const GC_messages = [];


const GC_action_generators =
{
    AG_increment_count ( {increment_by = 1} = {} )
    {
        if (typeof increment_by !== 'number')
            increment_by = 0;

        return (
            {
              type: 'INCREMENT',
              increment_by
            }
               );
    },

    AG_decrement_count ( {decrement_by = 1} = {} )
    {
        if (typeof decrement_by !== 'number')
            decrement_by = 0;

        return (
            {
              type: 'DECREMENT',
              decrement_by
            }
               );
    },

    AG_set_count ( {count = 0} = {} )
    {
        if (typeof count !== 'number')
            count = 0;

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
              type: "RESET",
              count: 0
            }
               );
    }
};


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
        return (
        Object.assign ( {}, P_state,
                    { count : P_state.count + P_action.increment_by } )
               );
    },
    vm_decrement (P_state, P_action)
    {
        return (
        Object.assign ( {}, P_state,
                    { count : P_state.count - P_action.decrement_by } )
               );
    },
    vm_set (P_state, P_action)
    {
        return (
        Object.assign ( {}, P_state,
                    { count : P_action.count } )
               );
    },
    vm_reset (P_state, P_action)
    {
        return (
        Object.assign ( {}, P_state,
                    { count : 0 } )
               );
    },


    //  GC_context.count_reducer
    count_reducer (P_state = { count: 0, opr_context: GC_context }, P_action)
    {
        P_state.opr_context.V_action_type = P_action.type;

        if ( P_state.opr_context.V_ARY_action_types.includes (P_action.type) )
          return (
            P_state.opr_context.V_ARY_fn_actions[P_action.type]
                                  (P_state, P_action)
                 );

        return P_state;
    }
}


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

//  TO unsubscribe :
//  GC_unsubscription_obj ();

GC_store.dispatch (GC_action_generators.AG_increment_count ());
GC_store.dispatch (GC_action_generators.AG_increment_count ({ increment_by: 11 }));
GC_store.dispatch (GC_action_generators.AG_reset_count ());
GC_store.dispatch (GC_action_generators.AG_decrement_count ());
GC_store.dispatch (GC_action_generators.AG_decrement_count ({ decrement_by: 3 }));
GC_store.dispatch (GC_action_generators.AG_set_count ({ count: 101}));

//======================================================

const GC_appRoot_div = document.getElementById('sec010_app_01');

let ndx = 0;

//      <div>... state --->>> {P_render_set.O_state}</div>

const GC_SFC_messages = () => (
    <span>
  {
    GC_messages.map ( (P_render_set) =>
    (
      <span key={ndx++}>
          <span>{" set " + ndx}</span>
          <span>{JSON.stringify (P_render_set)}</span>
      </span>
    )
                    )
  }
    </span>
  );


ReactDOM.render ( <GC_SFC_messages />,  GC_appRoot_div);

//======================================================
//======================================================

