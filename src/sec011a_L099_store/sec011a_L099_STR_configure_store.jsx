
/*

  sec011a_L099_STR_configure_store.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec011a_L099_store\sec011a_L099_STR_configure_store.jsx

import MP_configure_store from "./sec011a_L099_store/sec011a_L099_STR_configure_store.jsx";
                       //[S07251665|sec012a_app.jsx::sec011a_L099_STR_configure_store import-1;^B]

//  SEC_011 --- 99. Organizing Redux 14:50

 */

//  SEC_015 --- 152. Asynchronous Redux Actions 18:49
//import { createStore, combineReducers } from 'redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import MP_expensesReducer from "../sec011a_L099_reducers/sec011a_L099_RDCR_expenses.jsx";
            //[S07251669|sec011a_L099_RDCR_expenses.jsx::sec011a_L099_RDCR_expenses import-1;^B]

import MP_filtersReducer from "../sec011a_L099_reducers/sec011a_L099_RDCR_filters.jsx";
            //[S07251669|sec011a_L099_RDCR_filters.jsx::sec011a_L099_RDCR_filters import-1;^B]

//  SEC_016 --- 165. The Auth Reducer 15:49
import MP_authReducer from "../sec011a_L099_reducers/sec016a_L165_RDCR_auth.jsx";
            //[S07251669|sec016a_L165_RDCR_auth.jsx::sec016a_L165_RDCR_auth import-1;^B]

//=====================================================================

//  SEC_015 --- 152. Asynchronous Redux Actions 18:49
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//=====================================================================

//  SEC_010 --- 92. Working with Multiple Reducers 13:40

//  Store creation

       //  [S07251665|sec012a_app.jsx::EXE1: MP_configure_store <1>]

//  const GC_store = MP_configure_store ();

export default () => {

//  const GC_store = createStore

   //  [S07251664|A01_DIrectory_01.txt::create Store for reducers drc1;^B]

   //  [S07251667|sec011a_L101_expense_list.jsx::(P_state.expenses, P_state.filters) xrf1;^B]
   //  [S07251667|sec013a_L140_expenses_summary.jsx::(P_state.expenses, P_state.filters) xrf2;^B]

const L_store = createStore
        (
            combineReducers (
            {
                expenses: MP_expensesReducer,
//[S07251669|sec011a_L099_RDCR_expenses.jsx::combineReducers expenses: MP_expensesReducer^B]

                filters: MP_filtersReducer,
//[S07251669|sec011a_L099_RDCR_filters.jsx::combineReducers filters: MP_filtersReducer^B]

//  SEC_016 --- 165. The Auth Reducer 15:49
                auth: MP_authReducer
               //[S07251667|sec016a_L162_login_page.jsx::auth: MP_authReducer ref1;^B]
                    //[S07251667|sec009a_SFC_header.jsx::auth: MP_authReducer ref3;^B]
        //[S07251666|sec016a_L167_public_app_router.jsx::auth: MP_authReducer ref2;^B]
                //[S07251668|sec016a_L162_ACTN_auth.jsx::MP_login auth ref1;^B]
                //[S07251668|sec016a_L162_ACTN_auth.jsx::MP_logout auth ref1;^B]
            //[S07251668|sec011a_L099_ACTN_expenses.jsx::P_fn_get_state().auth.uid ref1;^B]
//[S07251669|sec016a_L165_RDCR_auth.jsx::combineReducers auth: MP_authReducer^B]
                //[S07251669|sec016a_L165_RDCR_auth.jsx::auth: MP_authReducer ref4a;^B]
                //[S07251669|sec016a_L165_RDCR_auth.jsx::auth: MP_authReducer ref4b;^B]
                         //[S07251674|seed_database.jsx::users/${P_user.uid} ref1;^B]
                      //[S07251664|A01_DIrectory_01.txt::auth: MP_authReducer drc1;^B]
            }
                            ),

//  SEC_015 --- 152. Asynchronous Redux Actions 18:49
            composeEnhancers(applyMiddleware(thunk))

//  SEC_011 --- 109. Redux Dev Tools 5:33
//  SEC_015 --- 152. Asynchronous Redux Actions 18:49
//  OUT :>          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

    return L_store;
}

//=====================================================================
