
/*

  sec012a_expense_list_filters.test.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec012a_L112_tests\components\
sec012a_expense_list_filters.test.jsx


//  SEC_012 --- 126. Testing ExpenseListFilters 14:50

 */

import React from 'react';
import { shallow, mount } from 'enzyme';

//import moment from 'moment';
const moment = require ('moment');

import { CLS_expense_list_filters } from "../../sec009a_components/sec011a_L103_expense_list_filters.jsx";

import { default_filters, filters_01 } from '../fixtures/sec012a_DATA_filters.js';


describe ("COMPONENT TEST FOR FILTERS - sec011a_L103_expense_list_filters.jsx", () =>  {

    class CLS_pram
    {
        //setup (P_filter_set)
        constructor (P_filter_set)
        {
            this.V_filter = P_filter_set;
            this.V_set_text_filter = jest.fn();
            this.V_set_start_date = jest.fn();
            this.V_set_end_date = jest.fn();
            this.V_sort_by_date = jest.fn();
            this.V_sort_by_amount = jest.fn();
            this.V_sort_by = jest.fn();

            this.V_history = { push: jest.fn() };

            this.V_wrapper = shallow (
                    <CLS_expense_list_filters
                      filters={this.V_filter}
                      MDTP_setTextFilter={this.V_set_text_filter}
                      MDTP_setStartDate={this.V_set_start_date}
                      MDTP_setEndDate={this.V_set_end_date}
                      sortByDate={this.V_sort_by_date}
                      sortByAmount={this.V_sort_by_amount}
                      MDTP_sortBy={this.V_sort_by}
                    />);
        }

        get G_wrapper ()   { return this.V_wrapper; }

        get G_history ()   { return this.V_history; }

        get G_set_text_filter ()  { return this.V_set_text_filter; }
        get G_set_start_date ()  { return this.V_set_start_date; }
        get G_set_end_date ()  { return this.V_set_end_date; }
        get G_sort_by_date ()  { return this.V_sort_by_date; }
        get G_sort_by_amount ()  { return this.V_sort_by_amount; }
        get G_sort_by ()  { return this.V_sort_by; }
    }

    const GC_pram_default = new CLS_pram (default_filters);

    // beforeEach ( () => {
    //     GC_pram.setup ();
    // } );

    it ('should render CLS_expense_list_filters correctly', () =>  {
        //GC_pram.setup (default_filters);
        expect(GC_pram_default.G_wrapper).toMatchSnapshot();
    } );

    // it ('should render CLS_expense_list_filters with supplied data correctly', () =>  {
    //     GC_pram.G_wrapper.setprops ( { filters.filters_01 } );
    //     expect(GC_pram.G_wrapper).toMatchSnapshot();
    // } );

    it ('should render CLS_expense_list_filters with supplied data correctly', () =>  {
        //GC_pram.setup (filters_01);
        const L_pram_01 = new CLS_pram (filters_01);
        expect(L_pram_01.G_wrapper).toMatchSnapshot();
    } );

    it ('should text change correctly', () =>  {
        //GC_pram.setup (filters_01);
        const L_pram_01 = new CLS_pram (filters_01);
        const value = 'bill';
        L_pram_01.G_wrapper.find('#TBX_filters').simulate('change', { target: {value} });
        expect(L_pram_01.G_set_text_filter).toHaveBeenLastCalledWith(value);
    } );

    it ('should sort expenses by date', () =>  {
        const L_pram_01 = new CLS_pram (filters_01);
        const value = 'date';
        L_pram_01.G_wrapper.find('select').simulate('change', { target: {value}});
        expect(L_pram_01.G_sort_by).toHaveBeenLastCalledWith(value);
    } );

    it ('should sort expenses by amount', () =>  {
        const L_pram_01 = new CLS_pram (filters_01);
        const value = 'amount';
        L_pram_01.G_wrapper.find('select').simulate('change', { target: {value} } );
        expect(L_pram_01.G_sort_by).toHaveBeenLastCalledWith(value);
    } );

    it ('should handle date changes', () =>  {
        const L_pram_01 = new CLS_pram (filters_01);
        const startDate = moment(0).add(4, 'years');
        const endDate = moment(0).add(8, 'years');

        L_pram_01.G_wrapper.find('withStyles(DateRangePicker)')
                           .prop('onDatesChange') ({ startDate, endDate });

        expect(L_pram_01.G_set_start_date).toHaveBeenLastCalledWith(startDate);
        expect(L_pram_01.G_set_end_date).toHaveBeenLastCalledWith(endDate);
    } );

    it ('should handle date focus changes', () =>  {
        const L_pram_01 = new CLS_pram (filters_01);
        const calendarFocused = 'endDate';

        L_pram_01.G_wrapper.find('withStyles(DateRangePicker)')
                           .prop('onFocusChange') (calendarFocused);

        expect(L_pram_01.G_wrapper.state('calendarFocused')).toBe(calendarFocused);
    } );

} );
