
/*

sec016a_L162_login_page.test.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\
Budget-app\src\sec012a_L112_tests\components\sec016a_L162_login_page.test.jsx

//  SEC_016 --- 162. Login Page and Google Authentication 19:26

*/

import React from 'react';

import { shallow } from 'enzyme';

import { SFC_login_page } from '../../sec009a_components/sec016a_L162_login_page.jsx';

const GF_BTN_CLK_login = jest.fn();

describe ("COMPONENT TEST FOR LOGIN PAGE", () =>  {

    test ('should render login page matching snapshot', () =>  {
        const L_wrapper = shallow(<SFC_login_page />);
        expect (L_wrapper).toMatchSnapshot();
    } );

//  SEC_016 --- 163. Logging Out 11:05

    it ('should call start_login on button click', () =>  {
        const L_wrapper = shallow(<SFC_login_page BTN_CLK_start_login={GF_BTN_CLK_login}/>);
        L_wrapper.find('#BTN_login').simulate('click');
        expect(GF_BTN_CLK_login).toHaveBeenCalled();
    } );

} );


