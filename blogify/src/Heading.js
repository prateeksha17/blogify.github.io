import React from "react";
import { Link } from "react-router-dom";
import './Heading.css';


const Heading = () => {
  return (
    <div>
      <div  className="cover h5 w-90 photo"> </div>
      <div className="tc-l mt4 mt5-m mt6-l ph3">
        <h1 className="f2 f1-l fw2 pt4 black-90 mb0 lh-title tata"> Blogify - Create Your Own Blog</h1>
        <h2 className="fw1 f3 black-80 mt3 mb4 tata">Empowering You to Share Your Voice with the World</h2>
        <Link className="f4 no-underline grow dib v-mid  black ba b--blue ph3 pv2 mb3 tata" to="/editor">Create Blog</Link>
      </div>
    </div>
  );
}


export default Heading;