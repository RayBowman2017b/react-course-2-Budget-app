

/***************************************************************************

sec013a_expenses_summary.test.js

K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\
src\sec012a_L112_tests\components\sec013a_expenses_summary.test.js

//  SEC_013 --- 140. Build It: Adding Summary Component 18:39


 ***************************************************************************/



import React from 'react';
import { shallow } from 'enzyme';

import { SFC_expenses_summary } from '../../sec009a_components/sec013a_L140_expenses_summary.jsx';

//import { SFC_expense_list } from "../../sec009a_components/sec011a_L101_expense_list.jsx";
//import MP_FXT_expenses from "../fixtures/sec012a_DATA_expenses.js";


describe ("COMPONENT TEST FOR EXPENSES SUMMARY", () =>  {

    it ('should render ExpenseList with expenses', () =>  {
        const L_wrapper = shallow
                        ( <SFC_expense_list expenses={MP_FXT_expenses} /> );

        expect(L_wrapper).toMatchSnapshot();
    } );

    it ('should render "no Expenses" with an empty list', () =>  {
        const L_wrapper = shallow
                        ( <SFC_expense_list expenses={[]} /> );

        expect(L_wrapper).toMatchSnapshot();
    } );

} );
