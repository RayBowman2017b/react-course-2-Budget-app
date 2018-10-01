
/*

  sec011a_L103_expense_list_filters.jsx

       //  [ CLS1: CLS_expense_list_filters <1>]


       //  [ DEF1: GC_map_state_to_props <1>]
       //  [ DEF1: mapDispatchToProps <1>]

    props.filters
        GC_map_state_to_props :>
            //[ props.filters i1;]
            //[ props.filters a1;]
            //[ props.filters a2;]
            //[ props.filters a3;]
            //[ props.filters a4;]
            //[ props.filters xxx]
            //[ props.filters a;]

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec009a_components\sec011a_L103_expense_list_filters.jsx


//  SEC_011 --- 103. Controlled Inputs for Filters 14:21

import SFC_expense_list_filters from "./sec009a_components/sec011a_L103_expense_list_filters.jsx";
import CLS_expense_list_filters from "./sec009a_components/sec011a_L103_expense_list_filters.jsx";

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_009_React_Router\proj_02\Budget-app\src\styles\components_SEC009\sec009a_SFC_expense_dashboard_page.jsx

import { CLS_expense_list_filters } from "../../sec009a_components/sec011a_L103_expense_list_filters.jsx";

//    remove_expense: (expense_id_obj) => dispatch(MP_removeExpense(expense_id_obj))

 */

import React from 'react';

import { connect } from 'react-redux';

//  import { DateRangePicker } from 'react-dates';

import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";
//[S07251674|Loadable_Handlers.jsx::MPT3: MP_common_loading_handler <1>^B]

