
/*

//  SEC_012 --- 114. Testing Filters Action Generators 11:06

  sec012a_ACTN_filters.test.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\
actions\sec012a_ACTN_filters.test.jsx

  sec011a_L099_ACTN_filters.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec011a_L099_actions\sec011a_L099_ACTN_filters.jsx

//  SEC_011 --- 99. Organizing Redux 14:50

export const MP_filter_and_sort_actions =
{
  ACT_FS_SET_TEXT_FILTER:  'SET_TEXT_FILTER',
  ACT_FS_SORT_BY_DATE:     'SORT_BY_DATE',
  ACT_FS_SORT_BY_AMOUNT:   'SORT_BY_AMOUNT',
  ACT_FS_SET_START_DATE:   'SET_START_DATE',
  ACT_FS_SET_END_DATE:     'SET_END_DATE'
};

 */

import { 
  MP_filter_and_sort_actions,
  MP_setTextFilter,
  MP_sortByDate,
  MP_sortByAmount,
  MP_setStartDate,
  MP_setEndDate
       } from "../../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";

//import moment from 'moment';
const moment = require ('moment');

describe ("FILTER TESTS", () => {

  test ('should generate set start date action object', () =>  {
    const L_action = MP_setStartDate(moment(0));
    expect(L_action).toEqual( {
      type: MP_filter_and_sort_actions.ACT_FS_SET_START_DATE,
      startDate: moment(0)
    } );
  } );

  test ('should generate set end date action object', () =>  {
    const L_action = MP_setEndDate(moment(0));
    expect(L_action).toEqual( {
      type: MP_filter_and_sort_actions.ACT_FS_SET_END_DATE,
      endDate: moment(0)
    } );
  } );

  test ('should generate set text filter action object with given text value', () =>  {
    const text = "Bill";
    const L_action = MP_setTextFilter(text);
    expect (L_action).toEqual ( {
      type: MP_filter_and_sort_actions.ACT_FS_SET_TEXT_FILTER,
      text
    } );
  } );

  test ('should generate set text filter action object for default text', () =>  {
    const L_action = MP_setTextFilter();
    expect (L_action).toEqual ( {
      type: MP_filter_and_sort_actions.ACT_FS_SET_TEXT_FILTER,
      text: ''
    } );
  } );

  test ("should generate sort by date ", () =>  {
    expect(MP_sortByDate ()).toEqual ( {
      type: MP_filter_and_sort_actions.ACT_FS_SORT_BY_DATE
    } );
  } );

  test ("should generate sort by amount ", () =>  {
    expect(MP_sortByAmount ()).toEqual ( {
      type: MP_filter_and_sort_actions.ACT_FS_SORT_BY_AMOUNT
    } );
  } );

} );

