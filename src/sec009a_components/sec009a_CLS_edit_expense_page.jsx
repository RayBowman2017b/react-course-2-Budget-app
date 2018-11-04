
/*

  sec009a_CLS_edit_expense_page.jsx


       //  [ CLS1: CLS_edit_expense_page <1>]


K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec009a_components\
sec009a_CLS_edit_expense_page.jsx


K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_009_React_Router\proj_02\Budget-app\src\styles\components_SEC009\
sec009a_CLS_edit_expense_page.jsx


//  SEC_009 --- 80. Organizing Our Routes 12:30

//  SEC_009 --- 81. Query Strings and URL Parameters 9:10

//  SEC_012 --- 125. Testing EditExpensePage 19:00

import { CLS_edit_expense_page } from '../../sec009a_components/sec009a_CLS_edit_expense_page.jsx';

 */

import React from 'react';

//  SEC_011 --- 108. Wiring up Edit Expense 19:06
import { connect } from 'react-redux';
import CLS_expense_form from "./sec011a_L105_expense_form.jsx";
//[S07251667|sec011a_L105_expense_form.jsx::sec011a_L105_expense_form import-2;^B]


//  SEC_012 --- 125. Testing EditExpensePage 19:00
//import { MP_startEditExpense } from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
import { MP_startEditExpense, MP_startRemoveExpense }
//[S07251668|sec011a_L099_ACTN_expenses.jsx::MP_startEditExpense import-1;]
     //[ MP_startEditExpense pp1;]
                     //[S07251668|sec011a_L099_ACTN_expenses.jsx::MP_startRemoveExpense import-1;]
                          //[ MP_startRemoveExpense pp1;]
  from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
       //[S07251668|sec011a_L099_ACTN_expenses.jsx::sec011a_L099_ACTN_expenses import-2;^B]

const xxxGC_edit_expense_page = (P_props) =>
(
  <span>This is from my edit expense component.</span>
);



//  [ END1: CLS_edit_expense_page <1>]

//  SEC_012 --- 125. Testing EditExpensePage 19:00

//  [S07251666|sec009a_app_router.jsx::CLS_edit_expense_page rtr1;^B]

//  [S07251667|sec011a_L102_expense_list_item.jsx::CLS_edit_expense_page evt1;]

//  [S07251664|A01_DIrectory_01.txt::DRC1: CLS_edit_expense_page <1>]

//  [ CLS_edit_expense_page oo1;]

            //[ CLS_edit_expense_page xxx]

   //[ CLS1: CLS_edit_expense_page <1>^B]
export class CLS_edit_expense_page extends React.Component
{

       //  [ DEF1: EDIT_XPP.onExpenseSubmit <1>]
       //  [ DEF1: EDIT_XPP.onClickRemoveExpense <1>]

       //  [ DEF1: CLS_edit_expense_page.render <1>]

       //  [ DEF1: EDIT_XPP.GF_map_state_to_props <1>]
       //  [ DEF1: EDIT_XPP.GF_map_dispatch_to_props <1>]

       /////////////////////////////////////////////////////////////////////
       /////////////////////////////////////////////////////////////////////

  //========================================================================

    constructor(P_props)
    {
        super (P_props);
    }
  //========================================================================


    log_props = (P_expense) =>  {
            console.log ('updated', P_expense);
            if (this.props.expense)
              console.log ('this.props.expense', this.props.expense);
            else
              console.log ('this.props.expense  xxxxxxx' );
            console.log('this.props', this.props);
            console.log('this.props.state_expenses', this.props.state_expenses);
            console.log ('updated', P_expense);
    }

        //  [ ASN1: onExpenseSubmit <1>]

        //  [S07251667|sec011a_L105_expense_form.jsx::EXE1: EDIT_XPP.onExpenseSubmit <1>^B]

        //  [S07251664|A01_DIrectory_01.txt::DRC1: EDIT_XPP.onExpenseSubmit <1>^B]

    //[ DEF1: EDIT_XPP.onExpenseSubmit <1>^B]
    onExpenseSubmit = (P_expense) =>  {

        //this.log_props(P_expense);

        this.props.start_edit_expense (this.props.expense.id, P_expense);
    //[ this.props.start_edit_expense ref1;]
    //[S07251668|sec011a_L099_ACTN_expenses.jsx::EXE1: MP_startEditExpense <1>^B]

        this.props.history.push ('/');
    };
  //========================================================================

