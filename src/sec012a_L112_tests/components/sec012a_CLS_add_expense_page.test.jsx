
/*

  sec012a_CLS_add_expense_page.test.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\components\
sec012a_CLS_add_expense_page.test.jsx

 */

import React from 'react';
import { shallow } from 'enzyme';

import { CLS_add_expense_page } from '../../sec009a_components/sec009a_CLS_add_expense_page.jsx';
import MP_FXT_expenses from "../fixtures/sec012a_DATA_expenses.js";


describe ("COMPONENT TEST FOR ADD EXPENSE PAGE - sec009a_CLS_add_expense_page.jsx", () =>  {

    class CLS_pram
    {
        constructor ()
        {
            this.V_test_expense = MP_FXT_expenses[1];
        }
        setup ()
        {
            this.V_add_expense = jest.fn();
            this.V_history = { push: jest.fn() };
            this.V_wrapper = shallow (
                    <CLS_add_expense_page
                      add_expense={this.V_add_expense}
                      history={this.V_history}
                    />);
        }

        get G_wrapper ()   { return this.V_wrapper; }
        get G_history ()   { return this.V_history; }
        get G_add_expense ()  { return this.V_add_expense; }
        get G_test_expense ()  { return this.V_test_expense; }
    }

    const GC_pram = new CLS_pram ();

    beforeEach ( () => {
        GC_pram.setup ();
    } );

    it ('should render add_expense_page correctly', () =>  {
        expect(GC_pram.G_wrapper).toMatchSnapshot();
    } );

    it ('should handle addExpense', () =>  {
        GC_pram.G_wrapper.find('CLS_expense_form')
                         .prop('onExpenseSubmit')(GC_pram.G_test_expense);
        expect(GC_pram.G_history.push).toHaveBeenLastCalledWith('/');
        expect(GC_pram.G_add_expense).toHaveBeenLastCalledWith(GC_pram.G_test_expense);
    } );

} );
