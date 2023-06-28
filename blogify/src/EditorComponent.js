import React from "react";
import "./editor.scss";
import { Link } from "react-router-dom";
import EditorContent from "./EditorContent";

// import { Route,Routes } from 'react-router-dom';



const EditorComponent = () => {

  return (
    <div>
      <h1 className="heading">Cerate your Blog here</h1>
      <EditorContent />
      <div id="editorjs"></div>
      <Link className="f4 no-underline grow dib v-mid mv4 black ba b--blue ph3 pv2 mb3 tata" to='/save'>Save</Link>
     {/* <>
        <Routes>
          <Route path='save' element={<Summit/>}/>
        </Routes>
        </> */}
       
    </div>
  );
};

export default EditorComponent;
