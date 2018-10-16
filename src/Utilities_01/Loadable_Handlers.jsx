
import React from 'react';

   //  [S07251664|A01_DIrectory_01.txt::DRC1: MP_common_loading_handler <1>]

//  import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers";
   //  [S07251666|sec009a_app_router.jsx::Loadable_Handlers import-1;]
   //  [S07251667|sec011a_L105_expense_form.jsx::Loadable_Handlers import-2;^B]
   //  [S07251667|sec011a_L103_expense_list_filters.jsx::Loadable_Handlers import-3x;^B]

//  K:\A01_Udemy\Z01_General_Notes\webpack_optimization_01.txt


export const MP_common_loading_handler = (P_props) =>
{
  if (P_props.error) {
//    return <div>Error! <button onClick={ P_props.retry }>Retry</button></div>;
    console.log (`P_props.error is ${P_props.error}`);
    return <span>Error! </span>;
  } else if (P_props.timedOut) {
//    return <div>Taking a long time... <button onClick={ P_props.retry }>Retry</button></div>;
    return <span>Taking a long time... </span>;
  } else if (P_props.pastDelay) {
    return <span>Loading...</span>;
  } else {
    return null;
  }
//   <div>Loading...</div>;
}

