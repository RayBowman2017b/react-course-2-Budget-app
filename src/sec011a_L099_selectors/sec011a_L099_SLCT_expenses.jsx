
/************************************************************************

  sec011a_L099_SLCT_expenses.jsx


       //  [ DEF1: MP_SLCT_getVisibleExpenses <1>]


K:\A01_Udemy\C023_Complete_React_Web_Dev\Sections\a01_final_projects\
proj_02\Budget-app\src\sec011a_L099_selectors\sec011a_L099_SLCT_expenses.jsx



K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\src\sec011a_L099_selectors\sec011a_L099_SLCT_expenses.jsx

MP_getVisibleExpenses
import MP_getVisibleExpenses from "./sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx";
//  [S07251665|sec011a_app.jsx::sec011a_L099_SLCT_expenses import-1;^B]
//  [S07251665|sec012a_app.jsx::sec011a_L099_SLCT_expenses import-3;^B]
//  [S07251667|sec011a_L101_expense_list.jsx::sec011a_L099_SLCT_expenses import-2;^B]
//  [S07251667|sec013a_L140_expenses_summary.jsx::sec011a_L099_SLCT_expenses import-4;^B]

//  SEC_011 --- 99. Organizing Redux 14:50

 ************************************************************************/

//  SEC_011 --- 110. Filtering by Dates 19:44
import moment from 'moment';
//const moment = require ('moment');

//=====================================================================

//  SEC_010 --- 96. Filtering Redux Data 16:54

//  Get Visible Expenses

//  timestamps (milliseconds)
//  STARTING POINT for all timestamps :
//  January 1st 1970 (unix epoch)
//  positive numbers are for times after, negative numbers are for before.

// const GC_getVisibleExpenses = (P_expenses, P_filters) =>
// const GC_getVisibleExpenses = (P_expenses, { text, sortBy, startDate, endDate } ) =>


//  [S07251667|sec011a_L101_expense_list.jsx::REF1: MP_SLCT_getVisibleExpenses <1>]
//  [S07251667|sec011a_L101_expense_list.jsx::EXE1: MP_SLCT_getVisibleExpenses <1>]

//  [S07251667|sec013a_L140_expenses_summary.jsx::EXE2: MP_SLCT_getVisibleExpenses <1>^B]

//  [S07251669|sec011a_L099_RDCR_filters.jsx:: Apply Filters ref1;^B]

//  [S07251664|A01_DIrectory_01.txt::DRC1: MP_SLCT_getVisibleExpenses <1>^B]

       //[ DEF1: MP_SLCT_getVisibleExpenses <1>^B]
//  this will be referred to as  MP_SLCT_getVisibleExpenses
export default (P_expenses, { text, sortBy, startDate, endDate } ) =>
{

//  SEC_011 --- 110. Filtering by Dates 19:44

    //  [S07251664|A01_DIrectory_01.txt::P_expenses.filter drc1;^B]

    return P_expenses.filter ( (P_expense) =>
        {
            const L_createdAtMoment = moment(P_expense.createdAt);

            //const L_startDateMatch = typeof startDate !== 'number' || P_expense.createdAt >= startDate;
            const L_startDateMatch = startDate ? startDate.isSameOrBefore (L_createdAtMoment, 'day') : true;
            //const L_endDateMatch = typeof endDate !== 'number' || P_expense.createdAt <= endDate;
            const L_endDateMatch = endDate ? endDate.isSameOrAfter (L_createdAtMoment, 'day') : true;
            //  const L_textMatch = true;
            const L_textMatch = typeof text !== 'string' ||
                         P_expense.description.toLowerCase ().includes (text.toLowerCase());

            return L_startDateMatch && L_endDateMatch && L_textMatch;
        }
//  SEC_010 --- 97. Sorting Redux Data 6:14
        ).sort ( (a, b) =>
            {
                if (sortBy === 'date')
                    return a.createdAt < b.createdAt ? 1 : -1;

                if (sortBy === 'amount')
                    return a.amount < b.amount ? 1 : -1;
            } );
};

//=====================================================================
