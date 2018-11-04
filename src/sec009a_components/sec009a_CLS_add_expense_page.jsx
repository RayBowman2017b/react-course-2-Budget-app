

/***************************************************************************

  sec009a_CLS_add_expense_page.jsx

       //  [ CLS1: CLS_add_expense_page <1>]
       //  [ DEF1: ADD_XPP.GF_map_dispatch_to_props <1>]

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\
sec009a_components\
sec009a_CLS_add_expense_page.jsx


K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_009_React_Router\proj_02\Budget-app\src\styles\components_SEC009\sec009a_CLS_add_expense_page.jsx


//  SEC_009 --- 80. Organizing Our Routes 12:30

//  SEC_011 --- 105. Creating Expense Add/Edit Form 20:09

import { CLS_add_expense_page } from '../../sec009a_components/sec009a_CLS_add_expense_page.jsx';

 ***************************************************************************/

import React from 'react';
import { connect } from 'react-redux';

import CLS_expense_form from "./sec011a_L105_expense_form.jsx";
//[S07251667|sec011a_L105_expense_form.jsx::sec011a_L105_expense_form import-1;^B]

//  SEC_015 --- 152. Asynchronous Redux Actions 18:49
//import { MP_startAddExpense } from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
import { MP_startAddExpense } from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";
     //[ MP_startAddExpense pp1;]
//[S07251668|sec011a_L099_ACTN_expenses.jsx::MP_startAddExpense import-1;]
          //[S07251668|sec011a_L099_ACTN_expenses.jsx::sec011a_L099_ACTN_expenses import-1;]


//  SEC_012 --- 124. Testing AddExpensePage 14:39

   //  [S07251666|sec009a_app_router.jsx::CLS_add_expense_page rtr1;]

   //  [S07251667|sec013a_L140_expenses_summary.jsx::CLS_add_expense_page evt1;^B]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: CLS_add_expense_page <1>^B]
   //  [ CLS_add_expense_page pp1;]


   //  [ CLS_add_expense_page xxx]

   //[ CLS1: CLS_add_expense_page <1>^B]
export class CLS_add_expense_page extends React.Component
{
       //  [ DEF1: onExpenseSubmit <1>]

       //  [ DEF1: CLS_add_expense_page.render <1>]

       /////////////////////////////////////////////////////////////////////
       /////////////////////////////////////////////////////////////////////

    //======================================================================

    constructor(P_props)
    {
        super (P_props);
    }
    //======================================================================


        //  [ ASN1: onExpenseSubmit <1>]

        //  [S07251667|sec011a_L105_expense_form.jsx::EXE1: ADD_XPP.onExpenseSubmit <1>^B]

        //  [S07251664|A01_DIrectory_01.txt::DRC1: ADD_XPP.onExpenseSubmit <1>^B]

        //[ DEF1: onExpenseSubmit <1>^B]
        onExpenseSubmit = (P_expense) => {
            //console.log ('GC_add_expense_page ', P_expense);
//  SEC_012 --- 124. Testing AddExpensePage 14:39
//            props.dispatch ( MP_startAddExpense(P_expense) );

            this.props.start_add_expense (P_expense);
        //[ this.props.start_add_expense ref1;]
    //[S07251668|sec011a_L099_ACTN_expenses.jsx::EXE1: MP_startAddExpense <1>^B]

            this.props.history.push ('/');
        };
    //======================================================================
    //======================================================================


       //  [S07251664|A01_DIrectory_01.txt::DRC1: CLS_add_expense_page.render <1>^B]

       //[ DEF1: CLS_add_expense_page.render <1>^B]
  render ()  {
    return (
  <div>
      {/*  //  SEC_017 --- 176. Styling Expense Form 13:19 */}
      <div className="primary-page-header">
      {/* [S07251678|_page-header.scss::.primary-page-header css2;^B] */}
        <div className="content-container">
        {/* [S07251678|_content-container.scss::.content-container css3a;^B] */}
          <h1 className="primary-page-header__title">Add Expense</h1>
          {/* [S07251678|_page-header.scss::.primary-page-header__title css2;^B] */}
        </div>
      </div>
      <div className="content-container">
      {/* [S07251678|_content-container.scss::.content-container css3b;^B] */}
        <CLS_expense_form
         //[S07251667|sec011a_L105_expense_form.jsx::TPL1: CLS_expense_form <1>^B]
          onExpenseSubmit={this.onExpenseSubmit}
                      //[ ASN1: onExpenseSubmit <1>^B]
          buttonLabel={'ADD EXPENSE'}
        />
      </div>
                {/*  */}
  </div>
      );
    }

}
    //======================================================================
    //======================================================================


/***********************************************************
//  SEC_011 --- 105. Creating Expense Add/Edit Form 20:09

const GC_add_expense_page = (props) => (
  <div>
      <div>This is from my add expense component.</div>
      <h1>Add Expense</h1>
      <CLS_expense_form
        onExpenseSubmit={ (expense) => {
            //console.log ('GC_add_expense_page ', expense);
//  SEC_012 --- 124. Testing AddExpensePage 14:39
//            props.dispatch ( MP_startAddExpense(expense) );
            props.add_expense (expense);
            props.history.push ('/');
        } } />
  </div>
);
 ***********************************************************/


//  SEC_012 --- 124. Testing AddExpensePage 14:39

//  [S07251664|A01_DIrectory_01.txt::DRC1: ADD_XPP.GF_map_dispatch_to_props <1>^B]

       //[ DEF1: ADD_XPP.GF_map_dispatch_to_props <1>^B]
const GF_map_dispatch_to_props = (P_dispatch) => ( {
//  SEC_015 --- 152. Asynchronous Redux Actions 18:49
    //add_expense: (P_expense) => P_dispatch(MP_startAddExpense(P_expense))
    start_add_expense: (P_expense) => P_dispatch(MP_startAddExpense(P_expense))
    //[ this.props.start_add_expense ref1;^B]
                                       //[ MP_startAddExpense pp1;^B]
} );
//export default connect() (GC_add_expense_page);
export default connect(undefined, GF_map_dispatch_to_props) (CLS_add_expense_page);
                                                         //[ CLS_add_expense_page pp1;^B]
