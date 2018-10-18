
/*

  sec011a_app.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec011a_app.jsx


//  SEC_011 --- 99. Organizing Redux 14:50

 */

console.log (" sec011a_app.jsx is running!");


import React from 'react';
import ReactDOM from 'react-dom';

//  SEC_011 --- 101. Connecting Store and Component with React-Redux 15:40
import { Provider } from 'react-redux';

import SFC_app_router from './sec009a_routers/sec009a_app_router.jsx';

import MP_configure_store from "./sec011a_L099_store/sec011a_L099_STR_configure_store.jsx";


//  SEC_008 --- 66. Reset That $#!* 4:58

import 'normalize.css/normalize.css';

//  SEC_008 --- 64. Setting up Webpack with SCSS 13:16

import './styles/styles.scss';


import { MP_startAddExpense, MP_startRemoveExpense, MP_startEditExpense } from "./sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
//  import { MP_setTextFilter, MP_sortByDate, MP_sortByAmount, MP_setStartDate, MP_setEndDate  } from "./sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";
    //[S07251668|sec011a_L099_ACTN_filters.jsx::sec011a_L099_ACTN_filters import-4x;^B]
import  MP_getVisibleExpenses from "./sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx";
                //[S07251670|sec011a_L099_SLCT_expenses.jsx::sec011a_L099_SLCT_expenses import-1;^B]


//=====================================================================

const GC_store = MP_configure_store ();

GC_store.subscribe ( () =>
  {
    const L_state = GC_store.getState ();
    const L_visibleExpenses = MP_getVisibleExpenses (L_state.expenses, L_state.filters);
    //console.log (GC_store.getState());
    console.log (L_visibleExpenses);
  }                );

const L_august_01_2018 = 1533142800000;
const L_august_03_2018 = 1533315600000;
const L_sept_04_2018 = 1536080400000;

GC_store.dispatch ( MP_startAddExpense ({ description: 'Water Bill', amount: 3300, createdAt: L_august_01_2018 }) );
GC_store.dispatch ( MP_startAddExpense ({ description: 'Gas Bill', amount: 2200, createdAt: L_august_03_2018 }) );
GC_store.dispatch ( MP_startAddExpense ({ description: 'Rent', amount: 109500, createdAt: L_sept_04_2018 }) );


//  SEC_011 --- 104. Dropdown for Picking SortBy 8:41
//  deactivate - no longer needed

// //  SEC_011 --- 99. Organizing Redux 14:50

// GC_store.dispatch ( MP_setTextFilter ('wate') );

// setTimeout ( () => {
//     GC_store.dispatch ( MP_setTextFilter ('bill') );
// },
// 3000 );


console.log ("  --- GC_store.getState()", GC_store.getState());

//=====================================================================

//  SEC_011 --- 101. Connecting Store and Component with React-Redux 15:40

const GC_provider_for_router = (
    <Provider store={GC_store}>
        <SFC_app_router />
    </Provider>
    );

//=====================================================================

//  SEC_004 --- 27. Nesting Components 5:43

//  sec011_app_01
const GC_appRoot_01 = document.getElementById('sec011_app_01');

ReactDOM.render
      //  (GC_routes,
//  SEC_011 --- 101. Connecting Store and Component with React-Redux 15:40
      //(<SFC_app_router />,
      (GC_provider_for_router,
       GC_appRoot_01);

//=====================================================================
//=====================================================================

