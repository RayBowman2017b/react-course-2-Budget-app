
/*

  sec010c_L91_Redux_expensify.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_010_Redux\proj_02\Budget-app\zzz_playground\sec010c_L91_Redux_expensify.jsx

//  SEC_010 --- 91. Reducers 12:05

  const GC_src_dir = "zzz_playground";
//  const GC_active_app_file = "sec010c_L91_Redux_expensify.jsx";

 */

//import { createStore, combineReducers } from 'redux';
const redux = require ('redux');
//import uuid from 'uuid';
const uuid = require ('uuid');
const moment = require ('moment');

const GC_expense_actions =
{
  ACT_XP_ADD_EXPENSE:      'ADD_EXPENSE',
  ACT_XP_REMOVE_EXPENSE:   'REMOVE_EXPENSE',
  ACT_XP_EDIT_EXPENSE:     'EDIT_EXPENSE'
};

const GC_filter_and_sort_actions =
{
  ACT_FS_SET_TEXT_FILTER:  'SET_TEXT_FILTER',
  ACT_FS_SORT_BY_DATE:     'SORT_BY_DATE',
  ACT_FS_SORT_BY_AMOUNT:   'SORT_BY_AMOUNT',
  ACT_FS_SET_START_DATE:   'SET_START_DATE',
  ACT_FS_SET_END_DATE:     'SET_END_DATE'
};


//  ADD_EXPENSE

