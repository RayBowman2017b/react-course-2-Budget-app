
/***************************************************************************

  sec009a_SFC_header.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_009_React_Router\proj_02\Budget-app\src\sec009a_components\sec009a_SFC_header.jsx


//  SEC_009 --- 80. Organizing Our Routes 12:30

import MP_header from '../../sec009a_components/sec009a_SFC_header.jsx';

 ***************************************************************************/

import React from 'react';

/* //  SEC_017 --- 172. Styling Buttons 15:35 */
//import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

//  SEC_016 --- 163. Logging Out 11:05
import { connect } from 'react-redux';
import { MP_start_logout } from '../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';
                //[S07251668|sec016a_L162_ACTN_auth.jsx::sec016a_L162_ACTN_auth import-2;^B]


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

   //  [S07251666|sec009a_app_router.jsx::SFC_header tpl1x;^B]
   //  [S07251666|sec016a_L166_private_app_router.jsx::SFC_header rtr2;^B]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_header <1>]

export const SFC_header = (props) =>
(
    <header className="primary-header">
          {/* //[S07251678|_header.scss::.primary-header css1;^B] */}
      <div className="content-container">
          {/* //[S07251678|_content-container.scss::.content-container css2;^B] */}
        <div className="primary-header__content">
          {/* //[S07251678|_header.scss::.primary-header__content css1;^B] */}
          {/* //  SEC_017 --- 172. Styling Buttons 15:35 */}
          {/*   <h1>Expensify</h1> */}
          {/* //  SEC_016 --- 167. Public Only Routes 5:29 */}
          {/*   <GF_link route="/" message="HOME" /> */}
          {/*   <GF_link route="/dashboard" message="Dashboard" /> */}
  
          <Link className="primary-header__title" to="/dashboard">
          {/* //[S07251678|_header.scss::.primary-header__title css1;^B] */}
            <h1>Expensify</h1>
          </Link>
  
          {/*  */}
          {/* <GF_link route="/create" message="Create Expense" /> */}
          {/* This was only needed as an example for the routing section. */}
          {/*   <GF_link route="/edit" message="Edit" /> */}
          {/*  */}
          {/* //  SEC_016 --- 163. Logging Out 11:05  */}
          <button id='BTN_logout'
                  className="login-button button--link"
                  onClick={props.BTN_CLK_start_logout}>
              {/* //[S07251678|_buttons.scss::.login-button css1;^B] */}
              {/* //[S07251678|_buttons.scss::.button--link css1;^B] */}
                                   {/* //[ props.BTN_CLK_start_logout exe1;] */}
          {/*[S07251668|sec016a_L162_ACTN_auth.jsx::REF1: MP_start_logout <1>^B]  */}
          {/* [S07251664|A01_DIrectory_01.txt::auth: MP_authReducer drc2;^B] */}
          {/*  */}
            LOGOUT
          </button>
        </div>
      </div>
    </header>
);


//  SEC_012 --- 118. Snapshot Testing 12:13
//  <GF_link route="/help" message="Help" />

//  SEC_016 --- 163. Logging Out 11:05

const GF_map_dispatch_to_props = (P_dispatch) => ( {
  BTN_CLK_start_logout: () => P_dispatch(MP_start_logout())
//[ props.BTN_CLK_start_logout exe1;^B]
//[S07251668|sec016a_L162_ACTN_auth.jsx::EXE1: MP_start_logout <1>^B]
//[S07251671|sec011a_L099_STR_configure_store.jsx::auth: MP_authReducer ref3;^B]
} );

export default connect(undefined, GF_map_dispatch_to_props) (SFC_header);
