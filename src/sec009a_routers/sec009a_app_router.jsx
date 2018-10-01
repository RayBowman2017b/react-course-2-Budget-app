
/*

  sec009a_app_router.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\Sections\a01_final_projects\proj_02\Budget-app\src\sec009a_routers\sec009a_app_router.jsx

       //  [ DEF1: GC_app_router <1>]


K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec009a_routers\
sec009a_app_router.jsx


K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_009_React_Router\proj_02\Budget-app\src\sec009a_routers\sec009a_app_router.jsx


//  sec009a_app.jsx

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_009_React_Router\proj-02\Budget-app\src\sec009a_app.jsx


"K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\SEC_009_React_Router\proj_02\Budget-app\src\

//  SEC_009 --- 80. Organizing Our Routes 12:30


 */

//  ================================================================
//  ================================================================

//#########################################################

//  SEC_006 --- 55. One Component per File 18:12

import React from 'react';

//  SEC_009 --- 79. Linking Between Routes 14:08
//  IMPORT Link, NavLink
//  SEC_009 --- 78. Setting up a 404 5:58
//  IMPORT Switch
//  SEC_009 --- 77. React-Router 101 20:13

//  BrowserRouter will be used only once
//  Route will be used for each path
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Loadable from 'react-loadable';

import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";
     //[ MP_common_loading_handler grp-1;]
     //[ MP_common_loading_handler xxx]
//[S07251674|Loadable_Handlers.jsx::MPT1: MP_common_loading_handler <1>^B]

//#########################################################


/*************************************************************
import  CLS_add_expense_page  from  "../sec009a_components/sec009a_CLS_add_expense_page.jsx";
import  CLS_edit_expense_page  from  "../sec009a_components/sec009a_CLS_edit_expense_page.jsx";
import  SFC_expense_dashboard_page  from  "../sec009a_components/sec009a_SFC_expense_dashboard_page.jsx";
import  SFC_header from  "../sec009a_components/sec009a_SFC_header.jsx";
import  SFC_help_page  from  "../sec009a_components/sec009a_SFC_help_page.jsx";
import  SFC_not_found_page  from  "../sec009a_components/sec009a_SFC_not_found_page.jsx";
 *************************************************************/


//  const Loading = () => <div>Loading...</div>;

//  K:\A01_Udemy\Z01_General_Notes\webpack_optimization_01.txt

//  import  SFC_header from  "../sec009a_components/sec009a_SFC_header.jsx";


            //[ MP_common_loading_handler grp-1;^B]
            //[ MP_common_loading_handler ]

const SFC_header = Loadable({
  loader: () => import('../sec009a_components/sec009a_SFC_header.jsx'),
  loading: MP_common_loading_handler,
  //timeout: 10000, // 10 seconds
  timeout: 3000, // 3 seconds
});
const CLS_add_expense_page = Loadable({
  loader: () => import('../sec009a_components/sec009a_CLS_add_expense_page.jsx'),
  loading: MP_common_loading_handler,
  //timeout: 10000, // 10 seconds
  timeout: 3000, // 3 seconds
});
const CLS_edit_expense_page = Loadable({
  loader: () => import('../sec009a_components/sec009a_CLS_edit_expense_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});
const SFC_expense_dashboard_page = Loadable({
  loader: () => import('../sec009a_components/sec009a_SFC_expense_dashboard_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});
const SFC_help_page = Loadable({
  loader: () => import('../sec009a_components/sec009a_SFC_help_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});
const SFC_not_found_page = Loadable({
  loader: () => import('../sec009a_components/sec009a_SFC_not_found_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});

//  ----------------------------------------------------------------



//  SEC_009 --- 77. React-Router 101 20:13


//  SEC_009 --- 78. Setting up a 404 5:58
//  REPLACE div with Switch
  //  <div>
  // </div>

//  SEC_009 --- 81. Query Strings and URL Parameters 9:10
//          <Route path="/edit/:id" component={CLS_edit_expense_page}  />

//const GC_routes = (

   //  [S07251665|sec012a_app.jsx::EXE1: GC_app_router <1>^B]

//  [S07251664|A01_DIrectory_01.txt::DRC1: GC_app_router <1>^B]

       //[ DEF1: GC_app_router <1>^B]
const GC_app_router = () => (
    <BrowserRouter>
  <div>
    <SFC_header />
    {/* //  [S07251667|sec009a_SFC_header.jsx::SFC_header tpl1;^B] */}

    <Switch>
        <Route path="/" component={SFC_expense_dashboard_page} exact={true} />
 {/* [S07251667|sec009a_SFC_expense_dashboard_page.jsx::GC_expense_dashboard_page rtr1;^B] */}
         <Route path="/create" component={CLS_add_expense_page}  />
 {/* [S07251667|sec009a_CLS_add_expense_page.jsx::CLS_add_expense_page rtr1;^B] */}
        <Route path="/edit/:id" component={CLS_edit_expense_page}  />
 {/* [S07251667|sec009a_CLS_edit_expense_page.jsx::CLS_edit_expense_page rtr1;^B]
     [S07251667|sec009a_CLS_edit_expense_page.jsx::P_expense.id === props.match.params.id ref1;^B]
   */}
        <Route path="/help" component={SFC_help_page}  />
 {/* [S07251667|sec009a_SFC_help_page.jsx::GC_help_page rtr1;^B] */}
        <Route component={SFC_not_found_page}  />
 {/* [S07251667|sec009a_SFC_not_found_page.jsx::GC_not_found_page rtr1;^B] */}
    </Switch>
  </div>
    </BrowserRouter>
  );

export default GC_app_router;

//#########################################################
//#########################################################