const GC_addExpense = (
        {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = {} ) => (
        {
            type: GC_expense_actions.ACT_XP_ADD_EXPENSE,
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

//  REMOVE_EXPENSE

const GC_removeExpense = ( { id } = {} ) => (
        {
            type: GC_expense_actions.ACT_XP_REMOVE_EXPENSE,
            id
        }
                                   );


//  EDIT_EXPENSE

const GC_editExpense = ( id, updates ) => (
        {
            type: GC_expense_actions.ACT_XP_EDIT_EXPENSE,
            id,
            updates
        }
                                          );


//  SET_TEXT_FILTER

const GC_setTextFilter = (text = '') => (
        {
            type: GC_filter_and_sort_actions.ACT_FS_SET_TEXT_FILTER,
            text
        }
                                   )


//  SORT_BY_DATE

const GC_sortByDate = () => (
{
    type: GC_filter_and_sort_actions.ACT_FS_SORT_BY_DATE
}  );

//  SORT_BY_AMOUNT

const GC_sortByAmount = () => (
{
    type: GC_filter_and_sort_actions.ACT_FS_SORT_BY_AMOUNT
}  );

//  SEC_010 --- 95. Wrapping up Our Reducers 9:52
//  SET_START_DATE

const GC_setStartDate = (startDate) => (
{
    type: GC_filter_and_sort_actions.ACT_FS_SET_START_DATE,
    startDate
}  );

//  SEC_010 --- 95. Wrapping up Our Reducers 9:52
//  SET_END_DATE

const GC_setEndDate = (endDate) => (
{
    type: GC_filter_and_sort_actions.ACT_FS_SET_END_DATE,
    endDate
}  );

//  Expenses Reducer

const GC_expensesReducerDefaultState = [];

const GC_expensesReducer = (P_state = GC_expensesReducerDefaultState, P_action) =>
{

//  SEC_010 --- 93. ES6 Spread Operator in Reducers 17:36

    switch (P_action.type)
    {
        case GC_expense_actions.ACT_XP_ADD_EXPENSE:
            return [...P_state, P_action.expense];

        case GC_expense_actions.ACT_XP_REMOVE_EXPENSE:
            //  return P_state.filter ( exp => exp.id != P_action.id );
            return P_state.filter ( ({ id }) => id !== P_action.id );

//  SEC_010 --- 94. Spreading Objects 14:36

        case GC_expense_actions.ACT_XP_EDIT_EXPENSE:
            return P_state.map ( (expense) =>  {
                if (expense.id === P_action.id)  {
                    return {
                        ...expense,
                        ...P_action.updates
                    };
                }
                else
                    return expense;
            }
                               );
            
        default:
            return P_state;
    }
};

//  Filters reducer


const GC_filtersReducerDefaultState =
    {
        text: '',
        sortBy: 'date',  //  date or amount
        startDate: undefined,
        endDate: undefined
    };

const GC_filtersReducer = (P_state = GC_filtersReducerDefaultState, P_action) =>
{
    switch (P_action.type)
    {
//  SEC_010 --- 94. Spreading Objects 14:36

        case GC_filter_and_sort_actions.ACT_FS_SET_TEXT_FILTER:
            return { ...P_state, text: P_action.text };

        case GC_filter_and_sort_actions.ACT_FS_SORT_BY_AMOUNT:
            return { ...P_state, sortBy: 'amount' };

        case GC_filter_and_sort_actions.ACT_FS_SORT_BY_DATE:
            return { ...P_state, sortBy: 'date' };

//  SEC_010 --- 95. Wrapping up Our Reducers 9:52

        case GC_filter_and_sort_actions.ACT_FS_SET_START_DATE:
            return { ...P_state, startDate: P_action.startDate };

        case GC_filter_and_sort_actions.ACT_FS_SET_END_DATE:
            return { ...P_state, endDate: P_action.endDate };

        default:
            return P_state;
    }
}

//=====================================================================

//  SEC_010 --- 96. Filtering Redux Data 16:54

//  Get Visible Expenses

//  timestamps (milliseconds)
//  STARTING POINT for all timestamps :
//  January 1st 1970 (unix epoch)
//  positive numbers are for times after, negative numbers are for before.

// const GC_getVisibleExpenses = (P_expenses, P_filters) =>
const GC_getVisibleExpenses = (P_expenses, { text, sortBy, startDate, endDate } ) =>
{
    return P_expenses.filter ( (P_expense) =>
        {
            const L_startDateMatch = typeof startDate !== 'number' || P_expense.createdAt >= startDate;
            const L_endDateMatch = typeof endDate !== 'number' || P_expense.createdAt <= endDate;
            //  const L_textMatch = true;
            const L_textMatch = typeof text !== 'string' ||
                         P_expense.description.toLowerCase ().includes (text.toLowerCase());

            return L_startDateMatch && L_endDateMatch && L_textMatch;
        }
//  SEC_010 --- 97. Sorting Redux Data 6:14
        ).sort ( (a, b) =>
            {
                if (sortBy === 'date')
                    return a.createdAt < b.createdAt ? 1 : -1;

                if (sortBy === 'amount')
                    return a.amount < b.amount ? 1 : -1;
            } );
};

//=====================================================================



//  SEC_010 --- 92. Working with Multiple Reducers 13:40

//  Store creation

const GC_store = redux.createStore
        (
            redux.combineReducers (
            {
                expenses: GC_expensesReducer,
                filters: GC_filtersReducer
            }
                            )
        );

GC_store.subscribe ( () =>
  {
    const L_state = GC_store.getState ();
    const L_visibleExpenses = GC_getVisibleExpenses (L_state.expenses, L_state.filters);
    //console.log (GC_store.getState());
    console.log (L_visibleExpenses);
  }                );


const GC_rent_expense_01 =
    GC_store.dispatch (GC_addExpense (
        {
            description: 'Rent',
            amount: 100,
            createdAt: -21000
        }
                      )  );

const GC_coffee_expense_02 =
    GC_store.dispatch (GC_addExpense (
        {
            description: 'Coffee',
            amount: 300,
            createdAt: -1000
        }
                      )  );

console.log (GC_rent_expense_01);
console.log (GC_coffee_expense_02);

//GC_store.dispatch (GC_removeExpense ( { id: GC_rent_expense_01.expense.id } ));
// GC_store.dispatch ( GC_removeExpense (GC_rent_expense_01.expense) );

// GC_store.dispatch (GC_editExpense ( GC_coffee_expense_02.expense.id, { amount: 500 } ));

//  SEC_010 --- 96. Filtering Redux Data 16:54

console.log ('   --- string includes');

 GC_store.dispatch (GC_setTextFilter ('rent'));
 GC_store.dispatch (GC_setTextFilter ('ffe'));
 GC_store.dispatch (GC_setTextFilter ());
// GC_store.dispatch (GC_setTextFilter ());

//  SEC_010 --- 97. Sorting Redux Data 6:14

console.log ('   --- sort by amount');

 GC_store.dispatch (GC_sortByAmount ());
// GC_store.dispatch (GC_sortByDate ());


//  SEC_010 --- 95. Wrapping up Our Reducers 9:52

console.log ('   --- DATES');

 GC_store.dispatch (GC_setStartDate (-1211));
 GC_store.dispatch (GC_setEndDate (123));
 GC_store.dispatch (GC_setStartDate (-121));
// GC_store.dispatch (GC_setStartDate ());
 GC_store.dispatch (GC_setEndDate (1231));
 GC_store.dispatch (GC_setEndDate (123));
// GC_store.dispatch (GC_setEndDate ());

//====================================================

const GC_demo_state = {
    expenses: [
    {
        id: 'qwertyuiop',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }  ],
    filters:
    {
        text: 'rent',
        sortBy: 'amount',  //  date or amount
        startDate: undefined,
        endDate: undefined
    }
}

//##########################################################################

const GC_user =
{
    name: 'Jenny',
    age: 24
};

const GC_user_edit = { ...GC_user, location: 'Philadelphia', age: 27 };

const GC_user_edit_02 = { age: 29, ...GC_user, location: 'Philadelphia' };

console.log ({...GC_user});
console.log ({...GC_user_edit});
console.log ({...GC_user_edit_02});

const GC_time = moment.utc().valueOf();
const GC_time_02 = moment.utc().add(7, 'days').valueOf();
const GC_time_03 = moment.utc().add(33, 'days').valueOf();

console.log (`   *** GC_time ${GC_time}`);
console.log (`   *** GC_time 2 ${GC_time_02}`);
console.log (`   *** GC_time 3 ${GC_time_03}`);


//##########################################################################
//##########################################################################
