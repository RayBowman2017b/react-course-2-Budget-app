
/*

  sec011a_L099_ACTN_expenses.jsx


       //  [ DEF1: MP_expense_actions <1>]

       //  [ DEF1: MP_addExpense <1>]
       //  [ DEF1: MP_startAddExpense <1>]
       //  [ DEF1: MP_removeExpense <1>]
       //  [ DEF1: MP_startRemoveExpense <1>]
       //  [ DEF1: MP_editExpense <1>]
       //  [ DEF1: MP_startEditExpense <1>]
       //  [ DEF1: MP_setExpenses <1>]
       //  [ DEF1: MP_startSetExpenses <1>]


K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec011a_L099_actions\sec011a_L099_ACTN_expenses.jsx

----------------------------------------------------------------------------
NOTE: dispatch is passed in by the redux library
----------------------------------------------------------------------------


import { MP_expense_actions, MP_addExpense, MP_removeExpense, MP_editExpense }
import { MP_expense_actions, MP_startAddExpense, MP_startRemoveExpense, MP_startEditExpense }
from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
import { MP_addExpense, MP_removeExpense, MP_editExpense }
import { MP_startAddExpense, MP_startRemoveExpense, MP_startEditExpense }
from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
//[S07251667|sec009a_CLS_add_expense_page.jsx::sec011a_L099_ACTN_expenses import-1;^B]
//[S07251667|sec009a_CLS_edit_expense_page.jsx::sec011a_L099_ACTN_expenses import-2;^B]
   //[S07251669|sec011a_L099_RDCR_expenses.jsx::sec011a_L099_ACTN_expenses import-3;^B]

import { MP_startSetExpenses }
from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";

//[S07251671|sec011a_L099_STR_configure_store.jsx::P_fn_get_state().auth.uid ref1;^B]
                                               //[ P_fn_get_state().auth.uid top1;]
                                               //[ P_fn_get_state().auth.uid top2;]
                                               //[ P_fn_get_state().auth.uid top3;]
                                               //[ P_fn_get_state().auth.uid top4;]


//  SEC_011 --- 99. Organizing Redux 14:50

 */

import uuid from 'uuid';

//  SEC_015 --- 152. Asynchronous Redux Actions 18:49
import MP_database from '../sec014a_firebase/sec014_L142_firebase.js';
       //[S07251677|sec014_L142_firebase.js::sec014_L142_firebase import-1;^B]


   //  [S07251665|sec012a_app.jsx::REF2: MP_expense_actions <1>^B]

   //  [S07251669|sec011a_L099_RDCR_expenses.jsx::REF1: MP_expense_actions <1>^B]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_expense_actions <1>^B]

   //[ DEF1: MP_expense_actions <1>^B]
export const MP_expense_actions =
{
  ACT_XP_ADD_EXPENSE:      'ADD_EXPENSE',
  ACT_XP_REMOVE_EXPENSE:   'REMOVE_EXPENSE',
  ACT_XP_EDIT_EXPENSE:     'EDIT_EXPENSE',
  ACT_XP_SET_EXPENSES:     'SET_EXPENSES'
};
//=====================================================================


