
/***************************************************************************

sec016a_L165_RDCR_auth.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\src\
sec011a_L099_reducers\sec016a_L165_RDCR_auth.jsx


//  SEC_016 --- 165. The Auth Reducer 15:49

import MP_authReducer from "../sec011a_L099_reducers/sec016a_L165_RDCR_auth.jsx";
//[S07251671|sec011a_L099_STR_configure_store.jsx::sec016a_L165_RDCR_auth import-1;^B]
//[S07251671|sec011a_L099_STR_configure_store.jsx::combineReducers auth: MP_authReducer^B]


       //[S07251664|A01_DIrectory_01.txt::DRC1: MP_authReducer <1>^B]

MP_auth_actions.ACT_AUTH_login
MP_auth_actions.ACT_AUTH_logout

 ***************************************************************************/

import { MP_auth_actions } from '../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx';
                //[S07251668|sec016a_L162_ACTN_auth.jsx::sec016a_L162_ACTN_auth import-3;^B]

export default (P_state = {}, P_action) => {
    switch (P_action.type) {
        case (MP_auth_actions.ACT_AUTH_login):
            return {
                uid: P_action.uid
            };
        case (MP_auth_actions.ACT_AUTH_logout):
            return {};
        default: return P_state;
    };
};
