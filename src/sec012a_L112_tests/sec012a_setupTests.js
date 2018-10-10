
/*

  sec012a_setupTests.js

//  SEC_012 --- 119. Enzyme 21:53

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\
sec012a_setupTests.js

airbnb.io/enzyme/
http://airbnb.io/enzyme/#installation

https://jestjs.io/docs/en/configuration
https://jestjs.io/docs/en/configuration#setupfiles-array

 */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure ( {
    adapter: new Adapter()
} );

