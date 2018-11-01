
/*

  sec011a_L099_ACTN_filters.jsx

       //  [ DEF1: MP_setTextFilter <1>]
       //  [ DEF1: MP_sortByDate <1>]
       //  [ DEF1: MP_sortByAmount <1>]
       //  [ DEF1: MP_setStartDate <1>]
       //  [ DEF1: MP_setEndDate <1>]


K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec011a_L099_actions\sec011a_L099_ACTN_filters.jsx


 MP_setTextFilter, MP_sortByDate, MP_sortByAmount, MP_setStartDate, MP_setEndDate 

//  SEC_011 --- 99. Organizing Redux 14:50


import { MP_filter_and_sort_actions } from "../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";
                        //[S07251669|sec011a_L099_RDCR_filters.jsx::sec011a_L099_ACTN_filters import-1;^B]
sec011a_L103_expense_list_filters.jsx :>
import { MP_setTextFilter, MP_sortByDate, MP_sortByAmount, MP_setStartDate, MP_setEndDate  }
from "../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";
            //[S07251667|sec011a_L103_expense_list_filters.jsx::sec011a_L099_ACTN_filters import-2;^B]
                //[S07251665|sec011a_app.jsx::sec011a_L099_ACTN_filters import-4x;^B]

 */


//  [S07251669|sec011a_L099_RDCR_filters.jsx::RDCR_ACTN_1: MP_filtersReducer <1>^B]
                        //[ ACTN-01: ACT_FS_SET_TEXT_FILTER <1>]
                        //[ ACTN-01: ACT_FS_SORT_BY_DATE <1>]
                        //[ ACTN-01: ACT_FS_SORT_BY_AMOUNT <1>]
                        //[ ACTN-01: ACT_FS_SET_START_DATE <1>]
                        //[ ACTN-01: ACT_FS_SET_END_DATE <1>]

   //  [S07251664|A01_DIrectory_01.txt::MP_filter_and_sort_actions drc1;^B]

export const MP_filter_and_sort_actions =
{
  ACT_FS_SET_TEXT_FILTER:  'SET_TEXT_FILTER',
  ACT_FS_SORT_BY_DATE:     'SORT_BY_DATE',
  ACT_FS_SORT_BY_AMOUNT:   'SORT_BY_AMOUNT',
  ACT_FS_SET_START_DATE:   'SET_START_DATE',
  ACT_FS_SET_END_DATE:     'SET_END_DATE'
};



//  SET_TEXT_FILTER

   //  [S07251667|sec011a_L103_expense_list_filters.jsx::EXE1: MP_setTextFilter <1>]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_setTextFilter <1>^B]

   //[ DEF1: MP_setTextFilter <1>^B]
export const MP_setTextFilter = (text = '') => (
{
    type: MP_filter_and_sort_actions.ACT_FS_SET_TEXT_FILTER,
    //[S07251669|sec011a_L099_RDCR_filters.jsx::type: MP_filter_and_sort_actions.ACT_FS_SET_TEXT_FILTER, ref1;^B]
                        //[ ACTN-01: ACT_FS_SET_TEXT_FILTER <1>^B]
    text
}
       )


//  SORT_BY_DATE

   //  [S07251667|sec011a_L103_expense_list_filters.jsx::EXE1: MP_sortByDate <1>]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_sortByDate <1>^B]

   //[ DEF1: MP_sortByDate <1>^B]
export const MP_sortByDate = () => (
{
    type: MP_filter_and_sort_actions.ACT_FS_SORT_BY_DATE
    //[S07251669|sec011a_L099_RDCR_filters.jsx::type: MP_filter_and_sort_actions.ACT_FS_SORT_BY_DATE ref1;^B]
                        //[ ACTN-01: ACT_FS_SORT_BY_DATE <1>^B]
}  );

//  SORT_BY_AMOUNT

   //  [S07251667|sec011a_L103_expense_list_filters.jsx::EXE1: MP_sortByAmount <1>]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_sortByAmount <1>^B]

   //[ DEF1: MP_sortByAmount <1>^B]
export const MP_sortByAmount = () => (
{
    type: MP_filter_and_sort_actions.ACT_FS_SORT_BY_AMOUNT
    //[S07251669|sec011a_L099_RDCR_filters.jsx::type: MP_filter_and_sort_actions.ACT_FS_SORT_BY_AMOUNT ref1;^B]
                        //[ ACTN-01: ACT_FS_SORT_BY_AMOUNT <1>^B]
}  );

//  SEC_010 --- 95. Wrapping up Our Reducers 9:52
//  SET_START_DATE

   //  [S07251667|sec011a_L103_expense_list_filters.jsx::EXE1: MP_setStartDate <1>]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_setStartDate <1>^B]

   //[ DEF1: MP_setStartDate <1>^B]
export const MP_setStartDate = (startDate) => (
{
    type: MP_filter_and_sort_actions.ACT_FS_SET_START_DATE,
    //[S07251669|sec011a_L099_RDCR_filters.jsx::type: MP_filter_and_sort_actions.ACT_FS_SET_START_DATE, ref1;^B]
                        //[ ACTN-01: ACT_FS_SET_START_DATE <1>^B]
    startDate
}  );

//  SEC_010 --- 95. Wrapping up Our Reducers 9:52
//  SET_END_DATE

   //  [S07251667|sec011a_L103_expense_list_filters.jsx::EXE1: MP_setEndDate <1>]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_setEndDate <1>^B]

   //[ DEF1: MP_setEndDate <1>^B]
export const MP_setEndDate = (endDate) => (
{
    type: MP_filter_and_sort_actions.ACT_FS_SET_END_DATE,
    //[S07251669|sec011a_L099_RDCR_filters.jsx::type: MP_filter_and_sort_actions.ACT_FS_SET_END_DATE, ref1;^B]
                        //[ ACTN-01: ACT_FS_SET_END_DATE <1>^B]
    endDate
}  );
