

/*

sec011a_L105_expense_form.jsx


       //  [ CLS1: CLS_expense_form <1>]


K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec009a_components\sec011a_L105_expense_form.jsx

import CLS_expense_form from "./sec009a_components/sec011a_L105_expense_form.jsx";
import CLS_expense_form from "../../sec009a_components/sec011a_L105_expense_form.jsx";
//[S07251667|sec009a_CLS_add_expense_page.jsx::sec011a_L105_expense_form import-1;^B]
//[S07251667|sec009a_CLS_edit_expense_page.jsx::sec011a_L105_expense_form import-2;^B]


//  SEC_011 --- 105. Creating Expense Add/Edit Form 20:09

https://github.com/airbnb/react-dates

<SingleDatePicker
  date={this.state.date} // momentPropTypes.momentObj or null
  onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
  focused={this.state.focused} // PropTypes.bool
  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
  id="your_unique_id" // PropTypes.string.isRequired,


//  SEC_012 --- 122. Testing User Interaction 16:54
  ID's added for Jest tests.

 */

import React from "react";

//  SEC_011 --- 106. Setting up a Date Picker 21:34

import moment from 'moment';

import Loadable from 'react-loadable';

import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";
                       //[S07251674|Loadable_Handlers.jsx::Loadable_Handlers import-2;^B]

//const moment = Loadable({
//  loader: () => import('moment'),
//  loading: MP_common_loading_handler,
//  timeout: 3000, // 3 seconds
//});

import { SingleDatePicker } from 'react-dates';
//[S07251664|A01_DIrectory_01.txt::SingleDatePicker drc1;^B]

//const SingleDatePicker = Loadable({
//  loader: () => import('react-dates'),
//  loading: MP_common_loading_handler,
//  timeout: 3000, // 3 seconds
//});

//  SEC_012 --- 121. Mocking Libraries with Jest 11:51
//  MOVED to sec12a_app.jsx
//  import 'react-dates/lib/css/_datepicker.css';
//  import 'react-dates/initialize';

const now = moment();
// console.log (now);
// console.log (now.format());
// console.log (now.format("dddd, MMMM Do YYYY, h:mm:ss a"));
// console.log (now.format("MMM Do, YYYY"));


   //  [ END1: CLS_expense_form <1>]


//  [S07251667|sec009a_CLS_add_expense_page.jsx::TPL1: CLS_expense_form <1>^B]
//  [S07251667|sec009a_CLS_edit_expense_page.jsx::TPL2: CLS_expense_form <1>^B]

//  [S07251664|A01_DIrectory_01.txt::DRC1: CLS_expense_form <1>^B]

           //[ CLS1: CLS_expense_form <1>^B]
export default class CLS_expense_form extends React.Component
{
       //  [ CNS1: CLS_expense_form.constructor <1>]

       //  [ DEF1: onDescriptionChange <1>]
       //  [ DEF1: onNoteChange <1>]
       //  [ DEF1: onAmountChange <1>]
       //  [ DEF1: onDateChange <1>]
       //  [ DEF1: onFocusChange <1>]

       //  [ DEF1: XPNF_check_errors <1>]

       //  [ DEF1: onExpenseSubmit <1>]

       //  [ DEF1: CLS_expense_form.render <1>]

       /////////////////////////////////////////////////////////////////////
       /////////////////////////////////////////////////////////////////////

 
    //======================================================================
    //======================================================================

    //  [S07251669|sec011a_L099_RDCR_expenses.jsx::CLS_expense_form constructor ref1;^B]

    //[ CNS1: CLS_expense_form.constructor <1>^B]
    constructor (P_props)
    {
        super (P_props);

        //  values are passed in from the edit page.
        //  [S07251669|sec011a_L099_RDCR_expenses.jsx::EXPENSE OBJECT CREATION ref1;^B]
                    //[S07251664|A01_DIrectory_01.txt::EXPENSE OBJECT CREATION drc1a;^B]
                                                   //[ EXPENSE OBJECT CREATION xrf-drc1;]

        //  values sent to the REDUCER by the handler onExpenseSubmit :>
        //      [ this.state xrf1;]

        this.state = {
            description: P_props.expense ? P_props.expense.description : '',
            note:  P_props.expense ? P_props.expense.note : '',
            amount:  P_props.expense ? (P_props.expense.amount / 100).toString () : '',
            createdAt:  P_props.expense && P_props.expense.createdAt > 0 ? moment (P_props.expense.createdAt) : moment(),
            date: {},
            calenderFocused: false,
            //descriptionError: '',
            //amountError: '',
            buttonLabel: P_props.buttonLabel,
            error_conditions: {
        //[ error_conditions a1;]
        //[ error_conditions a2;]
                description_mssg: <div></div>,
                amount_mssg: <div></div>,
            }
        }
    };

