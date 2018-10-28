
/***************************************************************************

sec016a_L166_private_app_router.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\
Budget-app\src\sec009a_routers\sec016a_L166_private_app_router.jsx

import MP_SFC_private_route from './sec016a_L166_private_app_router.jsx';

//  SEC_016 --- 166. Private Only Routes 13:04


 ***************************************************************************/

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

//  SEC_016 --- 166. Private Only Routes 13:04
//       MOVE SFC_header TO :::
// K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\src\sec009a_routers\sec016a_L166_private_app_router.jsx

import Loadable from 'react-loadable';

import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";
                       //[S07251674|Loadable_Handlers.jsx::Loadable_Handlers import-1;^B]

import SFC_header from '../sec009a_components/sec009a_SFC_header.jsx';

// const SFC_header = Loadable({
//   loader: () => import('../sec009a_components/sec009a_SFC_header.jsx'),
//   loading: MP_common_loading_handler,
//   //timeout: 10000, // 10 seconds
//   timeout: 3000, // 3 seconds
// });

export const MP_SFC_private_route = ( {
    isAuthenticated,
    component: P_Component,
    ...rest
} ) => (
    <Route {...rest} component={ (props) => (
        isAuthenticated ? (
            <div>
                <SFC_header />
                <P_Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
        ) }
    />
);

const GF_map_state_to_props = (P_state) => ( {
    isAuthenticated: !! P_state.auth.uid
} );

export default connect (GF_map_state_to_props) (MP_SFC_private_route);
