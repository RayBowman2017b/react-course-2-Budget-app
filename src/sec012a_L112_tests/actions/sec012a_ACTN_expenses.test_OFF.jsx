
/*

//  SEC_012 --- 113. Testing Expenses Action Generators 16:55

  sec012a_ACTN_expenses.test.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\actions\sec012a_ACTN_expenses.test.jsx


//  SEC_012 --- 113. Testing Expenses Action Generators 16:55

 */

import { MP_expense_actions, MP_addExpense, MP_removeExpense, MP_editExpense } from "../../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";

//import moment from 'moment';
const moment = require ('moment');

describe ('EXPENSE ACTION TESTS', () => {
    test ('should setup remove expense action object', () => {
        const L_action = MP_removeExpense ( { id: '123abc' } );
        //expect(L_action).toBe( {
        expect(L_action).toEqual( {
            type: MP_expense_actions.ACT_XP_REMOVE_EXPENSE,
            id: '123abc'
        } );
    });

    test ('should setup edit expense object', () => {
        const L_action = MP_editExpense ('123abc', { note: 'new note entered'} );
        expect (L_action).toEqual ( {
            type: MP_expense_actions.ACT_XP_EDIT_EXPENSE,
            id: '123abc',
            updates: { note: 'new note entered' }
        } );
    } );

    test ('should setup add expense action object with provided values', () => {
        const L_expense_data =
        {
            description : 'Rent',
            note : 'this was last months rent',
            amount : 109500,
            createdAt : moment()
        };
        const L_action = MP_addExpense (L_expense_data);
        expect (L_action).toEqual ( {
            type: MP_expense_actions.ACT_XP_ADD_EXPENSE,
            expense: {
                ...L_expense_data,
                id: expect.any(String)
            }
        } );

    });

    test ('should setup add expense action object with default values', () => {
        const L_expense_data = {
            description : '',
            note : '',
            amount : 0,
            createdAt : 0
        };
        const L_action = MP_addExpense ();
        expect(L_action).toEqual ( {
            type: MP_expense_actions.ACT_XP_ADD_EXPENSE,
            expense: {
                ...L_expense_data,
                id: expect.any (String)
            }
        } );
    } );


} );

/*

export const MP_expense_actions =
{
  ACT_XP_ADD_EXPENSE:      'ADD_EXPENSE',
  ACT_XP_REMOVE_EXPENSE:   'REMOVE_EXPENSE',
  ACT_XP_EDIT_EXPENSE:     'EDIT_EXPENSE'
};

 */

//##########################################################################
//##########################################################################
