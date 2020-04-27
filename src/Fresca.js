import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Fresca.css"


function Fresca(){
  const [drinkToggle, setDrinkToggle] = useState("")
  const [empty, setEmpty] = useState("Hidden")
  
  let frescaImg = "https://acimg.auctivacommerce.com/imgdata/0/2/3/4/5/2/webimg/15685687.jpg"
  let emptyFrescaImg = "https://i.ebayimg.com/images/g/2N8AAOSwz5peKevz/s-l400.jpg";

  function drinkHandle(){
    setEmpty("");
    setDrinkToggle("Hidden");


  }
  return(
    <div className="frescaBox">
      <h3>Here's Your Fresca. Surprisingly normal.</h3>
      <img className={drinkToggle} src={frescaImg} alt="it's just fresca."></img>
      <img className={empty} src={emptyFrescaImg} alt="empty fresca."></img><br/>

      <h1 className={empty}>Delicious.</h1>
      <button onClick={drinkHandle}>Drink Fresca!</button><br/><br/>
      <Link to="/">Go Back</Link>

    </div>
  )
}

export default Fresca

