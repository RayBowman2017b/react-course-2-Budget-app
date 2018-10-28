
/***************************************************************************

sec016a_L165_ACTN_auth.test.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\
Budget-app\src\sec012a_L112_tests\actions\sec016a_L165_ACTN_auth.test.jsx


//  SEC_016 --- 165. The Auth Reducer 15:49

 ***************************************************************************/

import { MP_auth_actions } from '../../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';
import { MP_login, MP_logout } from '../../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';

describe ('AUTH ACTION TESTS', () => {

    test ('should setup auth object for login', () => {
        const uid = 'abc123';
        const L_action = MP_login (uid);
        expect (L_action).toEqual ( {
            type: MP_auth_actions.ACT_AUTH_login,
            uid
        } );
    } );

    test ('should setup auth object for logout', () => {
        const L_action = MP_logout ();
        expect (L_action).toEqual ( {
            type: MP_auth_actions.ACT_AUTH_logout
        } );
    } );

} );
