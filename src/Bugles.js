import React from 'react';
import { Link } from "react-router-dom";
import "./Bugles.css"

function Bugles(){
  return(
    <div className="bugleBox">
      <h3>Here are your bugles, with a side of mystery sauce.</h3>
      <img className="buglesImg" src="https://3.bp.blogspot.com/_5kM8AWE0GaI/TNIzjcJ14pI/AAAAAAAADwk/OYCNgIrkWs0/s1600/photo%2819%29.JPG" alt="bugles, dawg"></img>
      <h5>May God have mercy on us all.</h5>
      <Link to="/">Go Back</Link>

    </div>
  )
}

export default Bugles