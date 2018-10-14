
/*

  sec011a_L099_STR_configure_store.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec011a_L099_store\sec011a_L099_STR_configure_store.jsx

import MP_configure_store from "./sec011a_L099_store/sec011a_L099_STR_configure_store.jsx";

//  SEC_011 --- 99. Organizing Redux 14:50

 */

import { createStore, combineReducers } from 'redux';

import MP_expensesReducer from "../sec011a_L099_reducers/sec011a_L099_RDCR_expenses.jsx";
            //[S07251669|sec011a_L099_RDCR_expenses.jsx::sec011a_L099_RDCR_expenses import-1;^B]

import MP_filtersReducer from "../sec011a_L099_reducers/sec011a_L099_RDCR_filters.jsx";
            //[S07251669|sec011a_L099_RDCR_filters.jsx::sec011a_L099_RDCR_filters import-1;^B]

//=====================================================================

//  SEC_010 --- 92. Working with Multiple Reducers 13:40

//  Store creation

       //  [S07251665|sec012a_app.jsx::EXE1: MP_configure_store <1>]

//  const GC_store = MP_configure_store ();

export default () => {

//  const GC_store = createStore

   //  [S07251664|A01_DIrectory_01.txt::create Store for reducers drc1;^B]

   //  [S07251667|sec011a_L101_expense_list.jsx::(P_state.expenses, P_state.filters) xrf1;^B]

const L_store = createStore
        (
            combineReducers (
            {
                expenses: MP_expensesReducer,
//[S07251669|sec011a_L099_RDCR_expenses.jsx::combineReducers expenses: MP_expensesReducer^B]
                filters: MP_filtersReducer
//[S07251669|sec011a_L099_RDCR_filters.jsx::combineReducers filters: MP_filtersReducer^B]
            }
                            ),
//  SEC_011 --- 109. Redux Dev Tools 5:33
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

    return L_store;
}

//=====================================================================
