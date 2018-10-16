
/*

  sec009a_SFC_not_found_page.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_009_React_Router\proj_02\Budget-app\src\sec009a_components\
sec009a_SFC_not_found_page.jsx

//  SEC_009 --- 78. Setting up a 404 5:58

//  SEC_009 --- 80. Organizing Our Routes 12:30

import GC_not_found_page from "../../sec009a_components/sec009a_SFC_not_found_page.jsx";

 */

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import React from 'react';


//  <div>404!</div>
//  <div>
//    404 - <a href="/">Go home</a>
//  </div>

//  [S07251664|A01_DIrectory_01.txt::DRC1: GC_not_found_page <1>]

//  [S07251666|sec009a_app_router.jsx::GC_not_found_page rtr1;^B]

const GC_not_found_page = () =>
(
  <span>
    404 - <Link to="/">Go home</Link>
  </span>
);


export default GC_not_found_page;
