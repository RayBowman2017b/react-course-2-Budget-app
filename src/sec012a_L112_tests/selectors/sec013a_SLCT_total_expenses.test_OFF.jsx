
/***************************************************************************

K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\
src\sec012a_L112_tests\selectors\sec013a_SLCT_total_expenses.test.jsx

//  SEC_013 --- 139. Build It: Adding Total Selector 17:25

 ***************************************************************************/


import moment from "moment";

import MP_selectExpensesTotal from "../../sec011a_L099_selectors/sec013a_L139_SLCT_total_expenses.jsx";
import MP_FXT_expenses from "../fixtures/sec012a_DATA_expenses.js";
import MP_FXT_expenses_BAD from "../fixtures/sec012b_DATA_expenses_BAD.js";

describe("SELECTOR FOR TOTAL EXPENSES", () =>
{

    it("Should throw exception for null/undefined",() => {
        const sum=()=>MP_selectExpensesTotal();
        expect(sum).toThrow();
    } );
    it ("Should return zero for empty array",() => {
            const sum=MP_selectExpensesTotal([]);
            expect(sum).toEqual(0);
    } );
    it ("Should throw exception for a parameter that is not an array object",() => {
        const sum=()=>MP_selectExpensesTotal('bad argument');
        expect(sum).toThrow();
    } );
    it ("Should throw exception for a single object without the amount property",() => {
        const obj=[{ abc: 2}];
        const sum=()=>MP_selectExpensesTotal(obj);
        expect(sum).toThrow();
    } );
    it("Should return the value of amount if there is only one object within the array",() => {
        const obj=[MP_FXT_expenses[1]];
        const sum = MP_selectExpensesTotal (obj);
        expect(sum).toEqual(obj[0].amount);
    } );
    it ("Should return the sum of all amount properties",() => {
        const obj=[...MP_FXT_expenses, ...MP_FXT_expenses_BAD];
        const sum=MP_selectExpensesTotal(obj);
        for (let exp of obj)  console.log ('   *** ' + JSON.stringify(exp));

        const LF_get_amount = (P_expense) => (typeof P_expense.amount === 'number') ? P_expense.amount : 0;
        const chk_sum=obj.reduce( (acum, item) => acum + LF_get_amount(item), 0 );
        expect(sum).toEqual(chk_sum);
    } );
} );
