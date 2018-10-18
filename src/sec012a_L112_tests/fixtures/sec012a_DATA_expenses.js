
/***************************************************************************

  sec012a_DATA_expenses.js

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\fixtures\
sec012a_DATA_expenses.js

import MP_FXT_expenses from "../fixtures/sec012a_DATA_expenses.js";

//  SEC_012 --- 117. Testing Expenses Reducer 15:10
//  SEC_012 --- 120. Snapshot Testing with Dynamic Components 15:42
//  SEC_015 --- 153. Testing Async Redux Actions: Part I 16:59

/***************************************************************************/

import moment from 'moment';

const MP_expenses = [{
        id: '1',
        description: "gum",
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id: '2',
        description: "rent",
        note: '',
        amount: 109500,
        //  createdAt: -1000
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: "credit card",
        note: '',
        amount: 4500,
        //createdAt: 1000
        createdAt: moment(0).add(4, 'days').valueOf()
    }];

export default MP_expenses;