    //  [ ASN1: EDIT_XPP.onClickRemoveExpense <1>]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: EDIT_XPP.onClickRemoveExpense <1>^B]

    //[ DEF1: EDIT_XPP.onClickRemoveExpense <1>^B]
    onClickRemoveExpense = (e) =>  {

        //this.props.dispatch ( MP_startRemoveExpense({ id: this.props.expense.id }) );

        this.props.start_remove_expense ({ id: this.props.expense.id });
    //[ this.props.start_remove_expense ref1;]
    //[S07251668|sec011a_L099_ACTN_expenses.jsx::EXE1: MP_startRemoveExpense <1>^B]

        this.props.history.push ('/');
    };
  //========================================================================
  //========================================================================

    //  [S07251664|A01_DIrectory_01.txt::DRC1: CLS_edit_expense_page.render <1>^B]

    //[ DEF1: CLS_edit_expense_page.render <1>^B]
    render ()
    {
        //const L_descrptn = this.props.match.params.description;
        const L_expense_id
                = <h1 className="primary-page-header__title">
          {/* [S07251678|_page-header.scss::.primary-page-header__title css3a;^B] */}
                    Editing the expense with an id of {this.props.expense_id}.
                  </h1>;
        const L_descrptn = this.props.expense_description;
        const L_get_descrptn
                = L_descrptn
                     &&  <h1 className="primary-page-header__title">
          {/* [S07251678|_page-header.scss::.primary-page-header__title css3b;^B] */}
                           Editing the expense with a description of {L_descrptn}.</h1>;

//    <div>Editing the expense with an id of {this.props.match.params.id}.</div>
//    <div>Editing the expense with an id of {this.props.expense.id}.</div>
    return (
  <div>
      {/*  //  SEC_017 --- 176. Styling Expense Form 13:19 */}
      <div className="primary-page-header">
      {/* [S07251678|_page-header.scss::.primary-page-header css3;^B] */}
        <div className="content-container">
        {/* [S07251678|_content-container.scss::.content-container css4a;^B] */}
            {L_expense_id}
            {L_get_descrptn}
        </div>
      </div>
      <div className="content-container">
      {/* [S07251678|_content-container.scss::.content-container css4b;^B] */}
        <CLS_expense_form
        //[S07251667|sec011a_L105_expense_form.jsx::TPL2: CLS_expense_form <1>^B]
            expense={this.props.expense}
                 //[ this.props.expense pp1;]
            onExpenseSubmit={this.onExpenseSubmit}
                        //[ ASN1: onExpenseSubmit <1>^B]
            buttonLabel={'EDIT EXPENSE'}
        />
  {/*  //  SEC_011 --- 108. Wiring up Edit Expense 19:06 
        MOVED to here from  sec011a_L102_expense_list_item.jsx */}
        <button
          id='BTN_remove_expense'
//  SEC_017 --- 176. Styling Expense Form 13:19
          className="remove-button"
          //[S07251678|_buttons.scss::.remove-button css1;^B]
          onClick={this.onClickRemoveExpense}
     //[ ASN1: EDIT_XPP.onClickRemoveExpense <1>^B]
        >REMOVE EXPENSE</button>

      </div>
                {/*  */}
  </div>
           );
    }


  //========================================================================
  //========================================================================

    xxxxxxxxxxrender ()
    {
        //const L_descrptn = this.props.match.params.description;
        const L_descrptn = this.props.expense_description;
        const LF_get_descrptn = () =>
            L_descrptn
             &&  <h1 className="primary-page-header__title">
                   Editing the expense with a description of {L_descrptn}.</h1>;

//    <div>Editing the expense with an id of {this.props.match.params.id}.</div>
//    <div>Editing the expense with an id of {this.props.expense.id}.</div>
    return (


  <span>
    <br/>
                {/*
    //<div>Editing the expense with an id of {this.props.match.params.id}.</div>
                  */}
    <div>Editing the expense with an id of {this.props.expense_id}.</div>
    {L_descrptn && <div>Editing the expense with a description of {L_descrptn}.</div>}
    <br/>
    <CLS_expense_form
        expense={this.props.expense}
        onExpenseSubmit={this.onExpenseSubmit}
        buttonLabel={'EDIT EXPENSE'}
    />
    {/*  */}

  {/*  //  SEC_011 --- 108. Wiring up Edit Expense 19:06 
        MOVED to here from  sec011a_L102_expense_list_item.jsx */}
      <button id='BTN_remove_expense' onClick={this.onClickRemoveExpense}
      >REMOVE</button>

  </span>
           );
    }
  //========================================================================
  //========================================================================

}
   //  [ END1: CLS_edit_expense_page <1>^B]
