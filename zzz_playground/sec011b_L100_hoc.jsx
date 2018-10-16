
/*

  sec011b_L100_hoc.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_011_React_with_Redux\proj_02\Budget-app\zzz_playground\sec011b_L100_hoc.jsx


//  SEC_011 --- 100. The Higher Order Component 15:30

Higher Order Component (HOC) - A component that renders another component.

 */

import React from 'react';
import ReactDOM from 'react-dom';

const GC_info = (P_props) => (
<span>
  <h1>Info</h1>
  <p>The info is: {P_props.info}</p>
</span>
    );

const GC_with_admin_warning = (P_wrapped_component) =>
{
    return (P_props) => (
<span>
  { P_props.isAdmin && <p>This is private info. Please don't share!</p> }
  <P_wrapped_component {...P_props} />
</span>
    );
};

const GC_admin_info = GC_with_admin_warning (GC_info);


const GC_require_authentication = (P_wrapped_component) =>
{
    return (P_props) => (
        <span>
            { P_props.isAuthenticated ?
                 <P_wrapped_component {...P_props} />
                  : <p>Please log in to view the info.</p> }
        </span>
    );
};


const GC_auth_info = GC_require_authentication (GC_info);
const GC_auth_info2 = GC_require_authentication (GC_admin_info);

const GC_is_private = true;
const GC_is_not_private = false;
const GC_appRoot_01 = document.getElementById('sec011_app_01');
//ReactDOM.render ( <GC_info info="These are the details" />,  GC_appRoot_01);
//ReactDOM.render ( <GC_admin_info info="These are the details" />,  GC_appRoot_01);
//ReactDOM.render ( <GC_admin_info isAdmin={GC_is_not_private} info="These are the details" />,  GC_appRoot_01);
const GC_is_logged_in = true;
const GC_is_not_logged_in = false;
//ReactDOM.render ( <GC_auth_info2 isAuthenticated={GC_is_not_logged_in} isAdmin={GC_is_private} info="These are the details" />,  GC_appRoot_01);
//ReactDOM.render ( <GC_auth_info2 isAuthenticated={GC_is_logged_in} isAdmin={GC_is_not_private} info="These are the details" />,  GC_appRoot_01);
//ReactDOM.render ( <GC_auth_info2 isAuthenticated={GC_is_logged_in} isAdmin={GC_is_private} info="These are the details" />,  GC_appRoot_01);
ReactDOM.render ( <GC_auth_info2 isAuthenticated={GC_is_logged_in} isAdmin={GC_is_private} info="These are the details" />,  GC_appRoot_01);
