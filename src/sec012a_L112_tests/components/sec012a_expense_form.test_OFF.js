
/*

sec012a_expense_form.test.js

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\components\
sec012a_expense_form.test.js


//  SEC_012 --- 121. Mocking Libraries with Jest 11:51

 */

import React from 'react';
import { shallow } from 'enzyme';
//import moment from 'moment';
const moment = require ('moment');

import CLS_expense_form from "../../sec009a_components/sec011a_L105_expense_form.jsx";

import MP_FXT_expenses from "../fixtures/sec012a_DATA_expenses.js";


describe ("COMPONENT TEST FOR EXPENSE FORM - sec011a_L105_expense_form.jsx", () =>  {

    it ('should render expenseForm correctly', () =>  {
        const L_wrapper = shallow (<CLS_expense_form />);
        expect(L_wrapper).toMatchSnapshot();
    } );

    it ('should render expenseForm correctly with expense data', () =>  {
        const L_wrapper = shallow (<CLS_expense_form expense={MP_FXT_expenses[1]}/>);
        expect(L_wrapper).toMatchSnapshot();
    } );

    it ('should render error for invalid form submission', () =>  {
        const L_wrapper = shallow (<CLS_expense_form />);
        expect(L_wrapper).toMatchSnapshot();
        L_wrapper.find('form').simulate('submit', {preventDefault: () => {}});
        expect(L_wrapper.state('descriptionError').length).toBeGreaterThan(0);
        expect(L_wrapper.state('amountError').length).toBeGreaterThan(0);
        expect(L_wrapper).toMatchSnapshot();
    } );

    // MY test cases

    it ('should render error ONLY for amount', () =>  {
        const L_description = 'New description';
        const L_wrapper = shallow (<CLS_expense_form />);
        L_wrapper.find('#Description')
                 .simulate ( 'change',
                             { target: {value: L_description} } );

        L_wrapper.find('form').simulate('submit', {preventDefault: () => {}});
        expect(L_wrapper.state('descriptionError').length).not.toBeGreaterThan(0);
        expect(L_wrapper.state('amountError').length).toBeGreaterThan(0);
        expect(L_wrapper).toMatchSnapshot();
    } );

    it ('should render error ONLY for description', () =>  {
        const L_amount = '23.50';
        const L_wrapper = shallow (<CLS_expense_form />);
        L_wrapper.find('#Amount')
                 .simulate ( 'change',
                             { target: {value: L_amount} } );

        L_wrapper.find('form').simulate('submit', {preventDefault: () => {}});
        expect(L_wrapper.state('descriptionError').length).toBeGreaterThan(0);
        expect(L_wrapper.state('amountError').length).not.toBeGreaterThan(0);
        expect(L_wrapper).toMatchSnapshot();
    } );

    //  DOES NOT work --- this.props.onExpenseSubmit not set to a function
    //  SEC_012 --- 123. Test Spies 17:39
    //  It does now.

    it ('should NOT render ANY errors', () =>  {
        const L_description = 'New description';

        //  create a new spy :
        const L_onSubmitSpy = jest.fn();

        const L_wrapper = shallow (
                      <CLS_expense_form onExpenseSubmit={L_onSubmitSpy}/>
                                  );

        L_wrapper.find('#Description')
                 .simulate ( 'change',
                             { target: {value: L_description} } );

        const L_amount = '23.50';
        L_wrapper.find('#Amount')
                 .simulate ( 'change',
                             { target: {value: L_amount} } );

        const L_submit_obj = { preventDefault: () => {} };
        L_wrapper.find('form').simulate('submit', L_submit_obj);
        expect(L_wrapper.state('descriptionError').length).not.toBeGreaterThan(0);
        expect(L_wrapper.state('amountError').length).not.toBeGreaterThan(0);
        expect(L_wrapper).toMatchSnapshot();
     } );



    // it ('should set description on input change', () =>  {
    //     const L_description = 'New description';
    //     const L_wrapper = shallow (<CLS_expense_form />);
    //     L_wrapper.find('input')
    //              .at(0)
    //              .simulate ( 'change',
    //                          { target: {value: L_description} } );

    //     expect(L_wrapper.state('description')).toBe(L_description);
    // } );

    it ('should set description on input change', () =>  {
        const L_description = 'New description';
        const L_wrapper = shallow (<CLS_expense_form />);
        L_wrapper.find('#Description')
                 .simulate ( 'change',
                             { target: {value: L_description} } );

        expect(L_wrapper.state('description')).toBe(L_description);
    } );

    it ('should set note on textarea change', () =>  {
        const L_note = 'Make sure that payment was received.';
        const L_wrapper = shallow (<CLS_expense_form />);
        L_wrapper.find('#Note')
                 .simulate ( 'change',
                             { target: {value: L_note} } );

        expect(L_wrapper.state('note')).toBe(L_note);
    } );

    it ('should set amount if valid input', () =>  {
        const L_amount = '23.50';
        const L_wrapper = shallow (<CLS_expense_form />);
        L_wrapper.find('#Amount')
                 .simulate ( 'change',
                             { target: {value: L_amount} } );

        expect(L_wrapper.state('amount')).toBe(L_amount);
    } );

    it ('should NOT set amount if invalid input', () =>  {
        const L_amount = '23.509';
        const L_wrapper = shallow (<CLS_expense_form />);
        L_wrapper.find('#Amount')
                 .simulate ( 'change',
                             { target: {value: L_amount} } );

        expect(L_wrapper.state('amount')).not.toBe(L_amount);
    } );


//  SEC_012 --- 123. Test Spies 17:39

    const GC_FN_copy_to_be_returned = (P_expense) => ( {
        description: P_expense.description,
        amount: P_expense.amount,
        note: P_expense.note,
        createdAt: P_expense.createdAt
    } );

//  SEC_012 --- 123. Test Spies 17:39

    it ('should call onSubmit prop for valid form submission', () =>  {

        //  create a new spy :
        const L_onSubmitSpy = jest.fn();

        //L_onSubmitSpy('joe', 'smith');
        //expect(L_onSubmitSpy).toHaveBeenCalledWith ('joe', 'smith');

        const L_wrapper = shallow
                     (<CLS_expense_form expense={MP_FXT_expenses[0]}
                                        onExpenseSubmit={L_onSubmitSpy}/>);

        L_wrapper.find('form').simulate('submit', {preventDefault: () => {}});

        //  NO :- expect(L_wrapper.state('error')).toBe('');
        expect(L_wrapper.state('descriptionError')).toBe('');
        expect(L_wrapper.state('amountError')).toBe('');
        expect(L_onSubmitSpy).toHaveBeenCalledWith
                    (GC_FN_copy_to_be_returned (MP_FXT_expenses[0]));
    } );

//  SEC_012 --- 123. Test Spies 17:39

    it ('should set new date on date change', () =>  {
        const L_now = moment();
        const L_wrapper = shallow (<CLS_expense_form />);
        L_wrapper.find('#createdAt_DatePicker')
                 .prop('onDateChange')(L_now);
        expect(L_wrapper.state('createdAt')).toEqual(L_now);
    } );

//  SEC_012 --- 123. Test Spies 17:39

    it ('should set calendar focus on change', () =>  {
        const L_focus_obj = { focused: true };
        const L_wrapper = shallow (<CLS_expense_form />);
        L_wrapper.find('#createdAt_DatePicker')
                 .prop('onFocusChange')(L_focus_obj);
        expect(L_wrapper.state('calenderFocused')).toBe(true);
    } );

} );
