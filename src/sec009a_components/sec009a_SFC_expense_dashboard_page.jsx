
/*

  sec009a_SFC_expense_dashboard_page.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec009a_components\
sec009a_SFC_expense_dashboard_page.jsx

//  SEC_009 --- 80. Organizing Our Routes 12:30

import GC_expense_dashboard_page from "../../sec009a_components/sec009a_SFC_expense_dashboard_page.jsx";

 */

import React from 'react';

import SFC_expense_list from "./sec011a_L101_expense_list.jsx";

import CLS_expense_list_filters from "./sec011a_L103_expense_list_filters.jsx";


    //  [S07251666|sec009a_app_router.jsx::GC_expense_dashboard_page rtr1;^B]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: GC_expense_dashboard_page <1>^B]

const GC_expense_dashboard_page = () =>
(
  <div>
    <div>Ralph's Crappy Webpage.</div>
    <CLS_expense_list_filters />
    {/*//  [S07251667|sec011a_L103_expense_list_filters.jsx::TPL1: CLS_expense_list_filters <1>^B]
       //  [S07251667|sec011a_L103_expense_list_filters.jsx::CLS_expense_list_filters.render tpl1;^B]
      */}
    <SFC_expense_list />
    {/*  [S07251667|sec011a_L101_expense_list.jsx::TPL1: SFC_expense_list <1>^B] */}
  </div>
);

export default GC_expense_dashboard_page;
