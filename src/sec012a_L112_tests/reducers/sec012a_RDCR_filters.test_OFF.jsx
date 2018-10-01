
/*

//  SEC_012 --- 116. Testing Filters Reducer 14:07

  sec012a_RDCR_filters.test.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\reducers\
sec012a_RDCR_filters.test.jsx

 */

//import moment from "moment";
const moment = require ('moment');

import MP_filtersReducer from "../../sec011a_L099_reducers/sec011a_L099_RDCR_filters.jsx";

import { MP_filter_and_sort_actions } from "../../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";

describe ('FILTER REDUCER TESTS', () => {

    test ('should setup default filter values', () =>  {
        const L_state = MP_filtersReducer (undefined, { type: '@@init' });
        expect(L_state).toEqual( {
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        } );
    } );

    test ('should set sortBy to amount', () => {
        const L_action = { type: MP_filter_and_sort_actions.ACT_FS_SORT_BY_AMOUNT };
        const L_state = MP_filtersReducer (undefined, L_action);
        expect(L_state.sortBy).toBe('amount');
    } );

    test ('should set sortBy to date', () => {
        const L_current_state = {
                text: '',
                startDate: undefined,
                endDate: undefined,
                sortBy: 'amount'
        };
        const L_action = { type: MP_filter_and_sort_actions.ACT_FS_SORT_BY_DATE };
        const L_state = MP_filtersReducer (L_current_state, L_action);
        expect(L_state.sortBy).toBe('date');
    } );

    test ('should set text filter', () => {
        const text = 'bill';
        const L_action =
                 {
                   type: MP_filter_and_sort_actions.ACT_FS_SET_TEXT_FILTER,
                   text
                 };
        const L_state = MP_filtersReducer (undefined, L_action);
        expect(L_state.text).toBe(text);
    } );

    test ('should set startDate filter to the moment', () => {
        const startDate = moment(0);
        const L_action =
                 {
                   type: MP_filter_and_sort_actions.ACT_FS_SET_START_DATE,
                   startDate
                 };
        const L_state = MP_filtersReducer (undefined, L_action);
        expect(L_state.startDate).toEqual(startDate);
    } );

    test ('should set endDate filter to the moment', () => {
        const endDate = moment(0);
        const L_action =
                 {
                   type: MP_filter_and_sort_actions.ACT_FS_SET_END_DATE,
                   endDate
                 };
        const L_state = MP_filtersReducer (undefined, L_action);
        expect(L_state.endDate).toEqual(endDate);
    } );

} );
