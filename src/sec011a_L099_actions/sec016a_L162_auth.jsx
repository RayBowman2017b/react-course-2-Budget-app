
/***************************************************************************

sec016a_L162_auth.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\
Budget-app\src\sec011a_L099_actions\sec016a_L162_auth.jsx

//  SEC_016 --- 163. Logging Out 11:05
import { MP_start_login, MP_start_logout } from '../sec011a_L099_actions/sec016a_L162_auth.jsx';

//  SEC_016 --- 162. Login Page and Google Authentication 19:26

 ***************************************************************************/

import { firebase, MP_google_auth_provider } from '../sec014a_firebase/sec014_L142_firebase.js';

export const MP_start_login = () => {
    return () => {
        return firebase.auth().signInWithPopup(MP_google_auth_provider);
    };
};

//  SEC_016 --- 163. Logging Out 11:05

export const MP_start_logout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
