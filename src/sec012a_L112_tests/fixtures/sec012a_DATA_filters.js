
/*

  sec012a_DATA_filters.js

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\fixtures\
sec012a_DATA_filters.js

//  SEC_012 --- 126. Testing ExpenseListFilters 14:50

import { default_filters, filters_01 } from './fixtures/sec012a_DATA_filters.js';

 */

import moment from 'moment';

const default_filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filters_01 = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};


export { default_filters, filters_01 };
