
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

//  SEC_012 --- 125. Testing EditExpensePage 19:00

import { CLS_edit_expense_page } from '../../sec009a_components/sec009a_CLS_edit_expense_page.jsx';

 */

import React from 'react';

//  SEC_011 --- 108. Wiring up Edit Expense 19:06
import { connect } from 'react-redux';
import CLS_expense_form from "./sec011a_L105_expense_form.jsx";

//  SEC_012 --- 125. Testing EditExpensePage 19:00
//import { MP_editExpense } from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
import { MP_editExpense, MP_removeExpense } from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";

const xxxGC_edit_expense_page = (P_props) =>
(
  <div>This is from my edit expense component.</div>
);

//  SEC_012 --- 125. Testing EditExpensePage 19:00

//  [S07251666|sec009a_app_router.jsx::CLS_edit_expense_page rtr1;^B]

//  [S07251664|A01_DIrectory_01.txt::DRC1: CLS_edit_expense_page <1>]

//  [ CLS_edit_expense_page oo1;]

            //[ CLS_edit_expense_page xxx]

   //[ CLS1: CLS_edit_expense_page <1>^B]
export class CLS_edit_expense_page extends React.Component
{

       //  [ DEF1: EDIT_XPP.onExpenseSubmit <1>]
       //  [ DEF1: EDIT_XPP.onClickRemoveExpense <1>]

       //  [ DEF1: CLS_edit_expense_page.render <1>]

       //  [ DEF1: EDIT_XPP.mapStateToProps <1>]
       //  [ DEF1: EDIT_XPP.mapDispatchToProps <1>]

       /////////////////////////////////////////////////////////////////////
       /////////////////////////////////////////////////////////////////////

    constructor(P_props)
    {
        super (P_props);
    }


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

        this.props.edit_expense (this.props.expense.id, P_expense);
    //[S07251668|sec011a_L099_ACTN_expenses.jsx::EXE1: MP_editExpense <1>^B]
        //[ this.props.edit_expense ref1;]

        this.props.history.push ('/');
    };

    //[ ASN1: EDIT_XPP.onClickRemoveExpense <1>]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: EDIT_XPP.onClickRemoveExpense <1>^B]

    //[ DEF1: EDIT_XPP.onClickRemoveExpense <1>^B]
    onClickRemoveExpense = (e) =>  {

        //this.props.dispatch ( MP_removeExpense({ id: this.props.expense.id }) );

        this.props.remove_expense ({ id: this.props.expense.id });
    //[S07251668|sec011a_L099_ACTN_expenses.jsx::EXE1: MP_removeExpense <1>^B]
        //[ this.props.remove_expense ref1;]

        this.props.history.push ('/');
    };


    //  [S07251664|A01_DIrectory_01.txt::DRC1: CLS_edit_expense_page.render <1>^B]

    //[ DEF1: CLS_edit_expense_page.render <1>^B]
    render ()
    {
//    <div>Editing the expense with an id of {this.props.match.params.id}.</div>
//    <div>Editing the expense with an id of {this.props.expense.id}.</div>
    return (
  <div>
    <br/>
    <div>Editing the expense with an id of {this.props.match.params.id}.</div>
    <br/>
      {/* [S07251667|sec011a_L105_expense_form.jsx::TPL2: CLS_expense_form <1>^B] */}
    <CLS_expense_form
        expense={this.props.expense}
        onExpenseSubmit={this.onExpenseSubmit}
        buttonLabel={'EDIT EXPENSE'}
    />
                {/*
                //[ this.props.expense pp1;]
                //[ ASN1: onExpenseSubmit <1>^B]
                  */}

  {/*  //  SEC_011 --- 108. Wiring up Edit Expense 19:06 
        MOVED to here from  sec011a_L102_expense_list_item.jsx */}
      <button id='BTN_remove_expense' onClick={this.onClickRemoveExpense}
      >REMOVE</button>
                             {/* //[ ASN1: EDIT_XPP.onClickRemoveExpense <1>^B] */}

  </div>
           );
    }
}

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
            P_props.dispatch ( MP_editExpense(P_props.expense.id, P_expense) );
            P_props.history.push ('/');
        } }
    />

  {/*  //  SEC_011 --- 108. Wiring up Edit Expense 19:06 
        MOVED to here from  sec011a_L102_expense_list_item.jsx * }
      <button onClick={ (e) => {
              P_props.dispatch ( MP_removeExpense({ id: P_props.expense.id }) );
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

//  [S07251664|A01_DIrectory_01.txt::DRC1: EDIT_XPP.mapStateToProps <1>^B]

//[ DEF1: EDIT_XPP.mapStateToProps <1>^B]
const mapStateToProps = (state, props) =>  {
      return (
      {
          expense: state.expenses.find (
          //[ this.props.expense pp1;^B]
            (P_expense) => P_expense.id === props.match.params.id
      //[S07251667|sec011a_L102_expense_list_item.jsx::route={"/edit/" + id} ref1;^B]
      //[S07251666|sec009a_app_router.jsx::P_expense.id === props.match.params.id ref1;^B]
        //[S07251664|A01_DIrectory_01.txt::P_expense.id === props.match.params.id drc1;^B]
                   )
      }      );
    };

//  SEC_011 --- 108. Wiring up Edit Expense 19:06
//export default GC_edit_expense_page;
//  SEC_012 --- 125. Testing EditExpensePage 19:00

   //  [S07251664|A01_DIrectory_01.txt::DRC1: EDIT_XPP.mapDispatchToProps <1>]

//[ DEF1: EDIT_XPP.mapDispatchToProps <1>^B]
const mapDispatchToProps = (dispatch) =>  {
  return (
  {
    edit_expense: (id, expense) => dispatch(MP_editExpense(id, expense)),
    //[ this.props.edit_expense ref1;^B]
    remove_expense: (expense_id_obj) => dispatch(MP_removeExpense(expense_id_obj))
    //[ this.props.remove_expense ref1;^B]
  }      );
};
//export default connect() (GC_add_expense_page);
export default connect(mapStateToProps, mapDispatchToProps)
                 (CLS_edit_expense_page);
              //[ CLS_edit_expense_page oo1;^B]
