
/***************************************************************************

sec016a_L162_login_page.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\
Budget-app\src\sec009a_components\sec016a_L162_login_page.jsx

       //  [ DEF1: SFC_login_page <1>]

//  SEC_016 --- 162. Login Page and Google Authentication 19:26

import MP_SFC_login_page from '../../sec009a_components/sec016a_L162_login_page.jsx';

 ***************************************************************************/

import React from 'react';

import moment from 'moment';

import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { MP_start_login } from '../sec011a_L099_actions/sec016a_L162_auth.jsx';

const GC_button_style =
{ padding: 0.2 + "rem", margin: 1 + "rem", float: "left", clear:"left" };

const GC_message_style =
{ padding: 0.2 + "rem", margin: 1 + "rem", top_margin: 7 + "rem", float: "left", clear:"right" };

const GC_testbox01_style =
{ padding: 0.2 + "rem", margin: 1 + "rem", top_margin: 7 + "rem", float: "left"};


//[ EXE1: GC_link_with_children <1>]

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

    {/*  */}
    {/*
      value={}
      onChange={}
      */}

//  [S07251666|sec009a_app_router.jsx::SFC_login_page rtr1;^B]

//  [ EXE1: SFC_login_page <1>^B]

    //  [S07251664|A01_DIrectory_01.txt::DRC1: SFC_login_page <1>^B]

       //[ DEF1: SFC_login_page <1>^B]
export const SFC_login_page = (P_props) => (
  <div>
    <input
      type="text"
      placeholder="USERNAME"
      id="TXBX_username"
      style={GC_testbox01_style}
    />
    <input
      type="text"
      placeholder="PASSWORD"
      id="TXBX_password"
      style={GC_testbox01_style}
    />
    <button id='BTN_login' onClick={P_props.BTN_CLK_start_login} style={GC_button_style}>
    login
    </button>
    <GC_link_with_children route={"/dashboard/"}>
    {/*  //[ EXE1: GC_link_with_children <1>^B]
      */}
          <h3>{'TO > dashboard'}</h3>
    </GC_link_with_children>
  </div>
);

/*
*/


// const GF_map_state_to_props = (state, props) =>  {
//   return ( {} );
// };

const GF_map_dispatch_to_props = (P_dispatch) => ( {
    BTN_CLK_start_login: (P_login_obj) => P_dispatch(MP_start_login())
} );

//export default connect(GF_map_state_to_props, GF_map_dispatch_to_props) (SFC_login_page);
//export default connect(undefined, undefined) (SFC_login_page);
export default connect(undefined, GF_map_dispatch_to_props) (SFC_login_page);
//export default SFC_login_page;