//##########################################################################
//##########################################################################


/************************************************************
const GC_edit_expense_page = (P_props) =>
{
    // console.log (P_props);

    return (
  <div>
    <div>Editing the expense with an id of {P_props.match.params.id}.</div>
    <CLS_expense_form
        expense={P_props.expense}
        onExpenseSubmit={ (P_expense) => {
            console.log ('updated', P_expense);
            P_props.dispatch ( MP_startEditExpense(P_props.expense.id, P_expense) );
            P_props.history.push ('/');
        } }
    />

  {/*  //  SEC_011 --- 108. Wiring up Edit Expense 19:06 
        MOVED to here from  sec011a_L102_expense_list_item.jsx * }
      <button onClick={ (e) => {
              P_props.dispatch ( MP_startRemoveExpense({ id: P_props.expense.id }) );
              P_props.history.push ('/');
                      }        }
      >REMOVE</button>
  </div>
           );
}
 ************************************************************/

const match_props = (P_expense, P_props) =>  {
  console.log('P_props.match.params', P_props.match.params);
  console.log('P_expense', P_expense);
  return P_expense.id === P_props.match.params.id;
}

//  [S07251664|A01_DIrectory_01.txt::DRC1: EDIT_XPP.GF_map_state_to_props <1>^B]

//[ DEF1: EDIT_XPP.GF_map_state_to_props <1>^B]
const GF_map_state_to_props = (state, props) =>  {

      let L_id, L_description;
      const L_found_expense = state.expenses.find (
//  SEC_009 --- 81. Query Strings and URL Parameters 9:10
//  props.match.params.id is provided within the URL
            (P_expense) => P_expense.id === props.match.params.id
      //[S07251667|sec011a_L102_expense_list_item.jsx::route={"/edit/" + id} ref1;^B]
      //[S07251666|sec009a_app_router.jsx::P_expense.id === props.match.params.id ref1;^B]
        //[S07251664|A01_DIrectory_01.txt::P_expense.id === props.match.params.id drc1;^B]
            );

    //this.props.match.params.id

      const LF_set_with_found_expense = () => {
              L_id = L_found_expense.id;
              L_description = L_found_expense.description;
            };

      if ( ! props.match )  LF_set_with_found_expense ();
      else if ( ! props.match.params )  LF_set_with_found_expense ();
      else if ( ! props.match.params.id )  LF_set_with_found_expense ();
      else  {
          L_id = props.match.params.id;

          if ( ! props.match.params.description )
                L_description = L_found_expense.description;
          else  L_description = props.match.params.description;
      }

      return (
      {
          expense_id: L_id,
          expense_description: L_description,
          expense: L_found_expense
          //[ this.props.expense pp1;^B]
      }      );
    };

//  SEC_011 --- 108. Wiring up Edit Expense 19:06
//export default GC_edit_expense_page;
//  SEC_012 --- 125. Testing EditExpensePage 19:00

   //  [S07251664|A01_DIrectory_01.txt::DRC1: EDIT_XPP.GF_map_dispatch_to_props <1>]

//[ DEF1: EDIT_XPP.GF_map_dispatch_to_props <1>^B]
const GF_map_dispatch_to_props = (P_dispatch) =>  {
  return (
  {
    start_edit_expense: (id, expense) => P_dispatch(MP_startEditExpense(id, expense)),
    //[ this.props.start_edit_expense ref1;^B]
                                          //[ MP_startEditExpense pp1;^B]
    start_remove_expense: (expense_id_obj) =>
    //[ this.props.start_remove_expense ref1;^B]
        P_dispatch(MP_startRemoveExpense(expense_id_obj))
               //[ MP_startRemoveExpense pp1;^B]
  }      );
};
//export default connect() (GC_add_expense_page);
export default connect(GF_map_state_to_props, GF_map_dispatch_to_props)
                 (CLS_edit_expense_page);
              //[ CLS_edit_expense_page oo1;^B]
