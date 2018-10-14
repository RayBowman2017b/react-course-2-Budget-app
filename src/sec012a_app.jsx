
/*

  sec012a_app.jsx

       //  [ DEF1: GC_provider_for_router <1>]

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec012a_app.jsx


//  SEC_011 --- 99. Organizing Redux 14:50

 */

console.log (" sec012a_app.jsx is running!");


import React from 'react';
import ReactDOM from 'react-dom';

//  SEC_011 --- 101. Connecting Store and Component with React-Redux 15:40
import { Provider } from 'react-redux';

import SFC_app_router from './sec009a_routers/sec009a_app_router.jsx';

import MP_configure_store from "./sec011a_L099_store/sec011a_L099_STR_configure_store.jsx";

import MP_moment from 'moment';


//  SEC_008 --- 66. Reset That $#!* 4:58

import 'normalize.css/normalize.css';

//  SEC_008 --- 64. Setting up Webpack with SCSS 13:16

import './styles/styles.scss';

//  SEC_012 --- 121. Mocking Libraries with Jest 11:51
//  MOVED from sec009a_components\sec011a_L105_expense_form.jsx
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';


import { MP_addExpense, MP_removeExpense, MP_editExpense } from "./sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
     //[S07251668|sec011a_L099_ACTN_expenses.jsx::REF2: MP_expense_actions <1>^B]
     //[ MP_addExpense exe1;]
     //[ MP_addExpense xxx]

//  import { MP_setTextFilter, MP_sortByDate, MP_sortByAmount, MP_setStartDate, MP_setEndDate  } from "./sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";
            //[S07251668|sec011a_L099_ACTN_filters.jsx::sec011a_L099_ACTN_filters import-3x;^B]
import  MP_getVisibleExpenses from "./sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx";
              //  [S07251670|sec011a_L099_SLCT_expenses.jsx::sec011a_L099_SLCT_expenses import-3;^B]
            //[ MP_getVisibleExpenses ref1;]
            //[ MP_getVisibleExpenses xxx]

//=====================================================================

const GC_store = MP_configure_store ();
//[S07251671|sec011a_L099_STR_configure_store.jsx::EXE1: MP_configure_store <1>^B]
                      //[S07251664|A01_DIrectory_01.txt::MP_configure_store drc1;^B]

   //  [S07251664|A01_DIrectory_01.txt::sec012a_app GC_store.subscribe drc1;^B]

   //  [S07251672|SEC_013.txt::SEC 013  L 131 notes-01;]
   //  code to create test data removed

//if (false)
            //[ if (false)  :end1;]
{

const L_august_01_2018 = 1533142800000;
const L_august_03_2018 = 1533315600000;
const L_sept_04_2018 = 1536080400000;
const GC_time_01 = MP_moment.utc().valueOf();
const GC_time_02 = MP_moment.utc().add(3, 'days').valueOf();
const GC_time_03 = MP_moment.utc().add(33, 'days').valueOf();


   //  [S07251669|sec011a_L099_RDCR_filters.jsx::Add Mock Data to GC_store ref1;^B]

GC_store.dispatch ( MP_addExpense ({ description: 'Water Bill', amount: 3300, createdAt: GC_time_01 }) );
GC_store.dispatch ( MP_addExpense ({ description: 'Gas Bill', amount: 2200, createdAt: GC_time_02 }) );
GC_store.dispatch ( MP_addExpense ({ description: 'Rent', amount: 109500, createdAt: GC_time_03 }) );
                //[ MP_addExpense exe1;^B]

GC_store.subscribe ( () =>
  {
    const L_state = GC_store.getState ();
    const L_visibleExpenses = MP_getVisibleExpenses (L_state.expenses, L_state.filters);
                          //[ MP_getVisibleExpenses ref1;^B]
    //[S07251664|A01_DIrectory_01.txt::MP_getVisibleExpenses drc1;^B]
    //console.log (GC_store.getState());
    console.log (L_visibleExpenses);
  }                );

}
            //[ if (false)  :end1;^B]



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

//[ DEF1: GC_provider_for_router <1>^B]
const GC_provider_for_router = (
    <Provider store={GC_store}>
        <SFC_app_router />
        {/* //[S07251666|sec009a_app_router.jsx::EXE1: GC_app_router <1>^B] */}
    </Provider>
    );

//=====================================================================

//  SEC_004 --- 27. Nesting Components 5:43

//  sec011_app_01
const GC_appRoot_01 = document.getElementById('sec011_app_01');
//[S07251665|index_template.html::getElementById('sec011_app_01'); ref1;^B]
         //[S07251663|index.html::getElementById('sec011_app_01'); ref2;^B]

//  [S07251664|A01_DIrectory_01.txt::ReactDOM.render GC_provider_for_router^B]

ReactDOM.render
      //  (GC_routes,
//  SEC_011 --- 101. Connecting Store and Component with React-Redux 15:40
      //(<SFC_app_router />,
      (GC_provider_for_router,
       GC_appRoot_01);

//=====================================================================
//=====================================================================

