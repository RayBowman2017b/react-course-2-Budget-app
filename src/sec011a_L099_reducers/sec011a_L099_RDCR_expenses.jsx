
/*

  sec011a_L099_RDCR_expenses.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec011a_L099_reducers\sec011a_L099_RDCR_expenses.jsx

MP_expensesReducer
import MP_expensesReducer from "../sec011a_L099_reducers/sec011a_L099_RDCR_expenses.jsx";
      //[S07251671|sec011a_L099_STR_configure_store.jsx::sec011a_L099_RDCR_expenses import-1;^B]

//  SEC_011 --- 99. Organizing Redux 14:50

 */

import { MP_expense_actions } from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
               //[S07251668|sec011a_L099_ACTN_expenses.jsx::sec011a_L099_ACTN_expenses import-3;^B]

//  Expenses Reducer

//  [S07251664|A01_DIrectory_01.txt::GC_expensesReducerDefaultState drc1;^B]

//  [S07251667|sec011a_L105_expense_form.jsx::CLS_expense_form constructor ref1;^B]
        //  values are passed in from the edit page.
//  [S07251667|sec011a_L105_expense_form.jsx::EXPENSE OBJECT CREATION ref1;^B]
//  [S07251667|sec011a_L105_expense_form.jsx::EXPENSE OBJECT CREATION ref2;^B]

const GC_expensesReducerDefaultState = [];

   //  [S07251671|sec011a_L099_STR_configure_store.jsx::combineReducers expenses: MP_expensesReducer^B]

   //  [S07251664|A01_DIrectory_01.txt::MP_expensesReducer drc1;^B]

//  const MP_expensesReducer = (P_state = GC_expensesReducerDefaultState, P_action) =>
export default (P_state = GC_expensesReducerDefaultState, P_action) =>
{

//  SEC_010 --- 93. ES6 Spread Operator in Reducers 17:36

    //  [S07251668|sec011a_L099_ACTN_expenses.jsx::REF1: MP_expense_actions <1>^B]

    switch (P_action.type)
    {
        case MP_expense_actions.ACT_XP_ADD_EXPENSE:
        //[S07251668|sec011a_L099_ACTN_expenses.jsx::type: MP_expense_actions.ACT_XP_ADD_EXPENSE, ref1;^B]
                  //[S07251664|A01_DIrectory_01.txt::type: MP_expense_actions.ACT_XP_ADD_EXPENSE, drc1;^B]
            return [...P_state, P_action.expense];
            //[S07251667|sec011a_L105_expense_form.jsx::this.state expense add ref1;^B]

        case MP_expense_actions.ACT_XP_REMOVE_EXPENSE:
        //[S07251668|sec011a_L099_ACTN_expenses.jsx::type: MP_expense_actions.ACT_XP_REMOVE_EXPENSE, ref1;^B]
                  //[S07251664|A01_DIrectory_01.txt::type: MP_expense_actions.ACT_XP_REMOVE_EXPENSE, drc1;^B]
            //  return P_state.filter ( exp => exp.id != P_action.id );
            return P_state.filter ( ({ id }) => id !== P_action.id );

//  SEC_010 --- 94. Spreading Objects 14:36

        case MP_expense_actions.ACT_XP_EDIT_EXPENSE:
        //[S07251668|sec011a_L099_ACTN_expenses.jsx::type: MP_expense_actions.ACT_XP_EDIT_EXPENSE, ref1;^B]
                  //[S07251664|A01_DIrectory_01.txt::type: MP_expense_actions.ACT_XP_EDIT_EXPENSE, drc1;^B]
            return P_state.map ( (expense) =>
            {
                if (expense.id === P_action.id)
                    return { ...expense, ...P_action.updates };
                        //[S07251667|sec011a_L105_expense_form.jsx::this.state expense update ref1;^B]
                else
                    return expense;
            }
                               );
            
//  SEC_015 --- 157. Fetching Expenses: Part I 12:38
        case MP_expense_actions.ACT_XP_SET_EXPENSES:
            //[S07251668|sec011a_L099_ACTN_expenses.jsx::type: MP_expense_actions.ACT_XP_SET_EXPENSE, ref1;^B]
                      //[S07251664|A01_DIrectory_01.txt::type: MP_expense_actions.ACT_XP_SET_EXPENSE, drc1;^B]
            return P_action.expenses;

        default:
            return P_state;
    }
};

