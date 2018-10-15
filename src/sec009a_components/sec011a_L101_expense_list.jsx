
/*

sec011a_L101_expense_list.jsx


       //  [ DEF1: SFC_expense_list <1>]
       //  [ DEF1: GF_map_state_to_props <1>]


K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec009a_components\sec011a_L101_expense_list.jsx


//  SEC_011 --- 102. Rendering Individual Expenses 9:09

import SFC_expense_list from "./sec011a_L101_expense_list.jsx";
import { SFC_expense_list } from "./sec011a_L101_expense_list.jsx";
import { SFC_expense_list } from "../../sec009a_components/sec011a_L101_expense_list.jsx";
      //[S07251667|sec009a_SFC_expense_dashboard_page.jsx::sec011a_L101_expense_list import-1;^B]

 */

import React from 'react';

import { connect } from 'react-redux';

//import MP_SLCT_getVisibleExpenses from "../sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx";

import SFC_expense_list_item from "./sec011a_L102_expense_list_item.jsx";
//[S07251667|sec011a_L102_expense_list_item.jsx::sec011a_L102_expense_list_item import-1;^B]

//import Loadable from 'react-loadable';
//import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";


import MP_SLCT_getVisibleExpenses from "../sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx";
   //[ MP_SLCT_getVisibleExpenses asn1;]
                     //[S07251670|sec011a_L099_SLCT_expenses.jsx::sec011a_L099_SLCT_expenses import-2;]


//const MP_SLCT_getVisibleExpenses = Loadable({
//  loader: () => import('../sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx'),
//  loading: Loading_02,
//  //timeout: 10000, // 10 seconds
//  timeout: 3000, // 3 seconds
//});


let cnt = 0;
//    <div>{"filter text > " + P_props.filters.text}</div>

   //  [S07251667|sec009a_SFC_expense_dashboard_page.jsx::TPL1: SFC_expense_list <1>^B]

//  [S07251664|A01_DIrectory_01.txt::DRC1: SFC_expense_list <1>^B]

   //[ DEF1: SFC_expense_list <1>^B]
export const SFC_expense_list = (P_props) => (
<div>
  <h1>Expense List</h1>
    {/*
       P_props.expenses.map ( (P_expense) => (
          <div key={cnt++}>{P_expense.description}</div>
                            )                )
    */}
    {/*

//  SEC_011 --- 103. Controlled Inputs for Filters 14:21

       P_props.expenses.map ( (P_expense) => (
          <div key={cnt++}><SFC_expense_list_item expense_item={P_expense}/></div>
                            )                )
    */}
  {
    P_props.expenses.length === 0 ? (
        <p>No Expenses</p>
    ) : (
        P_props.expenses.map ( (P_expense) => (
    //[ P_props.expenses exe1;]
    //[S07251670|sec011a_L099_SLCT_expenses.jsx::REF1: MP_SLCT_getVisibleExpenses <1>^B]
           <SFC_expense_list_item key={P_expense.id} {...P_expense} />
           //[S07251667|sec011a_L102_expense_list_item.jsx::EXE1: SFC_expense_list_item <1>^B]
                                              )
                             )
    )
  }
</div>
    );

/***********************************************************************
const xxx_GF_map_state_to_props = (P_state) =>  {
    return {
            expenses: P_state.expenses,
            filters: P_state.filters
           };
};
 ************************************************************************/


//  SEC_011 --- 103. Controlled Inputs for Filters 14:21
//  MP_SLCT_getVisibleExpenses

 //  [S07251664|A01_DIrectory_01.txt::DRC1: XPNLIST.GF_map_state_to_props <1>^B]

       //[ DEF1: GF_map_state_to_props <1>^B]
const GF_map_state_to_props = (P_state) =>  {
    return {
            expenses: MP_SLCT_getVisibleExpenses
//[ P_props.expenses exe1;^B]
    //[S07251670|sec011a_L099_SLCT_expenses.jsx::EXE1: MP_SLCT_getVisibleExpenses <1>^B]
                  //[ MP_SLCT_getVisibleExpenses asn1;^B]
                         (P_state.expenses, P_state.filters)
    //[S07251671|sec011a_L099_STR_configure_store.jsx::(P_state.expenses, P_state.filters) xrf1;^B]
                    //[S07251664|A01_DIrectory_01.txt::(P_state.expenses, P_state.filters) drc1;^B]
           };
};

//  export default SFC_connected_expense_list;

export default connect (GF_map_state_to_props) (SFC_expense_list);


