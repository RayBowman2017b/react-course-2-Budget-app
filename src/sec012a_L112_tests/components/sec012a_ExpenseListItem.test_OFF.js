
/*

  sec012a_ExpenseListItem.test.js

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\components\
sec012a_ExpenseListItem.test.js

//  SEC_012 --- 120. Snapshot Testing with Dynamic Components 15:42

 */

import React from 'react';
import { shallow } from 'enzyme';

//import { SFC_expense_list_item } from "../../sec009a_components/sec011a_L102_expense_list_item.jsx";
import SFC_expense_list_item from "../../sec009a_components/sec011a_L102_expense_list_item.jsx";
import MP_FXT_expenses from "../fixtures/sec012a_DATA_expenses.js";

describe ("COMPONENT TEST FOR EXPENSE LIST ITEM", () =>  {

    it ('should render an expense list item', () =>  {
        const L_wrapper = shallow
                        ( <SFC_expense_list_item {...MP_FXT_expenses[1]} /> );

        expect(L_wrapper).toMatchSnapshot();
    } );

} );