    //======================================================================

    //  [ EVT1: onDescriptionChange <1>]

       //[ DEF1: onDescriptionChange <1>^B]
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState ( () => ({ description }) );
    };
    //======================================================================

    //  [ EVT1: onNoteChange <1>]

    //[ DEF1: onNoteChange <1>^B]
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState ( () => ({ note }) );
    };
    //======================================================================

    //  [ EVT1: onAmountChange <1>^B]

    //[ DEF1: onAmountChange <1>^B]
    onAmountChange = (e) => {
        const amount = e.target.value;
        if ( ! amount || amount.match(/^\d+(\.\d{0,2})?$/) )
          this.setState ( () => ({ amount }) );
    };
    //======================================================================

    //  [ EVT1: onDateChange <1>]

    //[ DEF1: onDateChange <1>^B]
    onDateChange = (createdAt) => {
        if (createdAt)
            this.setState( () => ({ createdAt }) );
    };
    //======================================================================

    //  [ EVT1: onFocusChange <1>]

    //[ DEF1: onFocusChange <1>^B]
    onFocusChange = ({ focused }) => {
        this.setState( () => ({ calenderFocused: focused }) );
    };
    //======================================================================
    //======================================================================

    //  [ END1: XPNF_check_errors <1>]

       //    [ EXE1: XPNF_check_errors <1>]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: XPNF_check_errors <1>^B]

    //[ DEF1: XPNF_check_errors <1>^B]
    XPNF_check_errors ()
    {
        const description_mssg = ( ! this.state.description ) ?
                <p className="expense-form__error">
                {/*  */}
                {/* [S07251678|_form.scss::expense-form__error css1a;^B] */}
                  {'   *** Please provide description'}
                </p>
                : <div></div>;
        const amount_mssg = ( ! this.state.amount ) ?
                <o className="expense-form__error">
                {/* [S07251678|_form.scss::expense-form__error css1b;^B] */}
                  {'   *** Please provide amount'}
                </o>
                : <div></div>;
    
        this.setState ( (prevState) =>
            ( {
                ...prevState,
                error_conditions:
            //[ error_conditions a1;^B]
                {
                    description_mssg,
                    amount_mssg
                }
            } )
        );
    
        //console.log ("P_outer_this.amount " + this.state.amount);
    
        return ( this.state.description && this.state.amount );
    }
    //  [ END1: XPNF_check_errors <1>^B]
    //======================================================================
    //======================================================================

    //  [ END1: onExpenseSubmit <1>]

    //  <form action="" onSubmit={this.onExpenseSubmit}>
    //  [ EVT1: onExpenseSubmit <1>]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: ADD_EDIT_XPF.onExpenseSubmit <1>^B]

    //[ DEF1: onExpenseSubmit <1>^B]
    onExpenseSubmit = (e) =>  {

        e.preventDefault ();

/****************************************

        const L_descErrorMssg = 
                 this.state.description ? '' : 'Please provide description';
        const L_amtErrorMssg = 
                 this.state.amount ? '' : 'Please provide amount';

        this.setState ( () => ( {
                descriptionError : L_descErrorMssg,
                amountError : L_amtErrorMssg
            } ) );

 ****************************************/


        //  [S07251669|sec011a_L099_RDCR_expenses.jsx::EXPENSE OBJECT CREATION ref2;^B]
                  //  [S07251664|A01_DIrectory_01.txt::EXPENSE OBJECT CREATION drc1b;^B]
                                                   //[ EXPENSE OBJECT CREATION xrf-drc1;^B]


        //if ( ! L_descErrorMssg && ! L_amtErrorMssg )
        //if ( GC_errors.is_error () )

        if ( this.XPNF_check_errors () )
        //[ EXE1: XPNF_check_errors <1>^B]
            this.props.onExpenseSubmit ( {
    //[S07251667|sec009a_CLS_add_expense_page.jsx::EXE1: ADD_XPP.onExpenseSubmit <1>]
        //[S07251668|sec011a_L099_ACTN_expenses.jsx::REF1: MP_startAddExpense <1>^B]
        //[S07251669|sec011a_L099_RDCR_expenses.jsx::this.state expense add ref1;^B]
    //[S07251667|sec009a_CLS_edit_expense_page.jsx::EXE1: EDIT_XPP.onExpenseSubmit <1>]
        //[S07251668|sec011a_L099_ACTN_expenses.jsx::REF1: MP_startEditExpense <1>^B]
        //[S07251669|sec011a_L099_RDCR_expenses.jsx::this.state expense update ref1;^B]
                         //[ this.state xrf1;^B]
                description: this.state.description,
                amount: parseFloat (this.state.amount, 10) * 100,
    //  http://momentjs.com/docs/#/displaying/unix-timestamp-milliseconds/
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            } );

    };
    //  [ END1: onExpenseSubmit <1>^B]
    //======================================================================
    //======================================================================

   //  [ END1: CLS_expense_form.render <1>]

