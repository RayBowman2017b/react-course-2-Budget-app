

/***************************************************************************

K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\src\sec011a_L099_selectors\sec013a_L139_SLCT_total_expenses.jsx

import MP_selectExpensesTotal from "../../sec011a_L099_selectors/sec013a_L139_SLCT_total_expenses.jsx";

//  SEC_013 --- 139. Build It: Adding Total Selector 17:25

 ***************************************************************************/


//  [S07251667|sec013a_L140_expenses_summary.jsx::sec013a_L139_SLCT_total_expenses import-1;^B]

//  [S07251667|sec013a_L140_expenses_summary.jsx::EXE1: MP_selectExpensesTotal <1>^B]

export const MP_selectExpensesTotal = (P_expenses) => {
    if ( ! P_expenses ) throw new Error ("   *** No obect passed.");
    if ( ! Array.isArray ( P_expenses ) )
        throw new Error ("   *** The object is not an array.");
    // Don't really need this one.
    // if ( P_expenses.length === 0 ) return 0;
    if ( (P_expenses.length === 1) && (typeof P_expenses[0].amount === "undefined") )
        throw new Error ("   *** There is no object with an expense element.");

    return P_expenses.reduce( (acum, item) => acum + item.amount, 0 );
    }

