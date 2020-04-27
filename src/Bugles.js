import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Bugles.css"

function Bugles(){
  const [death, setDeath] = useState("Hidden");
  const [bugleView, setBugleView] = useState("");

  function handleBugle(){
    setDeath("");
    setBugleView("Hidden");
  }
  return(
    <div className="bugleBox">
      <h3>Here are your bugles, with a side of mystery sauce.</h3>
      <img className={`buglesImg ${bugleView}`} src="https://3.bp.blogspot.com/_5kM8AWE0GaI/TNIzjcJ14pI/AAAAAAAADwk/OYCNgIrkWs0/s1600/photo%2819%29.JPG" alt="bugles, dawg"></img>
      <img className={`deathImg ${death}`} src="https://i.kym-cdn.com/entries/icons/facebook/000/029/198/Dark_Souls_You_Died_Screen_-_Completely_Black_Screen_0-2_screenshot.jpg" alt="You Died."></img><br/>
      <h5 className={bugleView}>May God have mercy on us all.</h5>
      <button onClick={handleBugle}>Eat Bugles!</button><br/>
      <Link to="/">Go Back</Link>

    </div>
  )
}

export default Bugles