
/***************************************************************************

  sec009a_app_router.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\Sections\a01_final_projects\proj_02\Budget-app\src\sec009a_routers\sec009a_app_router.jsx

       //  [ DEF1: GC_app_router <1>]

import { MP_history } from '../sec009a_routers/sec009a_app_router.jsx';
                 //[S07251665|sec012a_app.jsx::sec009a_app_router import-1;^B]

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

 ***************************************************************************/

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
//  SEC_016 --- 164. Redirecting Login or Logout 12:48
//import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

//  SEC_016 --- 164. Redirecting Login or Logout 12:48
import createHistory from 'history/createBrowserHistory';

import Loadable from 'react-loadable';

import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";
     //[ MP_common_loading_handler grp-1;]
     //[ MP_common_loading_handler xxx]
                       //[S07251674|Loadable_Handlers.jsx::Loadable_Handlers import-1;^B]

//  ================================================================

//  SEC_016 --- 164. Redirecting Login or Logout 12:48
export const MP_history = createHistory();
         //[ MP_history ref2;]
//[S07251665|sec012a_app.jsx::MP_history ref1;^B]

//  ================================================================

//  SEC_016 --- 166. Private Only Routes 13:04
import MP_SFC_private_route from './sec016a_L166_private_app_router.jsx';

//  ================================================================

//  SEC_016 --- 167. Public Only Routes 5:29
import MP_SFC_public_route from './sec016a_L167_public_app_router.jsx';

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

/*************************************************************/

//  import MP_SFC_login_page from '../../sec009a_components/sec016a_L162_login_page.jsx';


const SFC_login_page = Loadable({
  loader: () => import('../sec009a_components/sec016a_L162_login_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});
//  SEC_016 --- 166. Private Only Routes 13:04
//       MOVE SFC_header TO :::
// K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\src\sec009a_routers\sec016a_L166_private_app_router.jsx

// const SFC_header = Loadable({
//   loader: () => import('../sec009a_components/sec009a_SFC_header.jsx'),
//   loading: MP_common_loading_handler,
//   //timeout: 10000, // 10 seconds
//   timeout: 3000, // 3 seconds
// });

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
/*************************************************************/

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
  <div>
 {/*
    //  SEC_016 --- 164. Redirecting Login or Logout 12:48
    SWITCHING BACK from BrowserRouter to Router, and including history
    <BrowserRouter>
   */}
    <Router history={MP_history}>
             {/* //[ MP_history ref2;^B] */}
  <div>
 {/*
//  SEC_016 --- 166. Private Only Routes 13:04
      MOVE SFC_header TO :::
K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\src\sec009a_routers\sec016a_L166_private_app_router.jsx
    <SFC_header />
   */}
    {/* //  [S07251667|sec009a_SFC_header.jsx::SFC_header tpl1;^B] */}

    <Switch>
 {/*  */}
 {/* //  SEC_016 --- 162. Login Page and Google Authentication 19:26 */}

 {/* //  SEC_016 --- 167. Public Only Routes 5:29 */}
 {/*         <Route path="/" component={SFC_expense_dashboard_page} exact={true} /> */}
        <MP_SFC_public_route path="/" component={SFC_login_page} exact={true} />
 {/* [S07251667|sec016a_L162_login_page.jsx::SFC_login_page rtr1;^B]  */}

 {/* //  SEC_016 --- 166. Private Only Routes 13:04 */}
        <MP_SFC_private_route path="/dashboard" component={SFC_expense_dashboard_page} exact={true} />
 {/* [S07251667|sec009a_SFC_expense_dashboard_page.jsx::GC_expense_dashboard_page rtr1;^B] */}
        <MP_SFC_private_route path="/create" component={CLS_add_expense_page}  />
 {/* [S07251667|sec009a_CLS_add_expense_page.jsx::CLS_add_expense_page rtr1;^B] */}
        <MP_SFC_private_route path="/edit/:id/:description?" component={CLS_edit_expense_page}  />
 {/* [S07251667|sec009a_CLS_edit_expense_page.jsx::CLS_edit_expense_page rtr1;^B]
     [S07251667|sec009a_CLS_edit_expense_page.jsx::P_expense.id === props.match.params.id ref1;^B]
     [S07251667|sec011a_L102_expense_list_item.jsx::route={"/edit/" + id} ref2;^B]
   */}
        <Route path="/help" component={SFC_help_page}  />
 {/* [S07251667|sec009a_SFC_help_page.jsx::GC_help_page rtr1;^B] */}
        <Route component={SFC_not_found_page}  />
 {/* [S07251667|sec009a_SFC_not_found_page.jsx::GC_not_found_page rtr1;^B] */}
    </Switch>
  </div>
 {/*
    //  SEC_016 --- 164. Redirecting Login or Logout 12:48
    </BrowserRouter>
   */}
    </Router>
  </div>
  );

export default GC_app_router;

//#########################################################
//#########################################################
