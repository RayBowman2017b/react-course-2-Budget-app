
/*

//  SEC_012 --- 113. Testing Expenses Action Generators 16:55

  sec012a_ACTN_expenses.test.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\actions\sec012a_ACTN_expenses.test.jsx


//  SEC_012 --- 113. Testing Expenses Action Generators 16:55

 */

//import { MP_expense_actions, MP_startAddExpense, MP_startRemoveExpense, MP_startEditExpense }
import { MP_expense_actions,
         MP_addExpense, MP_removeExpense, MP_editExpense, MP_setExpenses,
//  SEC_015 --- 158. Fetching Expenses: Part II 13:52
         MP_startAddExpense, MP_startRemoveExpense, MP_startEditExpense, MP_startSetExpenses }
from "../../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";

//  SEC_015 --- 153. Testing Async Redux Actions: Part I 16:59
//  using the fixtures instead.
import MP_FXT_expenses from "../fixtures/sec012a_DATA_expenses.js";

//  SEC_015 --- 153. Testing Async Redux Actions: Part I 16:59
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

//  SEC_015 --- 154. Testing Async Redux Actions: Part II 12:12
import MP_database from '../../sec014a_firebase/sec014_L142_firebase.js';


//import moment from 'moment';
const moment = require ('moment');

//  SEC_015 --- 153. Testing Async Redux Actions: Part I 16:59
const GC_createMockStore = configureMockStore([thunk]);


describe ('EXPENSE ACTION TESTS', () => {

//  SEC_015 --- 157. Fetching Expenses: Part I 12:38

beforeEach( (done) => {

    //jest.setTimeout(10000);
    jest.setTimeout(300000);

      const L_expensesData = {};

      MP_FXT_expenses.forEach(({ id, description, note, amount, createdAt }) => {
        L_expensesData[id] = { description, note, amount, createdAt };
      });

      //  This will be called async :> MP_database.ref('expenses').set(L_expensesData)
      //  Need to chain .then with a call to done so that the function will wait for
      //  the return of data from Firebase :> .then(() => done());
      MP_database.ref('expenses').set(L_expensesData).then(() => done());
  }  );


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
//  SEC_015 --- 153. Testing Async Redux Actions: Part I 16:59
        //const L_expense_data =
        //{
        //    description : 'Rent',
        //    note : 'this was last months rent',
        //    amount : 109500,
        //    createdAt : moment()
        //};
        const L_expense_data = MP_FXT_expenses[2];
        const L_action = MP_addExpense (L_expense_data);
        expect (L_action).toEqual ( {
            type: MP_expense_actions.ACT_XP_ADD_EXPENSE,
//  SEC_015 --- 153. Testing Async Redux Actions: Part I 16:59
            //expense: {
            //    ...L_expense_data,
            //    id: expect.any(String)
            //}
            expense: L_expense_data
        } );

    } );

//  SEC_015 --- 153. Testing Async Redux Actions: Part I 16:59
test('should add expense to database and store', async (done) => {
    const L_store = GC_createMockStore ({});
    const L_expense_data =
        {
            description: 'Mouse',
            amount: 3000,
            note: 'This one is better',
            createdAt: 1000
        };

    L_store
        .dispatch ( MP_startAddExpense (L_expense_data) )
        .then ( () => {
        //expect(1).toBe(1);

//  SEC_015 --- 154. Testing Async Redux Actions: Part II 12:12

            const L_action = L_store.getActions ();
            expect(L_action[0]).toEqual ( {
                type: MP_expense_actions.ACT_XP_ADD_EXPENSE,
                expense: {
                    id: expect.any (String),
                    ...L_expense_data
                }
            } );
            return MP_database.ref(`expenses/${L_action[0].expense.id}`)
                              .once('value');
         } )
        .then ( (P_snapshot) => {
             expect(P_snapshot.val()).toEqual(L_expense_data);
             done();
         } )
        .catch ((err) => console.log(err));
} );

//  SEC_015 --- 154. Testing Async Redux Actions: Part II 12:12
test('should add expense with defaults to database and store', (done) => {
    const L_store = GC_createMockStore ({});
    const L_expense_data =
    {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    //L_store.dispatch (MP_startAddExpense (L_expense_data))
    L_store
        .dispatch (MP_startAddExpense ({}))
        .then ( () => {
            const L_action = L_store.getActions ();
            expect(L_action[0]).toEqual ( {
                type: MP_expense_actions.ACT_XP_ADD_EXPENSE,
                expense: {
                    id: expect.any (String),
                    ...L_expense_data
                }
            } );
            return MP_database.ref(`expenses/${L_action[0].expense.id}`)
                              .once('value');
         } )
        .then ( (P_snapshot) => {
             expect(P_snapshot.val()).toEqual(L_expense_data);
             done();
         } )
        .catch ((err) => console.log(err));
} );

//  SEC_015 --- 157. Fetching Expenses: Part I 12:38

test ("should setup set expense action object with data", () => {
    const L_action = MP_setExpenses (MP_FXT_expenses);
    expect(L_action).toEqual( {
        type: MP_expense_actions.ACT_XP_SET_EXPENSES,
        expenses: MP_FXT_expenses
    } );
} );

//  SEC_015 --- 158. Fetching Expenses: Part II 13:52

test ("should fetch the expenses from firebase", (done) => {
    const L_store = GC_createMockStore ({});
    L_store
        .dispatch( MP_startSetExpenses())
        .then ( () => {
             const L_actions = L_store.getActions();
             expect(L_actions[0]).toEqual({
                 type: MP_expense_actions.ACT_XP_SET_EXPENSES,
                 expenses: MP_FXT_expenses
             } );

             return MP_database.ref(`expenses`)
                               .once('value');
         } )
        .then ( (P_snapshot) => {
             expect(P_snapshot.val()).toEqual(MP_FXT_expenses);
             done();
         } )
        .catch ((err) => console.log(err));
} );


//  SEC_015 --- 153. Testing Async Redux Actions: Part I 16:59

/***************************************************************************

    test ('should setup add expense action object with default values', () => {
        const L_expense_data = {
            description : '',
            note : '',
            amount : 0,
            createdAt : 0
        };
        const L_action = MP_startAddExpense ();
        expect(L_action).toEqual ( {
            type: MP_expense_actions.ACT_XP_ADD_EXPENSE,
            expense: {
                ...L_expense_data,
                id: expect.any (String)
            }
        } );
    } );
 ***************************************************************************/


} );

/*

export const MP_expense_actions =
{
  ACT_XP_ADD_EXPENSE:      'ADD_EXPENSE',
  ACT_XP_REMOVE_EXPENSE:   'REMOVE_EXPENSE',
  ACT_XP_EDIT_EXPENSE:     'EDIT_EXPENSE',
  ACT_XP_SET_EXPENSES:     'SET_EXPENSES'
};

 */

//##########################################################################
//##########################################################################