//  SEC_011 --- 106. Setting up a Date Picker 21:34

       //  [S07251664|A01_DIrectory_01.txt::DRC1: CLS_expense_form.render <1>^B]

    //this.state.error_conditions
    //this.state.error_conditions.description_mssg
    //this.state.error_conditions.amount_mssg
                //description_mssg: '',
                //amount_mssg: '',



       //[ DEF1: CLS_expense_form.render <1>^B]
    render () {
        return (
          <form action=""
            className="expense-form"
            //[S07251678|_form.scss::expense-form css1;^B]
            onSubmit={this.onExpenseSubmit}>
          {/*//[ expense form :end1;]*/}
          {/*//[ expense form action :submit1;]*/}
                            {/*//[ EVT1: onExpenseSubmit <1>^B]*/}

            {/*
            {
               this.state.descriptionError &&
                 <span>{this.state.descriptionError}</span>
            }
            {
               this.state.amountError &&
                 <span>{this.state.amountError}</span>
            }
            */}
            {  this.state.error_conditions.description_mssg }
            {  this.state.error_conditions.amount_mssg }
            {/*//       [ error_conditions a2;^B]*/}

            {/* <div>Expense Form</div> */}
              <div>Expense Form</div>

              <input
                id="Description"
                type="text"
                placeholder="Description"
                autoFocus
                //  SEC_017 --- 175. Styling Inputs 11:30
                className="text-input"
                //[S07251678|_inputs.scss::.text-input css2a;^B]
                value={this.state.description}
                onChange={this.onDescriptionChange}
              />
                  {/*//[ EVT1: onDescriptionChange <1>^B]*/}

              <input
                id="Amount"
                type="text"
                placeholder="Amount"
                //  SEC_017 --- 175. Styling Inputs 11:30
                className="text-input"
                //[S07251678|_inputs.scss::.text-input css2b;^B]
                value={this.state.amount}
                onChange={this.onAmountChange}
              />
                  {/*//[ EVT1: onAmountChange <1>^B]*/}

      {/* [S07251664|A01_DIrectory_01.txt::CLS_expense_form <SingleDatePicker> drc1;^B] */}
              <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                id="createdAt_DatePicker"
                readOnly={true}
                numberOfMonths={1}
                isOutsideRange={ () => false }
              />
              {/*//[ EVT1: onDateChange <1>^B]*/}
              {/*//[ EVT1: onFocusChange <1>^B]*/}

              <textarea placeholder="Add a note for your expense (optional)"
                id="Note"
                //  SEC_017 --- 175. Styling Inputs 11:30
                className="textarea"
                //[S07251678|_inputs.scss::.textarea css1;^B]
                value={this.state.note}
                onChange={this.onNoteChange}
                     //[ EVT1: onNoteChange <1>^B]
              >
              </textarea>
              <div>
                <button className="login-button">
              {/* [ expense form action :submit1;^B] */}
              {/* [S07251678|_buttons.scss::.login-button css4;^B] */}
                  {this.state.buttonLabel}
                </button>
              </div>
          {/*//[ expense form :end1;^B]*/}
          </form>
        );
    };
   //  [ END1: CLS_expense_form.render <1>^B]

}
   //  [ END1: CLS_expense_form <1>^B]
