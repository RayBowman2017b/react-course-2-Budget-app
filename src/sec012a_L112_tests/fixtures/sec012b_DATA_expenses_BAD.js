
/***************************************************************************

sec012b_DATA_expenses_BAD.js

K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\src\sec012a_L112_tests\fixtures\sec012b_DATA_expenses_BAD.js


//  SEC_012 --- 117. Testing Expenses Reducer 15:10
//  SEC_012 --- 120. Snapshot Testing with Dynamic Components 15:42

import MP_FXT_expenses_BAD from "../fixtures/sec012b_DATA_expenses_BAD.js";

 ***************************************************************************/


import moment from 'moment';

const MP_FXT_expenses_BAD = [{
        id: '4',
        description: "shoes",
        note: '',
        amount: 112,
        createdAt: moment(0).add(23, 'days').valueOf()
    },
    {
        id: '5',
        description: "snails",
        note: '',
        amount: '$210',
        //  createdAt: -1000
        createdAt: moment(0).subtract(11, 'days').valueOf()
    },
    {
        id: '6',
        description: "Sandwich",
        note: '',
        //createdAt: 1000
        createdAt: moment(0).add(34, 'days').valueOf()
    }];

export default MP_FXT_expenses_BAD;
