
/***************************************************************************

sec017_loading_page.test.js

K:\A01_Udemy\C023_Complete_React_Web_Dev\
Budget-app\src\sec012a_L112_tests\components\sec017_loading_page.test.js


//  SEC_017 --- 179. Adding Loader 9:26


 ***************************************************************************/

import React from 'react';
import { shallow } from 'enzyme';
import MP_SFC_loading_page from "../../sec009a_components/sec017_L179_loading_page.jsx";


describe ("COMPONENT TEST FOR LOADING PAGE - sec017_L179_loading_page.jsx", () =>  {

    it ("should correctly render sec017_L179_loading_page.jsx", () => {
        const L_wrapper = shallow(<MP_SFC_loading_page />);
        expect(L_wrapper).toMatchSnapshot();
    } );

} );
