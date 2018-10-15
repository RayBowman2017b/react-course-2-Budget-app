

/***************************************************************************

sec013a_L140_expenses_summary.jsx

       //  [ DEF1: SFC_expenses_summary <1>]
       //  [ DEF1: GF_map_state_to_props <1>]

K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\
src\sec009a_components\sec013a_L140_expenses_summary.jsx

import { SFC_expenses_summary } from '../../sec009a_components/sec013a_L140_expenses_summary.jsx';
          //[S07251667|sec009a_SFC_expense_dashboard_page.jsx::sec013a_L140_expenses_summary import-1;]


 ***************************************************************************/


import MP_selectExpensesTotal from "../../sec011a_L099_selectors/sec013a_L139_SLCT_total_expenses.jsx";
   //[ MP_selectExpensesTotal import-1;]
   //[ MP_selectExpensesTotal xxx]
              //[S07251670|sec013a_L139_SLCT_total_expenses.jsx::sec013a_L139_SLCT_total_expenses import-1;^B]

   //  [S07251664|A01_DIrectory_01.txt::DRC1: SFC_expenses_summary <1>^B]

   //  [S07251667|sec009a_SFC_expense_dashboard_page.jsx::TPL1: SFC_expenses_summary <1>]

//[ DEF1: SFC_expenses_summary <1>^B]
const SFC_expenses_summary = (P_props) =>
{
    <div>
  {
    P_props.expenses.length === 0 ? (
        <p>No Expenses</p>
    ) : (
    P_props.expenses.length === 1 ? (
        <p>Viewing 1 Expense totalling {P_props.total_expenses}</p>
                                 {/*//[ P_props.total_expenses exe1;]*/}
    ) : (
        <p>Viewing {P_props.expenses.length} Expenses totalling {P_props.total_expenses}</p>
             {/*//[ P_props.expenses exe1;]*/}
                                                          {/*//[ P_props.total_expenses exe2;]*/}
                                              )
                             )
    )
  }
    </div>
};


//  SEC_011 --- 103. Controlled Inputs for Filters 14:21
//  MP_SLCT_getVisibleExpenses

 //  [S07251664|A01_DIrectory_01.txt::DRC1: XPNSMRY.GF_map_state_to_props <1>^B]

       //[ DEF1: GF_map_state_to_props <1>^B]
const GF_map_state_to_props = (P_state) =>  {
    return {
            expenses: MP_SLCT_getVisibleExpenses
//[ P_props.expenses exe1;^B]
    //[S07251670|sec011a_L099_SLCT_expenses.jsx::EXE1: MP_SLCT_getVisibleExpenses <1>^B]
                  //[ MP_SLCT_getVisibleExpenses asn1;^B]
                         (P_state.expenses, P_state.filters),
    //[S07251671|sec011a_L099_STR_configure_store.jsx::(P_state.expenses, P_state.filters) xrf2;^B]
                    //[S07251664|A01_DIrectory_01.txt::(P_state.expenses, P_state.filters) drc2;^B]
            total_expenses: MP_selectExpensesTotal (this.expenses)
            //[ P_props.total_expenses exe1;^B]
            //[ P_props.total_expenses exe2;^B]
                        //[ MP_selectExpensesTotal import-1;^B]
           };
};

export default connect (GF_map_state_to_props) (SFC_expenses_summary);