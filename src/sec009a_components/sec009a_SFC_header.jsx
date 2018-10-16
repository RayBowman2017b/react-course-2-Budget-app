
/*

  sec009a_SFC_header.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_009_React_Router\proj_02\Budget-app\src\sec009a_components\sec009a_SFC_header.jsx


//  SEC_009 --- 80. Organizing Our Routes 12:30

import MP_header from '../../sec009a_components/sec009a_SFC_header.jsx';

*/

import React from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


const GF_link=(P_props) =>
    (
    <button style={{ padding: 1 + "rem", margin: 1 + "rem" }}>
    <NavLink
      to={P_props.route}
      activeClassName="is-active"
      exact={true}
    >{P_props.message}
    </NavLink>
  </button>
);

   //  [S07251666|sec009a_app_router.jsx::SFC_header tpl1;^B]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_header <1>]

const GC_header = () =>
(
<header>
  <h1>Expensify</h1>
  <GF_link route="/" message="HOME" />
  <GF_link route="/create" message="Create Expense" />
  <GF_link route="/edit" message="Edit" />
</header>
);


//  SEC_012 --- 118. Snapshot Testing 12:13
//  <GF_link route="/help" message="Help" />

export default GC_header;
