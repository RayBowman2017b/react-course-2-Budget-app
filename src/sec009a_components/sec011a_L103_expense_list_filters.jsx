
/*

  sec011a_L103_expense_list_filters.jsx

       //  [ CLS1: CLS_expense_list_filters <1>]


       //  [ DEF1: GF_map_state_to_props <1>]
       //  [ DEF1: GF_map_dispatch_to_props <1>]

    props.filters
        GF_map_state_to_props :>
            //[ filters: P_state.filters ref1;]
            //[ this.props.filters a1;]
            //[ this.props.filters a2;]
            //[ this.props.filters a3;]
            //[ this.props.filters a4;]
            //[ this.props.filters xxx]
            //[ props.filters a;]

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec009a_components\sec011a_L103_expense_list_filters.jsx


//  SEC_011 --- 103. Controlled Inputs for Filters 14:21

import { CLS_expense_list_filters } from "../../sec009a_components/sec011a_L103_expense_list_filters.jsx";
import CLS_expense_list_filters from "./sec009a_components/sec011a_L103_expense_list_filters.jsx";
//[S07251667|sec009a_SFC_expense_dashboard_page.jsx::sec011a_L103_expense_list_filters import-2;^B]

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_009_React_Router\proj_02\Budget-app\src\styles\components_SEC009\sec009a_SFC_expense_dashboard_page.jsx

//    remove_expense: (expense_id_obj) => dispatch(MP_startRemoveExpense(expense_id_obj))

 */

import React from 'react';

import { connect } from 'react-redux';

import { DateRangePicker } from 'react-dates';
//[S07251664|A01_DIrectory_01.txt::DateRangePicker drc1;^B]

//import Loadable from 'react-loadable';

//import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";
//[S07251674|Loadable_Handlers.jsx::Loadable_Handlers import-3x;^B]

//const DateRangePicker = Loadable({
//  loader: () => import('react-dates'),
//  loading: MP_common_loading_handler,
//  timeout: 3000, // 3 seconds
//});



//  SEC_011 --- 104. Dropdown for Picking SortBy 8:41
//  import { MP_setTextFilter  } from "../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";
//  SEC_011 --- 110. Filtering by Dates 19:44
//  import { MP_setTextFilter, MP_sortByDate, MP_sortByAmount  } from "../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";
import { MP_setTextFilter, MP_sortByDate, MP_sortByAmount, MP_setStartDate, MP_setEndDate  }
     //[ MP_setTextFilter import-01;]
                       //[ MP_sortByDate import-01;]
                       //[ MP_sortByDate import-02;]
                                      //[ MP_sortByAmount import-01;]
                                      //[ MP_sortByAmount import-02;]
                                                       //[ MP_setStartDate import-01;]
                                                                        //[ MP_setEndDate import-01;]
   from "../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";
                    //[S07251668|sec011a_L099_ACTN_filters.jsx::sec011a_L099_ACTN_filters import-2;^B]


//##########################################################################
//##########################################################################

   //  [ END1: CLS_expense_list_filters <1>]

//  SEC_011 --- 110. Filtering by Dates 19:44
//const SFC_expense_list_filters = (P_props) => (

       //  [S07251667|sec009a_SFC_expense_dashboard_page.jsx::TPL1: CLS_expense_list_filters <1>]

       //  [S07251664|A01_DIrectory_01.txt::DRC1: CLS_expense_list_filters <1>^B]

       //  connect(GF_map_state_to_props, GF_map_dispatch_to_props)
       //  [ CLS_expense_list_filters pp1;]

       //  [ CLS_expense_list_filters xxx]

   //[ CLS1: CLS_expense_list_filters <1>^B]
export class CLS_expense_list_filters extends React.Component
{
       //  [ CNS1: CLS_expense_list_filters.constructor <1>]

       //  [ DEF1: onExpenseDatesChange <1>]
       //  [ DEF1: onExpenseFocusChange <1>]
       //  [ DEF1: TXBX_filters_change <1>]
       //  [ DEF1: SLCT_sort_item_change <1>]

       //  [ DEF1: CLS_expense_list_filters.render <1>]

       /////////////////////////////////////////////////////////////////////
       /////////////////////////////////////////////////////////////////////

    state = {
      calendarFocused: null
  //[ calendarFocused s1;]
  //[ calendarFocused a2;]
  //[ calendarFocused xxx]
    };
    //======================================================================

    //[ CNS1: CLS_expense_list_filters.constructor <1>^B]
    constructor(P_props)
    {
        super (P_props);
    }
    //======================================================================

//  SEC_011 --- 110. Filtering by Dates 19:44