//  SEC_015 --- 152. Asynchronous Redux Actions 18:49
export const xxxMP_addExpense = (
        {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = {} ) => (
        {
            type: MP_expense_actions.ACT_XP_ADD_EXPENSE,
            expense:
            {
                id: uuid(),
                description,
                note,
                amount,
                createdAt
            }
        }
                    );
//=====================================================================

//  ADD_EXPENSE

//  SEC_015 --- 152. Asynchronous Redux Actions 18:49

   //  [ EXE1: MP_addExpense <1>]

   //[ DEF1: MP_addExpense <1>^B]
export const MP_addExpense = (expense) => (
        {
            type: MP_expense_actions.ACT_XP_ADD_EXPENSE,
//[S07251669|sec011a_L099_RDCR_expenses.jsx::type: MP_expense_actions.ACT_XP_ADD_EXPENSE, ref1;^B]
            expense
        }
            );
//=====================================================================

//  SEC_015 --- 152. Asynchronous Redux Actions 18:49

   //        [S07251667|sec009a_CLS_add_expense_page.jsx::MP_startAddExpense import-1;^B]
   //  [S07251667|sec009a_CLS_add_expense_page.jsx::EXE1: MP_startAddExpense <1>^B]

   //  [S07251665|sec012a_app.jsx::MP_startAddExpense import-2;^B]

   //  [S07251667|sec011a_L105_expense_form.jsx::REF1: MP_startAddExpense <1>^B]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_startAddExpense <1>^B]


     //[ DEF1: MP_startAddExpense <1>^B]
  export const MP_startAddExpense = (P_expenseData = {}) =>
  {
//  SEC_016 --- 168. Private Firebase Data 18:33
    return (P_dispatch, P_fn_get_state) => {
      const {
          description = '',
          note = '',
          amount = 0,
          createdAt = 0
      } = P_expenseData;

      const L_expense = { description, note, amount, createdAt };

//  SEC_016 --- 168. Private Firebase Data 18:33
      const L_DB_ref = `users/${P_fn_get_state().auth.uid}/expenses`;
                            //[ P_fn_get_state().auth.uid top1;^B]

//  SEC_015 --- 153. Testing Async Redux Actions: Part I 16:59
      //  return the promise

      return MP_database
               //.ref('expenses')
               .ref(L_DB_ref)
               .push(L_expense)
               .then ( (ref) => {
          P_dispatch ( MP_addExpense ( { id: ref.key, ...L_expense } ) );
             //[ EXE1: MP_addExpense <1>^B]
      } )
               .catch ((err) => console.log
                ("   *** something went wrong in MP_startAddExpense", err));
    };
  }
//=====================================================================
//=====================================================================

//  REMOVE_EXPENSE

   //  [ EXE1: MP_removeExpense <1>]

   //[ DEF1: MP_removeExpense <1>^B]
export const MP_removeExpense = ( { id } = {} ) => ( {
            type: MP_expense_actions.ACT_XP_REMOVE_EXPENSE,
//[S07251669|sec011a_L099_RDCR_expenses.jsx::type: MP_expense_actions.ACT_XP_REMOVE_EXPENSE, ref1;^B]
            id
        } );
//=====================================================================

//  SEC_015 --- 159. Remove Expense 12:03

      //  [S07251667|sec009a_CLS_edit_expense_page.jsx::MP_startRemoveExpense import-1;^B]
//  [S07251667|sec009a_CLS_edit_expense_page.jsx::EXE1: MP_startRemoveExpense <1>^B]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_startRemoveExpense <1>^B]

   //[ DEF1: MP_startRemoveExpense <1>^B]
export const MP_startRemoveExpense = ({ id } = {}) => {
//  SEC_016 --- 168. Private Firebase Data 18:33
  return (dispatch, P_fn_get_state) => {
    const L_DB_ref = `users/${P_fn_get_state().auth.uid}/expenses/${id}`;
                          //[ P_fn_get_state().auth.uid top2;^B]
    return MP_database
             //.ref(`expenses/${id}`)
             .ref(L_DB_ref)
             .remove()
             .then(() => {
                  dispatch(MP_removeExpense({ id }));
                 //[ EXE1: MP_removeExpense <1>^B]
              } )
             .catch ((err) => console.log
                ("   *** something went wrong in MP_startRemoveExpense", err));
  };
};
//=====================================================================

//  EDIT_EXPENSE

   //  [ EXE1: MP_editExpense <1>]

   //[ DEF1: MP_editExpense <1>^B]
export const MP_editExpense = ( id, updates ) => ( {
            type: MP_expense_actions.ACT_XP_EDIT_EXPENSE,
//[S07251669|sec011a_L099_RDCR_expenses.jsx::type: MP_expense_actions.ACT_XP_EDIT_EXPENSE, ref1;^B]
            id,
            updates
       } );
//=====================================================================

//  SEC_015 --- 160. Update Expense 10:31

      //  [S07251667|sec009a_CLS_edit_expense_page.jsx::MP_startEditExpense import-1;^B]
//  [S07251667|sec009a_CLS_edit_expense_page.jsx::EXE1: MP_startEditExpense <1>^B]

    //  [S07251667|sec011a_L105_expense_form.jsx::REF1: MP_startEditExpense <1>^B]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_startEditExpense <1>^B]

   //[ DEF1: MP_startEditExpense <1>^B]
export const MP_startEditExpense = (id, updates) => {
//  SEC_016 --- 168. Private Firebase Data 18:33
  return (dispatch, P_fn_get_state) => {
    const L_DB_ref = `users/${P_fn_get_state().auth.uid}/expenses/${id}`;
                          //[ P_fn_get_state().auth.uid top3;^B]
    return MP_database
             //.ref(`expenses/${id}`)
             .ref(L_DB_ref)
             .update(updates)
             .then( () => {
                  dispatch(MP_editExpense(id, updates));
                 //[ EXE1: MP_editExpense <1>^B]
              } )
             .catch ((err) => console.log
                    ("   *** something went wrong in MP_startEditExpense", err));
  };
};
//=====================================================================
//=====================================================================

// SET_EXPENSES

//  SEC_015 --- 157. Fetching Expenses: Part I 12:38

   //  [ EXE1: MP_setExpenses <1>]

   //[ DEF1: MP_setExpenses <1>^B]
export const MP_setExpenses = (expenses) =>
( {
  type: MP_expense_actions.ACT_XP_SET_EXPENSES,
//[S07251669|sec011a_L099_RDCR_expenses.jsx::type: MP_expense_actions.ACT_XP_SET_EXPENSE, ref1;^B]
  expenses
} );
//=====================================================================

   //  [S07251665|sec012a_app.jsx::MP_startSetExpense import-2;^B]
   //  [S07251665|sec012a_app.jsx::EXE1: startSetExpenses <1>]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: startSetExpenses <1>^B]

//  SEC_015 --- 158. Fetching Expenses: Part II 13:52

   //[ DEF1: MP_startSetExpenses <1>^B]
export const MP_startSetExpenses = () => {
//  SEC_016 --- 168. Private Firebase Data 18:33
  return (dispatch, P_fn_get_state) => {
    const L_DB_ref = `users/${P_fn_get_state().auth.uid}/expenses`;
                          //[ P_fn_get_state().auth.uid top4;^B]
    return MP_database
             //.ref('expenses')
             .ref(L_DB_ref)
             .once('value')
             .then((snapshot) => {
                  const L_expenses = [];

                  snapshot.forEach((childSnapshot) => {
                    L_expenses.push ( {
                      id: childSnapshot.key,
                      ...childSnapshot.val()
                    } );
                  } );

                  dispatch(MP_setExpenses(L_expenses));
                 //[ EXE1: MP_setExpenses <1>^B]
              } )
             .catch ((err) => console.log
                    ("   *** something went wrong in MP_startSetExpense", err));
  };
};
//=====================================================================
//=====================================================================


//##########################################################################
//##########################################################################
