

/***************************************************************************

sec011a_L102_expense_list_item.jsx


       //  [ DEF1: GC_link_with_children <1>]
       //  [ DEF1: SFC_expense_list_item <1>]


K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec009a_components\sec011a_L102_expense_list_item.jsx

//  SEC_011 --- 103. Controlled Inputs for Filters 14:21

import SFC_expense_list_item from "./sec011a_L102_expense_list_item.jsx";
import { SFC_expense_list_item } from "../../sec009a_components/sec011a_L102_expense_list_item.jsx";
//[S07251667|sec011a_L101_expense_list.jsx::sec011a_L102_expense_list_item import-1;^B]

 ***************************************************************************/

import React from 'react';

//  SEC_011 --- 108. Wiring up Edit Expense 19:06
//  import { connect } from 'react-redux';

//  SEC_011 --- 108. Wiring up Edit Expense 19:06
//import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

//  SEC_011 --- 108. Wiring up Edit Expense 19:06
//  import { MP_startRemoveExpense } from "../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx";


//  SEC_013 --- 138. New Feature Workflow 12:32
import moment from 'moment';

//  SEC_013 --- 138. New Feature Workflow 12:32
//var numeral = require('numeral');
import numeral from 'numeral';


// export default (P_props) => (
//     <ul>
//       <li>{P_props.expense_item.description + " | "}
//           {P_props.expense_item.amount + " | "}
//           {P_props.expense_item.createdAt}</li>    
//     </ul>
//     );

const out = (P_id) => console.log (P_id);


// //const SFC_expense_list_item = ({ id, description, amount, createdAt }) => (
// const SFC_expense_list_item = (P_props) => (
//     <div>
//       <h3>{P_props.description}</h3>
//       <p> {P_props.amount} - {P_props.createdAt}</p>
//       <button onClick={ (e) => {
//                  P_props.dispatch ( MP_startRemoveExpense({id: P_props.id}) ) } }
//       >REMOVE</button>
//     </div>
//     );


const GC_button_style =
{ padding: 0.2 + "rem", margin: 1 + "rem", float: "left", clear:"left" };

const GC_message_style =
{ padding: 0.2 + "rem", margin: 1 + "rem", top_margin: 7 + "rem", float: "left", clear:"right" };


/*  //  SEC_011 --- 108. Wiring up Edit Expense 19:06  */

//    [ EXE1: GC_link_with_children <1>]

//[ DEF1: GC_link_with_children <1>^B]
const GC_link_with_children = (P_props) =>
(
    <button style={GC_button_style}>
    <NavLink
      to={P_props.route}
      activeClassName="is-active"
      exact={true}
    >{P_props.children}
    </NavLink>
  </button>
);
//    >{P_props.message}

//==========================================================================
//==========================================================================

   //  [ END1: SFC_expense_list_item <1>]

// SEC_011 --- 108. Wiring up Edit Expense 19:06
//const SFC_expense_list_item = ({ dispatch, id, description, amount, createdAt }) => (

//  SFC_expense_list
//  [S07251667|sec011a_L101_expense_list.jsx::EXE1: SFC_expense_list_item <1>^B]

//  [S07251664|A01_DIrectory_01.txt::DRC1: SFC_expense_list_item <1>^B]

//  SEC_017 --- 177. Styling Expenses List: Part I 13:03
//export const SFC_expense_list_item = ({ id, description, amount, createdAt }) => (
    {/*
//  SEC_009 --- 81. Query Strings and URL Parameters 9:10
//  props.match.params.id is provided within the URL
      */}
  {/*  //  SEC_011 --- 108. Wiring up Edit Expense 19:06  */}
  {/*
      <GC_link_with_children route={"/edit/" + id}>
      <GC_link_with_children route={"/edit/" + id + "/" + description}>
    */}

   //[ DEF1: SFC_expense_list_item <1>^B]
export const SFC_expense_list_item = ({ id, description, amount, createdAt }) => (

  <Link className="list-item" to={"/edit/" + id}>
  {/* //  SEC_017 --- 177. Styling Expenses List: Part II 13:03 */}
    {/*
         //[S07251678|_list.scss::.list-item css1;^B]
         //[ EXE1: GC_link_with_children <1>^B]
         //[S07251667|sec009a_CLS_edit_expense_page.jsx::CLS_edit_expense_page evt1;^B]
         //[S07251667|sec009a_CLS_edit_expense_page.jsx::route={"/edit/" + id} ref1;^B]
                    //[S07251666|sec009a_app_router.jsx::route={"/edit/" + id} ref2;^B]
                      //[S07251664|A01_DIrectory_01.txt::route={"/edit/" + id} drc1;^B]
      */}
    <div>
      {/*  */}
      {/* //  SEC_017 --- 177. Styling Expenses List: Part II 13:03 */}
      <h3 className="list-item__title hover_title">{`TO > ${description}`}</h3>
      {/* [S07251678|_list.scss::.list-item__title css1;^B] */}
      <span className="list-item__sub-title hover_title"
      //[S07251678|_list.scss::.list-item__sub-title css1;^B]
      >{moment(createdAt).format ("MMMM Do, YYYY")}</span>
    </div>
    {/*  SEC_013 --- 138. New Feature Workflow 12:32
        <p> {amount} - {createdAt}</p>
        <p style={GC_message_style}>
      */}
    {/* //  SEC_017 --- 177. Styling Expenses List: Part II 13:03 */}
    <h3 className="list-item__data hover_title">{numeral(amount / 100).format("$0,0.00")}</h3>
    {/*
         //[S07251678|_list.scss::.list-item__data css1;^B]
         //[S07251664|A01_DIrectory_01.txt::numeral(amount / 100).format drc1;^B]
         //[S07251664|A01_DIrectory_01.txt::moment(createdAt).format drc1;^B]
        </p>
      */}
  </Link>
);


  /*  //  SEC_011 --- 108. Wiring up Edit Expense 19:06 
      MOVED from here to sec009a_CLS_edit_expense_page.jsx

      <button onClick={ (e) => { dispatch ( MP_startRemoveExpense({id}) ) } }
      >REMOVE
      </button>
    */

   //  [ END1: SFC_expense_list_item <1>^B]
//==========================================================================
//==========================================================================


//export default SFC_expense_list_item;

//  SEC_011 --- 108. Wiring up Edit Expense 19:06
//export default connect() (SFC_expense_list_item);
export default SFC_expense_list_item;
