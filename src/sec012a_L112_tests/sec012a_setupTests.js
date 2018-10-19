
/*

  sec012a_setupTests.js

//  SEC_012 --- 119. Enzyme 21:53

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\
sec012a_setupTests.js

//  ONE WAY :>  [S07251673|package.json::--config=jest.config.json^B]

//  ONE WAY :>  [S07251673|jest.config.json::"setupFiles"^B]

//  [S07251664|A01_DIrectory_01.txt::set up tests drc1;^B]

airbnb.io/enzyme/
http://airbnb.io/enzyme/#installation

https://jestjs.io/docs/en/configuration
https://jestjs.io/docs/en/configuration#setupfiles-array

 */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//  SEC_015 --- 155. Creating a Separate Test Database 21:15
//  require('dotenv').config( { path: '.env.test' } );
  import DotEnv from 'dotenv';
  DotEnv.config( { path: '.env.test' } );

Enzyme.configure ( {
    adapter: new Adapter()
} );

