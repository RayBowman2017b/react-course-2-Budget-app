
//  sec003_build-it-visable_01.js

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_003_Hello_React\react-course-proj-01\Indecision-app-01\zzz_playground\sec003b_build-it-visable_01.js


//  SEC_003 --- 21. Build It: Visibility Toggle 9:10


  const userinfo =
  {
      name: 'Joe',
      age: 44,
      location: 'Atlanta',
      profession: 'Data Scientist'
  }

  function getLocation (P_location)
  {
    if (P_location)
        return P_location;

    return "UNKNOWN";
  }

  function getProfession (P_profession)
  {
    if (P_profession)
        return <p>Profession: {P_profession}</p>;
  }

//  SEC_003 --- 12. Conditional Rendering in JSX 22:34

//  userinfo.name = 'SAM';

  const appRoot_02 = document.getElementById('app_02');

    let hidden = true;
    const content = "this is some content";
    const BTN_click_hide_show_toggle = () =>
    {
        hidden = ! hidden;
        ReactDOM.render (GCfn_gen_template (), appRoot_02);
    }

  const GCfn_gen_template = () =>
  {
    return  (

    <span>
  {/*
      <h1>Name: {userinfo.name}</h1>
    */}
      <h1>{ userinfo.name ? 'Name : ' + userinfo.name : 'Anonymous'}</h1>
      { (userinfo.age && userinfo.age >= 18) && <p id='P_1'>Age: {userinfo.age}</p>}
  {/*
      <p >Location: {userinfo.location}</p>
    */}
      <p >Location: {getLocation (userinfo.location)}</p>
      {getProfession (userinfo.profession)}

      <h1>VISIBILITY TOGGLE</h1>
      <button onClick={BTN_click_hide_show_toggle}>{ hidden ? "Show Text" : "Hide Text"}</button>
      { (! hidden ) && <span><p>{content}</p></span> }

    </span>
            );
  };

  ReactDOM.render (GCfn_gen_template (), appRoot_02);