    //  [ EVT1: onExpenseDatesChange <1>]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: onExpenseDatesChange <1>^B]

    //[ DEF1: onExpenseDatesChange <1>^B]
    onExpenseDatesChange = ( { startDate, endDate } ) => {
      // this.props.dispatch (MP_setStartDate(startDate) );
      this.props.MDTP_setStartDate(startDate);
  //[ this.props.MDTP_setStartDate exe1;]
      //[S07251668|sec011a_L099_ACTN_filters.jsx::EXE1: MP_setStartDate <1>^B]

      // this.props.dispatch (MP_setEndDate(endDate) );
      this.props.MDTP_setEndDate (endDate);
  //[ this.props.MDTP_setEndDate exe1;]
      //[S07251668|sec011a_L099_ACTN_filters.jsx::EXE1: MP_setEndDate <1>^B]
    };
    //======================================================================

    //  [ EVT1: onExpenseFocusChange <1>]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: onExpenseFocusChange <1>^B]

    //[ DEF1: onExpenseFocusChange <1>^B]
    onExpenseFocusChange = (calendarFocused) => {
      // console.log ("calendarFocused", calendarFocused);
      // console.log ("typeof calendarFocused", typeof calendarFocused);
      this.setState ( () => ( { calendarFocused } ) );
                            //[ calendarFocused s1;^B]
    };
    //======================================================================

    //  [ EVT1: TXBX_filters_change <1>]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: TXBX_filters_change <1>^B]


    //[ DEF1: TXBX_filters_change <1>^B]
    TXBX_filters_change = (P_event) =>  {
      //this.props.dispatch ( MP_setTextFilter (P_event.target.value) );
      this.props.MDTP_setTextFilter (P_event.target.value);
  //[ this.props.MDTP_setTextFilter exe1;]
        //[S07251668|sec011a_L099_ACTN_filters.jsx::EXE1: MP_setTextFilter <1>^B]
    };
    //======================================================================

    //  Only "date" and "amount" are allowed values.
 
    //  [ EVT1: SLCT_sort_item_change <1>]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: SLCT_sort_item_change <1>^B]

    //[ DEF1: SLCT_sort_item_change <1>^B]
    SLCT_sort_item_change = (P_event) =>  {

      //this.props.MDTP_sortBy (P_event.target.value);
               //[ MDTP_sortBy exe1;]

      if (P_event.target.value === 'date')
        this.props.MDTP_sortByDate ();
    //[ this.props.MDTP_sortByDate exe1;]
        //[S07251668|sec011a_L099_ACTN_filters.jsx::EXE1: MP_sortByDate <1>^B]
      else
      if (P_event.target.value === 'amount')
        this.props.MDTP_sortByAmount ();
    //[ this.props.MDTP_sortByAmount exe1;]
        //[S07251668|sec011a_L099_ACTN_filters.jsx::EXE1: MP_sortByAmount <1>^B]
    };
    //======================================================================

    //  [ END1: CLS_expense_list_filters.render <1>]

       //  [S07251667|sec009a_SFC_expense_dashboard_page.jsx::CLS_expense_list_filters.render tpl1;^B]

       //  [S07251664|A01_DIrectory_01.txt::DRC1: CLS_expense_list_filters.render <1>^B]


//  SEC_017 --- 174. Styling List Filters 10:05
//  className="xxx" added.


