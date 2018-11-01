
/***************************************************************************

sec016a_L162_ACTN_auth.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\
Budget-app\src\sec011a_L099_actions\sec016a_L162_ACTN_auth.jsx

       //  [ DEF1: MP_login <1>]
       //  [ DEF1: MP_start_login <1>]
       //  [ DEF1: MP_logout <1>]
       //  [ DEF1: MP_start_logout <1>]



//  SEC_016 --- 163. Logging Out 11:05
import { MP_auth_actions, MP_start_login, MP_start_logout } from '../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';
import { MP_login, MP_logout } from '../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';
            //[S07251665|sec012a_app.jsx::sec016a_L162_ACTN_auth import-1;^B]
     //[S07251667|sec009a_SFC_header.jsx::sec016a_L162_ACTN_auth import-2;^B]
 //[S07251669|sec016a_L165_RDCR_auth.jsx::sec016a_L162_ACTN_auth import-3;^B]
//[S07251667|sec016a_L162_login_page.jsx::sec016a_L162_ACTN_auth import-4;^B]

ACTIONS: login logout ref1;

//  SEC_016 --- 162. Login Page and Google Authentication 19:26

//[S07251664|A01_DIrectory_01.txt::MP_auth_actions drc1;^B]

MP_auth_actions.ACT_AUTH_login
MP_auth_actions.ACT_AUTH_logout

 ***************************************************************************/

import { firebase, MP_google_auth_provider }
  from '../sec014a_firebase/sec014_L142_firebase.js';
//[S07251677|sec014_L142_firebase.js::sec014_L142_firebase import-3;^B]


export const MP_auth_actions =
{
  ACT_AUTH_login:      'LOGIN',
  ACT_AUTH_logout:     'LOGOUT'
};


//  SEC_016 --- 165. The Auth Reducer 15:49

//  [S07251665|sec012a_app.jsx::EXE1: MP_login <1>]

   //[S07251671|sec011a_L099_STR_configure_store.jsx::MP_login auth ref1;^B]

   //[ DEF1: MP_login <1>^B]
export const MP_login = (P_uid) => ({
    type: MP_auth_actions.ACT_AUTH_login,
    //[S07251669|sec016a_L165_RDCR_auth.jsx::MP_auth_actions.ACT_AUTH_login ref1;^B]
    uid: P_uid
});

//  [S07251667|sec016a_L162_login_page.jsx::REF1: MP_start_login <1>]
//  [S07251667|sec016a_L162_login_page.jsx::EXE1: MP_start_login <1>]

   //[ DEF1: MP_start_login <1>^B]
export const MP_start_login = () => {
    return () => {
        return firebase.auth().signInWithPopup(MP_google_auth_provider);
    };
};


//  SEC_016 --- 165. The Auth Reducer 15:49

//  [S07251665|sec012a_app.jsx::EXE1: MP_logout <1>]

   //[S07251671|sec011a_L099_STR_configure_store.jsx::MP_logout auth ref1;^B]

   //[ DEF1: MP_logout <1>^B]
export const MP_logout = () => ({
    type: MP_auth_actions.ACT_AUTH_logout
    //[S07251669|sec016a_L165_RDCR_auth.jsx::MP_auth_actions.ACT_AUTH_logout ref1;^B]
});

//  SEC_016 --- 163. Logging Out 11:05

//  [S07251667|sec009a_SFC_header.jsx::REF1: MP_start_logout <1>]
//  [S07251667|sec009a_SFC_header.jsx::EXE1: MP_start_logout <1>]

   //[ DEF1: MP_start_logout <1>^B]
export const MP_start_logout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