const DateRangePicker = Loadable({
  loader: () => import('react-dates'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});



//  SEC_011 --- 104. Dropdown for Picking SortBy 8:41
//  import { MP_setTextFilter  } from "../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";
//  SEC_011 --- 110. Filtering by Dates 19:44
//  import { MP_setTextFilter, MP_sortByDate, MP_sortByAmount  } from "../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";
import { MP_setTextFilter, MP_sortByDate, MP_sortByAmount, MP_setStartDate, MP_setEndDate  } from "../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";
     //[ MP_setTextFilter import-01;]
                       //[ MP_sortByDate import-01;]
                                      //[ MP_sortByAmount import-01;]
                                                       //[ MP_setStartDate import-01;]
                                                                        //[ MP_setEndDate import-01;]
                    //[S07251668|sec011a_L099_ACTN_filters.jsx::sec011a_L099_ACTN_filters.jsx ref1;^B]


//  SEC_011 --- 110. Filtering by Dates 19:44
//const SFC_expense_list_filters = (P_props) => (

       //  [S07251667|sec009a_SFC_expense_dashboard_page.jsx::TPL1: CLS_expense_list_filters <1>]

       //  [S07251664|A01_DIrectory_01.txt::DRC1: CLS_expense_list_filters <1>^B]

       //  [ CLS_expense_list_filters pp1;]
       //  [ CLS_expense_list_filters xxx]

   //[ CLS1: CLS_expense_list_filters <1>^B]
export class CLS_expense_list_filters extends React.Component
{
       //  [ DEF1: onExpenseDatesChange <1>]
       //  [ DEF1: onExpenseFocusChange <1>]
       //  [ DEF1: TXBX_filters_change <1>]
       //  [ DEF1: SLCT_sort_item_change <1>]

       //  [ DEF1: CLS_expense_list_filters.render <1>]

       /////////////////////////////////////////////////////////////////////
       /////////////////////////////////////////////////////////////////////

    state = {
      calenderFocused: null
  //[ calenderFocused s1;]
  //[ calenderFocused a2;]
  //[ calenderFocused xxx]
    };

//  SEC_011 --- 110. Filtering by Dates 19:44

    //  [ onExpenseDatesChange evt1;]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: onExpenseDatesChange <1>^B]

    //[ DEF1: onExpenseDatesChange <1>^B]
    onExpenseDatesChange = ( { startDate, endDate } ) => {
      // this.props.dispatch (MP_setStartDate(startDate) );
      this.props.MDTP_setStartDate(startDate);
      //[S07251668|sec011a_L099_ACTN_filters.jsx::EXE1: MP_setStartDate <1>^B]
             //[ MDTP_setStartDate exe1;]

      // this.props.dispatch (MP_setEndDate(endDate) );
      this.props.MDTP_setEndDate (endDate);
      //[S07251668|sec011a_L099_ACTN_filters.jsx::EXE1: MP_setEndDate <1>^B]
             //[ MDTP_setEndDate exe1;]
    };

    //  [ onExpenseFocusChange evt1;]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: onExpenseFocusChange <1>^B]

    //[ DEF1: onExpenseFocusChange <1>^B]
    onExpenseFocusChange = (calenderFocused) => {
      // console.log ("calenderFocused", calenderFocused);
      // console.log ("typeof calenderFocused", typeof calenderFocused);
      this.setState ( () => ( { calenderFocused } ) );
                            //[ calenderFocused s1;^B]
    };

    //  [ TXBX_filters_change evt1;]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: TXBX_filters_change <1>^B]

    //[ DEF1: TXBX_filters_change <1>^B]
    TXBX_filters_change = (P_event) =>  {
      //this.props.dispatch ( MP_setTextFilter (P_event.target.value) );
      this.props.MDTP_setTextFilter (P_event.target.value);
        //[S07251668|sec011a_L099_ACTN_filters.jsx::EXE1: MP_setTextFilter <1>^B]
             //[ MDTP_setTextFilter exe1;]
    };

    //  Only "date" and "amount" are allowed values.
 
    //[ SLCT_sort_item_change evt1;]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: SLCT_sort_item_change <1>^B]

    //[ DEF1: SLCT_sort_item_change <1>^B]
    SLCT_sort_item_change = (P_event) =>  {
      this.props.MDTP_sortBy (P_event.target.value);
             //[ MDTP_sortBy exe1;]
        //[S07251668|sec011a_L099_ACTN_filters.jsx::EXE1: MP_sortByDate <1>^B]
        //[S07251668|sec011a_L099_ACTN_filters.jsx::EXE1: MP_sortByAmount <1>^B]
    };


       //  [S07251667|sec009a_SFC_expense_dashboard_page.jsx::CLS_expense_list_filters.render tpl1;^B]

       //  [S07251664|A01_DIrectory_01.txt::DRC1: CLS_expense_list_filters.render <1>^B]

       //[ DEF1: CLS_expense_list_filters.render <1>^B]
    render () {
      return (
        <div>
            <input  type="text"
                    id="TBX_filters"
                    value={this.props.filters.text}
                            //[ props.filters a1;^B]
                    onChange={this.TXBX_filters_change}
                               //[ TXBX_filters_change evt1;^B]
            />

{/*  //  SEC_011 --- 104. Dropdown for Picking SortBy 8:41  */}
            <select
              value={this.props.filters.sortBy}
                      //[ props.filters a2;^B]
              onChange={this.SLCT_sort_item_change}
                         //[ SLCT_sort_item_change evt1;^B]
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>

{/*  //  SEC_011 --- 110. Filtering by Dates 19:44  */}
{/*  */}



<DateRangePicker
  startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
              //[ props.filters a3;^B]
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
            //[ props.filters a4;^B]
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={ this.onExpenseDatesChange }
                   //[ onExpenseDatesChange evt1;^B]
  focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                       //[ calenderFocused a2;^B]
  onFocusChange={ this.onExpenseFocusChange } // PropTypes.func.isRequired,
                   //[ onExpenseFocusChange evt1;^B]
  showClearDates={true}
  readOnly={false}
  numberOfMonths={1}
  isOutsideRange={ () => false }

/>

        </div>
      );

    };
}


//  [S07251664|A01_DIrectory_01.txt::DRC1: ELF.GC_map_state_to_props <1>^B]

       //[ DEF1: GC_map_state_to_props <1>^B]
const GC_map_state_to_props = (P_state) => {
    return {
        filters: P_state.filters
        //[ props.filters i1;^B]
    };
};

//  SEC_012 --- 126. Testing ExpenseListFilters 14:50

//  [S07251664|A01_DIrectory_01.txt::DRC1: ELF.mapDispatchToProps <1>^B]

       //[ DEF1: mapDispatchToProps <1>^B]
const mapDispatchToProps = (dispatch, props) =>  {
  return (
  {
    MDTP_setTextFilter: (P_TBX_filter_text) =>
    //[ MDTP_setTextFilter exe1;^B]
       dispatch(MP_setTextFilter(P_TBX_filter_text)),
            //[ MP_setTextFilter import-01;^B]
    MDTP_sortBy: (P_sort_by_item) =>
    //[ MDTP_sortBy exe1;^B]
      dispatch ( 
        P_sort_by_item === 'date' ? MP_sortByDate ()
                                //[ MP_sortByDate import-01;]
          : P_sort_by_item === 'amount' ? MP_sortByAmount ()
                                      //[ MP_sortByAmount import-01;]
            : undefined
                          ),
    MDTP_setStartDate: (P_start_date) =>
    //[ MDTP_setStartDate exe1;^B]
      dispatch (MP_setStartDate(P_start_date) ),
            //[ MP_setStartDate import-01;]
    MDTP_setEndDate: (P_end_date) =>
    //[ MDTP_setEndDate exe1;^B]
      dispatch (MP_setEndDate(P_end_date) )
            //[ MP_setEndDate import-01;]
  }      );
};

//export default SFC_expense_list_filters;
//export default CLS_expense_list_filters;

export default connect(GC_map_state_to_props, mapDispatchToProps)
                        (CLS_expense_list_filters);
                     //[ CLS_expense_list_filters pp1;^B]
