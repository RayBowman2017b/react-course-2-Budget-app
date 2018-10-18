
/*

  sec011a_L099_ACTN_expenses.jsx


       //  [ DEF1: MP_expense_actions <1>]

       //  [ DEF1: MP_addExpense <1>]
       //  [ DEF1: MP_startAddExpense <1>]
       //  [ DEF1: MP_removeExpense <1>]
       //  [ DEF1: MP_startRemoveExpense <1>]
       //  [ DEF1: MP_editExpense <1>]
       //  [ DEF1: MP_startEditExpense <1>]


K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec011a_L099_actions\sec011a_L099_ACTN_expenses.jsx

import { MP_expense_actions, MP_addExpense, MP_removeExpense, MP_editExpense }
import { MP_expense_actions, MP_startAddExpense, MP_startRemoveExpense, MP_startEditExpense }
from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
import { MP_addExpense, MP_removeExpense, MP_editExpense }
import { MP_startAddExpense, MP_startRemoveExpense, MP_startEditExpense }
from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
//[S07251667|sec009a_CLS_add_expense_page.jsx::sec011a_L099_ACTN_expenses import-1;^B]
//[S07251667|sec009a_CLS_edit_expense_page.jsx::sec011a_L099_ACTN_expenses import-2;^B]
   //[S07251669|sec011a_L099_RDCR_expenses.jsx::sec011a_L099_ACTN_expenses import-3;^B]

//  SEC_011 --- 99. Organizing Redux 14:50

 */

import uuid from 'uuid';

//  SEC_015 --- 152. Asynchronous Redux Actions 18:49
import MP_database from '../sec014a_firebase/sec014_L142_firebase.js';
       //[S07251677|sec014_L142_firebase.js::sec014_L142_firebase import-1;^B]


   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_expense_actions <1>^B]

   //  [S07251665|sec012a_app.jsx::REF2: MP_expense_actions <1>^B]

   //  [S07251669|sec011a_L099_RDCR_expenses.jsx::REF1: MP_expense_actions <1>^B]

   //[ DEF1: MP_expense_actions <1>^B]
export const MP_expense_actions =
{
  ACT_XP_ADD_EXPENSE:      'ADD_EXPENSE',
  ACT_XP_REMOVE_EXPENSE:   'REMOVE_EXPENSE',
  ACT_XP_EDIT_EXPENSE:     'EDIT_EXPENSE'
};


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

//  ADD_EXPENSE

//  SEC_015 --- 152. Asynchronous Redux Actions 18:49

   //[ DEF1: MP_addExpense <1>^B]
export const MP_addExpense = (expense) => (
        {
            type: MP_expense_actions.ACT_XP_ADD_EXPENSE,
//[S07251669|sec011a_L099_RDCR_expenses.jsx::type: MP_expense_actions.ACT_XP_ADD_EXPENSE, ref1;^B]
            expense
        }
            );

//  SEC_015 --- 152. Asynchronous Redux Actions 18:49

   //        [S07251667|sec009a_CLS_add_expense_page.jsx::MP_startAddExpense import-1;^B]
   //  [S07251667|sec009a_CLS_add_expense_page.jsx::EXE1: MP_startAddExpense <1>^B]

   //  [S07251667|sec011a_L105_expense_form.jsx::REF1: MP_startAddExpense <1>^B]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_startAddExpense <1>^B]

       //  [S07251667|sec009a_CLS_add_expense_page.jsx::EXE1: MP_startAddExpense <1>^B]

     //[ DEF1: MP_startAddExpense <1>^B]
  export const MP_startAddExpense = (P_expenseData = {}) =>
  {
    return (P_dispatch) =>
    {
      const
      {
                description = '',
                note = '',
                amount = 0,
                createdAt = 0
      } = P_expenseData;

      const L_expense = { description, note, amount, createdAt };

//  SEC_015 --- 153. Testing Async Redux Actions: Part I 16:59
      //  return the promise

      return MP_database.ref('expenses').push(L_expense).then ( (ref) =>
      {
          P_dispatch ( MP_addExpense ( { id: ref.key, ...L_expense } ) );
      } );
    };
  }
//=====================================================================

//  REMOVE_EXPENSE

      //  [S07251667|sec009a_CLS_edit_expense_page.jsx::MP_startRemoveExpense import-1;^B]
//  [S07251667|sec009a_CLS_edit_expense_page.jsx::EXE1: MP_startRemoveExpense <1>^B]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_startRemoveExpense <1>^B]

   //[ DEF1: MP_removeExpense <1>^B]
   //[ DEF1: MP_startRemoveExpense <1>^B]
export const MP_removeExpense = ( { id } = {} ) => (
        {
            type: MP_expense_actions.ACT_XP_REMOVE_EXPENSE,
//[S07251669|sec011a_L099_RDCR_expenses.jsx::type: MP_expense_actions.ACT_XP_REMOVE_EXPENSE, ref1;^B]
            id
        }
                                   );
//=====================================================================

//  EDIT_EXPENSE

      //  [S07251667|sec009a_CLS_edit_expense_page.jsx::MP_startEditExpense import-1;^B]
//  [S07251667|sec009a_CLS_edit_expense_page.jsx::EXE1: MP_startEditExpense <1>^B]

    //  [S07251667|sec011a_L105_expense_form.jsx::REF1: MP_startEditExpense <1>^B]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_startEditExpense <1>^B]

   //[ DEF1: MP_editExpense <1>^B]
   //[ DEF1: MP_startEditExpense <1>^B]
export const MP_editExpense = ( id, updates ) => (
        {
            type: MP_expense_actions.ACT_XP_EDIT_EXPENSE,
//[S07251669|sec011a_L099_RDCR_expenses.jsx::type: MP_expense_actions.ACT_XP_EDIT_EXPENSE, ref1;^B]
            id,
            updates
        }
                                          );
//=====================================================================
//=====================================================================


//##########################################################################
//##########################################################################
