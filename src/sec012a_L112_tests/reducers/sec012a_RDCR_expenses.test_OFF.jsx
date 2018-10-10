
/*

//  SEC_012 --- 117. Testing Expenses Reducer 15:10

  sec012a_RDCR_expenses.test.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\reducers\
sec012a_RDCR_expenses.test.jsx



  sec011a_L099_RDCR_expenses.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec011a_L099_reducers\sec011a_L099_RDCR_expenses.jsx

MP_expensesReducer
import MP_expensesReducer from "../sec011a_L099_reducers/sec011a_L099_RDCR_expenses.jsx";

//  SEC_011 --- 99. Organizing Redux 14:50

 */

import { MP_expense_actions } from "../../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";

import MP_expensesReducer from "../../sec011a_L099_reducers/sec011a_L099_RDCR_expenses.jsx";

import MP_FXT_expenses from "../fixtures/sec012a_DATA_expenses.js";

import moment from 'moment';

describe ('EXPENSES REDUCER TESTS', () => {

    test ('should set default state', () =>  {
        const L_state = MP_expensesReducer (undefined, { type: '@@init' });
        expect(L_state).toEqual([]);
    } );

    test ('should remove expense by id', () =>  {
        const L_action = {
            type: MP_expense_actions.ACT_XP_REMOVE_EXPENSE,
            id: MP_FXT_expenses[1].id
        }
        const L_state = MP_expensesReducer(MP_FXT_expenses, L_action);
        expect(L_state).toEqual ( [ MP_FXT_expenses[0], MP_FXT_expenses[2] ] );
    } );

    test ('should NOT remove expense by BAD id', () =>  {
        const L_action = {
            type: MP_expense_actions.ACT_XP_REMOVE_EXPENSE,
            id: '-1'
        }
        const L_state = MP_expensesReducer(MP_FXT_expenses, L_action);
        expect(L_state).toEqual (MP_FXT_expenses);
    } );


    test ('should add an expense', () =>  {
        const expense = {
                id: '4',
                description: "Laptop",
                note: '',
                createdAt: moment(),
                amount: 29500
        };

        const L_action = {
            type: MP_expense_actions.ACT_XP_ADD_EXPENSE,
            expense
        };

        const L_state = MP_expensesReducer(MP_FXT_expenses, L_action);
        expect(L_state).toEqual ( [ ...MP_FXT_expenses, expense ] );
    } );

    test ('should edit an expense', () =>  {
        const updates = {
                description: "rent payment",
                note: 'payment for May',
                amount: 1900
        };
        const L_action = {
            type: MP_expense_actions.ACT_XP_EDIT_EXPENSE,
            id: '2',
            updates
        };

        const L_updated_expenses = [ ...MP_FXT_expenses];
        L_updated_expenses[1] = {...L_updated_expenses[1], ...updates};
        const L_state = MP_expensesReducer(MP_FXT_expenses, L_action);
        // console.log ('L_state', L_state);
        // console.log ('L_updated_expenses', L_updated_expenses);
        // console.log ('L_state', L_state);
        expect(L_state).toEqual (L_updated_expenses);
    } );

    test ('should NOT edit an expense if expense not found', () =>  {
        const updates = {
                description: "rent payment",
                note: 'payment for May',
                amount: 1900
        };
        const L_action = {
            type: MP_expense_actions.ACT_XP_EDIT_EXPENSE,
            id: '22',
            updates
        };

        const L_state = MP_expensesReducer(MP_FXT_expenses, L_action);
        expect(L_state).toEqual (MP_FXT_expenses);
    } );

} );
