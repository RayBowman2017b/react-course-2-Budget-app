
/*

  sec011a_L099_RDCR_filters.jsx


       //  [ DEF1: GC_filtersReducerDefaultState <1>]
       //  [ DEF1: MP_filtersReducer <1>]


K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec011a_L099_reducers\sec011a_L099_RDCR_filters.jsx

MP_filtersReducer
import MP_filtersReducer from "../sec011a_L099_reducers/sec011a_L099_RDCR_filters.jsx";
     //[S07251671|sec011a_L099_STR_configure_store.jsx::sec011a_L099_RDCR_filters import-1;^B]

//  SEC_011 --- 99. Organizing Redux 14:50

 */


import { MP_filter_and_sort_actions } from "../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";
     //[ MP_filter_and_sort_actions grp-01;]
                        //[S07251668|sec011a_L099_ACTN_filters.jsx::sec011a_L099_ACTN_filters import-1;^B]

//import moment from "moment";
const moment = require ('moment');

//  Filters reducer

//  SEC_011 --- 110. Filtering by Dates 19:44

//  [S07251674|seed_database.jsx:: Add Mock Data to GC_store ref1;^B]

//  [S07251667|sec011a_L103_expense_list_filters.jsx:: Set Filter Elements ref1;^B]

//  [S07251670|sec011a_L099_SLCT_expenses.jsx:: Filters Initialized and Applied xrf1;^B]


//  There is only one object of filter
//  [S07251664|A01_DIrectory_01.txt::GC_filtersReducerDefaultState drc1;^B]

//  [ GC_filtersReducerDefaultState pp1;]

            //[ GC_filtersReducerDefaultState xxx^B]

      //[ DEF1: GC_filtersReducerDefaultState <1>^B]
const GC_filtersReducerDefaultState =
    {
        text: '',
        sortBy: 'date',  //  date or amount
        // startDate: undefined,
        startDate: moment().startOf('month'),
        // endDate: undefined
        endDate: moment().endOf('month')
    };

   //  [S07251671|sec011a_L099_STR_configure_store.jsx::combineReducers filters: MP_filtersReducer^B]

   //  [S07251668|sec011a_L099_ACTN_filters.jsx::RDCR_ACTN_1: MP_filtersReducer <1>^B]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_filtersReducer <1>^B]

   //[ DEF1: MP_filtersReducer <1>^B]
//  const GC_filtersReducer = (P_state = GC_filtersReducerDefaultState, P_action) =>
export default (P_state = GC_filtersReducerDefaultState, P_action) =>
                      //[ GC_filtersReducerDefaultState pp1;^B]
{
    switch (P_action.type)
    {
//  SEC_010 --- 94. Spreading Objects 14:36

        //------------------------------------------------------------------
        //  [ MP_filter_and_sort_actions grp-01;^B]
        //------------------------------------------------------------------

        case MP_filter_and_sort_actions.ACT_FS_SET_TEXT_FILTER:
//[S07251668|sec011a_L099_ACTN_filters.jsx::type: MP_filter_and_sort_actions.ACT_FS_SET_TEXT_FILTER, ref1;^B]
          //[S07251664|A01_DIrectory_01.txt::case MP_filter_and_sort_actions.ACT_FS_SET_TEXT_FILTER: drc1;^B]
            return { ...P_state, text: P_action.text };

        case MP_filter_and_sort_actions.ACT_FS_SORT_BY_AMOUNT:
//[S07251668|sec011a_L099_ACTN_filters.jsx::type: MP_filter_and_sort_actions.ACT_FS_SORT_BY_AMOUNT ref1;^B]
          //[S07251664|A01_DIrectory_01.txt::case MP_filter_and_sort_actions.ACT_FS_SORT_BY_AMOUNT: drc1;^B]
            return { ...P_state, sortBy: 'amount' };

        case MP_filter_and_sort_actions.ACT_FS_SORT_BY_DATE:
//[S07251668|sec011a_L099_ACTN_filters.jsx::type: MP_filter_and_sort_actions.ACT_FS_SORT_BY_DATE ref1;^B]
          //[S07251664|A01_DIrectory_01.txt::case MP_filter_and_sort_actions.ACT_FS_SORT_BY_DATE: drc1;^B]
            return { ...P_state, sortBy: 'date' };

//  SEC_010 --- 95. Wrapping up Our Reducers 9:52

        case MP_filter_and_sort_actions.ACT_FS_SET_START_DATE:
//[S07251668|sec011a_L099_ACTN_filters.jsx::type: MP_filter_and_sort_actions.ACT_FS_SET_START_DATE, ref1;^B]
          //[S07251664|A01_DIrectory_01.txt::case MP_filter_and_sort_actions.ACT_FS_SET_START_DATE: drc1;^B]
            return { ...P_state, startDate: P_action.startDate };

        case MP_filter_and_sort_actions.ACT_FS_SET_END_DATE:
        //[S07251668|sec011a_L099_ACTN_filters.jsx::type: MP_filter_and_sort_actions.ACT_FS_SET_END_DATE, ref1;^B]
                  //[S07251664|A01_DIrectory_01.txt::case MP_filter_and_sort_actions.ACT_FS_SET_END_DATE: drc1;^B]
            return { ...P_state, endDate: P_action.endDate };

        default:
            return P_state;
    }
}
