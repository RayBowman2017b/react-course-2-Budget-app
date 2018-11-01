
/*

  sec012a_app.jsx

       //  [ DEF1: GC_provider_for_router <1>]

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec012a_app.jsx


//  SEC_011 --- 99. Organizing Redux 14:50

 */

import React from 'react';
import ReactDOM from 'react-dom';

//  SEC_011 --- 101. Connecting Store and Component with React-Redux 15:40
import { Provider } from 'react-redux';

//  SEC_016 --- 164. Redirecting Login or Logout 12:48
// import SFC_app_router from './sec009a_routers/sec009a_app_router.jsx';
import SFC_app_router, { MP_history } from './sec009a_routers/sec009a_app_router.jsx';
                         //[S07251666|sec009a_app_router.jsx::sec009a_app_router import-1;^B]

import MP_configure_store from "./sec011a_L099_store/sec011a_L099_STR_configure_store.jsx";
//[S07251671|sec011a_L099_STR_configure_store.jsx::sec011a_L099_STR_configure_store import-1;^B]


//  SEC_008 --- 66. Reset That $#!* 4:58

import 'normalize.css/normalize.css';

//  SEC_008 --- 64. Setting up Webpack with SCSS 13:16

import './styles/styles.scss';

//  SEC_012 --- 121. Mocking Libraries with Jest 11:51
//  MOVED from sec009a_components\sec011a_L105_expense_form.jsx
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';


//  SEC_015 --- 158. Fetching Expenses: Part II 13:52

import {  MP_startSetExpenses }
//[S07251668|sec011a_L099_ACTN_expenses.jsx::MP_startAddExpense import-2;^B]
     //[ MP_startAddExpense exe1;]
//[S07251668|sec011a_L099_ACTN_expenses.jsx::MP_startSetExpense import-2;^B]
                         //[ MP_startSetExpenses exe1;]
from "./sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
     //[S07251668|sec011a_L099_ACTN_expenses.jsx::REF2: MP_expense_actions <1>^B]

//=====================================================================

//  SEC_014 --- 142. Getting Firebase 11:40

//  import  './sec014a_firebase/sec014_L142_firebase.js';

//  SEC_016 --- 162. Login Page and Google Authentication 19:26
import { firebase } from './sec014a_firebase/sec014_L142_firebase.js';
      //[S07251677|sec014_L142_firebase.js::sec014_L142_firebase import-2;^B]

//=====================================================================

//  SEC_016 --- 165. The Auth Reducer 15:49
import { MP_login, MP_logout } from './sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';
                   //[S07251668|sec016a_L162_ACTN_auth.jsx::sec016a_L162_ACTN_auth import-1;^B]

//=====================================================================

const GC_store = MP_configure_store ();
  //[ GC_store a1;]
//[S07251671|sec011a_L099_STR_configure_store.jsx::EXE1: MP_configure_store <1>^B]
                      //[S07251664|A01_DIrectory_01.txt::MP_configure_store drc1;^B]


   //  [S07251672|SEC_013.txt::SEC 013  L 131 notes-01;]
   //  code to create test data removed


//  SEC_011 --- 104. Dropdown for Picking SortBy 8:41
//  deactivate - no longer needed

// //  SEC_011 --- 99. Organizing Redux 14:50

// GC_store.dispatch ( MP_setTextFilter ('wate') );

// setTimeout ( () => {
//     GC_store.dispatch ( MP_setTextFilter ('bill') );
// },
// 3000 );


//  console.log ("  --- GC_store.getState()", GC_store.getState());

//=====================================================================

//  SEC_011 --- 101. Connecting Store and Component with React-Redux 15:40

//  [ GC_provider_for_router exe1;]

//  [S07251664|A01_DIrectory_01.txt::DRC1: GC_provider_for_router <1>^B]

//[ DEF1: GC_provider_for_router <1>^B]
const GC_provider_for_router = (
    <Provider store={GC_store}>
        <SFC_app_router />
        {/* //[S07251666|sec009a_app_router.jsx::EXE1: GC_app_router <1>^B] */}
    </Provider>
    );


import { seed_DB } from "./Utilities_01/seed_database.jsx";
        //[S07251674|seed_database.jsx::seed_database import-1;^B]

//=====================================================================

const GC_render_CTRL = {

  has_rendered: false,

   //  [ EXE1a: render_app <1>]
   //  [ EXE1b: render_app <1>]

  appRoot_01 : document.getElementById('sec011_app_01'),
//[S07251665|index_template.html::getElementById('sec011_app_01'); ref1;^B]
         //[S07251663|index.html::getElementById('sec011_app_01'); ref2;^B]

  render_app_loading () {
    ReactDOM.render(<p>Loading...</p>, this.appRoot_01);
  },
  render_app ()  {
    if ( ! this.has_rendered )  {
          ReactDOM.render(GC_provider_for_router, this.appRoot_01);
                      //[ GC_provider_for_router exe1;^B]
          this.has_rendered = true;
    }
  }
};
//=====================================================================

//  SEC_004 --- 27. Nesting Components 5:43

//  [S07251664|A01_DIrectory_01.txt::ReactDOM.render GC_provider_for_router^B]

//ReactDOM.render
//      //  (GC_routes,
////  SEC_011 --- 101. Connecting Store and Component with React-Redux 15:40
//      //(<SFC_app_router />,
//      (GC_provider_for_router,
//       GC_appRoot_01);

//  SEC_015 --- 158. Fetching Expenses: Part II 13:52

//ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
//ReactDOM.render(<p>Loading...</p>, GC_appRoot_01);
GC_render_CTRL.render_app_loading ();


console.log (" sec012a_app.jsx is running!");

//=====================================================================

//  SEC_016 --- 162. Login Page and Google Authentication 19:26
//  SEC_016 --- 164. Redirecting Login or Logout 12:48

firebase.auth().onAuthStateChanged ( (P_user) => {

  if (P_user) {

    console.log("log in", P_user);

//  SEC_016 --- 165. The Auth Reducer 15:49
    GC_store.dispatch(MP_login(P_user.uid));
    //[S07251668|sec016a_L162_ACTN_auth.jsx::EXE1: MP_login <1>^B]

    //GC_store.dispatch(startSetExpenses()).then(() => {
    //  ReactDOM.render(jsx, document.getElementById('app'));
    GC_store.dispatch(MP_startSetExpenses())
    //[ GC_store a1;^B]
                  //[ MP_startSetExpenses exe1;^B]
      //[S07251668|sec011a_L099_ACTN_expenses.jsx::EXE1: startSetExpenses <1>^B]
            .then ( () => {
              GC_render_CTRL.render_app ();
                  //[ EXE1a: render_app <1>^B]

            //seed_DB (P_user, GC_store);
            //[S07251674|seed_database.jsx::EXE1: seed_DB <1>^B]
                          }
                  )
            .catch ((err) => console.log
                       (` ******** ERROR in app.jsx :: ${err}`) );

    //console.log("MP_history.location.pathname", MP_history.location.pathname);
    //console.log("MP_history.location", MP_history.location);
    if (MP_history.location.pathname === '/')
      MP_history.push('/dashboard');
    //[S07251666|sec009a_app_router.jsx::MP_history ref1;^B]

  } else {
    console.log("log out", P_user);

//  SEC_016 --- 165. The Auth Reducer 15:49
    GC_store.dispatch(MP_logout());
//[S07251668|sec016a_L162_ACTN_auth.jsx::EXE1: MP_logout <1>^B]

    GC_render_CTRL.render_app ();
        //[ EXE1b: render_app <1>^B]

    MP_history.push('/');
  }
} );

//=====================================================================
//=====================================================================
