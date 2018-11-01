
/***************************************************************************

sec016a_L165_RDCR_auth.test.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\
Budget-app\src\sec012a_L112_tests\reducers\sec016a_L165_RDCR_auth.test.jsx

//  SEC_016 --- 165. The Auth Reducer 15:49

import { MP_auth_actions, MP_start_login, MP_start_logout } from '../../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';

 ***************************************************************************/

import { MP_auth_actions } from '../../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';
import MP_authReducer from "../../sec011a_L099_reducers/sec016a_L165_RDCR_auth.jsx";

describe ('AUTH REDUCER TESTS', () => {

    test ('should set uid for login', () =>  {
        const L_action = {
            type: MP_auth_actions.ACT_AUTH_login,
            uid: 'abc123'
        }
        const L_state = MP_authReducer ({}, L_action);
        expect(L_state.uid).toEqual (L_action.uid);
    } );

    test ('should clear uid for logout', () =>  {
        const L_action = {
            type: MP_auth_actions.ACT_AUTH_logout
        }
        const L_state = MP_authReducer ({uid: 'abc123'}, L_action);
        expect(L_state).toEqual ({});
    } );

} );