       //[ DEF1: CLS_expense_list_filters.render <1>^B]
    render () {

      return (

        <div id="DIV_main" className="content-container">
   {/* //[S07251678|_content-container.scss::.content-container css1;^B] */}
   {/*[ <div id="DIV_main"> end1;]*/}
   {/*  */}
   {/* <div className="filter-input-group"> */}
          <div className="filter-input-group">
   {/* //[S07251678|_input-group.scss::.filter-input-group css1;^B] */}
            <div className="filter-input-group__item">
   {/* //[S07251678|_input-group.scss::.filter-input-group__item css1a;^B] */}
   {/* //  SEC_017 --- 175. Styling Inputs 11:30 */}
              <input  type="text"
                      id="TBX_filters"
                      className="text-input"
                      placeholder="Search Expenses"
                      value={this.props.filters.text}
                         //[ this.props.filters a1;^B]
                      onChange={this.TXBX_filters_change}
                           //[ EVT1: TXBX_filters_change <1>^B]
              />
              {/*  [S07251678|_inputs.scss::.text-input css1;^B] */}
            </div>

            <div className="filter-input-group__item">
       {/* //[S07251678|_input-group.scss::.filter-input-group__item css1b;^B] */}
  {/*  //  SEC_011 --- 104. Dropdown for Picking SortBy 8:41  */}
   {/* //  SEC_017 --- 175. Styling Inputs 11:30 */}
              <select id="SELECT_date_amount"
                className="select"
              //[S07251678|_inputs.scss::.select css1;^B]
                value={this.props.filters.sortBy}
                   //[ this.props.filters a2;^B]
                onChange={this.SLCT_sort_item_change}
                     //[ EVT1: SLCT_sort_item_change <1>^B]
              >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
              </select>
              
            </div>

            <div className="filter-input-group__item">
            {/* //[S07251678|_input-group.scss::.filter-input-group__item css1c;^B] */}

{/*  //  SEC_011 --- 110. Filtering by Dates 19:44  */}
{/*  */}


{/* [S07251664|A01_DIrectory_01.txt::CLS_expense_list_filters <DateRangePicker> drc1;^B] */}

<DateRangePicker
  startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
         //[ this.props.filters a3;^B]
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
       //[ this.props.filters a4;^B]
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={ this.onExpenseDatesChange }
             //[ EVT1: onExpenseDatesChange <1>^B]
  focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                       //[ calendarFocused a2;^B]
  onFocusChange={ this.onExpenseFocusChange } // PropTypes.func.isRequired,
             //[ EVT1: onExpenseFocusChange <1>^B]
  showClearDates={true}
  readOnly={false}
  numberOfMonths={1}
  isOutsideRange={ () => false }
/>

            </div>
          </div>
   {/*[ <div id="DIV_main"> end1;^B]*/}
        </div>
      );

    };
    //  [ END1: CLS_expense_list_filters.render <1>^B]
    //======================================================================
    //======================================================================
}
   //  [ END1: CLS_expense_list_filters <1>^B]
//##########################################################################
//##########################################################################


//  [S07251664|A01_DIrectory_01.txt::DRC1: XPNLISTFLTR.GF_map_state_to_props <1>^B]

       //[ DEF1: GF_map_state_to_props <1>^B]
const GF_map_state_to_props = (P_state) => {
    return {
        filters: P_state.filters
    //[ filters: P_state.filters ref1;^B]
    };
};

//  SEC_012 --- 126. Testing ExpenseListFilters 14:50

//  [S07251669|sec011a_L099_RDCR_filters.jsx:: Set Filter Elements ref1;^B]
//            [S07251664|A01_DIrectory_01.txt::Set Filter Elements drc1;^B]

//  [S07251664|A01_DIrectory_01.txt::DRC1: XPNLISTFLTR.GF_map_dispatch_to_props <1>^B]

       //[ DEF1: GF_map_dispatch_to_props <1>^B]
const GF_map_dispatch_to_props = (P_dispatch, P_props) =>  {
  return (
  {
    MDTP_setTextFilter: (P_TBX_filter_text) =>
    //[ this.props.MDTP_setTextFilter exe1;^B]
       P_dispatch(MP_setTextFilter(P_TBX_filter_text)),
            //[ MP_setTextFilter import-01;^B]
    MDTP_sortBy: (P_sort_by_item) =>
    //[ MDTP_sortBy exe1;^B]
      P_dispatch ( 
        P_sort_by_item === 'date' ? MP_sortByDate ()
                                //[ MP_sortByDate import-01;]
          : P_sort_by_item === 'amount' ? MP_sortByAmount ()
                                      //[ MP_sortByAmount import-01;]
            : undefined
               ),
    MDTP_sortByDate: () => P_dispatch(MP_sortByDate ()),
    //[ this.props.MDTP_sortByDate exe1;^B]
                                  //[ MP_sortByDate import-02;]
    MDTP_sortByAmount: () => P_dispatch(MP_sortByAmount ()),
    //[ this.props.MDTP_sortByAmount exe1;^B]
                                    //[ MP_sortByAmount import-02;]
    MDTP_setStartDate: (P_start_date) =>
    //[ this.props.MDTP_setStartDate exe1;^B]
      P_dispatch (MP_setStartDate(P_start_date) ),
              //[ MP_setStartDate import-01;]
    MDTP_setEndDate: (P_end_date) =>
    //[ this.props.MDTP_setEndDate exe1;^B]
      P_dispatch (MP_setEndDate(P_end_date) )
              //[ MP_setEndDate import-01;]
  }      );
};

//export default SFC_expense_list_filters;
//export default CLS_expense_list_filters;

export default connect(GF_map_state_to_props, GF_map_dispatch_to_props)
                        (CLS_expense_list_filters);
                     //[ CLS_expense_list_filters pp1;^B]
