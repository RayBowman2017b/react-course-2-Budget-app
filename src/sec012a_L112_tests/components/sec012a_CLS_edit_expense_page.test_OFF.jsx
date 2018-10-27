
/*

  sec012a_CLS_edit_expense_page.test.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\components\
sec012a_CLS_edit_expense_page.test.jsx

//  SEC_012 --- 125. Testing EditExpensePage 19:00

 */

import React from 'react';
import { shallow } from 'enzyme';

//  SEC_012 --- 124. Testing AddExpensePage 14:39
import { CLS_edit_expense_page } from '../../sec009a_components/sec009a_CLS_edit_expense_page.jsx';

import MP_FXT_expenses from "../fixtures/sec012a_DATA_expenses.js";


describe ("COMPONENT TEST FOR EDIT EXPENSE PAGE - sec009a_CLS_edit_expense_page.jsx", () =>  {

    class CLS_pram
    {
        constructor ()
        {
            this.V_test_expense = MP_FXT_expenses[2];
        }
        setup ()
        {
//  SEC_015 --- 160. Update Expense 10:31
            this.V_start_edit_expense = jest.fn();
//  SEC_015 --- 159. Remove Expense 12:03
            this.V_start_remove_expense = jest.fn();
            this.V_history = { push: jest.fn() };

            this.V_wrapper = shallow (
                    <CLS_edit_expense_page
//  SEC_015 --- 160. Update Expense 10:31
                      start_edit_expense={this.V_start_edit_expense}
//  SEC_015 --- 159. Remove Expense 12:03
                      start_remove_expense={this.V_start_remove_expense}
                      history={this.V_history}
                      expense={this.V_test_expense}
                      //  THIS was my idea (not really used)
                      state_expenses={MP_FXT_expenses}
                    />);
        }

        get G_wrapper ()   { return this.V_wrapper; }
        get G_history ()   { return this.V_history; }
//  SEC_015 --- 160. Update Expense 10:31
        get G_start_edit_expense ()  { return this.V_start_edit_expense; }
//  SEC_015 --- 159. Remove Expense 12:03
        get G_start_remove_expense ()  { return this.V_start_remove_expense; }
        get G_test_expense ()  { return this.V_test_expense; }
    }

    const GC_pram = new CLS_pram ();

    beforeEach ( () => {
        GC_pram.setup ();
    } );

    it ('should render edit_expense_page correctly', () =>  {
        expect(GC_pram.G_wrapper).toMatchSnapshot();
    } );

//  SEC_015 --- 160. Update Expense 10:31

    it ('should handle startEditExpense', () =>  {
        GC_pram.G_wrapper.find('CLS_expense_form')
                         .prop('onExpenseSubmit')(GC_pram.G_test_expense);
        expect(GC_pram.G_history.push).toHaveBeenLastCalledWith('/');
        expect(GC_pram.G_start_edit_expense).toHaveBeenLastCalledWith
                            (GC_pram.G_test_expense.id, GC_pram.G_test_expense);
    } );

//  SEC_015 --- 159. Remove Expense 12:03

    it ('should handle startRemoveExpense', () =>  {
        const L_id_obj = { id: GC_pram.G_test_expense.id };
        GC_pram.G_wrapper.find('#BTN_remove_expense')
                         .simulate('click');
        expect(GC_pram.G_history.push).toHaveBeenLastCalledWith('/');
        expect(GC_pram.G_start_remove_expense).toHaveBeenLastCalledWith(L_id_obj);
    } );

} );
