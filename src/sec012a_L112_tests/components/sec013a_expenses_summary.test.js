

/***************************************************************************

sec013a_expenses_summary.test.js

K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\
src\sec012a_L112_tests\components\sec013a_expenses_summary.test.js

//  SEC_013 --- 140. Build It: Adding Summary Component 18:39


 ***************************************************************************/



import React from 'react';
import { shallow } from 'enzyme';

//import { SFC_expenses_summary } from '../../sec009a_components/sec013a_L140_expenses_summary.jsx';
import  SFC_expenses_summary  from '../../sec009a_components/sec013a_L140_expenses_summary.jsx';


//--------------------------------------------------------------------------
//  https://stackoverflow.com/questions/36211739/invariant-violation-could-not-find-store-in-either-the-context-or-props-of-c
//--------------------------------------------------------------------------

//import React from "react";
//import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
//import TestPage from "../TestPage";

const mockStore = configureMockStore();
const store = mockStore({});

//describe("Testpage Component", () => {
//    it("should render without throwing an error", () => {
//        expect(
//            shallow(
//                <Provider store={store}>
//                    <TestPage />
//                </Provider>
//            ).exists(<h1>Test page</h1>)
//        ).toBe(true);
//    });
//});
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------


//import { SFC_expense_list } from "../../sec009a_components/sec011a_L101_expense_list.jsx";
//import MP_FXT_expenses from "../fixtures/sec012a_DATA_expenses.js";


describe ("COMPONENT TEST FOR EXPENSES SUMMARY", () =>  {

    it ('should correctly render expense sunnary with 1 expense', () =>  {

        const L_wrapper = shallow
            (
              <Provider store={store}>
                <SFC_expenses_summary total_expense_count={1} total_expense_amount={321} />
              </Provider>
            );

        expect(L_wrapper).toMatchSnapshot();
    } );

    it ('should correctly render expense sunnary with multiple expenses', () =>  {

        const L_wrapper = shallow
            (
              <Provider store={store}>
                <SFC_expenses_summary total_expense_count={11} total_expense_amount={321123} />
              </Provider>
            );

        expect(L_wrapper).toMatchSnapshot();
    } );

} );
